import subprocess
import openface
import pickle
import cv2
import numpy as np


class FaceRecognition:
    """
    This class is a wrapper for unix commands to call OpenFace functions.
    """
    def __init__(self):
        self.classifier_path = '/home/leo/openface/generated-embeddings/classifier.pkl'
        self.predictor_path = '/home/leo/openface/models/dlib/shape_predictor_68_face_landmarks.dat'
        self.model_path = '/home/leo/openface/models/openface/nn4.small2.v1.t7'

    def predict(self, img):
        person = -1
        confidence = 0.0
        align = openface.AlignDlib(self.predictor_path)
        net = openface.TorchNeuralNet(self.model_path, imgDim=96,
                                      cuda=False)

        with open(self.classifier_path, 'r') as f:
            (le, clf) = pickle.load(f)

        bgrImg = cv2.imread(img)
        rgbImg = cv2.cvtColor(bgrImg, cv2.COLOR_BGR2RGB)

        bb1 = align.getLargestFaceBoundingBox(rgbImg)
        bb = [bb1][0]
        alignedFace = align.align(
            96,
            rgbImg,
            bb,
            landmarkIndices=openface.AlignDlib.OUTER_EYES_AND_NOSE)

        if alignedFace is not None:
            rep = net.forward(alignedFace)
            rep = rep.reshape(1, -1)

            predictions = clf.predict_proba(rep).ravel()
            maxI = np.argmax(predictions)
            person = le.inverse_transform(maxI)
            confidence = predictions[maxI]
            #print('person: {}'.format(person))
            #print('confidence: {}'.format(confidence))

        return person, confidence


    # def predict(self, img):
    #     """
    #     @:param img name
    #     """
    #     # 2>/dev/null is used to prevent warnings to show.
    #     cmd = "~/openface/demos/classifier.py infer ~/openface/generated-embeddings/classifier.pkl " + img + " 2>/dev/null"
    #     pipe = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE).stdout
    #     output = pipe.read()
    #     predicted = precision = None
    #     try:
    #         prediction = output.split('Predict ', 1)[1]
    #         print('prediction' + str(prediction))
    #         precision = float(prediction.split(' ', 4)[2])
    #         predicted = prediction.split(' ', 1)[0]
    #     except IndexError:
    #         pass
    #
    #     return [predicted, precision]

    def train(self):
        """
        Train the classifier with new images. Training images should be in ~/openface/training-images/
        This process may take a few minutes.
        """
        print('>>> Training classifier')

        print('Aligning')
        align = "TERM=vt100; ~/openface/util/align-dlib.py ~/openface/training-images/ align outerEyesAndNose " \
                "~/openface/aligned-images/ --size 96"
        subprocess.Popen(align, shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT).communicate()

        # Representations from aligned images
        print('Representing')
        rep = "TERM=vt100; ~/openface/batch-represent/main.lua -outDir ~/openface/generated-embeddings/ " \
              "-data ~/openface/aligned-images/"
        subprocess.Popen(rep, shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT).communicate()

        # Train classifier
        print('Training')
        train = "TERM=vt100; ~/openface/demos/classifier.py train ~/openface/generated-embeddings"
        subprocess.Popen(train, shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT).communicate()

        print('Finished Training')

    def delete_classifier(self):
        print('Deleting Classifier')
        delete = 'rm -rf ~/openface/aligned-images/'
        subprocess.Popen(delete, shell=True, stdout=subprocess.PIPE).communicate()

        delete = 'rm -rf ~/openface/generated-embeddings/'
        subprocess.Popen(delete, shell=True, stdout=subprocess.PIPE).communicate()

        delete = 'rm -rf ~/openface/training-images/'
        subprocess.Popen(delete, shell=True, stdout=subprocess.PIPE).communicate()

