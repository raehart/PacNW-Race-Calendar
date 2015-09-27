var build = require("./build.js");
var fs = require("fs");
var race = build.Race;
var raceArr= [];
//2015
//October 2015 Races

var Microsoft15 = new race("Microsoft 5k", "2015-10-02", "r5k", "Redmond, WA", "Microsoft Main Campus Sports Field", "Active Events", "http://www.active.com/redmond-wa/running/distance-running-races/microsoft-5k-run-walk-and-after-party-2015?cmp=39-34-156210&ltcmp=254301&ltclickid=09_42732409_2e5a67f0-99eb-4b3e-b109-3a3b8ba447c0&cmp=39-34", "", "Yes", "");

		Microsoft15.addRace("5k VIP", "2pm", "unknown", ["Indivdual: $100"], ["shirt", "drawstring bag", "food", "drinks"]);
		Microsoft15.addRace("5k Adult", "2pm", "unknown", ["Indivdual: $55"], ["food", "drinks"]);
		Microsoft15.addRace("5k Youth (18 and under)", "2pm", "unknown", ["Indivdual: $0"], ["none"]);
		Microsoft15.addRace("5k Vitural", "2pm", "none", ["Indivdual: $55"], ["bib"]);
raceArr.push(Microsoft15);

var booDash15 = new race("Boo Dash", "2015-10-03", "r5k", "Federal Way, WA", "Wild Waves Theme Park", "American Cancer Society", "http://www.eventbrite.com/e/boo-dash-at-wild-waves-tickets-17877030680", "", "", "Halloween");
	booDash15.addRace("5k", "3pm", "", ["Early Bird- until 9/16: $35", "Regular Price- after 9/16: $50"], ["admission to wild waves theme park & fright fest", "glow in the dark partcipant medal", "after party"]);
	raceArr.push(booDash15);

var mugsAndPugs15 =new race("Mugs and Pugs \(Dog Friendly Event\)", "2015-10-03", "r5k", "Graham, WA", "Graham-Kapowsin High School", "rainierfamilypt", "http://rainierfamilypt.com/mugsandpugs/", "", "", "");
	mugsAndPugs15.addRace("5k Adult", "11am", "", ["$30"], [""]);
	mugsAndPugs15.addRace("5k Youth Ages 18 & Under", "11am", "", ["$20"], [""]);
	raceArr.push(mugsAndPugs15);

var pdxMarathon15= new race("Portland Maratahon", "2015-10-04", "full", "Portland, OR", "SW 4th and Taylor", "Portland Marathon", "http://portlandmarathon.org/", "", "No", "");

		pdxMarathon15.addRace("Half", "7am", "4hrs", ["Charity: $250"], ["long sleeved shirt", "finisher medal", "collectible coin", "pendant", "event poster", "portland rose", "tree seedling", "disposible cover up jacket", "bag", "food", "drinks", "live entertainment"]);

		pdxMarathon15.addRace("Full", "7am", "8hrs", ["Indivdual: $145"], ["long sleeved shirt", "finisher medal", "collectible coin", "pendant", "event poster", "portland rose", "tree seedling", "disposible cover up jacket", "bag", "food", "drinks", "live entertainment"]);

	raceArr.push(pdxMarathon15);

var eugeneRaceForTheCure15 = new race("Race for the Cure", "2015-10-04", "r5k", "Eugene, OR", "Valley River Center", "Susan G. Komen Foundation", "http://race.komenoregon.org/site/TR?fr_id=1281&pg=entry", "", "", "");
	eugeneRaceForTheCure15.addRace("5k Survivor", "8:30am", "", ["6/1-6/30: $25", "7/1-10/4: $30"], ["shirt", "pin"]);
	eugeneRaceForTheCure15.addRace("5k Adult", "8:30am", "", ["6/1-6/30: $30", "7/1-9/27: $35"], ["shirt"]);
	eugeneRaceForTheCure15.addRace("5k Children Ages 5-12", "8:30am", "", ["6/1-6/30: $5", "7/1-10/4: $10"], [""]);
	eugeneRaceForTheCure15.addRace("5k Kids Ages 4 & Under", "8:30am", "", ["$0"], [""]);
	eugeneRaceForTheCure15.addRace("1k Family Walk Survivor", "8:45am", "", ["6/1-6/30: $30", "7/1-9/27: $35"], ["shirt", "pin"]);
	eugeneRaceForTheCure15.addRace("1k Family Walk Adult", "8:45am", "", ["6/1-6/30: $30", "7/1-9/27: $35"], ["shirt"]);
	eugeneRaceForTheCure15.addRace("1k Family Walk Children Ages 5-12", "8:45am", "", ["6/1-6/30: $5", "7/1-10/4: $10"], [""]);
	eugeneRaceForTheCure15.addRace("1k Family Walk Children Kids Ages 4 & Under", "8:45am", "", ["$0"], [""]);

	raceArr.push(eugeneRaceForTheCure15);

