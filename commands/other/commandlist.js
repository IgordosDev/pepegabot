module.exports = {
      name: "commandlist",
      aliases: ['cl', 'aoi'],
      code: `
     $title[$jsonRequest[https://api.leref.ga/functions/$noMentionMessage[1]?limit=1&page=1;data#RIGHT#0#LEFT#.name;];]
     $description[\`\`\`\n$jsonRequest[https://api.leref.ga/functions/$noMentionMessage[1]?limit=1&page=1;data#RIGHT#0#LEFT#.desc;]\n\`\`\`]
     $addField[URL;https#COLON#//aoi.leref.ga/v/4/functions/$toLowercase[$replaceText[$jsonRequest[https://api.leref.ga/functions/$noMentionMessage[1]?limit=1&page=1;data#RIGHT#0#LEFT#.name;];$;usd;1]];yes]
     $addField[Usage:;$jsonRequest[https://api.leref.ga/functions/$noMentionMessage[1]?limit=1&page=1;data#RIGHT#0#LEFT#.usage;];yes]
     $color[GREEN]
     $argsCheck[>1;Введи функцию]
     $botTyping
     `}