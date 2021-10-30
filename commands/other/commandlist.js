module.exports = {
      name: "commandlist",
      code: `
     $title[$jsonRequest[https://api.leref.ga/functions/$noMentionMessage[1]?limit=1&page=1;data#RIGHT#0#LEFT#.name;];$toLowercase[$getObjectProperty[link]]
     $addObjectProperty[link;$replaceText[https://aoi.leref.ga/functions/$jsonRequest[https://api.leref.ga/functions/$noMentionMessage[1]?limit=1&page=1;data#RIGHT#0#LEFT#.name;];$;usd;1]]
     $description[\`\`\`\n$jsonRequest[https://api.leref.ga/functions/$noMentionMessage[1]?limit=1&page=1;data#RIGHT#0#LEFT#.desc;]\n\`\`\`]
     $addField[Usage:;\`\`\`\n$jsonRequest[https://api.leref.ga/functions/$noMentionMessage[1]?limit=1&page=1;data#RIGHT#0#LEFT#.usage;]\n\`\`\`;yes]
     $color[GREEN]
     $argsCheck[>1;Введи функцию]
     $botTyping
     `}
