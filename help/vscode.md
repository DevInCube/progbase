## Встановлення Visual Studio Code 

1. [Скачати архів Visual Studio Code для Linux](http://go.microsoft.com/fwlink/?LinkID=534108)
1. Розархівувати вміст архіву у директорію `~/apps/VSCode-linux-x64/`
1. Створити _symlink_ на програму за допомогою команди `sudo ln -s ~/apps/VSCode-linux-x64/code /usr/bin/code`

Тепер програма буде доступна з будь-якого місця у терміналі за допомогою команди `code`.

## Встановлення розширень для роботи із мовою С

1. Запустіть програму і перейдіть до розширень (`Extensions`, `Ctrl+Shift+X`) і встановіть розширення C/C++, C/C++  CLang Command Adapter, СMake та CMake Tools
1. Перезавантажте програму
1. Зайдіть у `File->Preferences->Settings` і додайте у файл налаштувань (справа) рядок між наявних там фігурних дужок: `"clang.cflags": ["-std=c11", "-g", "-Wall", "-Werror"]`
1. Створіть папку проекту і перейдіть у неї в VSCode. 
1. Створіть у папці файл `main.c` із вмістом:
    ```c
    #include <stdio.h>
    
    int main() {
        printf("Success!\r\n");
        return 0;
    }
    ```
1. Нажміть `Ctrl+Shift+B` і оберіть опцію створення налаштування для збірки програми, потім опцію `Others`. Створиться файл `tasks.json`, у який внесіть даний текст:
    ```
    {
	    // See https://go.microsoft.com/fwlink/?LinkId=733558
	    // for the documentation about the tasks.json format
	    "version": "2.0.0",
	    "tasks": [
	        {
	            "taskName": "Build C",
	            "type": "shell",
	            "command": "gcc main.c -o build/a.out -g -Wall -Werror -std=c11",
	            "group": {
	                "kind": "build",
	                "isDefault": true
	            }
	        }
	    ]
	}
	````
1. Нажміть `F5` оберіть опцію, у якій є строка `C++`. У автоматично створеному файлі `launch.json` замініть строку `enter program name, for example ${workspaceRoot}/a.out` на `gnome-terminal --tab -e \"/bin/bash -c '${workspaceRoot}/build/a.out'\"`
1. Нажміть `Ctrl+Shift+B` а після успішного завершення `F5`.
