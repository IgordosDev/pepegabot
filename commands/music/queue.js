module.exports = ({
    name: "queue",
    code: `
    $if[$queueLength>10]
    $title[Количество треков в очереди: $queueLength]
    $else
    $endif
    $description[$queue[1;10;**{number}**. [{title}]({url}) (<@!{userID}>)]]
    $footer[Команду вызвал $username[$authorID];$authorAvatar]
    $onlyIf[$queueLength>1;Очередь пуста]
    `
    });