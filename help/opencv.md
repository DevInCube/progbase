Для початку потрібно встановити пакети:

```
sudo apt-get install build-essential
sudo apt-get install cmake git libgtk2.0-dev pkg-config libavcodec-dev libavformat-dev libswscale-dev
sudo apt-get install python-dev python-numpy libtbb2 libtbb-dev libjpeg-dev libpng-dev libtiff-dev libjasper-dev libdc1394-22-dev
```

Виконати клон репозиторія:

```
https://github.com/opencv/opencv
```

Перейдіть у репозиторій і виконайте:

```
mkdir release
cd release
cmake -DCMAKE_BUILD_TYPE=RELEASE -DCMAKE_INSTALL_PREFIX=/usr/local ..
```

Після цього послідовно виконайте команди:
```
make
sudo make install
```

Відкрийте даний файл для редагування:
```
sudo gedit /etc/ld.so.conf
```

Додайте у останній рядок: `/usr/local/lib`

Виконайте:

```
sudo ldconfig
```

Перейдіть у директорію репозиторія
```
cd samples/cpp/
```

Скомпілюйте і запустіть приклад:

```
g++ facedetect.cpp `pkg-config --cflags --libs opencv` -o facedetect
./facedetect
```
