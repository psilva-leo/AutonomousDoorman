import pyrebase
from ConfigParser import ConfigParser
from datetime import datetime


class FirebaseConn:

    def __init__(self):
        email, password, self.location = self.read_config()

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

        # Get a reference to the database service
        self.db = self.firebase.database()

        print('Firebase Connection Started')
        self.userUID = self.auth.current_user['localId']

        self.system_status = self.verify_db_existence()

    # Verify if the DB exists. If it doesn't it requires the user to create it using the web platform.
    def verify_db_existence(self):
        db = self.db.child(self.userUID).child(self.location).get(self.user['idToken']).val()
        if db is None:
            print('System at this location not yet built. Please refer to the web application at '
                  'https://blooming-castle-12067.herokuapp.com/ to configure it.')
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
            email, password, location = self.write_config()
        else:
            email = cfg.get('User', 'email')
            password = cfg.get('User', 'password')
            location = cfg.get('User', 'location')

        return [email, password, location]

    def write_config(self):
        print('CONFIGURING SYSTEM\nLogin in with your email and password. If you are not yet registered '
              'you will be registered now.\n')
        email = raw_input('email: ')
        password = raw_input('password: ')
        location = raw_input('location: ').upper()

        # Creating config.ini
        cfg = ConfigParser()
        cfg.add_section('User')
        cfg.set('User', 'email', email)
        cfg.set('User', 'password', password)
        cfg.set('User', 'location', location)
        config_file = open('config.ini', 'w')
        cfg.write(config_file)

        return [email, password, location]

    def get_time_by_name(self, name):
        db_home = self.db.child(self.userUID).child(self.location).get(self.user['idToken']).val()
        db_users = db_home['Users']
        db_groups = db_home['Groups']
        start = None
        end = None

        for i in range(1, len(db_users)):
            if db_users[i]['Data']['name'] == name:
                print(db_users[i]['Data']['name'])
                groups = []
                for j in range(len(db_users[i]['Groups'])):
                    groups.append(db_users[i]['Groups']['g'+str(j+1)])
                    start = datetime.strptime('23:59', '%H:%M')
                    end = datetime.strptime('00:00', '%H:%M')
                for j in range(len(groups)):
                    new_start = datetime.strptime(db_groups[groups[j]]['Time']['start'], '%H:%M')
                    new_end = datetime.strptime(db_groups[groups[j]]['Time']['end'], '%H:%M')

                    if new_start < start:
                        start = new_start
                    if new_end > end:
                        end = new_end
            print('start: ' + str(start.time()) + ' end: ' + str(end.time()))
            return [start, end]

        return 'Not in database'




