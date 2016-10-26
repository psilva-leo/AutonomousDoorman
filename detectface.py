import numpy as np
import time
import cv2
from threading import Thread
import os

class DetectFace(Thread):

    def deletePics(self):
        # Delete old pictures
        files = os.listdir("./")
        for file in files:
            if file.endswith(".jpg"):
                os.remove(os.path.join("./", file))
        print('Pictures deleted.')

    def run(self):
        save = False

        faceCascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
        cap = cv2.VideoCapture(0)

        oldTime = a = int(round(time.time() * 1000))
        while True:
            newTime = int(round(time.time() * 1000))
            if newTime - oldTime > 3000:
                oldTime = newTime
                save = True

                self.deletePics()
            else: save = False


            ret, img = cap.read()
            gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
            faces = faceCascade.detectMultiScale(gray, 1.3, 5)

            count = 0
            print(np.shape(faces)[0])  # Number of faces
            count = 0
            for (x, y, w, h) in faces:
                cv2.rectangle(img, (x, y), (x + w, y + h), (255, 0, 0), 2)
                roi_gray = gray[y:y + h, x:x + w]
                roi_color = img[y:y + h, x:x + h]
                if save:
                    cv2.imwrite('fig' + str(count) + '.jpg', img[y:y + h, x: x + w])
                    print('saved fig' + str(count) + '.jpg')
                count += 1
            cv2.imshow('img', img)
            k = cv2.waitKey(30) & 0xff
            if k == 27:
                break

        cap.release()
        cv2.destroyAllWindows()

