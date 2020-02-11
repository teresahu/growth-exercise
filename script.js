function updatePositiveScore(){
  var score10 = parseInt(document.getElementById('score10').value);
  var score9 = parseInt(document.getElementById('score9').value);
  var total = score10 + score9;
  isNaN(total) ? document.getElementById('positiveScore').value = '' : document.getElementById('positiveScore').value = total;
  // Need to call updateNPS in a more efficient way
  updateNPS();
}

function updateNeutralScore(){
  var score8 = parseInt(document.getElementById('score8').value);
  var score7 = parseInt(document.getElementById('score7').value);
  var total = score8 + score7;
  isNaN(total) ? document.getElementById('neutralScore').value = '' : document.getElementById('neutralScore').value = total;
// Need to call updateNPS in a more efficient way
 updateNPS();
}

function updateNegativeScore(){
  var score6 = parseInt(document.getElementById('score6').value);
  var score5 = parseInt(document.getElementById('score5').value);
  var score4 = parseInt(document.getElementById('score4').value);
  var score3 = parseInt(document.getElementById('score3').value);
  var score2 = parseInt(document.getElementById('score2').value);
  var score1 = parseInt(document.getElementById('score1').value);
  var score0 = parseInt(document.getElementById('score0').value);
  var total = score6 + score5 + score4 + score3 + score2 + score1 + score0;
  isNaN(total) ? document.getElementById('negativeScore').value = '' : document.getElementById('negativeScore').value = total;
 // Need to call updateNPS in a more efficient way
 updateNPS();
}

function updateNPS(){
  var positiveScore = parseInt(document.getElementById('positiveScore').value);
  var neutralScore = parseInt(document.getElementById('neutralScore').value);
  var negativeScore = parseInt(document.getElementById('negativeScore').value);
  var total = positiveScore + neutralScore + negativeScore;
  var positivePercentage = Math.round((positiveScore*100)/total);
  var negativePercentage = Math.round((negativeScore*100)/total);
  var NPSscore = positivePercentage - negativePercentage;
  isNaN(positivePercentage) ? document.getElementById('positivePercentage').innerHTML = '' : document.getElementById('positivePercentage').innerHTML = positivePercentage+"%";
  isNaN(negativePercentage) ? document.getElementById('negativePercentage').innerHTML = '' : document.getElementById('negativePercentage').innerHTML = negativePercentage+"%";
  isNaN(NPSscore) ? document.getElementById('NPSscore').innerHTML = '' : document.getElementById('NPSscore').innerHTML = NPSscore;
}

function reset() {
  document.getElementById('score10').value = '';
  document.getElementById('score9').value = '';
  document.getElementById('score8').value = '';
  document.getElementById('score7').value = '';
  document.getElementById('score6').value = '';
  document.getElementById('score5').value = '';
  document.getElementById('score4').value = '';
  document.getElementById('score3').value = '';
  document.getElementById('score2').value = '';
  document.getElementById('score1').value = '';
  document.getElementById('score0').value = '';
  document.getElementById('positiveScore').value = '';
  document.getElementById('neutralScore').value = '';
  document.getElementById('negativeScore').value = '';
  document.getElementById('positivePercentage').innerHTML = '';
  document.getElementById('negativePercentage').innerHTML = '';
  document.getElementById('NPSscore').innerHTML = '';
}
