const moment = require('moment');

const currentDate = moment();
console.log(currentDate.format('dddd, MMMM Do YYYY'));

const pastDate = moment('1976-11-26', 'YYYY-MM-DD');
const yearsSince = currentDate.diff(pastDate, 'years');
console.log(`${yearsSince} years ago`);

