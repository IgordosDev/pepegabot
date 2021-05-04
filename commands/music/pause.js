module.exports = ({
    name: "pause",
    aliases: ['resume'],
    code: `$log[Pause от $userTag]
    $if[$getServerVar[pause]==0]
    $setServerVar[pause;1]
    $pauseSong
    Плеер поставлен на паузу <:Okayge:816271601162649610><a:TeaTime:782163966168137728>
    $else
    $setServerVar[pause;0]
    $resumeSong
    Плеер снят с паузы <a:pepegaJAM:753708890188808393>
    $endif
    `
    });