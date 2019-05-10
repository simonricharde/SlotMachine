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
  console.log('in reset');
  console.log(this);

};

var initialAmount = 25;
var pairValue = 2;
var jackpotValue = 5;
var playValue = 1;

User.prototype.getAmount = function() {
  return initialAmount + (this.jackpots * jackpotValue) + (this.pairs * pairValue) - (this.plays * playValue);
};

User.prototype.lossCount = function() {
  return this.plays - (this.jackpots + this.pairs);
};
var UserStore = {};
UserStore.getUser = function(userName) {
  var userStoreDataString = localStorage.getItem('userStoreData');
  if(userStoreDataString === null)
    return null;
  var userStoreData = JSON.parse(userStoreDataString);

  if(userStoreData['allUsers'] === null)
    return null;
  return convertToUser(userStoreData['allUsers'][userName]);
};

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
};

UserStore.setAndLoadCurrentUserByName = function(userName){
  var usr = this.getUser(userName);
  if(usr === null)
    return null;

  var userStoreDataString = localStorage.getItem('userStoreData');
  var userStoreData = JSON.parse(userStoreDataString);
  userStoreData['currentUser'] = userName;
  localStorage.setItem('userStoreData', JSON.stringify(userStoreData));
  return convertToUser(usr);
};

UserStore.getAllUsers = function(){
  var userStoreDataString = localStorage.getItem('userStoreData');
  var userStoreData = JSON.parse(userStoreDataString);
  if(userStoreData === null)
    return null;

  var userArray = [];
  var keys = Object.keys(userStoreData['allUsers']);
  for(var i = 0; i < keys.length ; i++)
    userArray.push( convertToUser( userStoreData['allUsers'][ keys[i] ]) );
  return userArray;
};

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
};

UserStore.getCurrentUser = function(){
  var userStoreDataString = localStorage.getItem('userStoreData');
  var userStoreData = JSON.parse(userStoreDataString);
  if(userStoreData === null)
    return null;

  return convertToUser( this.getUser(userStoreData['currentUser']) );
};

//This is to create User object so the JS prototype methods work
function convertToUser(object) {
  var user = new User(object.name);
  user.plays = object.plays;
  user.jackpots = object.jackpots;
  user.pairs = object.pairs;
  return user;
}
