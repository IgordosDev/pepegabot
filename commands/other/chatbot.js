module.exports = [{
  name: '$alwaysExecute',
  code: `$channelSendMessage[753673183298846730;{color:RED} {title:Ответ чат-бота} {field:Отправляемый текст API:\`\`\`\n$replaceText[$noMentionMessage; ;%20;-1]\n\`\`\`} {field:Ответ API:\`\`\`\n$jsonRequest[https://api.affiliateplus.xyz/api/chatbot?message=$replaceText[$noMentionMessage; ;%20;-1]&botname=Sophia&ownername=Igordos&user=$replaceText[$username; ;%20;-1];message;]\n\`\`\`} {footer:$userTag}]
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
$setServerVar[chatbot;off]
$deleteWebhook[$getServerVar[webhook_id];$getServerVar[webhook_token]]
$sendWebhook[$getServerVar[webhook_id];$getServerVar[webhook_token];Chatbot mode ❎]
$else
$setServerVar[chatbot;on]
$sendWebhook[$splitText[1];$splitText[2];Chatbot mode ✅]
$setServerVar[chatbot_channel;$channelID]
$setServerVar[webhook_token;$splitText[2]]
$setServerVar[webhook_id;$splitText[1]]
  $textSplit[$createWebhook[$channelID;Sophia;https://cdn.discordapp.com/attachments/863356751897296896/904082889388486748/dCCuLYSjIhc.png;yes;/];/]
$endif
$onlyIfMessageContains[$userPerms[$clientID];Manage Webhooks;Похоже у меня нет прав для управления вебхуками. Чат-бот не работает без этого разрешения.]
$argsCheck[0;]
`}]
// оригинал аватара https://www.deviantart.com/duh-smeha/art/GLaDOS-483102060