### Встановлення і налаштування редактора Atom

![AtomLogo](https://github-atom-io-herokuapp-com.global.ssl.fastly.net/assets/logo-4e073dbd4c0ce67ece1b30a6b31253b9.png)

~~~~
sudo apt-get install atom
~~~~

Разом із `atom` встановиться пакетний менеджер `apm` (Atom Package Manager), за допомогою якого потрібно встановити такі пакети через командний рядок:
~~~~
apm install linter linter-gcc
~~~~

Після цього запустіть редактор:
~~~~
atom
~~~~

Створіть директорію проекту і відкрийте її у Atom. У цій директорії створіть текстовий файл `.gcc-flags.json`:
~~~~
{
	"execPath": "/usr/bin/gcc",
	"gccDefaultCFlags": "-c -std=c89 -Wall -Werror -pedantic-errors",
	"gccSuppressWarnings": false
}
~~~~

та `Makefile`:
~~~~
CC=gcc
CFLAGS=-c -std=c89 -Werror -Wall -pedantic-errors
LDFLAGS=-lm -lprogbase
SOURCES=main.c
OBJECTS=$(SOURCES:.c=.o)
EXECUTABLE=a.out

all: $(SOURCES) $(EXECUTABLE) clean

$(EXECUTABLE): $(OBJECTS)
	$(CC) $(OBJECTS) -o $@ $(LDFLAGS)

.c.o:
	$(CC) $(CFLAGS) $< -o $@

clean:
	rm *o
~~~~

### Перевірка коду мовою С

Створіть файл із кодом `main.c` і додайте у нього код мовою С. Блоки коду автоматично вирівнюватимусться при написанні.

Після нажаття комбінацій клавіш `Ctrl+S` (зберегти) у редакторі відбудеться перевірка коректності програми і всі помилки підсвітяться:

![AtomGCCLinter](https://raw.githubusercontent.com/wiki/PublicHadyniak/progbase/images/atom_linter_gcc.png)

#### Компіляція і запуск програм

Перейдіть у директорію проекту у консолі і виконайте:
~~~~
make
~~~~

Програма скомпілюється із `main.c` у `a.out` (це можна налаштувати у файлі `Makefile`).

