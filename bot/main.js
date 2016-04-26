'use strict';

const Fs = require('fs');
const TelegramBot = require('node-telegram-bot-api');
const Debug = require('debug')('main');

const token = 'xxx';
// Setup polling way
const bot = new TelegramBot(token, {polling: true});

// Matches /echo [whatever]
bot.onText(/\/echo (.+)/, function (msg, match) {
    Debug('onText msg->', msg);
    let fromId = msg.from.id;
    let resp = match[1];
    bot.sendMessage(fromId, resp);
});

// Any kind of message
bot.on('message', function (msg) {
    Debug('on message msg->', msg);
    let chatId = msg.chat.id;
    // photo can be: a file path, a stream or a Telegram file_id
    let photo = './assets/cat.jpg';
    let readStream = Fs.createReadStream(photo);
    bot.sendPhoto(chatId, photo, {caption: 'Lovely kittens', formData: readStream});
});