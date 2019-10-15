var friendlist = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friendlist);
    });

    app.post("/api/friends", function (req, res) {
        
        var match ={
            name: "",
            photo: "",
            friendDifference: 1000
        };
        
        console.log(req.body);
        //parse the result of survey
          
        var userData = req.body;
        var userScores = userData.scores;
        console.log(userScores);

        var totalDifference = 0;

        for (var i= 0; i< friendlist.length; i++){
            console.log(friendlist[i]);
            totalDifference = 0;

            for(var j = 0; j < friendlist[i].scores[j]; j++){

                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendlist[i].scores[j]));
                if(totalDifference <= match.friendDifference){
                    
                    match.name = friendlist[i].name;
                    match.photo = friendlist[i].photo;
                    match.friendDifference = totalDifference;

                }
            }
        }
         
          friendlist.push(userData);
          res.json(match);
    });
}



