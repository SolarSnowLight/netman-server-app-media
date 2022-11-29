//*******************************************************
// Константы маршрутов для серверной части приложения
//*******************************************************

const config = require("config");

const address_config = {
    // Загрузка на сервер видеоотчёта команды
    media_upload: '/media/upload',     
    m_upload: '/upload',

    // Скачивание с сервера видеоотчёта команды
    media_download: '/media/download',
    m_download: '/download',

    // Скачивание с сервера инструкции того, что команда должна сделать
    media_instructions_download: '/media/instructions/download', 
    m_instructions_download: '/instructions/download',

    // Загрузка пользовательских изображений на сервер
    users_icons_upload: '/users/icons/upload',
    u_icons_upload: '/icons/upload',

    // Скачивание пользовательских изображений с сервера
    users_icons_download: '/users/icons/download',
    u_icons_download: '/icons/download',

    // Скачивание изображений игроков в команде с сервера
    users_team_players_icons_download: '/users/team/players/icons/download',
    u_team_players_icons_download: '/team/players/icons/download',

    cs_sequrity_token: 'http://' + config.get("central_server_ip") + "/sequrity/token",
    cs_sequrity_exists: 'http://' + config.get("central_server_ip") + "/sequrity/exists",

    media_download_name: '/media/download/:name',
    m_download_name: '/download/:name',

    media_download_stats_instructions: '/media/download/stats/instructions',
    m_download_stats_instructions: '/download/stats/instructions'
};

module.exports.address_config = address_config;