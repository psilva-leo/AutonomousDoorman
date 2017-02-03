import subprocess


class FaceRecognition:
    """
    This class is a wrapper for unix commands to call OpenFace functions.
    """
    def __init__(self):
        pass

    def predict(self, img):
        """
        @:param img name
        """
        # 2>/dev/null is used to prevent warnings to show.
        cmd = "~/openface/demos/classifier.py infer ~/openface/generated-embeddings/classifier.pkl " + img + " 2>/dev/null"
        pipe = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE).stdout
        output = pipe.read()
        predicted = precision = None
        try:
            prediction = output.split('Predict ', 1)[1]
            precision = float(prediction.split(' ', 4)[2])
            predicted = prediction.split(' ', 1)[0]
        except IndexError:
            pass

        return [predicted, precision]

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

    def delete_classifier(self):
        print('Deleting Classifier')
        delete = 'rm -rf ~/openface/aligned-images/'
        subprocess.Popen(delete, shell=True, stdout=subprocess.PIPE).communicate()

        delete = 'rm -rf ~/openface/generated-embeddings/'
        subprocess.Popen(delete, shell=True, stdout=subprocess.PIPE).communicate()

        delete = 'rm -rf ~/openface/training-images/'
        subprocess.Popen(delete, shell=True, stdout=subprocess.PIPE).communicate()

