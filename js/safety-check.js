var safetyScores = [];
var finalScores = [];

var submitScore = function(score) {
  "use strict";
  safetyScores.push(score);
  finalScores = safetyScores.sort();
  document.getElementById('message-display').className = 'col-md-10 alert alert-info';
  document.getElementById('message-display').innerHTML = "You have submitted a score of " + score + ". If this is correct, select the button and pass it on!";
};

// Returns true if retrospective should be cancelled.
var determineStatus = function() {
  "use strict";
  for(var i = 0; i < finalScores.length; i++) {
    var passFail = (finalScores[i] === 1 || finalScores[i] === 2) ? true : false;
    //if (finalScores[i] === 1 || finalScores[i] === 2) { return true; }
    return passFail;
  }
};


var decideProceed = function() {
  "use strict";
  var displayScores = "The lowest score submitted was a " + finalScores[0] + ".";
  var proceedMessage = '';
  if(determineStatus()) {
    document.getElementById('message-display').className = 'col-md-10 alert alert-danger';
    proceedMessage = " As there is at least one person who does not feel safe talking, you should cancel the meeting!";
  } else {
    document.getElementById('message-display').className = 'col-md-10 alert alert-success';
    proceedMessage = " Everyone seems comfortable with proceeding!";
  }
  document.getElementById('message-display').innerHTML = displayScores + proceedMessage;
};

var newSubmit = function() {
  "use strict";
  document.getElementById('message-display').className = 'col-md-10 alert alert-warning';
  document.getElementById('message-display').innerHTML = "Select an option";
};
