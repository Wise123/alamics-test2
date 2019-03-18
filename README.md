# Web. Библиотека

Для работы приложения требуется JDK 8 или выше, Maven и Node.js

## Запуск приложения
Для того чтобы запустить приложение требуется из директории проекта выполнить команду

```mvn spring-boot:run```

после этого из директории `src/main/web-library` нужно выполнить команду 

```npm start```

После этого бекенд будет развёрнут на порту 8080 например
http://localhost:8080/weblibrary-0.0.1/book/?inPrivateCatalogue=true

а фронтенд на порту 3000
http://localhost:3000/

Кроме того потестить апи можно потестить через swagger-ui
http://localhost:8080/swagger-ui.html


## Сборка WAR-файла
Для этого требуется из директории проекта выполнить команду

``` mvn clean package```

после этого файл `weblibrary-X.X.X.war` можно выложить на томкат. По умолчанию бекенд будет доступен по адресу
http://localhost:8080/weblibrary-0.0.1/book/?inPrivateCatalogue=true

или через swagger-ui по адресу 
http://localhost:8080/weblibrary-0.0.1/swagger-ui.html

фронтенд будет доступен по адресу 
http://localhost:8080/weblibrary-0.0.1/index.html