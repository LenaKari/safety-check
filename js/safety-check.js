var safetyScores = [];
var finalScores = [];


// Confirms the score selected and displays button to pass the device
var selectScore = function(score) {
  "use strict";
  document.getElementById('message-display').className = 'alert alert-info';
  document.getElementById('message-display').innerHTML = "You have submitted a score of " + score + ".<div><button class='btn btn-default' onclick='newSubmit(" + score + ")'>Pass it on</button></div>";
};


// Saves submitted score and clears div for the next user
var newSubmit = function(score) {
  "use strict";
  safetyScores.push(score);
  finalScores = safetyScores.sort();
  document.getElementById('message-display').className = 'alert alert-warning';
  document.getElementById('message-display').innerHTML = "Select an option";
};


// Returns true if retrospective should be cancelled.
var cancelRetro = function() {
  "use strict";
  var passFail = (finalScores[0] === 1 || finalScores[0] === 2) ? true : false;
  return passFail;
};


// Displays whether the retrospective should continue or not
var decideProceed = function() {
  "use strict";
  var displayScores = "The lowest score submitted was a " + finalScores[0] + ".";
  var proceedMessage = '';
  if(cancelRetro() && finalScores.length) {
    document.getElementById('message-display').className = 'alert alert-danger';
    proceedMessage = " As there is at least one person who does not feel safe talking, you should cancel the meeting!";
  } else if(finalScores.length) {
    document.getElementById('message-display').className = 'alert alert-success';
    proceedMessage = " Everyone seems comfortable with proceeding!";
  } else {
    displayScores = '';
    proceedMessage = "No votes have been submitted.";
    document.getElementById('message-display').className = 'alert alert-danger';
  }
  document.getElementById('message-display').innerHTML = displayScores + proceedMessage;
};


// Resets scores
var clearScores = function(){
  "use strict";
  safetyScores = [];
  finalScores = [];
};
