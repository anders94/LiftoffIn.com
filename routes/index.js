const moment = require('moment');
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/about', function(req, res, next) {
  res.render('about');
});
router.post('/', function(req, res, next) {
    const { message, date } = req.body;
    if (date) {
	const parsed = moment(date, "YYYY-MM-DD HH:mm:ss");
	if (parsed.isValid()) {
	    const uri = parsed.format('/YYYY/MM/DD/HH/mm/ss/');
	    res.redirect(uri + encodeURIComponent(message));
	}
	else
	    res.render('error', {
		message: 'Whoops!',
		error: {
		    status:'That doesn\'t look like a valid date.'
		}
	    });
	
    }
    else
	res.render('error', {
	    message: 'Whoops!',
	    error: {
		status:'I didn\'t get the variables I was expecting.'
	    }
	});
});

router.get('/:year/:month/:day/:hour/:minute/:second/:message', function(req, res, next) {
    const { year, month, day, hour, minute, second, message } = req.params;

    if (!Number.isInteger(year) ||
	!Number.isInteger(month) ||
	!Number.isInteger(day) ||
	!Number.isInteger(hour) ||
	!Number.isInteger(minute) ||
	!Number.isInteger(second))
	res.render('display', {
	    year: year,
	    month: month,
	    day: day,
	    hour: hour,
	    minute: minute,
	    second: second,
	    message: message
	});
    else
	res.render('error', {
	    message: 'Whoops!',
	    error: {
		status:'The URL you are using should be just integers.'
	    }
	});
});

module.exports = router;
