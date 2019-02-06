require('dotenv').config();
const fs = require('fs');

const request = require('request');
const eachOfLimit = require('async/eachOfLimit');

const token = process.env.TOKEN;
const url = `https://slack.com/api/emoji.list?token=${token}`;
const directory = './static/';

const downloadEmoji = (item, key, callback) => {
    if (item.startsWith('alias:')) {
        callback();
    } else {
        console.log(`Downloading ${key}`)
        const r = request(item);
        r.on('response', (res) => {
            res.pipe(fs.createWriteStream(directory + key + '.' + res.headers['content-type'].split('/')[1]));
        });
        callback();
    }
}


request(url, (error, response, body) => {
    const res = JSON.parse(body);
    eachOfLimit(res.emoji, 5, downloadEmoji);
});