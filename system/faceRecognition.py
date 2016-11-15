'''
This class is a wrapper for unix commands to call OpenFace functions.
'''
import os


class FaceRecognition:

    def __init__(self):
        pass

    '''
    @:param img name
    '''
    def predict(self, img):
        os.system("~/openface/demos/classifier.py infer ~/openface/generated-embeddings/classifier.pkl " + img)

    '''
    Train the classifier with new images. Training images should be in ~/openface/training-images/
    This process may take a few minutes.
    '''
    def train(self):
        os.system("~/openface/util/align-dlib.py ~/openface/training-images/ align outerEyesAndNose "
                  "~/openface/aligned-images/ --size 96")
        os.system("~/openface/batch-represent/main.lua -outDir ~/openface/generated-embeddings/ "
                  "-data ~/openface/aligned-images/")
        os.system("~/openface/demos/classifier.py train ~/openface/generated-embeddings/")
