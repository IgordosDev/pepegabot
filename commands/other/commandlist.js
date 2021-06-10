module.exports = {
      name: "commandlist",
      code: `$log[commandlist от $userTag: $noMentionMessage[1]]
$title[$jsonRequest[https://api.leref.ga/functions/$noMentionMessage[1]?limit=1&page=1;data#RIGHT#0#LEFT#.name;https://sun9-37.userapi.com/impg/SuZlHrMLzMLrs1Z_EPTVxciSZ9db_I591Ix-MQ/j_vBAIIyBFI.jpg?size=937x720&quality=96&sign=0eba1fd70f1dd5577de9ae378db44cc9&type=album]]
     $description[\`\`\`\n$jsonRequest[https://api.leref.ga/functions/$noMentionMessage[1]?limit=1&page=1;data#RIGHT#0#LEFT#.desc;]\n\`\`\`]
     $addField[Usage:;\`\`\`\n$jsonRequest[https://api.leref.ga/functions/$noMentionMessage[1]?limit=1&page=1;data#RIGHT#0#LEFT#.usage;]\n\`\`\`;yes]
     $color[GREEN]
     $botTyping
      `}