var stepsToSafety15 = new race("Steps to Safety", "2015-10-10", "r10k", "Salem, OR", "Department of Public Safety: Standards and Training", "Eclectic Edge Racing", "http://www.mcdvcouncil.org/home.html", "", "", "");

	stepsToSafety15.addRace("5k", "9:30am", "" ["$30 \(Online Registration Ends 10/07\)"], ["shirt", "food", "drinks"]);
	stepsToSafety15.addRace("10k: Runners Only", "9am", "", ["$30 \(Online Registration Ends 10/07\)"], ["shirt ", "food ", "drinks"]);


	raceArr.push(stepsToSafety15);

var crabFest15 = new race("CrabFest 5k", "2015-10-10", "r5k", "Sequim, WA", "Dungeness Crab & Seafood Festival", "http://www.crabfestival.org/crab-fest-5k-runwalkscuttle/", "", "", "");

	crabFest15.addRace("5k", "11am", "", ["Until 9/30: $30", "10/1 – 10/10: $34"], ["shirt", "$4 discount coupon for crab dinner", "Beer/Wine/Soda", "Free Crab Derby Run"]);

	raceArr.push(crabFest15);

var monsterDash15 = new race("Monster Dash", "2015-10-10", "r10k", "St Helens, OR", "Columbia View Park", "Rotary Club of Columbia County", "http://www.sthelensmonsterdash.com/", "", "no", "Halloween/Run for Your Life/Zombies");

	monsterDash15.addRace("5k", "5pm", "", ["Before 9/15: $30", "9/16 – 10/1: $35 \(shirt not guaranteed\)",  "10/2 – 10/10: $40 \(shirt not guaranteed\)"], ["shirt", "food", "drinks"]);
	monsterDash15.addRace("10k", "5pm", "", ["Before 9/15: $40", "9/16 – 10/1: $45 \(shirt not guaranteed\)", "10/2 – 10/10: $50 \(shirt not guaranteed\)"], ["shirt", "food", "drinks"]);
	monsterDash15.addRace("Monster Mile", "5pm", "", ["$5"], ["food", "drinks"]);

	 raceArr.push(monsterDash15);


var girlfriends15 = new race("Girlfriends Run for a Cure Half & Quater Marathon", "2015-10-11", "half", "Vancouver, WA", "Northwest Personal Training 1011 Broadway", "Why Racing Events", "http://whyracingevents.com/event/693/" , "", "yes", "");
		girlfriends15.addRace("Quater", "9am", "", ["$80"], ["shirt", "finisher's necklace presented by a fireman", "food", "drinks", "chocolate", "massage", "chiropractic treatment", "stretching session", "acupuncture treatment"]);
		girlfriends15.addRace("Half", "9am", "4.5hrs", ["$80"], ["shirt", "finisher's necklace presented by a fireman", "food", "drinks", "chocolate", "massage", "chiropractic treatment", "stretching session", "acupuncture treatment"]);
		girlfriends15.addRace("Kids Mini-Marathon \(1.1 miles\)", "12:15pm", "", ["$30"], ["shirt", "goody bag", "medal"]);
	raceArr.push(girlfriends15);

