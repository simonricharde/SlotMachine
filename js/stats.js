'use strict';

function OnBootstrap() {
  console.log( UserStore.getCurrentUser());
  var allUsersListElement = document.getElementById('playerList');
  allUsersListElement.innerHTML = '';
  var allUsers = UserStore.getAllUsers();
  console.log(allUsers);
  for(var i=0; i < allUsers.length && i < 3; i++){
    var liEle = document.createElement('li');
    liEle.innerHTML = allUsers[i].name;
    allUsersListElement.appendChild(liEle);
  }
}  
OnBootstrap();