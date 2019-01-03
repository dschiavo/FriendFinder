var surveyData = require("../data/friends.js");


module.exports = function(app) {


  app.get("/api/friends", function(req, res) {
    res.json(surveyData);
  });

 

  app.post("/api/friends", function(req, res) {
    surveyData.push(req.body);
    res.json(true);

   
    })
};

//steps left to do:
//1. fix the submit button so that when it is clicked, data is stored
//2. convert answers to an array of numbers
//3. compare difference between users' scores (get the absolute value)
//4. add up difference to calculate Total Difference
//5. smallest totalDifference = friend
//6. display name and pic of friend