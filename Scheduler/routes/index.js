var express = require('express');
var router = express.Router();

var test = [
	{ 
		titleCode: "CS 106A",
		quarter: false,
		databaseId: 1
	}, {
		titleCode: "CS 106B",
		quarter: "winter1",
		databaseId: 2
	}, {
		titleCode: "MATH 52",
		quarter: false,
		databaseId: 3
	}];

router.post('/data/schedule', function(req, res){
	res.send('Received post request');
	test = req.body.schedule;
});

router.get('/data/schedule/', function(req, res) {
	res.send({data:test});
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Page1' });
});

router.get('/courses/:major', function(req, res) {
	res.render('pick-classes-view', {title: 'Page2', major: req.params.major});
});

router.get('/schedule', function(req, res) {
	res.render('scheduling', {title: 'Schedule'});
});

router.get('/data/major_info', function(req, res) {
	res.json(req.session.major);
});



module.exports = router;


//HOW TO REDIRECT
// router.post('/major', function(req, res) {
// 	res.redirect("/courses/" + req.body.major);
// });