var greatColumbiaCrossing15 = new race("The Great Columbia Crossing","2015-10-11","r10k","Astoria, OR", "Dismal Nitch, WA","Astoria Warrenton Area Chamber of Commerce","http://www.greatcolumbiacrossing.com/","3,500","yes","");

	greatColumbiaCrossing15.addRace("10k Run/Competitive Walk \(Timed\)","Runners: 8:45am,  Walkers: 9:00am","2hrs", ["$45"], ["shuttle bus service to start of race from the Port of Astoria (OR) or the Port of Chinook (WA)","light snacks" ," 5 Clam Bucks"]);
	greatColumbiaCrossing15.addRace("10k Walk \(untimed\) ","9am","2hrs", ["$40"], 
		["shuttle bus service to start of race from the Port of Astoria (OR) or the Port of Chinook (WA)","light snacks" , "5 Clam Bucks"]);
	raceArr.push(greatColumbiaCrossing15);

var stageCoach15 = new race("Stagecoach Run", "2015-10-17", "r10k", "Jacksonville, OR", "Oregon St. and West D St.", "Southern Oregon Runners", "https://secure.getmeregistered.com/get_information.php?event_id=122284", "", "", "");
	//raceName.addRace("dist", "startTime", limit, [prices], [swag]);
	stageCoach15.addRace("10k Adult SOR Members", "8:30am", "", ["Before 10/14: $12", "10/14-10/17: $20"], [""]);
	stageCoach15.addRace("10k Adult Non-SOR Members", "8:30am", "", ["Before 10/14: $17", "10/14-10/17: $20"], [""]);
	stageCoach15.addRace("10k Youth Ages 18 & Under", "8:30am", "", ["Before 10/14: $7", "10/14-10/17: $20"], [""]);
	stageCoach15.addRace("5k Adult SOR Members", "", "8:30am", ["Before 10/14: $12", "10/14-10/17: $20"], [""]);
	stageCoach15.addRace("5k Adult Non-SOR Members", "8:30am", "", ["Before 10/14: $17", "10/14-10/17: $20"], [""]);
	stageCoach15.addRace("5k Youth Ages 18 & Under", "8:30am", "", ["Before 10/14: $7", "10/14-10/17: $20"], [""]);
	
	raceArr.push(stageCoach15);

var bayToBrews15 = new race("Bays to Brews", "2015-10-17", "half",  "Newport, OR", "Rogue Ales & Spirits", "Run with Palua Events", "http://runwithpaula.com/bay-to-brews-half-marathon-10k/", "", "", "");

	bayToBrews15.addRace("10k", "8am", "", ["Until 10/16: $49", "Race Day: $65  /(shirt not guaranteed/)"], ["shirt ", "finisher medal ", "beer ", "food ", "live music"]);

	bayToBrews15.addRace("Half", "8am", "", ["Until 10/16: $75", "Race Day: $90  /(shirt not guaranteed/)"], ["shirt ", "finisher medal ", "beer ", "food ", "live music"]);

	raceArr.push(bayToBrews15);



var  lakePaddenTrailHalf15 = new race("Lake Padden Trail Half Marathon", "2015-10-17", "half", "Bellingham, WA", "Lake Padden Park East Entrance" , "Lake Padden Trail Half", "http://www.lakepaddentrailhalf.org/", "", "", "");

	lakePaddenTrailHalf15.addRace("5k", "9am", "", ["$25"],["food", "drink", "post race party"]);

	lakePaddenTrailHalf15.addRace("Half", "10am", "4hrs", ["Until 9/30 $45", "After 9/30 $65"], ["food", "drink", "post race party"]);

	raceArr.push(lakePaddenTrailHalf15);

