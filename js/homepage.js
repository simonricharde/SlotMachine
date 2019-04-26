'use strict';
Product.allProducts = [];

// create objects for our Products
function Product(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.displayedCount=0;
  this.previousImageIndex=0;
  Product.allProducts.push(this);
}
new Product('777','img/slotimages/777.jpg');//0
new Product('amazonbox','img/slotimages/amazonbox.gif');//1
new Product('amazondash','img/slotimages/amazondash.gif');//2
new Product('amazonjackpot','img/slotimages/amazonjackpot.gif');//3
new Product('Amazon_smart_home_2','img/slotimages/Amazon_smart_home_2.gif');//4
new Product('apple','img/slotimages/apple.png');//5
new Product('awards','img/slotimages/awards.jpg');//6
new Product('aws','img/slotimages/aws.gif');//7
new Product('ballgif','img/slotimages/ballgif.gif');//8
new Product('blueberry_final_d','img/slotimages/blueberry_final_d.gif');//9
new Product('bus','img/slotimages/bus.gif');//10
new Product('cherry','img/slotimages/cherry.gif');//11
new Product('cocktail','img/slotimages/cocktail.jpg');//12
new Product('dance','img/slotimages/dance.gif');//13
new Product('dog','img/slotimages/dog.gif');//14
new Product('dollars','img/slotimages/dollars.png');//15
new Product('fedex','img/slotimages/fedex.gif');//16
new Product('gameovergif','img/slotimages/gameovergif.gif');//17
new Product('gold','img/slotimages/gold.jpg');//18
new Product('golfballs','img/slotimages/golfballs.jpg');//19
new Product('google','img/slotimages/google.gif');//20
new Product('grapes','img/slotimages/grapes.gif');//21
new Product('greeapple','img/slotimages/greeapple.gif');//22
new Product('greenapple','img/slotimages/greenapple.jpg');//23
new Product('groupdance','img/slotimages/groupdance.gif');//24
new Product('jackpot-gif-1-1','img/slotimages/jackpot-gif-1-1.gif');//25
new Product('jackpot','img/slotimages/jackpot.jpg');//26
new Product('jackpotcoins','img/slotimages/jackpotcoins.jpg');//27
new Product('jackpotgif','img/slotimages/jackpotgif.gif');//28
new Product('kid','img/slotimages/kid.gif');//29
new Product('loops','img/slotimages/loops.jpg');//30
new Product('lowcoins','img/slotimages/low coins.jpg');//31
new Product('melons','img/slotimages/melons.gif');//32
new Product('packing','img/slotimages/packing.gif');//33
new Product('products','img/slotimages/products.gif');//34
new Product('spin','img/slotimages/spin.jpg');//35
new Product('starberry','img/slotimages/starberry.gif');//36
new Product('strawberry','img/slotimages/strawberry.jpg');//37
new Product('surprise_dribbble','img/slotimages/surprise_dribbble.gif');//38
new Product('winner','img/slotimages/winner.gif');//39
new Product('YetToWin','img/slotimages/YetToWin.gif');//40

var imgContainer = document.getElementById('slot1');
var imgContainer1 = document.getElementById('slot2');
var imgContainer2 = document.getElementById('slot3');
var imgContainer3 = document.getElementById('start');

imgContainer3.addEventListener('click', randomProduct3);

imgContainer.src = Product.allProducts[35].filepath;
imgContainer1.src = Product.allProducts[39].filepath;
imgContainer2.src = Product.allProducts[40].filepath;

var skip  = [];
skip[0]='17'; //game over
skip[1]='35'; //spin
skip[2]='39'; //winner
skip[3]='40'; //winner
skip[4]='3'; //amazonjackpot
skip[4]='3'; //amazonjackpot
skip[4]='3'; //amazonjackpot
skip[4]='3'; //amazonjackpot
skip[4]='3'; //amazonjackpot
skip[4]='3'; //amazonjackpot


function gameOver() {
    imgContainer.src = Product.allProducts[17].filepath;
    imgContainer1.src = Product.allProducts[17].filepath;
    imgContainer2.src = Product.allProducts[17].filepath;
}

function randomProduct3() {

    var randomIdx = Math.floor(Math.random() * Product.allProducts.length);
    var randomIdxNS1 = Math.floor(Math.random() * Product.allProducts.length);
    var randomIdxNS2 = Math.floor(Math.random() * Product.allProducts.length);
    while (skip.includes(randomIdx) || skip.includes(randomIdxNS1) | skip.includes(randomIdxNS2)) {
         randomIdx = Math.floor(Math.random() * Product.allProducts.length);
         randomIdxNS1 = Math.floor(Math.random() * Product.allProducts.length);
         randomIdxNS2 = Math.floor(Math.random() * Product.allProducts.length);
    }
    
    imgContainer.src = Product.allProducts[randomIdx].filepath;
    imgContainer1.src = Product.allProducts[randomIdxNS1].filepath;
    imgContainer2.src = Product.allProducts[randomIdxNS2].filepath;
}

function randomProduct() {
    var randomIdx = Math.floor(Math.random() * Product.allProducts.length);
    var randomIdxNS1 = Math.floor(Math.random() * Product.allProducts.length);
    var randomIdxNS2 = Math.floor(Math.random() * Product.allProducts.length);
    imgContainer.src = Product.allProducts[1].filepath;
    imgContainer1.src = Product.allProducts[2].filepath;
    imgContainer2.src = Product.allProducts[3].filepath;
}

function randomProduct1() {
    var randomIdx = Math.floor(Math.random() * Product.allProducts.length);
    var randomIdxNS1 = Math.floor(Math.random() * Product.allProducts.length);
    var randomIdxNS2 = Math.floor(Math.random() * Product.allProducts.length);
    imgContainer.src = Product.allProducts[1].filepath;
    imgContainer1.src = Product.allProducts[2].filepath;
    imgContainer2.src = Product.allProducts[3].filepath;
}

function randomProduct2() {
    var randomIdx = Math.floor(Math.random() * Product.allProducts.length);
    var randomIdxNS1 = Math.floor(Math.random() * Product.allProducts.length);
    var randomIdxNS2 = Math.floor(Math.random() * Product.allProducts.length);
    imgContainer.src = Product.allProducts[1].filepath;
    imgContainer1.src = Product.allProducts[2].filepath;
    imgContainer2.src = Product.allProducts[3].filepath;
}