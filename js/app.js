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
  //document.getElementById('displayName').display='block';
  //document.getElementById('displayBalance').display='block';
  
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

function selectUser(event) {
  console.log("in Select user");
  event.preventDefault();
  var e = document.getElementById('userList');
  var strUser = e.options[e.selectedIndex].value;
  
  var displayNameId = document.getElementById('displayName');
  displayNameId.innerHTML = '<h1>Welcome '+ strUser+'!</h1>';
  displayNameId.style.display = 'block';
  document.getElementById('displayBalance').style.display = 'block';

  currentUser = UserStore.setAndLoadCurrentUserByName(strUser);
  var displayBalanceElement = document.getElementById('displayBalance');
  displayBalanceElement.innerHTML = '<h1>Balance '+ currentUser.getAmount()+'!</h1>';
  displayBalanceElement.style.display = 'block';
}

var newuserFormId = document.getElementById('newuser_form');
var selectuserFormId = document.getElementById('selectuser_form');
newuserFormId.addEventListener('submit', createNewuser);
selectuserFormId.addEventListener('submit', selectUser);



