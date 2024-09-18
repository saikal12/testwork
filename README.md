### Это небольшое Django-приложение, которое состоит из двух частей:

API для работы с продуктами (создание и получение списка).
Страница на HTML с использованием JavaScript для отправки данных на API и отображения продуктов.


## Использование

#### Клонируйте реппозиторий

```sh
git clone git@github.com:saikal12/testwork.git
```

#### Перейдите в папку testwork , установите и запустите виртуальное окружение.

```sh
cd testwork
```

```
python -m venv venv
```

* Если у вас Linux/MacOS

    ```
    source venv/bin/activate
    ```

#### Установите зависимости:

```sh
pip install -r requirements.txt
```

### Выполните миграции:
```sh
python manage.py migrate
```


#### Запустите приложение на локальном сервере

```sh
python manage.py runserver
```


