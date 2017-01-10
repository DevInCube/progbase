## Встановлення Visual Studio Code 

1. [Скачати архів Visual Studio Code для Linux](http://go.microsoft.com/fwlink/?LinkID=534108)
1. Розархівувати вміст архіву у директорію `~/apps/VSCode-linux-x64/`
1. Створити symlink на програму за допомогою команди `sudo ln -s ~/apps/VSCode-linux-x64/code /usr/bin/code`

Тепер програма буде доступна з будь-якого місця у терміналі за допомогою команди `code`.

## Встановлення розширень для роботи із мовою С

1. Запустіть програму і перейдіть до розширень (Extensions, Ctrl+Shift+X)
1. У поле вводу введіть `vscode-clang` і встановіть розширення (C/C++ Clang) і `cpptools` (C/C++)
1. Перезавантажте програму
1. Зайдіть у File->Preferences->User Settings і додайте у файл налаштувань рядок між наявних там фігурних дужок: `"clang.cflags": ["-std=c99", "-Wall", "-Werror", "-pedantic-errors"]`
1. Перейдіть у File->Preferences->Keyboard Shortcuts і додайте у файл налаштувань рядок між наявних там квадратних дужок: `{ "key": "f5",          "command": "workbench.action.tasks.build" }`
1. Створіть папку проекту і перейдіть у неї і VSCode
1. Нажміть F1 і у полі для вводу введіть `Tasks` та оберіть `Tasks: Configure Task Runner`
1. У файлі налаштувань задайте завдання для компіляції:

~~~
{
	// See https://go.microsoft.com/fwlink/?LinkId=733558
	// for the documentation about the tasks.json format
	"version": "0.1.0",
	"command": "make",
	"isShellCommand": true,
	"args": [],
	"showOutput": "always"
}
~~~

У папці проекту створіть Makefile, який компілюватиме проект із опцією компілятора `-g` (для дебагу):

~~~
all:
	gcc -c -g *.c -std=c99 -Werror -Wall -pedantic-errors
	gcc *.o -o a.out -lprogbase
	rm *.o
	gnome-terminal --tab -e "/bin/bash -c 'valgrind --leak-check=yes ./a.out; exec /bin/bash -i'"
~~~

Для успішного запуску скомпільованої програми встановіть __Valgrind__.

~~~
sudo apt-get install valgrind
~~~

Створіть у папці проекту файл main.c із кодом програми.

Тепер для компіляції достатньо нажати F5 у VSCode.
