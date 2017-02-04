## Підготовка до курсу
  
### Підготовка навчального репозиторію __progbase2__

1. Створіть у профілі [BitBucket][bb] новий __приватний__ репозиторій із назвою __`progbase2`__.
1. У розділі `Settings -> Access management` додайте у режимі `ADMIN` користувача __`phadyniak`__.
1. У розділі `Settings -> Webhooks` створіть новий webhook із назвою __`Progbase`__ та посиланням __`https://progbase-service.herokuapp.com/bbhook`__.
1. Виконайте `git clone` репозиторію у локальний репозиторій і створіть у ньому файл `.gitignore` та додайте у файл [даний вміст][gitignore].
1. Створіть дві директорії: `tasks` i `labs` та додайте у них по одному пустому текстовому файлу із назвою `index`.
1. Збережіть та надішліть зміни у віддалений репозиторій

### Інструменти розробки

- [Встановити і налаштувати __Visual Studio Code__][vscode] (рекомендовано) або СLion.
- Вміти запускати і використовувати __дебагер__ (у VSCode або CLion) для відлагоджування коду мовою C.
- Встановити __CMake__: `sudo apt-get install cmake`
- Встановити __Valgrind__: `sudo apt-get install valgrind`.

  [vscode]: https://progbase.herokuapp.com/help/ide/vscode
  [bb]: https://bitbucket.org
  [gitignore]: https://raw.githubusercontent.com/github/gitignore/master/C.gitignore
