from scipy import misc
import numpy as np
import time


def compare(new, old):
    ratio = 0.0
    old = np.where(old == 0, np.finfo(float).eps, old)  # Converting zero to the minimum positive number
    new = np.where(new == 0, np.finfo(float).eps, new)  # Converting zero to the minimum positive number
    for i in range(480):
        for j in range(640):
            ratio += float((old[i, j, 0] - new[i, j, 0])) / float(old[i, j, 0])
            ratio += float((old[i, j, 0] - new[i, j, 1])) / float(old[i, j, 1])
            ratio += float((old[i, j, 0] - new[i, j, 2])) / float(old[i, j, 2])

    print('ratio = ', ratio)


old = np.zeros((480, 640, 3))
old += 1
while True:
    face = misc.imread('fig0.jpg')
    print(np.shape(face))
    try:
        face = misc.imread('fig0.jpg')
        print(np.shape(face))
        print(np.shape(face) is None)
        print(face[1, 1, :])
        compare(face, old)
        old = face
    except IndexError:
        print("Error reading image")
time.sleep(1)