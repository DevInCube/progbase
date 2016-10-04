### Встановлення IDE Code::Blocks

~~~~
sudo apt-get install codeblocks
~~~~

Запустіть програму:
~~~~
sudo codeblocks
~~~~

#### Компіляція і запуск програм

Створіть новий проект і запустіть скомпільовану програму за допомогою кнопки `Build & Run`.

Якщо у `Build log` знизу з'явилось повідомлення про помилку `g++ not found`, необхідно встановити:
~~~~
sudo apt-get install build-essential
~~~~

#### Дебагер

Кнопки дебагера працюватимуть тільки якщо код розміщений у відкритому і активованому C::B проекті.

Встановіть на певний рядок коду `Breakpoint` і запустіть дебагер за допомогою кнопки `Debug / Continue`.

Якщо після запуску дебагера він не зупинився на брейкпоінті, а завершився (у логах вивід із `Debugger finished with status 0`), потрібно:

1. Clean and rebuild.
2. Ensure that (Build Options > Compiler Settings) Produce debugging symbols is checked, strip all symbols is unchecked. Please ensure this is done in global settings AND project settings.This fixed it for me.
3. Check so that there are no spaces/non-ASCII values in the project file path.
4. Check if you are running the debug version, not release.The executable from Release build will be \bin\Release , and the executable from a Debug build will be in \bin\Debug .
5. Check that Debugger in (Settings > Compiler > Toolchain Executables) is set to GDB/CDB Debugger:Default.
6. Check that executable path in (Settings > Debugger > GDB/CDB Debugger:Default) is valid gdb path like (C:\MinGW\bin\gdb.exe).
7. Update Codeblocks(last resort).
