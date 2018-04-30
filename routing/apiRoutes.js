var friends = require("./data/friends");
var path = require("path");



app.get("/api/friends", function(req, res){

    var friendFinder = req.params;

    for (var i = 0; i < this.length; i++) {
        return res.json(friends[i]);

    }
});
// req.body is the same thing as userData in the home.html file 
app.post("/api/friends", function(req, res){

	friends.push(req.body);

	var userSubmission = friends.length -1; 

	var findMatch  = function () {

		for (var i= 0; i < friends.length; i++) {

			var matchScores = 

			var match = userData.scores

		}

	}

	//We just pushed the information into the array, so then we need to


    
});



