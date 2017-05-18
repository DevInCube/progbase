## Підготовка до курсу
  
### Підготовка навчального репозиторію __webprogbase__

1. Створіть у профілі [BitBucket][bb] новий __приватний__ репозиторій із назвою __`webprogbase`__.
1. У розділі `Settings -> Access management` додайте у режимі `ADMIN` користувача __`phadyniak`__.
1. У розділі `Settings -> Webhooks` створіть новий webhook із назвою __`Progbase`__ та посиланням __`https://progbase-service.herokuapp.com/bbhook`__.
1. Виконайте `git clone` репозиторію у локальний репозиторій і створіть у ньому файл `.gitignore` та додайте у файл [даний вміст][gitignore].
1. Створіть дві директорії: `tasks` i `labs` та додайте у них по одному пустому текстовому файлу із назвою `index`.
1. Збережіть та надішліть зміни у віддалений репозиторій

### Інструменти розробки

- Встановити і налаштувати __Visual Studio Code__ із розширеннями: *.ejs* та *ESLint*.
- Встановити __NodeJS__: `sudo apt-get install nodejs`

### Вміння роботи з Git

Вміти працювати з Git із командного рядка. 
Необхідний мінімум: команди __clone__, __add__, __status__, __commit__, __push__, __pull__, __checkout__, __reset__, __diff__.

Корисні посилання:

* [Git commands and best practices][git1]
* [Git cheat-sheet][git2]

### Основи мови програмування JavaScript

Розпочати самостійне ознайомлення з мовою програмування __JavaScript__ (Розділи “Додатково” можна упускати) і вміти запускати її скрипти у браузері:

* [Лекція 1. Базовий синтаксис JavaScript][lec1]
* [Лекція 2. Функції JavaScript][lec2]
* [Лекція 3. Об'єкти JavaScript][lec3]

  [bb]: https://bitbucket.org
  [gitignore]: https://raw.githubusercontent.com/github/gitignore/master/Node.gitignore
  [git1]: http://zeroturnaround.com/rebellabs/git-commands-and-best-practices-cheat-sheet/
  [git2]: http://zeroturnaround.com/wp-content/uploads/2016/05/Git-Cheat-Sheet-by-RebelLabs.png
  [lec1]: https://drive.google.com/open?id=1w26wGUTvzBC9bLhoNEfjV4RJPTJ6nlYL6ue3Hc8NKD4
  [lec2]: https://drive.google.com/open?id=1YCbH5xZuIL4F0R_0ZSNdm5FlMLqpXv2WnfVgUApD3ic
  [lec3]: https://drive.google.com/open?id=17WC2xmCFv9TdOAKvDK0ETcR-bYsk22i1m9aCRZFYARQ
