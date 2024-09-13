const moment = require('moment');

function getDate() {
    const now = moment().format('YYYY/MM/DD HH:mm:ss');
    console.log(now);
}

getDate();
