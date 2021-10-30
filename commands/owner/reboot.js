module.exports = {
      name: "reboot",
aliases:['перезапуск', 'перезагрузка', 'reset', 'reload', 'restart', 'рестарт'],
      code: `
      $reboot
      $reply[$messageID;$randomText[<:OMEGALULiguess:797922459180466186>;https://tenor.com/view/change-da-world-my-final-message-goodbye-rat-gif-15029442;https://tenor.com/view/thanos-snap-rip-thanos-avengers-endgame-gif-14134497];no]
      $log[reboot от $userTag]
      $onlyForIDs[694849711437250581;<@!694849711437250581> дмитрий нагиев вызывает]`
}