dawgDash15 = new race("Dawg Dash", "2015-10-18", "r10k", "Seattle, WA", "Red Square on UW Campus",  "University of Washington", "http://depts.washington.edu/alumni/blogs/dawgdash/races/seattle/", "", "yes", "");

	dawgDash15.addRace("5k Student - Dog Friendly \(Student ID number required\)", "9am", "", ["Until 10/17: $20"], ["shirt", "food", "drinks", "entertainment"]);
	dawgDash15.addRace("5k UWAA & UWRA Members - Dog Friendly \(UWAA number required\)", "9am", "", ["Until 09/30: $25", "10/1 – 10/17: $30"], ["shirt", "food", "drinks", "entertainment"]);
	dawgDash15.addRace("5k  Faculty & Staff -Dog Friendly \(Faculty/Staff ID number required\)",  "9am", "",["Until 09/30: $25", "10/1 – 10/17: $30"],["shirt", "food", "drinks", "entertainment"]);
	dawgDash15.addRace("5k Public -Dog Friendly ", "9am", "", ["Until 10/17: $35"],["shirt", "food", "drinks", "entertainment"]);
	dawgDash15.addRace("10k Student - Dog Friendly \(Student ID number required\)", "9:20am", "", ["Until 10/17: $25"], ["shirt", "food", "drinks", "entertainment"]);
	dawgDash15.addRace("10k UWAA & UWRA Members  - Dog Friendly \(UWAA number required\)", "9:20am", "", ["Until 09/30: $30", "10/1 – 10/17: $35"],["shirt", "food", "drinks", "entertainment"]);
	dawgDash15.addRace("10k  Faculty & Staff -Dog Friendly \(Faculty/Staff ID number required\)",  "", "9am", "", ["Until 09/30: $30", "10/1 – 10/17: $35"],["shirt", "food", "drinks", "entertainment"]);
	dawgDash15.addRace("10k Public - Dog Friendly", "9:20am", "", ["Until 10/17:  $40"], ["shirt", "food", "drinks", "entertainment"]);
	dawgDash15.addRace("Husky Pups Run -Kids Dash – Ages 10 & Under", "10:30am", "", ["$0"], ["ribbon", "food"]);
	raceArr.push("dawgDash15");
sekaniTrailRun15 = new race ("Sekani Trail Run", "2015-10-18",  "r10k", "Spokane, WA", "Camp Sekani Park", "Sekani Trail Run", "http://sekanitrailrun.com/", "", "", "Trail Run");

	sekaniTrailRun15.addRace("5k", "10am", "", ["Until 10/9: $20", "Race Day: $25"], ["caramel apple", "cider"]);
	sekaniTrailRun15.addRace("10k", "10:25am", "", ["Until 10/9: $20", "Race Day: $25"], ["caramel apple", "cider"]);
	sekaniTrailRun15.addRace("Running Kids 1k – Ages 12 & Under", "9:40am", "", ["$0"], ["caramel apple", "cider"]);

raceArr.push(sekaniTrailRun15);


 

dirtyDuck15 = new race("Dirty Duck", "2015-24-15", "r5k", "Eugene, OR", "University of Oregon", "Dirty Duck",  "http://dirtyduck5k.com/", "2,500",  "", "feather & color run");
	
	dirtyDuck15.addRace("5k Adult", "10am", "", ["Until 9/30: $45", "9/30-10/22: $50"], ["sunglasses", "snacks", "after party"]);
	dirtyDuck15.addRace("5k Youth – Ages 6-14", "10am", "", ["Until 10/22: $15"], ["sunglasses", "snacks", "after party"] );
	dirtyDuck15.addRace("5k Kids – Ages 5 & under", "10am",  "", ["$0"], ["sunglasses", "snacks", "after party"] );
	
raceArr.push(dirtyDuck15);




var happyGirlsSisters15 = new race("Happy Girls Run – Sisters", "2015-10-24", "half", "Sisters, OR",  "Five Pine Lodge Campus", "Lay It Out Events", "http://happygirlsrunsisters.com/race-info/event-schedule/", "", "", "trail run \(half only\)");

	happyGirlsSisters15.addRace("5k", "9:30am", "", ["8/25-9/24: $35", "9/25-10/22: $40"], ["shirt", "swag bag", "drinks", "food"]);

	happyGirlsSisters15.addRace("Half", "9am", "4hrs", ["8/25-9/24: $85" , "9/25-10/22: $90"], ["commemorative belt buckle", "shirt", "swag bag", "drinks", "food"]);

	raceArr.push(happyGirlsSisters15);


