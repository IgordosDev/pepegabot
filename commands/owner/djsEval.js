module.exports = {
      name: "djsEval",
      code: `$log[djsEval от $userTag: $message]
      \`\`\`js\n$djsEval[$message;yes]\n\`\`\`
      $argsCheck[>1;введи код js для выполнения]
      $onlyForIDs[$botOwnerID[;];]`
};