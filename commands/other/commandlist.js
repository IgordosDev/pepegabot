module.exports = {
      name: "commandlist",
      code: `$log[commandlist от $userTag: $noMentionMessage[1]]
      $if[$jsonRequest[https://api.leref.ga/functions/$noMentionMessage[1]?limit=1&page=1;status;]!=200]
     $color[RED]
     $title[Ошибка]
     $description[либо функция не найдена, либо API в отключке $customEmoji[Okayge]]
     $footer[сделать адекватное объяснение ошибки не получится. Причины не обсуждаются]
      $else
     $title[$jsonRequest[https://api.leref.ga/functions/$noMentionMessage[1]?limit=1&page=1;data#RIGHT#0#LEFT#.name;Error]]
     $description[\`\`\`\n$jsonRequest[https://api.leref.ga/functions/$noMentionMessage[1]?limit=1&page=1;data#RIGHT#0#LEFT#.desc;Error]\n\`\`\`]
     $addField[Usage:;\`\`\`\n$jsonRequest[https://api.leref.ga/functions/$noMentionMessage[1]?limit=1&page=1;data#RIGHT#0#LEFT#.usage;Error]\n\`\`\`;yes]
     $color[GREEN]
     $endif
     $botTyping
      `}
