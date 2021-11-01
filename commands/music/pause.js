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
    `});