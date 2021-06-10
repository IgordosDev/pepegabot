module.exports = {
      name: "commandlist",
      code: `$log[commandlist от $userTag: $noMentionMessage[1]]
$title[$jsonRequest[https://api.leref.ga/functions/$noMentionMessage[1]?limit=1&page=1;data#RIGHT#0#LEFT#.name;{title:Ошибка} {description:Заданная функция не найдена. (*а мб апи сдохло*)} {color:RED}]]
     $description[\`\`\`\n$jsonRequest[https://api.leref.ga/functions/$noMentionMessage[1]?limit=1&page=1;data#RIGHT#0#LEFT#.desc;]\n\`\`\`]
     $addField[Usage:;\`\`\`\n$jsonRequest[https://api.leref.ga/functions/$noMentionMessage[1]?limit=1&page=1;data#RIGHT#0#LEFT#.usage;]\n\`\`\`;yes]
     $color[GREEN]
     $botTyping
      `}
