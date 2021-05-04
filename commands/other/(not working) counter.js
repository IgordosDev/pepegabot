//module.exports = [{
    name: '$alwaysExecute',
    code: `
  $if[$djsEval[$message[1];yes]!=$sum[$getServerVar[counter];1]]
  $channelSendMessage[753673183298846730;{color:RED} {title:Неправильный счёт} {field:Удалённое сообщение:\`\`\`\n$message\n\`\`\`} {footer:$userTag}]
  $deletecommand
  $sendDM[$authorID;Прости, но твоё сообщение удалено из-за неправильного счёта. возможно какая-то ошибка, но я даже считаю примеры, а не только читаю цифру, поэтому думай сам. <:Okayge:816271601162649610>\nНу или возможно, что ты написал сперва не цифру, а какое-то слово, мб поэтому я удалил]
  $else
  $setServerVar[counter;$channelID/$sum[$splitText[2];1]]
  $endif
  $onlyIf[$splitText[1]==$channelID;]
  $onlyIf[$splitText[1]!=off;]
  $textSplit[$getServerVar[counter];/]`,
  }, {
    name: 'counter',
    code: `
  $if[$getServerVar[counter]!=off]
  $log[chatbot on by $userTag]
  Счётчик ✅
  $setServerVar[counter;$mentionedChannels[1]/$noMentionMessage[2]]
  $onlyIf[$noMentionMessage[2]!=;какой там последний счёт? укажи во втором аргументе]
  $onlyIf[$mentionedChannels[1]!=;укажи канал-счётчик <:trollgewait:811979642445234198>]
  $onlyIf[$hasRoles[$authorID;821236913725243412]==true;только модеры]
  $else
  $log[counter off by $userTag]
  $setServerVar[counter_channel;off]
  Счётчик ❎
  $endif
  `}]