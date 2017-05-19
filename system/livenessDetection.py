from __future__ import division
import numpy as np
import time
from scipy.signal import convolve2d


def lpq(img,winSize=7,freqestim=1,mode='h'):
    rho=0.90

    STFTalpha=1/winSize  # alpha in STFT approaches (for Gaussian derivative alpha=1)
    sigmaS=(winSize-1)/4 # Sigma for STFT Gaussian window (applied if freqestim==2)
    sigmaA=8/(winSize-1) # Sigma for Gaussian derivative quadrature filters (applied if freqestim==3)

    convmode='valid' # Compute descriptor responses only on part that have full neigborhood. Use 'same' if all pixels are included (extrapolates np.image with zeros).

    img=np.float64(img) # Convert np.image to double
    r=(winSize-1)/2 # Get radius from window size
    x=np.arange(-r,r+1)[np.newaxis] # Form spatial coordinates in window

    if freqestim==1:  #  STFT uniform window
        #  Basic STFT filters
        w0=np.ones_like(x)
        w1=np.exp(-2*np.pi*x*STFTalpha*1j)
        w2=np.conj(w1)

    ## Run filters to compute the frequency response in the four points. Store np.real and np.imaginary parts separately
    # Run first filter
    filterResp1=convolve2d(convolve2d(img,w0.T,convmode),w1,convmode)
    filterResp2=convolve2d(convolve2d(img,w1.T,convmode),w0,convmode)
    filterResp3=convolve2d(convolve2d(img,w1.T,convmode),w1,convmode)
    filterResp4=convolve2d(convolve2d(img,w1.T,convmode),w2,convmode)

    # Initilize frequency domain matrix for four frequency coordinates (np.real and np.imaginary parts for each frequency).
    freqResp=np.dstack([filterResp1.real, filterResp1.imag,
                        filterResp2.real, filterResp2.imag,
                        filterResp3.real, filterResp3.imag,
                        filterResp4.real, filterResp4.imag])

    ## Perform quantization and compute LPQ codewords
    inds = np.arange(freqResp.shape[2])[np.newaxis,np.newaxis,:]
    LPQdesc=((freqResp>0)*(2**inds)).sum(2)

    ## Switch format to uint8 if LPQ code np.image is required as output
    if mode=='im':
        LPQdesc=np.uint8(LPQdesc)

    ## Histogram if needed
    if mode=='nh' or mode=='h':
        LPQdesc=np.histogram(LPQdesc.flatten(),range(256))[0]

    ## Normalize histogram if needed
    if mode=='nh':
        LPQdesc=LPQdesc/LPQdesc.sum()

    #print LPQdesc
    return np.asarray(LPQdesc).reshape(-1).tolist()


def colbp(img, delta=1, a=2):
    x_max = np.shape(img)[0]
    y_max = np.shape(img)[1]

    f_dict = {}
    h_sum1 = np.zeros((16, 16))

    for x in range(x_max + a):
        for y in range(y_max + a):
            if x < x_max and y < y_max:
                up = 1 if y - delta >= 0 and img[x, y] > img[x, y - delta] else 0
                down = 1 if y + delta < y_max and img[x, y] > img[x, y + delta] else 0
                left = 1 if x - delta >= 0 and img[x, y] > img[x - delta, y] else 0
                right = 1 if x + delta < x_max and img[x, y] > img[x + delta, y] else 0

                # clockwise
                binary = str(up) + str(right) + str(down) + str(left)
                current_lbp = int(binary, 2)

                # F function
                f_dict[(x, y)] = []
                for label in range(2 ** 4):
                    current_f = 1 if label == current_lbp else 0
                    f_dict[(x, y)].append(current_f)

            x_temp = x if x < x_max else x - x_max
            y_temp = y if y < y_max else y - y_max
            f_a = np.array(f_dict[(x_temp, y_temp)])[np.newaxis]

            # (dr,0)
            if x >= a and y < y_max:
                f = np.array(f_dict[(x - a, y)])[np.newaxis]
                #f_a = np.array(f_dict[(x, y)])[np.newaxis] if x < x_max else np.array(f_dict[(x - x_max, y)])[np.newaxis]
                f_trans = f_a.T
                h_sum1 += f * f_trans

    return np.asarray(h_sum1).reshape(-1).tolist()


def lbp_plus(img):
    x_max = np.shape(img)[0]
    y_max = np.shape(img)[1]
    delta = 1
    lbps_labels = []
    labels_dict = {}

    print('x_max: {}  y_max: {}'.format(x_max, y_max))

    for x in range(x_max):
        for y in range(y_max):
            up = 1 if y - delta >= 0 and img[x, y] > img[x, y - delta] else 0
            down = 1 if y + delta < y_max and img[x, y] > img[x, y + delta] else 0
            left = 1 if x - delta >= 0 and img[x, y] > img[x - delta, y] else 0
            right = 1 if x + delta < x_max and img[x, y] > img[x + delta, y] else 0

            # clockwise
            binary = str(up) + str(right) + str(down) + str(left)
            current_lbp = int(binary, 2)

            labels_dict[(x, y)] = current_lbp
            if current_lbp not in lbps_labels:
                lbps_labels.append(current_lbp)

    return lbps_labels, labels_dict


def f_function(img, labels, labels_dict):
    x_max = np.shape(img)[0]
    y_max = np.shape(img)[1]
    lbps_labels = []

    print('x_max: {}  y_max: {}'.format(x_max, y_max))

    f_dict = {}
    for x in range(x_max):
        for y in range(y_max):
            f_dict[(x,y)] = []
            for label in range(2 ** 4):
                start = time.time()
                current_f = 1 if label == labels_dict[(x, y)] else 0
                end = time.time()
                #print('label == labels_dict: {}'.format(end - start))

                start = time.time()
                f_dict[(x, y)].append(current_f)
                end = time.time()
                #print('appen: {}'.format(end - start))

    return f_dict


def h_matrix(img, f_dict):
    x_max = np.shape(img)[0]
    y_max = np.shape(img)[1]
    a = 2
    h_sum = np.zeros((16, 16))
    for x in range(x_max):
        for y in range(y_max):
            f = np.array(f_dict[(x,y)])[np.newaxis]
            f_a = np.array(f_dict[(x+a, y)])[np.newaxis] if x+a < x_max else np.zeros(16)[np.newaxis]
            f_trans = f_a.T
            h_sum += f * f_trans

    return np.asarray(h_sum).reshape(-1)