var columbiaGorge15 = new race("Columbia Gorge Marathon & Half", "2015-10-25", "full", "Hood River, OR", "Mark O. Hatfield West Trailhead", "Breakaway Promotions LLC", "http://www.columbiagorgemarathon.com/", "1500", "yes", ""); 

	columbiaGorge15.addRace("Half", "9:30am,  \(Early Start: All competitors who believe they will be on course longer than six hours are welcome to be at the start line at 8am and we will have an official start for you!\)", "", ["Before 1/1: $70" ," Before  4/1: $75 ", "Before: 10/1: $85 ", "After 10/1: $100 ", "**No Race Day Registration**"], ["beanie ", "gear check bag ", "ceramic finisher medal ", "food", "beer", "hot apple cider"]);

	columbiaGorge15.addRace("Dog Leg Half Marathon \(Dog Friendly\)", "9:30am", "", ["Before 1/1: $80" , "Before  4/1:  $85" , "Before: 10/1: $90" , "After 10/1: $110 ", "**No Race Day Registration**"], ["beanie ", "gear check bag ", "ceramic finisher medal ", "food", "beer", "hot apple cider"]);

	columbiaGorge15.addRace("2 Person Half Relay", "9:30am \(Early Start: All competitors who believe they will be on course longer than six hours are welcome to be at the start line at 8am and we will have an official start for you!\)", "",["Before 1/1:  $85 ", "Before  4/1: $90  ", "Before: 10/1: $100 ",  "After 10/1: $115 ", "**No Race Day Registration** "], ["beanie ", "gear check bag ", "ceramic finisher medal ", "food", "beer", "hot apple cider"]);

	columbiaGorge15.addRace("Full", "9:00am \(Early Start: All competitors who believe they will be on course longer than six hours are welcome to be at the start line at 8am and we will have an official start for you!\)", "",["Before 1/1:  $85" , "Before  4/1:  $90" , "Before: 10/1: $100 ", "After 10/1: $115  ", "**No Race Day Registration** "], ["beanie ", "gear check bag ", "ceramic finisher medal ", "food", "beer", "hot apple cider"]);

	raceArr.push(columbiaGorge15);

	
var runLikeHell15 = new race("Run Like Hell", "2015-10-25", "half","Portland, OR", "Pioneer Courthouse Square", "Terrapin Events", "http://terrapinevents.com/event/run-like-hell-portland-half-marathon/", 5000, "Yes", "Halloween/Under the Big Top" );

		runLikeHell15.addRace("5k", "TBA", "3.5hrs", ["Tier 1: First 100 Registrants: $35", "Tier 2: $39", "Tier 3: $45", "Race Weekend: $49"],["shirt", "beer", "food", "live music"]);
		runLikeHell15.addRace("10k", "TBA", "3.5hrs",["Tier 1: First 100 Registrants: $39", "Tier 2: $45", "Tier 3: $49", "Race Weekend: $54"], ["shirt", "beer", "food", "live music"]);
		runLikeHell15.addRace("Half", "TBA", "15min/mi", ["Tier 1: First 100 Registrants: $79", "Tier 2: $89", "Tier 3: $99", "Race Weekend: $109"], ["finisher medal", "shirt", "beer", "food", "live music"]);
		runLikeHell15.addRace("Kid's Half Miler", "TBA", "N/A", ["Tier 1: $8", "Race Weekend: $12"],  ["food", "live music"]);

	raceArr.push(runLikeHell15);

var ashlandMonsterDash15 = new race("Monster Dash", "2015-10-31", "r10k", "Ashland, OR", "Ashland Schools Foundation", "http://www.ashlandmonsterdash.com/", "", "", "Halloween");

	ashlandMonsterDash15.addRace("Youth 1 Mile Fun Run Ages: 18 & Under", "10:30am", "", ["$10"], ["finisher medal"] );

	ashlandMonsterDash15.addRace("Adult 1 Mile Fun Run", "10:30am", "", ["Before 10/30: $15 ", "Race Weekend: $20"], [""]);

	ashlandMonsterDash15.addRace("Youth 5k Ages: 18 & Under", "11:15am", "", ["$10"], ["finisher medal"] );

		ashlandMonsterDash15.addRace("Adult 5k", "11:15am", "", [" Before 10/12: $20",  " Before 10/29: $25", " Race Weekend: $30"], [""]);

	ashlandMonsterDash15.addRace("Youth 10k Ages: 18 & Under", "11:15am", "", ["$10"], ["finisher medal"] );

		ashlandMonsterDash15.addRace("Adult 10k", "11:15am", "",["Before 10/12: $20",  " Before 10/29: $25", " Race Weekend: $30"], [""]);


	raceArr.push(ashlandMonsterDash15);



