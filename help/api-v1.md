# REST API v1

> API знаходиться у розробці

## Огляд

### Точки доступу

Весь доступ до API відбувається через HTTPS та базовий URL `https://progbase.herokuapp.com/api/v1`. 
Всі дані відправляються і отримуються у форматі JSON.

Час подається у форматі [ISO 8601][date-iso]:

```
YYYY-MM-DDTHH:MM:SSZ
```

[Коренева точка доступу][api-root] до Progbase API:

```
GET https://progbase.herokuapp.com/api/v1
```

Повертає словник зі всіма ресурсами, що доступні у API.

### Клієнтські помилки

Відправлення на сервер неправильного JSON призведе до повернення відповіді з `400 Bad Request` та тілом:

```json
{
    "message": "Problems parsing JSON"
}
```

### Аутентифікація

#### Базова аутентифікація

Частина ресурсів доступні без аутентифікації, але деякі із ресурсів потребують [базової аутентифікації][basic-auth] для доступу до них. 

Логіном слугує ім'я користувача BitBucket, з яким ви зареєстровані на Progbase. 
Пароль можна задати у спеціальному полі на [сторінці профілю][pb-profile].

Якщо запит до такого ресурсу не міститиме даних користувача, то відповіддю буде статус `401 Unauthorized` і тіло:

```json
{
    "message": "Requires authentication"
}
```


# Курси та кредитні модулі

## Список курсів

`GET /api/v1/courses`

## Отримати курс

`GET /api/v1/courses/:course_id`

## Список модулів

`GET /api/v1/modules`

## Отримати модуль

`GET /api/v1/modules/:module_id`

Відповідь:

```json
{
    "id": "progbase",
    "course": "progbase",
    "order": 1,
    "name": "Частина 1. Базові конструкції мови С",
    "description": "Основи комп'ютерних наук, базові можливості мови С",
    "credits": 5,
    "semester": 1,
    "lectures_url": "https://raw.githubusercontent.com/PublicHadyniak/progbase/master/pb1/lectures.md"
}
```

# Користувачі

## Отримати інформацію про користувача

`GET /api/v1/users/:user_id`

Відповідь:

```json
{
    "username": "phadyniak",
    "role": "teacher",
    "fullname": "Ruslan Hadyniak"
}
```

## Отримати аутентифікованого користувача

`GET /api/v1/user`

Відповідь:

```json
{
    "username": "phadyniak",
    "role": "teacher",
    "fullname": "Ruslan Hadyniak",
    "email": "ruslan.hadyniak@gmail.com",
    "group": "КП-61",
    "student_id": 15,
    "telegram_username": "rulline"
}
```

## Список всіх комітів аутентифікованого користувача

`GET /api/v1/user/commits`

Відповідь:

```json
[
    {
        "username": "phadyniak",
        "task": "xml",
        "score": null,
        "updtime": "2017-03-18T12:57:17.000Z",
        "comment": null,
        "checktime": null,
        "module": "progbase2"
    },
    {
        "username": "phadyniak",
        "task": "json",
        "score": null,
        "updtime": "2017-03-18T13:19:25.000Z",
        "comment": null,
        "checktime": null,
        "module": "progbase2"
    }
]
```

# Академічні групи

## Список всіх академічних груп

`GET /api/v1/groups`

Відповідь:

```json
[
    {
        "id": "2016_kp61",
        "year": "2016",
        "name": "КП-61"
    },
    {
        "id": "2017_kp71",
        "year": "2017",
        "name": "КП-71"
    }
]
```

## Отримати інформацію про академічну групу

`GET /api/v1/groups/:group_id`

Відповідь:

```json
{
    "id": "2016_kp61",
    "year": "2016",
    "name": "КП-61"
}
```


[api-root]: https://progbase.herokuapp.com/api/v1
[basic-auth]: https://docs.oracle.com/cd/E24191_01/common/tutorials/authn_http_basic.html
[pb-profile]: /profile 
[date-iso]: https://en.wikipedia.org/wiki/ISO_8601
