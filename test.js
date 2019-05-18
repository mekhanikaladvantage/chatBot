var request = require('request');
const http = require('http');
const port = process.env.PORT || 3000;

var slothFacts = [
	{"text":"Sloths are clumsy on land but are great swimmers."},
    {"text":"Sloths are arboreal animals, so they spend most of their time in trees."},
    {"text":"Contrary to their reputation, sloths only sleep about 10 hours a day."},
    {"text":"Algae grows on sloths fur, which camouflages them green."},
    {"text":"Sloths’ primary predators include eagles, snakes, and jaguars."},
    {"text":"Three-toed sloths can turn their heads almost 360 degrees."},
    {"text":"Sloths can live up to 40 years old."},
    {"text":"Sloths can move along the ground at just 6.5 ft per minute."},
    {"text":"Sloths can extend their tongues 10 to 12 inches out of their mouths."},
    {"text":"Three-toed sloths are diurnal which means they are most active during the day."},
    {"text":"It can sometimes take up to a month for sloths to digest a meal."}];
/*
request({
	url: "https://hooks.slack.com/services/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",
    method: "POST",
    json: true,
    body: {"text":"FuckSteven();"}
}, function (error, response, body){
    console.log(response);
});*/



const server = http.createServer((req, res) => {
	var content = req.body;
	console.log(content);

	var num = Math.floor(Math.random() * 11)
    var jSONMessage = slothFacts[num];

	request({
		url: "https://hooks.slack.com/services/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",
	    method: "POST",
	    json: true,
	    body: jSONMessage
	},

	function (error, response, body){
	    console.log(response);
	});

}).listen(port);


