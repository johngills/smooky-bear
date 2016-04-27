'use strict';

const Debug = require('debug')('help');

const help = (msg, bot) => {
    Debug('onText msg->', msg);
    let fromId = msg.from.id;
    let resp = `Smooky

Commands List:
/help - Show bot commands help
/lunch - Start lunch poll
this is help

    `;
    bot.sendMessage(fromId, resp);
};

module.exports = help;