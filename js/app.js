/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
'use strict';
var newuserFormId = document.getElementById('newuser_form');
newuserFormId.addEventListener('submit', createNewuser);
var selectuserFormId = document.getElementById('selectuser_form');
selectuserFormId.addEventListener('submit', selectUser);
var resetuserFormId = document.getElementById('resetuser_form');
resetuserFormId.addEventListener('submit', resetUserBalance);


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
  window.location = 'index.html';
}

function selectUser(event) {
  console.log('in Select user');
  event.preventDefault();
  var e = document.getElementById('userList');
  var strUser = e.options[e.selectedIndex].value;
  var currentUser = UserStore.setAndLoadCurrentUserByName(strUser);
  refreshUserDetailsOptionsPage();
  window.location = 'index.html';
}


function resetUserBalance(event) {
  console.log('in resetUserBalance user');
  event.preventDefault();
  var currentUser = UserStore.getCurrentUser();
  console.log(currentUser);
  currentUser.resetUser();
  UserStore.saveUser(currentUser);
  refreshUserDetailsOptionsPage();
}

function refreshUserDetailsOptionsPage(){
  var currentUser = UserStore.getCurrentUser();
  console.log(currentUser);
  console.log(currentUser.getAmount());
  var displayNameId = document.getElementById('displayName');
  displayNameId.innerHTML = '<h1>Welcome '+ currentUser.name+'!</h1>';
  displayNameId.style.display = 'block';

  var displayBalanceElement = document.getElementById('displayBalance');
  displayBalanceElement.innerHTML = '<h1>Balance '+ currentUser.getAmount()+'!</h1>';
  displayBalanceElement.style.display = 'block';
}
refreshUserDetailsOptionsPage();