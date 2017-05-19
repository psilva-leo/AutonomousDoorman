# Autonomous Doorman

Autonomous Doorman is a face recognition system for controlling access to avenues. It has two major parts system and webserver. System runs on Raspberry Pi 3 while webserver is hosted on heroku, hence it is possible to control the system (e.g. updating (un)authorised people) from anywhere. It also allow to set times for the person to enter.

# Setup

To run the complete system it is necessary a Raspberry Pi, Arduino, USB cam and a few electronic components.
Autonomous Doorman is build on top of Openface, therefore the installation process is quite long for the system part.

Libraries needed:
    
- OpenCV    (face detection)
- OpenFace  (face recognition)
    - Dlib
    - Boost
    - Torch
- Pyrebase  (communication with firebase)
- Heroku    (web application hosting)

**Webserver**

- *Installing NodeJS*
    ```sh
    # NodeJs
    $ cd ~
    $ sudo apt-get update
    $ sudo apt-get install nodejs
    $ sudo apt-get install npm
    ```

- *Installing Heroku*
    https://devcenter.heroku.com/articles/heroku-cli#getting-started
    ```sh
    $ wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh
    ```
- *Seeting up firebase environment (Configuring CORS on a Bucket)*
    Install gsutil: https://cloud.google.com/storage/docs/gsutil_install
    Set up Cors: https://cloud.google.com/storage/docs/cross-origin

    
**System**
    
- *Preparing the system*
    ```sh
    $ sudo apt-get update -y
    $ sudo apt-get upgrade -y
    
    # Upgrading pip
    $ sudo pip install --upgrade pip 
    $ sudo pip install --upgrade virtualenv 
    
    # install packages dependency
    $ sudo pip install numpy
    $ sudo pip install cython
    $ sudo pip install scipy
    $ sudo pip install scikit-learn
    $ sudo pip install scikit-image
    $ sudo pip install pandas
    ```

- *Install OpenCV*
    ```sh
    # Installing Deppendencies
    $ cd ~
    $ sudo apt-get install build-essential -y
    $ sudo apt-get install cmake git libgtk2.0-dev pkg-config libavcodec-dev libavformat-dev libswscale-dev -y
    $ sudo apt-get install python-dev python-numpy libtbb2 libtbb-dev libjpeg-dev libpng-dev libtiff-dev libjasper-dev libdc1394-22-dev -y
    
    # changing the directory and downloading opencv
    $ cd /usr/src
    $ sudo git clone https://github.com/opencv/opencv.git
    $ cd ~/opencv
    $ sudo mkdir release
    $ cd release
    $ sudo cmake -D CMAKE_BUILD_TYPE=RELEASE -D CMAKE_INSTALL_PREFIX=/usr/local ..
    $ sudo make
    $ sudo make install
    $ pkg-config --modversion opencv
    ```

- *Installing dlib*
    ```sh
    $ cd ~
    $ mkdir -p ~/src
    $ cd ~/src
    $ wget https://github.com/davisking/dlib/releases/download/v18.16/dlib-18.16.tar.bz2
    $ tar xf dlib-18.16.tar.bz2
    $ cd dlib-18.16/python_examples
    $ mkdir build
    ```
- Installing Boost
    ```sh
    $ wget -O boost_1_62_0.tar.gz https://sourceforge.net/projects/boost/files/boost/1.62.0/boost_1_62_0.tar.gz/download
    $ tar xzvf boost_1_62_0.tar.gz
    $ cd boost_1_62_0/
    $ sudo apt-get update -y
    $ sudo apt-get install build-essential g++ python-dev autotools-dev libicu-dev build-essential libbz2-dev libboost-all-dev -y
    
    $ ./bootstrap.sh --prefix=/usr/local
    $ cd ~/boost_1_62_0/
    $ ./b2
    $ sudo ./b2 install
    
    $ cd ~/src
    $ cd dlib-18.16/python_examples
    $ cd build
    
    $ sudo apt install cmake -y
    
    $ cmake ../../tools/python
    $ cmake --build . --config Release
    $ sudo cp dlib.so /usr/local/lib/python2.7/dist-packages
    ```

- *Installing Torch*
    ```sh
    # Downloading Torch
    $ cd ~
    $ sudo apt-get install git -y
    $ git clone https://github.com/torch/distro.git ~/torch --recursive
    $ sudo apt-get install luarocks -y
    
    $ cd ~/torch
    $ bash install-deps
    $ ./install.sh
    $ source ~/.bashrc
    
    # Packages for Torch
    $ luarocks install torch
    $ luarocks install dpnn 
    $ luarocks install nn
    $ luarocks install optim
    $ luarocks install csvigo
    $ luarocks install cutorch
    ```
    
- *Installing OpenFace*
    
    **[Important]** After installing it is needed to change all the references to nn4.small2.v1.t7 and nn4.v1.t7 to their ascii files (nn4.small2.v1.ascii.t7 and nn4.v1.ascii.t7) in openface folder for OS compatibility reasons.
    ```sh
    $ cd ~
    $ git clone https://github.com/cmusatyalab/openface.git
    $ cd openface
    $ sudo python2 setup.py install
    $ cd models
    $ bash get-models.sh
    
    # Download nn4.small2.v1.t7 and nn4.v1.t7 ascii files
    $ cd ~/openface/models/openface/
    $ wget http://openface-models.storage.cmusatyalab.org/nn4.v1.ascii.t7.xz
    $ wget http://openface-models.storage.cmusatyalab.org/nn4.small2.v1.ascii.t7.xz
    $ unxz nn4.v1.ascii.t7.xz
    $ unxz nn4.small2.v1.ascii.t7.xz
    ```

- *Installing Pyrebase*
    ```sh
    $ sudo pip install pyrebase
    ```

# Licensing
    This project is under the MIT license.