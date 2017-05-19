import pyrebase
from ConfigParser import ConfigParser
from datetime import datetime
import os
from faceRecognition import FaceRecognition


class FirebaseConn:

    def __init__(self):
        self.face = FaceRecognition()
        email, password, self.venue = self.read_config()

        # TODO: Change it to the correct project config
        config = {
            "apiKey": "AIzaSyDg2GwKDh4PLgeshGzRXm2L3m-4ON1O2u0",
            "authDomain": "weather-5ed3c.firebaseapp.com",
            "databaseURL": "https://weather-5ed3c.firebaseio.com",
            "storageBucket": "weather-5ed3c.appspot.com"
        }

        self.firebase = pyrebase.initialize_app(config)

        # Get a reference to the auth service
        self.auth = self.firebase.auth()

        # Log the user in
        self.user = self.auth.sign_in_with_email_and_password(email, password)

        self.db = self.firebase.database()

        self.storage = self.firebase.storage()

        print('Firebase Connection Started\n')
        self.userUID = self.auth.current_user['localId']

        if self.venue is None:
            self.venue = self.write_config_venue()

        self.posts_stream = self.db.child(self.userUID).child('Venues').child(self.venue).child("Posts").stream(self.stream_handler)

    def stream_handler(self, message):
        print('>>>>>STREAM')
        print(message["event"])  # put
        print(message["path"])  # /-K7yGTTEp7O549EzTYtI
        print(message["data"])  # {'title': 'Pyrebase', "body": "etc..."}

        if message["data"] == 'new member' or message["data"] == 'deleted member':
            self.get_pictures()
            self.face.delete_classifier()
            self.face.train()
        elif message["data"] == 'open door':
            # Open door
            pass

    # Verify if the DB exists. If it doesn't it requires the user to create it using the web platform.
    def verify_db_existence(self):
        db = self.db.child(self.userUID).child('Venues').child(self.venue).get(self.user['idToken']).val()
        if db is None:
            print('System at this location not yet built. Please refer to the web application at '
                  'https://vast-castle-87349.herokuapp.com/ to configure it.')
            return 0
        else:
            return 1

    # Refresh token every 50min (has to be less than 1h)
    def refresh_key(self):
        self.user = self.auth.refresh(self.user['refreshToken'])
        # Use it as self.user['idToken']

    def read_config(self):
        cfg = ConfigParser()

        cfg.read('config.ini')
        sections = cfg.sections()
        if len(sections) == 0:
            email, password = self.write_config()
            location = None
        else:
            email = cfg.get('User', 'email')
            password = cfg.get('User', 'password')
            location = cfg.get('User', 'venue')

        return [email, password, location]

    def write_config(self):
        print('CONFIGURING SYSTEM\nLogin in with your email and password. If you are not yet registered '
              'go to https://vast-castle-87349.herokuapp.com/ first and create an account.\n')
        email = raw_input('email: ')
        password = raw_input('password: ')

        # Creating config.ini
        cfg = ConfigParser()
        cfg.add_section('User')
        cfg.set('User', 'email', email)
        cfg.set('User', 'password', password)
        config_file = open('config.ini', 'w')
        cfg.write(config_file)

        return [email, password]

    def write_config_venue(self):
        print('Choose one of the venues: ')
        venues = self.db.child(self.userUID).child('Venues').get(self.user['idToken']).val()
        venues_names = []
        choose = ""
        for venue in venues:
            print('>' + venue)
            venues_names.append(str(venue).lower())

        while not (choose in venues_names):
            choose = raw_input('Venue: ').lower()

        choose = choose.capitalize()
        print(choose + ' selected!\n\n')

        # Creating config.ini
        cfg = ConfigParser()
        cfg.read('config.ini')
        cfg.set('User', 'venue', choose)
        config_file = open('config.ini', 'w')
        cfg.write(config_file)

        return choose

    def get_in_time_allowance(self, member_id):
        member_id = int(member_id)
        db_home = self.db.child(self.userUID).child('Venues').child(self.venue).get(self.user['idToken']).val()
        db_members = db_home['Members']
        db_groups = db_home['Groups']
        start = None
        end = None
        in_time = False

        print(member_id)
        member = db_members[member_id]
        groups = []
        in_time_groups = []
        now = datetime.now()

        # Getting all groups
        for i in range(len(db_members[member_id]['Groups'])):
            groups.append(db_members[member_id]['Groups'][i]['id'])

        start = datetime.strptime(str(now.year) + '-' + str(now.month) + '-' + str(now.day) + 'T'
                                  + '23:59', '%Y-%m-%dT%H:%M')
        end = datetime.strptime(str(now.year) + '-' + str(now.month) + '-' + str(now.day) + 'T'
                                + '00:00', '%Y-%m-%dT%H:%M')

        # Getting member allowed time and groups
        for i in range(len(groups)):
            new_start = datetime.strptime(str(now.year) + '-' + str(now.month) + '-' + str(now.day) + 'T' +
                                          db_groups[groups[i]]['Time']['start'], '%Y-%m-%dT%H:%M')
            new_end = datetime.strptime(str(now.year) + '-' + str(now.month) + '-' + str(now.day) + 'T' +
                                        db_groups[groups[i]]['Time']['end'], '%Y-%m-%dT%H:%M')

            if new_start <= now <= new_end:
                in_time_groups.append(groups[i])
                in_time = True

            # if new_start < start:
            #     start = new_start
            # if new_end > end:
            #     end = new_end

        # if start <= now <= end:
        #     permission = "".join(groups)
        #     self.set_log(member=member, member_id=i, success='true', permission=permission)
        #     in_time = True
        # else:
        #     self.set_log(member=member, member_id=i, success='false', permission='Out of time entrance')
        #     in_time = False

        # return [start, end, in_time, in_time_groups]
        return in_time, in_time_groups

    def set_log(self, member, member_id, success, permission, file_name):

        data = {
            'email': member['Data']['email'],
            'name': member['Data']['name'],
            'id': member_id,
            'permission': permission,
            'photourl': member['Data']['photourl'],
            'success': success,
            'venue': self.venue,
            'date': {
                'day': datetime.now().strftime('%d'),
                'month': datetime.now().strftime('%m'),
                'time': datetime.now().strftime('%H') + ':' + datetime.now().strftime('%M'),
                'year': datetime.now().strftime('%Y')
            }
        }
        key = self.db.child(self.userUID).child('Logs').push(data, token=self.user['idToken'])['name']

        self.storage.child(self.userUID).child('Logs').child(key+'.jpg').put(file_name, self.user['idToken'])

    def set_log_no_match(self, success, permission, file_name):

        data = {
            'email': "-",
            'name': "No Match",
            'id': "",
            'permission': permission,
            'photourl': "assets/invader.jpg",
            'success': success,
            'venue': self.venue,
            'date': {
                'day': datetime.now().strftime('%d'),
                'month': datetime.now().strftime('%m'),
                'time': datetime.now().strftime('%H') + ':' + datetime.now().strftime('%M'),
                'year': datetime.now().strftime('%Y')
            }
        }
        key = self.db.child(self.userUID).child('Logs').push(data, token=self.user['idToken'])['name']

        self.storage.child(self.userUID).child('Logs').child(key+'.jpg').put(file_name, self.user['idToken'])

    def get_name_by_id(self, member_id):
        members = self.get_members()
        return members[member_id]['Data']['name']

    def get_members(self):
        db_members = self.db.child(self.userUID).child('Venues').child(self.venue).child('Members').get(self.user['idToken']).val()
        return db_members

    def get_member_by_id(self, member_id):
        db_members = self.db.child(self.userUID).child('Venues').child(self.venue).child('Members').child(member_id).get(self.user['idToken']).val()
        return db_members

    def get_pictures(self):
        path = '/home/leo/openface/training-images/'
        members = self.get_members()
        for i in range(1, len(members)):
            print('------------------------')
            print('Downloading images of [' + str(i) + '] ' + members[i]['Data']['name'])
            filename = 1
            if not os.path.isdir(path+str(i)):
                os.makedirs(path+str(i))
            while True:
                self.storage.child(self.userUID).child(self.venue).child(str(i)).child(str(filename)+'.jpg').download(
                    filename=str(filename)+'.jpg', token=self.user['idToken'])
                if os.path.isfile('./'+str(filename)+'.jpg'):
                    print('> '+str(filename) + '.jpg downloaded')
                    os.rename('./'+str(filename)+'.jpg', path+str(i)+'/'+str(filename)+'.jpg')
                    filename += 1
                else:
                    break
