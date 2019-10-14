var friendlist = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friendlist);
    });
}



