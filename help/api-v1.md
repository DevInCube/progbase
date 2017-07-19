> API знаходиться у розробці

## Точки доступу

Весь доступ до API відбувається через HTTPS та базовий URL `https://progbase.herokuapp.com/api/v1`. 
Всі дані відправляються і отримуються у форматі JSON.

Час подається у форматі [ISO 8601][date-iso]:

```
YYYY-MM-DDTHH:MM:SSZ
```

Коренева точка доступу до Progbase API:

```
GET https://progbase.herokuapp.com/api/v1
```

Повертає словник зі всіма ресурсами, що доступні у API.

## Аутентифікація

Частина ресурсів доступні без аутентифікації, але деякі із ресурсів потребують [базової аутентифікації][basic-auth] для доступу до них. 

Логіном слугує ім'я користувача BitBucket, з яким ви зареєстровані на Progbase. 
Пароль можна задати у спеціальному полі на [сторінці профілю][pb-profile].

Якщо запит до такого ресурсу не міститиме даних користувача, то відповіддю буде статус __401 Unauthorized__ і тіло:

```json
{
    "message": "Requires authentication"
}
```




  [basic-auth]: https://docs.oracle.com/cd/E24191_01/common/tutorials/authn_http_basic.html
  [pb-profile]: /profile 
  [date-iso]: https://en.wikipedia.org/wiki/ISO_8601
