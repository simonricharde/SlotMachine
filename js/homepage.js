'use strict';
Product.allProducts = [];
SpecImages.allSpecImages = [];
var lastVisited = [];
function SpecImages(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.displayedCount=0;
  this.previousImageIndex=0;
  SpecImages.allSpecImages.push(this);
}

// create objects for our Products
function Product(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.displayedCount=0;
  this.previousImageIndex=0;
  Product.allProducts.push(this);
}
//new Product('777','img/slotimages/777.jpg');//0
new Product('amazonbox','img/slotimages/amazonbox.gif');//1
new Product('amazondash','img/slotimages/amazondash.gif');//2
new Product('Amazon_smart_home_2','img/slotimages/Amazon_smart_home_2.gif');//3
//new Product('apple','img/slotimages/apple.png');//4
//new Product('awards','img/slotimages/awards.jpg');//5
new Product('aws','img/slotimages/aws.gif');//6
new Product('ballgif','img/slotimages/ballgif.gif');//7
new Product('blueberry_final_d','img/slotimages/blueberry_final_d.gif');//8
//new Product('bus','img/slotimages/bus.gif');//9
new Product('cherry','img/slotimages/cherry.gif');//10
//new Product('cocktail','img/slotimages/cocktail.jpg');//11
new Product('dance','img/slotimages/dance.gif');//12
new Product('dog','img/slotimages/dog.gif');//13
new Product('fedex','img/slotimages/fedex.gif');//14
//new Product('gold','img/slotimages/gold.jpg');//15
//new Product('golfballs','img/slotimages/golfballs.jpg');//16
//new Product('google','img/slotimages/google.gif');//17
new Product('grapes','img/slotimages/grapes.gif');//18
new Product('greeapple','img/slotimages/greeapple.gif');//19
//new Product('greenapple','img/slotimages/greenapple.jpg');//20
new Product('groupdance','img/slotimages/groupdance.gif');//21
new Product('kid','img/slotimages/kid.gif');//22
//new Product('loops','img/slotimages/loops.jpg');//23
new Product('melons','img/slotimages/melons.gif');//24
new Product('packing','img/slotimages/packing.gif');//25
new Product('products','img/slotimages/products.gif');//26
new Product('starberry','img/slotimages/starberry.gif');//27
//new Product('strawberry','img/slotimages/strawberry.jpg');//28
new Product('surprise_dribbble','img/slotimages/surprise_dribbble.gif');//29

new SpecImages('dollars','img/slotimages/dollars.png');//0
new SpecImages('gameovergif','img/slotimages/gameovergif.gif');//1
new SpecImages('jackpot-gif-1-1','img/slotimages/jackpot-gif-1-1.gif');//2
new SpecImages('jackpot','img/slotimages/jackpot.jpg');//3
new SpecImages('jackpotcoins','img/slotimages/jackpotcoins.jpg');//4
new SpecImages('jackpotgif','img/slotimages/jackpotgif.gif');//5
new SpecImages('spin','img/slotimages/spin.jpg');//6
new SpecImages('winner','img/slotimages/winner.gif');//7
new SpecImages('YetToWin','img/slotimages/YetToWin.gif');//8
new SpecImages('pairbg','img/slotimages/pairbg.png');//9
new SpecImages('lowcoins','img/slotimages/low coins.jpg');//10
new SpecImages('amazonjackpot','img/slotimages/amazonjackpot.gif');//11

var imgContainer = document.getElementById('slot1');
var imgContainer1 = document.getElementById('slot2');
var imgContainer2 = document.getElementById('slot3');
var imgContainer3 = document.getElementById('start');
var jackpotImgContainer = document.getElementById('jackpotImage');
var pairImgContainer = document.getElementById('pairImage');
var jackpotImg = document.getElementById('jackpotImageslot');
var pairImg = document.getElementById('pairImageslot');

pairImg.src = SpecImages.allSpecImages[9].filepath;
jackpotImg.src = SpecImages.allSpecImages[2].filepath;

jackpotImgContainer.style.display = 'none';
pairImgContainer.style.display = 'none';

imgContainer3.addEventListener('click', randomProduct);

imgContainer.src = SpecImages.allSpecImages[6].filepath;
imgContainer1.src = SpecImages.allSpecImages[6].filepath;
imgContainer2.src = SpecImages.allSpecImages[6].filepath;
lastVisited = [6,6,6];

