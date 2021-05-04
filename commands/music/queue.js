module.exports = ({
    name: "queue",
    code: `$log[Queue от $userTag]
    $if[$queueLength>10]
    $title[Количество треков в очереди: $queueLength]
    $else
    $endif
    $description[$queue[1;10;**{number}**. [{title}]({url}) (<@!{userID}>)]]
    $footer[Команду вызвал $username[$authorID];$authorAvatar]
    $onlyIf[$queueLength>0;Очередь пуста <:Pepega:779683581844521000>]
    `
    });