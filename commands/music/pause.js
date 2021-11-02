module.exports = ({
    name: "pause",
    aliases: ['resume'],
    code: `
    $if[$getServerVar[pause]==0]
    $setServerVar[pause;1]
    $pauseSong
    Плеер поставлен на паузу
    $else
    $setServerVar[pause;0]
    $resumeSong
    Плеер снят с паузы
    $endif
    $onlyIf[$songInfo[title]!=songError: Nothing is being played;Сейчас ничего не играет]
    $onlyIf[$voiceID!=;Зайди в войс]
    $onlyIf[$voiceID==$voiceID[$clientID];Либо ты в другом войсе, либо тебя вообще в войсе нет]
    `});