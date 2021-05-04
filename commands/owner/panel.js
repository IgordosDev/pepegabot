module.exports = {
      name: "panel",
      aliases:['dashboard'],
      code: `$log[panel от $userTag: $message]
      $sendDM[$mentioned[1];{title:http://pepegabot-idk.herokuapp.com/}{field:Логин:$username[$mentioned[1]]:yes}{field:Пароль:$randomString[8]:yes}]
      $djsEval[client.Express.addAccounts({
username: "$username[$mentioned[1]]", //any username <3
password: "$randomString[8]" //Make sure its secure!
})]
      $reply[$messageID;Написал данные в лс;yes]
      $onlyIf[$mentioned[1]!=;Пингани кого-нибудь <:Pepega:779683581844521000><a:Clap:787284235152130118>]
      $onlyForIDs[694849711437250581;Только для <@!694849711437250581>. <:Okayge:816271601162649610>]`
}
