var fs = require("fs");
var raceid = 0
function Race(title, start, className, startLocation, city, organizer, orgLink, cap, bagCheck, theme) {
	this.title = title,
	this.start = start,
	this.end = start,
	allDay = true,
	this.raceid= raceid;
	this.url = "#/races/" + this.raceid,
	raceid ++;
	this.className = className,
	this.city = city,
	this.startLocation = startLocation,
	this.organizer = organizer,
	this.orgLink = orgLink,
	this.cap = cap,
	this.bagCheck = bagCheck,
	this.theme= theme,
	this.races = [],
	this.addRace = function(dist, startTime, limit, prices, swag) {
		var race = {
			distance: dist,
			startTime: startTime,
			timeLimit: limit,
			prices: prices,
			swag: swag

		}

		this.races.push(race);
	}


};

var build = {}
build.Race = Race;


module.exports = build;