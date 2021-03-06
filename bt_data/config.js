var settings = {}

// Database Config
settings.dbinfo = {}

settings.dbinfo._dir = "./db/";

settings.dbinfo.user = {};
settings.dbinfo.user.path = 'users.db';
settings.dbinfo.user.aci = 1000 * 60 * 5;

settings.dbinfo.playlist = {};
settings.dbinfo.playlist.path = 'playlist.db';
settings.dbinfo.playlist.aci = 1000 * 60 * 5;

settings.dbinfo.video = {};
settings.dbinfo.video.path = 'videos.db';
settings.dbinfo.video.aci = 1000 * 60 * 5;

module.exports = settings;