//November 2015 Races

var purpleStride15 = new race("PurpleStride Puget Sound", "2015-11-01", "r5k", "Seattle, WA", "Magnuson Park - Hangar 30", "Pancreatic Cancer Action Network", "http://purplestride.kintera.org/faf/home/default.asp?ievent=1136780&lis=1&kntae1136780=1F3F5806E8AC432DA54E18145E426A6C", "", "", "");

		purpleStride15.addRace("5K Survivor", "Opening Ceremonies 9:10am, Race 9:30am", "", ["Pre-Event: $0", "Race Day: $0"], ["shirt"]);
		purpleStride15.addRace("5K Adult Timed", "Opening Ceremonies 9:10am, Race 9:30am", "", ["Pre-Event: $30", "Race Day: $35"], ["shirt"]);
		purpleStride15.addRace("5K Adult Untimed", "Opening Ceremonies 9:10am, Race 9:30am", "", ["Pre-Event: $25", "Race Day: $30"], ["shirt"]);
		purpleStride15.addRace("5K Youth Timed (Ages 3-12)", "Opening Ceremonies 9:10am, Race 9:30am", "", ["Pre-Event: $15", "Race Day: $20"], ["shirt"]);
		purpleStride15.addRace("5K Youth Untimed (Ages 3-12)", "Opening Ceremonies 9:10am, Race 9:30am", "", ["Pre-Event: $10", "Race Day: $15"], ["shirt"]);
		purpleStride15.addRace("5K Vitrual Strider", "Opening Ceremonies 9:10am, Race 9:30am", "", ["Pre-Event: $0", "Race Day: N/A"], [""]);
		
	raceArr.push(purpleStride15);

var runWithTheDuck15 = new race ("Run with the Duck", "2015-11-08", "r5k", "Eugene, OR", "Riverfront Field - south side of Autzen Footbridge", "University of Oregon: Healthy Oregon", "http://healthyoregon.uoregon.edu/Events/duckrun.aspx?q=DuckRun", "500", "", "");
	runWithTheDuck15.addRace("5k", "10am", "", ["UO Students, Faculty, Staff, Alumni & Family Members: $0", "$15 Community Members"], ["shirt"]);
	runWithTheDuck15.addRace("Kids Fun Run 1k Ages 4-12 \(kids under 7 years must have a chaperon runner\).", "9:30am", "", ["UO Students, Faculty, Staff, Alumni & Family Members: $0", "$15 Community Members"], [""]);

	raceArr.push(runWithTheDuck15);

var hotButteredRun15 = new race ("Hot Buttered Run", "2015-11-29", "half", "Vancouver, WA", "Esther Short Park", "Engery Events", "http://energyevents.com/hotbutteredrun", "", "", "", "Winter Holidays");
	hotButteredRun15.addRace("5k Adult", "10am", "", ["4/15 to 6/30: $30", "7/1 to 9/30:	$35", "10/1 to 10/31: $40", "11/1 to 11/14:	$45", "11/15 to 11/22: $45 \(No Shirt Included \), Race Day: $50 \(No Shirt Included \)"], ["shirt", "goodie bag", "food", "hot butter rum or hot cocoa", "after party: music & fun"]);
	hotButteredRun15.addRace("5k Youth Ages 8-18", "10am", "", ["4/15 to 11/14: $18", "11/15 to 11/22: $18 \(No Shirt Included \)", "Race Day: $50 \(No Shirt Included \)"], ["shirt", "goodie bag", "food", "hot cocoa", "after party: music & fun"]);
	hotButteredRun15.addRace("Half", "9am", "3hrs", ["4/15 to 6/30: $40", "7/1 to 7/30:	$45", "08/01 to 9/30: $50", "10/1 to 10/31: $60", "11/1 to 11/14: $65", "11/15 to 11/22: $65 \(No Shirt Included \), Race Day: $75 \(No Shirt Included \)"], ["shirt", "finisher medal", "goodie bag", "food", "hot butter rum or hot cocoa", "after party: music & fun"] );
	hotButteredRun15.addRace("Kid's Kandy Kane 1k Ages 5-12 \(No Parents\)", "11:45am", ["Ages 5-6 Pre-Event: $8", "Ages 7-12: $12", "All Ages Race Day: $15"], ["kid's shirt", "kid's medal", "hot cocoa"] );
	hotButteredRun15.addRace("Kid's Kandy Kane Fun Run Ages 3-8 \(kids under 6 must have a parent\)", "11:45am", ["Ages 3-6 Pre-Event: $8", "Ages 7-8: $12", "All Ages Race Day: $15"], ["kid's shirt", "kid's medal", "hot cocoa"]);

	raceArr.push(hotButteredRun15);

