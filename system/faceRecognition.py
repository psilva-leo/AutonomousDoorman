'''
This class is a wrapper for unix commands to call OpenFace functions.
'''
import subprocess

class FaceRecognition:

    def __init__(self):
        pass

    '''
    @:param img name
    '''
    def predict(self, img):
        # 2>/dev/null is used to prevent warnings to show.
        cmd = "~/openface/demos/classifier.py infer ~/openface/generated-embeddings/classifier.pkl " + img +  " 2>/dev/null"
        pipe = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE).stdout
        output = pipe.read()
        predicted = precision = None
        try:
            prediction = output.split('Predict ',1)[1]
            precision = prediction.split(' ',4)[2]
            predicted = prediction.split(' ',1)[0]
        except IndexError:
            pass

        return [predicted, precision]

    '''
    Train the classifier with new images. Training images should be in ~/openface/training-images/
    This process may take a few minutes.
    '''
    def train(self):
        # Pode detectiong and alignment
        align = "~/openface/util/align-dlib.py ~/openface/training-images/ align outerEyesAndNose " \
                "~/openface/aligned-images/ --size 96 2>/dev/null"
        subprocess.Popen(align, shell=True, stdout=subprocess.PIPE)

        # Representations from aligned images
        rep = "~/openface/batch-represent/main.lua -outDir ~/openface/generated-embeddings/ " \
              "-data ~/openface/aligned-images/ 2>/dev/null"
        subprocess.Popen(rep, shell=True, stdout=subprocess.PIPE)

        # Train classifier
        train = "~/openface/demos/classifier.py train ~/openface/generated-embeddings/ 2>/dev/null"
        subprocess.Popen(rep, shell=True, stdout=subprocess.PIPE)