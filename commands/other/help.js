module.exports = {
      name: "help",
      code: `
      $title[Команды, они внизу]
      $description[Это все мои команды, типа. Префикс - \`$getServerVar[prefix]\`.]
      $color[RANDOM]
$addField[Команды;\`info\`, \`ping\`, \`remind\`, \`chatbot\`, \`snapshot\`, \`ip\`, \`commandlist\`(для библиотеки [aoi.js](https://aoi.js.org/)), \`serverinfo\`, \`yt-search\`]
$addField[Модерация;\`prefix\`(только для владельца)]
$replaceText[$replaceText[$checkContains[$botOwnerID[ ];$authorID];true;$addField[Разработчикам;\`djsEval\`, \`eval\`, \`reboot\`;yes];1];false;;1]
      `}