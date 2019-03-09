# Web. Библиотека

Для работы приложения требуется JDK 8 или выше и Maven

## Запуск приложения
Для того чтобы запустить приложение требуется из директории проекта выполнить команду

```mvn spring-boot:run```

После этого приложение будет развёрнуто на порту 8080 например
http://localhost:8080/weblibrary-0.0.1/book/?inPrivateCatalogue=true

Кроме того потестить приложение можно апи можно потестить через swagger-ui
http://localhost:8080/swagger-ui.html


## Сборка WAR-файла
Для этого требуется из директории проекта выполнить команду

``` mvn clean package```

после этого файл `weblibrary-X.X.X.war` можно выложить на томкат. По умолчанию приложение будет доступно по адресу
http://localhost:8080/weblibrary-0.0.1/book/?inPrivateCatalogue=true

или через swagger-ui по адресу 
http://localhost:8080/weblibrary-0.0.1/swagger-ui.html