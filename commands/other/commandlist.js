module.exports = {
      name: "commandlist",
      code: `$log[commandlist от $userTag: $noMentionMessage[1]]
      $title[$jsonRequest[https://api.leref.ga/functions/$noMentionMessage[1]?limit=1&page=1;data#RIGHT#0#LEFT#.name;Error]]
      $description[\`\`\`\n$jsonRequest[https://api.leref.ga/functions/$noMentionMessage[1]?limit=1&page=1;data#RIGHT#0#LEFT#.desc;Error]\n\`\`\`]
      $addField[Usage;\`\`\`\n$jsonRequest[https://api.leref.ga/functions/$noMentionMessage[1]?limit=1&page=1;data#RIGHT#0#LEFT#.usage;Error]\n\`\`\`;yes]
      $color[GREEN]
      $onlyIf[$jsonRequest[https://api.leref.ga/functions/$noMentionMessage[1]?limit=1&page=1;status;]!=400;{color:RED} {title:$jsonRequest[https://api.leref.ga/functions/$noMentionMessage[1]?limit=1&page=1;status;] $jsonRequest[https://api.leref.ga/functions/$noMentionMessage[1]?limit=1&page=1;statusText;]} {description:$jsonRequest[https://api.leref.ga/functions/$noMentionMessage[1]?limit=1&page=1;message;]}]
      $botTyping
      `}
