> # PepegaBot <img align="right" src="https://cdn.discordapp.com/avatars/819263848955379813/bde3aa31d9ede5937b348afb6c0c4923.png?size=512" alt="avatar" title="pepegabot" width="15%">
Бот, предназначенный для моего сервера друзей. Сервер является закрытым, ссылки не распространяются.

Бот уже направлен для работы на Heroku.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

![Discord Server](https://img.shields.io/discord/753669010318426323?logo=discord&logoColor=7289da&style=plastic) <sub>(просто для лулза, кнопка нерабочая)</sub>

**⚠️ Крайне рекомендуется пересмотреть весь код заранее, заменить все ID каналов, юзеров на собственные, так как бот направлен на один сервер.**

## Инструкция для правильного запуска на Heroku <sub>(если честно, я сам не сильно разобрался)</sub>
<details>
  <summary>1. Нажать на кнопку "Deploy to Heroku" выше.</summary>
2. Заполнить все поля и нажать "Deploy App".

<strike>3. Третьего пункта не существует, Нео.</strike>
</details>
<details>
  <summary>1. Форкнуть проект/клонировать и сделать приватным (возможность удобно редактировать проект через GitHub)</summary>
  2. Создать новое приложение на <a href="https://dashboard.heroku.com/apps">панели Heroku</a>.
  
  <img src="https://cdn.discordapp.com/attachments/863356751897296896/904138057077379112/unknown.png"></img>

3. После создания приложения - зайти на вкладку "Deploy", нажать на "GitHub" в разделе "Deployment method", ввести название своего проекта и выбрать его. Он соберётся и будет привязан к репозиторию.
Если нажать на "Enable Automatic Deploys" в разделе "Automatic deploys" - при каждом редактировании проекта на GitHub - проект будет пересобираться на хостинге с изменениями. В ином случае нужно при редактировании проекта каждый раз заходить на хостинг и в конце страницы нажимать "Deploy Branch" для ручного пересобирания проекта на хостинге.
</details>
4. Зайти на вкладку "Resources". В разделе "Free Dynos" вы увидите это.
 <img src="https://user-images.githubusercontent.com/69392185/139560685-adf02e7a-7842-4b51-9ce6-f9d572b11f48.png"></img>
 Вы должны поменять местами рычаги, нажав на карандаши справа от рычагов. То есть из того что выше, вы должны сделать так.
 <img src="https://user-images.githubusercontent.com/69392185/139560720-0532a151-5f06-4468-8999-b6069cde21b7.png"></img>
5. Если вы решили на заполнять поле API-ключа снапшотов, но решили позже, вы должны зайти на вкладку "Settings", в разделе "Config Vars" нажать "Reveal Config Vars", ввести в поле "KEY" `SNAPSHOT` и в поле "VALUE" ваш ключ к API. Нажать кнопку "Add".

---
Стоило бы сделать инструкцию для запуска на таких хостингах, как [DanBot Hosting](https://danbot.host/), но не думаю что это пока кому-то нужно.
