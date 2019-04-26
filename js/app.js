/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
'use strict';
function showGame() {
  document.getElementById('stats').style.display = 'none';
  document.getElementById('options').style.display = 'none';
  document.getElementById('game').style.display = 'block';
}

function showOptions() {
  document.getElementById('game').style.display = 'none';
  document.getElementById('stats').style.display = 'none';
  document.getElementById('options').style.display = 'block';
}

function showStats() {
  document.getElementById('game').style.display = 'none';
  document.getElementById('options').style.display = 'none';
  document.getElementById('stats').style.display = 'block';
}

function check() {
  window.scrollTo( 0, 0 );
  document.getElementById('displayName').display='block';
  document.getElementById('displayLevel').display='block';
  document.getElementById('displayBalance').display='block';
  
  var selectId = document.getElementById('userList');
  selectId.innerHTML = '';
  var defaultOption = document.createElement('option');
  defaultOption.text ='Selected';
  defaultOption.selected=true;
  selectId.add(defaultOption);
  
  var userNamesArray = UserStore.getAllUserNames();
  console.log(userNamesArray.length);
  for (var i = 0; i < userNamesArray.length; i++) {
    var option = document.createElement('option');
    option.text = userNamesArray[i];
    selectId.add(option);
  }
  console.log(selectId);
}

function createNewuser(event) {
  event.preventDefault();
  var newUserName = event.target.fname.value;
  var userObj = new User(newUserName);
  UserStore.saveUser(userObj);
  newuserFormId.reset();
  check();
}

var newuserFormId = document.getElementById('newuser_form');
newuserFormId.addEventListener('submit', createNewuser);
