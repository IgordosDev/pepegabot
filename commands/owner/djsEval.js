module.exports = {
      name: "djsEval",
      code: `$log[djsEval от $userTag: $message]
      \`\`\`js\n$djsEval[$message;yes]\n\`\`\`
      $argsCheck[>1;Введи что-нибудь <:Pepega:779683581844521000><a:Clap:787284235152130118>]
      $onlyForIDs[694849711437250581;Только для <@!694849711437250581>. <:Okayge:816271601162649610>]`
}
