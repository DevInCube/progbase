## Doxygen

~~~
sudo apt-get install doxygen graphviz
~~~

Згенерувати файл із конфігурацією (Doxyfile):

~~~
doxygen -g
~~~

Задати налаштування:

~~~
PROJECT_NAME           = "Sample Project"
EXTRACT_ALL            = NO
FILE_PATTERNS          = *.c *.h
RECURSIVE              = YES
~~~

Згенерувати документацію:

~~~
doxygen Doxyfile
~~~

Створяться директорії html/ і latex/, які міститимуть документацію у різних форматах.

Перейдіть у директорію html/ і відкрийте файл index.html у веб-браузері.
