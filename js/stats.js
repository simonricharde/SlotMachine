'use strict';

var allData = UserStore.getAllUsers();
var chartParent = document.getElementById('chart');
var userNames = [];
var losses = [];
var jackpots = [];
var pairs = [];

function onBootstrap() {
  console.log( UserStore.getCurrentUser());
  var allUsersListElement = document.getElementById('playerList');
  allUsersListElement.innerHTML = '';
  var allUsers = UserStore.getAllUsers();
  console.log(allUsers);
  if(allUsers === null){
    window.location = 'index.html';
  }
  for(var i=0; i < allUsers.length; i++){
    var liEle = document.createElement('li');
    liEle.innerHTML = allUsers[i].name;
    allUsersListElement.appendChild(liEle);

    userNames.push(allUsers[i].name);
    pairs.push(allUsers[i].pairs);
    jackpots.push(allUsers[i].jackpots);
    losses.push(allUsers[i].lossCount()); 
  }
  


  //for each user
  for (var j = 0; j < userNames.length; j++){
    // create the data set
    var data = {
      datasets: [{
        data: [losses[j],jackpots[j], pairs[j]],
        backgroundColor: ['red', 'blue', 'green']
      }],
      labels: [
        'Losses',
        'Jackpots',
        'Pairs'
      ]
    };

    // create elements for the user chart and append them to the window
    var userChartEle = document.createElement('div');
    userChartEle.setAttribute('class', '');
    var h3 = document.createElement('h3');
    userChartEle.append(h3);
    var canvas = document.createElement('canvas');
    h3.textContent = userNames[j];

    userChartEle.append(h3);
    userChartEle.append(canvas);
    chartParent.append(userChartEle);
    var ctx = canvas.getContext('2d');

    // Draw the actual chart
    new Chart(ctx,{
      type: 'pie',
      data: data,
      options: {
        legend: {
          display: true,
          labels: {
            fontColor: 'white',
            fontSize: 20
          }
        }
      }
    });
  }


}
onBootstrap();


