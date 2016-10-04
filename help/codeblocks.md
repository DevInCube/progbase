### Встановлення IDE Code::Blocks

~~~~
sudo apt-get install codeblocks
~~~~

Запустіть програму:
~~~~
sudo codeblocks
~~~~

#### Компіляція і запуск програм

Створіть новий проект і запустіть скомпільовану програму за допомогою кнопки `Build&Run`.

Якщо у `Build log` знизу з'явилось повідомлення про помилку `g++ not found`, необхідно встановити:
~~~~
sudo apt-get install build-essential
~~~~

#### Дебагер

Встановіть на певний рядок коду `Breakpoint` і запустіть дебагер за допомогою кнопки `Debug / Continue`.