function gameOver() {
  imgContainer.src = SpecImages.allSpecImages[1].filepath;
  imgContainer1.src = SpecImages.allSpecImages[1].filepath;
  imgContainer2.src = SpecImages.allSpecImages[1].filepath;
}
var currentUser = null;
OnBootstrap();

function OnBootstrap() {
  console.log( UserStore.getCurrentUser());
  currentUser = UserStore.getCurrentUser();
  // for testing
  if(currentUser === null){
    // redirect to options page . window.locaton = /options.html
    // showOptions();
    console.log('in null and ser');
    window.location = 'options.html';
    // currentUser = new User('testUser');
    // UserStore.saveUser(currentUser);
    // console.log(currentUser );
  }else{
    console.log(currentUser);
    refreshUserDetailsGamePage();
  }
}

function refreshUserDetailsGamePage(){
  currentUser = UserStore.getCurrentUser();
  var displayNameId = document.getElementById('displayName');
  displayNameId.innerHTML = '<h1>Welcome '+ currentUser.name+'!</h1>';
  displayNameId.style.display = 'block';

  var displayBalanceElement = document.getElementById('displayBalance');
  displayBalanceElement.innerHTML = '<h1>Balance '+ currentUser.getAmount()+'!</h1>';
  displayBalanceElement.style.display = 'block';

  document.getElementById('userrow').style.display = 'block';
}

function randomProduct() {
  
  if (currentUser.getAmount()>0) {
    var randomIdx = Math.floor(Math.random() * Product.allProducts.length);
    var randomIdxNS1 = Math.floor(Math.random() * Product.allProducts.length);
    var randomIdxNS2 = Math.floor(Math.random() * Product.allProducts.length);

    var gamerow = document.getElementById('gamerowid');
    gamerow.removeChild(imgContainer);
    imgContainer = document.createElement('img'); // create new img
    imgContainer.src = Product.allProducts[randomIdx].filepath;
    imgContainer.setAttribute('class','animation0 blinking0');
    imgContainer.setAttribute('id','slot1');
    console.log(imgContainer);
    gamerow.prepend(imgContainer);

    gamerow.removeChild(imgContainer1);
    imgContainer1 = document.createElement('img'); // create new img
    imgContainer1.src = Product.allProducts[randomIdxNS1].filepath;
    imgContainer1.setAttribute('class','animation1 blinking1');
    imgContainer1.setAttribute('id','slot2');
    console.log(imgContainer1);
    gamerow.prepend(imgContainer1);

    gamerow.removeChild(imgContainer2);
    imgContainer2 = document.createElement('img'); // create new img
    imgContainer2.src = Product.allProducts[randomIdxNS2].filepath;
    imgContainer2.setAttribute('class','animation2 blinking2');
    imgContainer2.setAttribute('id','slot3');
    console.log(imgContainer2);
    gamerow.prepend(imgContainer2);

    // imgContainer1.src = Product.allProducts[randomIdxNS1].filepath;
    // imgContainer2.src = Product.allProducts[randomIdxNS2].filepath;
    lastVisited = [randomIdx,randomIdxNS1,randomIdxNS2];
    currentUser.plays = currentUser.plays + 1 ;
    validateWins();
    UserStore.saveUser(currentUser); 
  } else if (currentUser.getAmount()<1) {
    imgContainer.src = SpecImages.allSpecImages[1].filepath;
    imgContainer1.src = SpecImages.allSpecImages[1].filepath;
    imgContainer2.src = SpecImages.allSpecImages[1].filepath;
    alert('Please reset funds from Options Page to continue the play');
    console.log('Available amount : ' + currentUser.getAmount() );
  }

  refreshUserDetailsGamePage();
}


function validateWins() {
  var left = Product.allProducts[lastVisited[0]];
  var mid = Product.allProducts[lastVisited[1]];
  var right = Product.allProducts[lastVisited[2]];
  if (left === mid && left === right ||
        mid === left && mid === right ||
        right === mid && right === left)
  { //jackpot
    currentUser.jackpotValue = currentUser.jackpotValue + 20;
    jackpotImgContainer.style.display = 'block';
  } else if (left === mid && left !== right ||
            mid !== left && mid === right ||
            right === mid && right !== left ) {
    //pair
    currentUser.pairValue = currentUser.pairValue + 5;    
    pairImgContainer.style.display = 'block';
  } else {
    jackpotImgContainer.style.display = 'none';
    pairImgContainer.style.display = 'none';
  }

}
