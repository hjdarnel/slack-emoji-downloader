# slack-emoji-downloader
downloads all slack emojis given a token

currently zips and [uploads to S3](https://s3.us-east-2.amazonaws.com/sp-emoji/emojis.tar.gz), also stores in circleCI artifacts on a weekly cron

requires .env like ```TOKEN=TOKEN=xoxp-1986759103-...```

run with `npm start`
