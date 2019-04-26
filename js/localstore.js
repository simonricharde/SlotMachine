'use strict';

function User(Name) {
  this.name = Name;
  this.plays = 0;
  this.jackpots = 0;
  this.pairs = 0;
}


/* Local Data Store template
var storeData = {
  'allUsers' : {
    'user1' : {}, 
    'user2' : {}, 
  },

  'currentUser' : 'user1' //current user name
};

*/
var Store = {};
Store.getUser = function(userName) {
  var storeDataString = localStorage.getItem('storeData');
  if(storeDataString === null)
    return null;
  var storeData = JSON.parse(storeDataString);

  if(storeData['allUsers'] === null)
    return null;
  return storeData['allUsers'][userName];
}

Store.saveUser = function(user){
  var storeDataString = localStorage.getItem('storeData');
  var storeData = JSON.parse(storeDataString);
  if(storeData === null)
  {
    storeData = {
      'allUsers': {}
    };
  }
  storeData['allUsers'][user.name] = user;
  storeData['currentUser'] = user.name;
  localStorage.setItem('storeData', JSON.stringify(storeData));
}

Store.setAndLoadCurrentUserByName = function(userName){
  var usr = this.getUser(userName);
  if(usr == null)
    return null;
  
  var storeDataString = localStorage.getItem('storeData');
  var storeData = JSON.parse(storeDataString); 
  storeData['currentUser'] = userName;
  localStorage.setItem('storeData', JSON.stringify(storeData));
  return usr;
}

Store.getAllUsers = function(){
  var storeDataString = localStorage.getItem('storeData');
  var storeData = JSON.parse(storeDataString); 
  if(storeData === null)
    return null;
  return storeData['allUsers'];
}

Store.getCurrentUser = function(){
  var storeDataString = localStorage.getItem('storeData');
  var storeData = JSON.parse(storeDataString); 
  if(storeData === null)
    return null;

  return this.getUser(storeData['currentUser']);
}

