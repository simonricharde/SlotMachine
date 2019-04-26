'use strict';

function User(Name) {
  this.name = Name;
  this.plays = 0;
  this.jackpots = 0;
  this.pairs = 0;
}

User.prototype.resetUser = function() {
  this.plays = 0;
  this.jackpots = 0;
  this.pairs = 0;
}

var initialAmount = 25;
var pairValue = 2;
var jackpotValue = 5;
var playValue = 1;

User.prototype.getAmount = function() {
  return initialAmount + (this.jackpots * jackpotValue) + (this.pairs * pairValue) - (this.plays * playValue);
}

User.prototype.lossCount = function() {
  return this.plays - (this.jackpots + this.pairs);
}
/* Local Data Store template
var userStoreData = {
  'allUsers' : {
    'user1' : {}, 
    'user2' : {}, 
  },

  'currentUser' : 'user1' //current user name
};

*/
var UserStore = {};
UserStore.getUser = function(userName) {
  var userStoreDataString = localStorage.getItem('userStoreData');
  if(userStoreDataString === null)
    return null;
  var userStoreData = JSON.parse(userStoreDataString);

  if(userStoreData['allUsers'] === null)
    return null;
  return userStoreData['allUsers'][userName];
}

UserStore.saveUser = function(user){
  var userStoreDataString = localStorage.getItem('userStoreData');
  var userStoreData = JSON.parse(userStoreDataString);
  if(userStoreData === null)
  {
    userStoreData = {
      'allUsers': {}
    };
  }
  userStoreData['allUsers'][user.name] = user;
  userStoreData['currentUser'] = user.name;
  localStorage.setItem('userStoreData', JSON.stringify(userStoreData));
}

UserStore.setAndLoadCurrentUserByName = function(userName){
  var usr = this.getUser(userName);
  if(usr == null)
    return null;
  
  var userStoreDataString = localStorage.getItem('userStoreData');
  var userStoreData = JSON.parse(userStoreDataString); 
  userStoreData['currentUser'] = userName;
  localStorage.setItem('userStoreData', JSON.stringify(userStoreData));
  return usr;
}

UserStore.getAllUsers = function(){
  var userStoreDataString = localStorage.getItem('userStoreData');
  var userStoreData = JSON.parse(userStoreDataString); 
  if(userStoreData === null)
    return null;
  return userStoreData['allUsers'];
}

UserStore.getAllUserNames = function(){
  var userStoreDataString = localStorage.getItem('userStoreData');
  var userStoreData = JSON.parse(userStoreDataString); 
  if(userStoreData === null)
    return null;
  var userNamesArray = [];
  var keys = Object.keys(userStoreData['allUsers']);
  for(var i = 0; i < keys.length ; i++)
    userNamesArray.push(userStoreData['allUsers'][ keys[i] ].name);
  return userNamesArray;
}

UserStore.getCurrentUser = function(){
  var userStoreDataString = localStorage.getItem('userStoreData');
  var userStoreData = JSON.parse(userStoreDataString); 
  if(userStoreData === null)
    return null;

  return this.getUser(userStoreData['currentUser']);
}