//December 2015 Races

var hoHo15 = new race("Ho Ho 5k", "2015-12-06", "r5k", "Tigard, OR", "Cook Park", "X-Dog Events", "http://www.xdogevents.com/hoho.html", "", "", "Winter Holidays");

	hoHo15.addRace("5k Adult", "10am", "", ["Tier 1: $15", "Tier 2: $20"], ["hostess snowballs & hohos", "tree seedling", "hot cider"]);
	hoHo15.addRace("5k Kids Ages 6-12", "10am", "", ["Tier 1: $8", "Tier 2: $11"], ["hostess snowballs & hohos", "tree seedling", "hot cider"]);
	hoHo15.addRace("5k Kids Under 6", "10am", "", ["$5"], ["hostess snowballs & hohos", "tree seedling", "hot cider"]);
	raceArr.push(hoHo15);

var jingleBell15 = new race("Jingle Bell 5k", "2015-12-06", "r5k", "Portland, OR", "World Trade Center", "The Arthritis, Foundation", "http://www.jbr.org/faf/home/default.asp?ievent=1138292", "", "", "Winter Holidays" );
	
	jingleBell15.addRace("5k Adult", "8:50am", "", ["Before 11/01: $30"], ["shirt", "jingle bells"]);
	jingleBell15.addRace("5k Kid Ages 12 & Under", "8:50am", "", ["$20"], ["shirt", "jingle bells"]);
	jingleBell15.addRace("1k Kid's Fun Run with the Elves Ages 10 & Under", "8:30am", "", ["$20"], ["shirt", "jingle bells"]);
	jingleBell15.addRace("Jingle in Your Jammies (Vitrual)", "", "", ["Without Shipping: $25", "With Shipping: $31" ], ["shirt", "jingle bells"]);

	raceArr.push(jingleBell15);

var holidayHalf15 = new race("Holiday Half & 5k", "2015-12-13", "half", "Portland, OR", "Addias North America Campus", "Foot Traffic", "http://foottraffic.us/the-races/holiday/", "", "", "Winter Holidays");
	
	holidayHalf15.addRace("5k","8:15am", "", ["7/15 to 9/1: $36", "9/2 to 10/15: $39", "10/16 to 11/1: $41", "11/2 to 11/9: $41 \(no name on bib\)", "11/10 until Full: $41 \(no name on bib and tech shirt subbed with cotton shirt\)", "Race Day: $45 \(no name on bib and shirt not guaranteed\)"], ["finisher medal", "shirt", "name on bib", "food", "beer", "music"] );

		holidayHalf15.addRace("Half", "8am", "15min/mi", ["7/15 to 9/1: $69", "9/2 to 10/15: $77", "10/16 to 11/1: $82", "11/2 to 11/9: $82 \(no name on bib\)", "11/10 until Full: $82 \(no name on bib and shirt not guaranteed\)", "Race Day: $90 \(no name on bib and shirt not guaranteed\)"], ["finisher medal", "shirt", "name on bib", "food", "beer", "music"]);

	raceArr.push(holidayHalf15);
// var name = new race(title, date, className(ie longest dist offered (r5k, r10k, half, full, ultra etc)) city, startLocation, organizer, orgLink, cap, bagCheck, theme);
//raceName.addRace("dist", "startTime", limit, [prices], [swag]);
// raceArr.push(title);

//2016 
//January 2016 Races

//February 2016 Races

//March 2016 Races

//April 2016 Races

//May 2016 Races

//June 2016 Races

//July 2016 Races

//August 2016 Races

//September 2016 Races

//Octobr 2016 Races

//November 2016 Races

//December 2016 Races


console.log(raceArr)
fs.writeFile("raceJSON.js", JSON.stringify(raceArr))
