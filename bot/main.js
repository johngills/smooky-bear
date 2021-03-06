'use strict';

const Fs = require('fs');
const TelegramBot = require('node-telegram-bot-api');
const Debug = require('debug')('main');
const Env = require('node-env-file');

const commands = require('./commands');

Env('./.env');

const token = process.env.TELEGRAM_API_TOKEN;
// Setup polling way
const bot = new TelegramBot(token, {polling: true});

// Matches /help
bot.onText(/\/help/, function (msg) {
    commands.help(msg, bot);
});

// Matches /lunch
bot.onText(/\/lunch/, function (msg) {
    commands.lunch(msg, bot);
});



// Any kind of message
// bot.on('message', function (msg) {
//     Debug('on message msg->', msg);
//     let chatId = msg.chat.id;
//     // photo can be: a file path, a stream or a Telegram file_id
//     let photo = './assets/cat.jpg';
//     let readStream = Fs.createReadStream(photo);
//     bot.sendPhoto(chatId, photo, {caption: 'Lovely kittens', formData: readStream});
// });