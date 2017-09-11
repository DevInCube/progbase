## Завдання №1. Реєстрація на сайті

Виконати до:		**першого вересня (1.09)**

Завдання:		Зареєструватись на [сайті курсу][progbase].

Інструкції по виконанню: [Реєстрація на сайті Progbase][help-register]

## Завдання №2. Налаштування середовища розробки

Виконати до:		**першого практичного заняття**

Завдання:

1. Встановити операційну систему Linux (рекомендовано - Ubuntu).
2. Ознайомитись із терміналом Linux: вміти виконувати у ньому команди і запускати програми.
3. Встановити __git__, __clang__, __cmake__ та бібліотеку __libprogbase__.
3. Встановити та ознайомитись із текстовим редактором __VSCode__ та налаштувати його для роботи із мовою програмування __C__. 

Інструкції по виконанню: [Налаштування середовища розробки][linux-install]

## Завдання №3. Підготовка навчального репозиторію

Завдання:

1. Створіть у профілі [BitBucket][bb] __приватний__ репозиторій із назвою __`progbase`__.
1. У розділі `Settings -> User and group access` додайте користувача __`phadyniak`__ (профіль викладача) із правами доступу `Admin`.
1. У розділі `Settings -> Webhooks` створіть новий __webhook__ із назвою __`Progbase`__ та посиланням __`https://progbase-service.herokuapp.com/bbhook`__ (інші поля за замовчуванням).

[progbase]: https://progbase.herokuapp.com/profile
[help-register]: https://progbase.herokuapp.com/help/register
[linux-install]: https://docs.google.com/document/d/1JaZVV6_QryMq6yCK0pUE38Dc7azp_GhBWtGxvaYBk5Q/edit?usp=sharing
[c-gitignore]: https://raw.githubusercontent.com/github/gitignore/master/C.gitignore
[bb]: https://bitbucket.org
[taskviewer]: /taskviewer
