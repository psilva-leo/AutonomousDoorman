import argparse
from autonomousDoorman import AutonomousDoorman

debug_flag = False

parser = argparse.ArgumentParser()
parser.add_argument('--debug', help='Add something')
args = parser.parse_args()
if args.debug is not None:
    if str(args.debug).lower() == "true":
        debug_flag = True
    elif str(args.debug).lower() != "false":
        print('ERROR: --debug argument accepts only True or False.')
        exit()

doorman = AutonomousDoorman(debug_flag)
doorman.start()
