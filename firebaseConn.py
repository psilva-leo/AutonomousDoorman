import pyrebase
from ConfigParser import ConfigParser


def write_config():
    print('CONFIGURING SYSTEM\nLogin in with your email and password. If you are not yet registered '
          'you will be registered now.\n')
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


class FirebaseConn:

    def __init__(self):
        email, password = self.read_config()

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

    # Refresh token every 50min (has to be less than 1h)
    def refresh_key(self):
        self.user = self.auth.refresh(self.user['refreshToken'])
        # Use it as self.user['idToken']

    @staticmethod
    def read_config():
        cfg = ConfigParser()

        cfg.read('config.ini')
        sections = cfg.sections()
        if len(sections) == 0:
            email, password = write_config()
        else:
            email = cfg.get('User', 'email')
            password = cfg.get('User', 'password')

        print('Printing')
        print(email + "   " + password)

        return [email, password]

