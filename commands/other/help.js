module.exports = {
      name: "help",
      code: `$log[Help от $userTag]
      $title[Команды, они внизу]
      $description[Это все мои команды, типа. Префикс - \`$getServerVar[prefix]\`.]
      $color[RANDOM]
$addField[Команды;\`info\`, \`ping\`, \`remind\`, \`chatbot\`, \`snapshot\`, \`ip\`, \`commandlist\`(для библиотеки [aoi.js](https://aoi.js.org/)), \`serverinfo\`, \`yt-search\`]
$addField[Модерация;\`prefix\`(только для владельца)]
$if[$checkContains[$botOwnerID[/];$authorID]==true] $addField[Разработчикам;\`djsEval\`, \`eval\`, \`reboot\`;yes] $else $endif
      `}