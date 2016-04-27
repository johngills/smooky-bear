'use strict';

const Debug = require('debug')('lunch');

const lunch = (msg, bot) => {
    Debug('onText msg->', msg);
    let fromId = msg.from.id;
    let resp = `
this is lunch

    `;
    bot.sendMessage(fromId, resp);
};

module.exports = lunch;