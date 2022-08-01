/* module.exports = {
    name: "lfm",
    aliases: ['lastfm'],
    code: `
    $if[$getObjectProperty[artist]==фейл]
    $title[$jsonRequest[$getObjectProperty[link-artist];artist.name;];$jsonRequest[$getObjectProperty[link-artist];artist.url;]]
    $thumbnail[$jsonRequest[$getObjectProperty[link-artist];artist.image[5].#text;]]
    $addField[Слушателей:;$jsonRequest[$getObjectProperty[link-artist];artist.stats.listeners;];yes]
    $addField[Проигрываний:;$jsonRequest[$getObjectProperty[link-artist];artist.stats.playcount;];yes]
    $description[$jsonRequest[$getObjectProperty[link-artist];artist.bio.summary;]]
    $else
    $title[$jsonRequest[$getObjectProperty[link-user];user.name;];$jsonRequest[$getObjectProperty[link-user];user.url]]
    $thumbnail[$replaceText[$jsonRequest[$getObjectProperty[link-user];user.image[3].#text;];.png;.gif;1]]
    $addField[Треков прослушано:;$jsonRequest[$getObjectProperty[link-user];user.playcount;];yes]
    $addField[$replaceText[$replaceText[$jsonRequest[$getObjectProperty[link-user-track];recenttracks.track[0].@attr.nowplaying;false];true;Сейчас играет:;1];false;Последний трек:;1];[$jsonRequest[$getObjectProperty[link-user-track];recenttracks.track[0].artist.#text;] — $jsonRequest[$getObjectProperty[link-user-track];recenttracks.track[0].name;]]($jsonRequest[$getObjectProperty[link-user-track];recenttracks.track[0].url;]);no]
    $footer[$jsonRequest[$getObjectProperty[link-user];user.country;] • Зарегистрирован]
    $timestamp[$jsonRequest[$getObjectProperty[link-user];user.registered.unixtime]]
    $endIf
    $addObjectProperty[artist;$jsonRequest[http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&api_key=${process.env.lastfm}&artist=$replaceText[$message; ;_;]&autocorrect=1&limit=1&format=json;artist;фейл]]
    $addObjectProperty[link-artist;http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&api_key=${process.env.lastfm}&artist=$replaceText[$message; ;_;]&autocorrect=1&limit=1&format=json]
    $addObjectProperty[link-user;http://ws.audioscrobbler.com/2.0/?method=user.getInfo&api_key=${process.env.lastfm}&user=$replaceText[$message; ;_;]&format=json]
    $addObjectProperty[link-user-track;http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&api_key=${process.env.lastfm}&user=$replaceText[$message; ;_;]&limit=1&format=json]
    $createObject[{}]
    $onlyIf[$message[1]!=;Приведи юзернейм или имя исполнителя]
    `} */