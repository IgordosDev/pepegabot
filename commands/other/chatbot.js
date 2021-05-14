module.exports = [{
  name: '$alwaysExecute',
  code: `$channelSendMessage[753673183298846730;{color:RED} {title:Ответ чат-бота} {field:Отправляемый текст API:\`\`\`\n$replaceText[$noMentionMessage; ;%20;-1]\n\`\`\`} {field:Ответ API:\`\`\`\n$jsonRequest[https://api.affiliateplus.xyz/api/chatbot?message=$replaceText[$noMentionMessage; ;%20;-1]&botname=Sophia&ownername=Igordos&user=$replaceText[$username; ;%20;-1];message;]\n\`\`\`} {footer:$userTag}]
$log[Chatbot reply "$jsonRequest[https://api.affiliateplus.xyz/api/chatbot?message=$replaceText[$noMentionMessage; ;%20;-1]&botname=Sophia&ownername=Igordos&user=$replaceText[$username; ;%20;-1];message;]" to "$replaceText[$noMentionMessage; ;%20;-1]" by $userTag]
$sendWebhook[$getServerVar[webhook_id];$getServerVar[webhook_token];$jsonRequest[https://api.affiliateplus.xyz/api/chatbot?message=$replaceText[$noMentionMessage; ;%20;-1]&botname=Sophia&ownername=Igordos&user=$replaceText[$username; ;%20;-1];message;] {author:$username:$authorAvatar} {description:$message} {color:$getRoleColor[$highestRole]}]
$botTyping
$onlyIf[$jsonRequest[https://api.affiliateplus.xyz/api/chatbot?message=$replaceText[$noMentionMessage; ;%20;-1]&botname=Sophia&ownername=Igordos&user=$replaceText[$username; ;%20;-1];message;]!=;]
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
$sendWebhook[$splitText[1];$splitText[2];Chatbot mode ✅\nПереводы могут быть неверны]
$setServerVar[chatbot_channel;$channelID]
$setServerVar[webhook_token;$splitText[2]]
$setServerVar[webhook_id;$splitText[1]]
  $textSplit[$createWebhook[$channelID;Sophia;https://media.wonderlandmagazine.com/uploads/2019/08/Sophia-the-Robot-portrait.jpg;yes;/];/]
$endif
$argsCheck[0;]`}]
