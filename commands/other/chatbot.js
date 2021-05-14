module.exports = [{
  name: '$alwaysExecute',
  code: `$log[Chatbot reply "$jsonRequest[https://api.affiliateplus.xyz/api/chatbot?message=$replaceText[$noMentionMessage; ;%20;-1]&botname=Sophia&ownername=Igordos&user=$replaceText[$username; ;%20;-1];message;]" to "$replaceText[$noMentionMessage; ;%20;-1]" by $userTag]
$channelSendMessage[753673183298846730;{title:Chatbot reply} {field:Запрашиваемый текст для API:\`\`\`fix\n$replaceText[$getObjectProperty[user_translate];%20; ;-1]\n\`\`\`:yes} {field:Оригинальное сообщение:\`\`\`fix\n$noMentionMessage\`\`\`:yes} {field:Переведённый ответ API:\`\`\`\n$getObjectProperty[chatbot_translate]\n\`\`\`:yes} {field:Оригинальный ответ API:\`\`\`fix\n$replaceText[$getObjectProperty[chatbot_reply];%20; ;-1]\n\`\`\`:yes} {footer:$userTag • $authorID:$authorAvatar};no]
$sendWebhook[$getServerVar[webhook_id];$getServerVar[webhook_token]; $/api/chatbot?message=$replaceText[$noMentionMessage;$getObjectProperty[chatbot_translate] {author:$username:$authorAvatar} {description:$message} {color:$getRoleColor[$highestRole]}]
$addObjectProperty[chatbot_translate;$jsonRequest[https://normal-api.ml/translate?text=$getObjectProperty[chatbot_reply]&to=ru;translated;Произошла ошибка в переводе ❌]]
$addObjectProperty[chatbot_reply;$replaceText[$jsonRequest[https://api.affiliateplus.xyz/api/chatbot?message=$getObjectProperty[user_translate]&botname=Sophia&ownername=Igordos&user=$getObjectProperty[username];message;]; ;%20;-1]]
$onlyIf[$jsonRequest[https://api.affiliateplus.xyz/api/chatbot?message=$getObjectProperty[user_translate]&botname=Sophia&ownername=Igordos&user=$getObjectProperty[username];message;]!=;]
$addObjectProperty[username;$replaceText[$username; ;%20;-1]]
$addObjectProperty[user_translate;$replaceText[$jsonRequest[https://normal-api.ml/translate?text=$replaceText[$noMentionMessage; ;%20;-1]&to=en;translated;say "an error occurred in the user's translation"]; ;%20;-1]]
$botTyping
$createObject[{}]
$onlyIf[$getServerVar[chatbot_channel]==$channelID;]
$onlyIf[$checkContains[$message[1];p!]==false;]
$onlyIf[$getServerVar[chatbot]==on;]`,
}, {
  name: 'chatbot',
  aliases: ['chat-bot'],
  code: `
$if[$getServerVar[chatbot]==on]
$log[chatbot off by $userTag]
$setServerVar[chatbot;off]
$deleteWebhook[$getServerVar[webhook_id];$getServerVar[webhook_token]]
$sendWebhook[$getServerVar[webhook_id];$getServerVar[webhook_token];Chatbot mode ❎]
$else
$log[chatbot on by $userTag]
$setServerVar[chatbot;on]
$sendWebhook[$splitText[1];$splitText[2];Chatbot mode ✅]
$setServerVar[chatbot_channel;$channelID]
$setServerVar[webhook_token;$splitText[2]]
$setServerVar[webhook_id;$splitText[1]]
  $textSplit[$createWebhook[$channelID;Sophia;https://media.wonderlandmagazine.com/uploads/2019/08/Sophia-the-Robot-portrait.jpg;yes;/];/]
$endif
$argsCheck[0;]`}]
