module.exports = {
      name: "commandlist",
      code: `$log[commandlist от $userTag: $noMentionMessage[1]]
      $if[$jsonRequest[https://api.leref.ga/functions/$noMentionMessage[1]?limit=1&page=1;status;$getObjectProperty[error]]!=200]
     $color[RED]
     $title[Ошибка]
     $description[либо функция не найдена, либо API в отключке $customEmoji[Okayge]]
     $footer[сделать адекватное объяснение ошибки не получится. Причины не обсуждаются]
      $else
     $title[$getObjectProperty[name];https://aoi.leref.ga/functions/$getObjectProperty[name]]
     $description[\`\`\`\n$jsonRequest[https://api.leref.ga/functions/$noMentionMessage[1]?limit=1&page=1;data#RIGHT#0#LEFT#.desc;$getObjectProperty[error]]\n\`\`\`]
     $addField[Usage:;\`\`\`\n$jsonRequest[https://api.leref.ga/functions/$noMentionMessage[1]?limit=1&page=1;data#RIGHT#0#LEFT#.usage;$getObjectProperty[error]]\n\`\`\`;yes]
     $color[GREEN]
     $addObjectProperty[$jsonRequest[https://api.leref.ga/functions/$noMentionMessage[1]?limit=1&page=1;data#RIGHT#0#LEFT#.name;$getObjectProperty[error]];name]
     $endif
     $addObjectProperty[https://sun9-37.userapi.com/impg/SuZlHrMLzMLrs1Z_EPTVxciSZ9db_I591Ix-MQ/j_vBAIIyBFI.jpg?size=937x720&quality=96&sign=0eba1fd70f1dd5577de9ae378db44cc9&type=album;error]
     $createObject[{}]
     $argsCheck[>1;Введи функцию мб]
     $botTyping
      `}
