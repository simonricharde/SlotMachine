Product.allProducts = [];

// create objects for our Products
function Product(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.displayedCount=0;
  this.previousImageIndex=0;
  Product.allProducts.push(this);
}
new Product('777','img/slotimages/777.jpg');
new Product('amazonbox','img/slotimages/amazonbox.gif');
new Product('amazondash','img/slotimages/amazondash.gif');
new Product('amazonjackpot','img/slotimages/amazonjackpot.gif');
new Product('Amazon_smart_home_2','img/slotimages/Amazon_smart_home_2.gif');
new Product('apple','img/slotimages/apple.png');
new Product('awards','img/slotimages/awards.jpg');
new Product('aws','img/slotimages/aws.gif');
new Product('ballgif','img/slotimages/ballgif.gif');
new Product('blueberry_final_d','img/slotimages/blueberry_final_d.gif');
new Product('bus','img/slotimages/bus.gif');
new Product('cherry','img/slotimages/cherry.gif');
new Product('cocktail','img/slotimages/cocktail.jpg');
new Product('dance','img/slotimages/dance.gif');
new Product('dog','img/slotimages/dog.gif');
new Product('dollars','img/slotimages/dollars.png');
new Product('fedex','img/slotimages/fedex.gif');
new Product('gameovergif','img/slotimages/gameovergif.gif');
new Product('gold','img/slotimages/gold.jpg');
new Product('golfballs','img/slotimages/golfballs.jpg');
new Product('google','img/slotimages/google.gif');
new Product('grapes','img/slotimages/grapes.gif');
new Product('greeapple','img/slotimages/greeapple.gif');
new Product('greenapple','img/slotimages/greenapple.jpg');
new Product('groupdance','img/slotimages/groupdance.gif');
new Product('jackpot-gif-1-1','img/slotimages/jackpot-gif-1-1.gif');
new Product('jackpot','img/slotimages/jackpot.jpg');
new Product('jackpotcoins','img/slotimages/jackpotcoins.jpg');
new Product('jackpotgif','img/slotimages/jackpotgif.gif');
new Product('kid','img/slotimages/kid.gif');
new Product('loops','img/slotimages/loops.jpg');
new Product('lowcoins','img/slotimages/lowcoins.jpg');
new Product('melons','img/slotimages/melons.gif');
new Product('packing','img/slotimages/packing.gif');
new Product('products','img/slotimages/products.gif');
new Product('spin','img/slotimages/spin.jpg');
new Product('starberry','img/slotimages/starberry.gif');
new Product('strawberry','img/slotimages/strawberry.jpg');
new Product('surprise_dribbble','img/slotimages/surprise_dribbble.gif');
new Product('winner','img/slotimages/winner.gif');
new Product('YetToWin','img/slotimages/YetToWin.gif');

var imgContainer = document.getElementById('slot1');
var imgContainer1 = document.getElementById('slot2');
var imgContainer2 = document.getElementById('slot3');

imgContainer.addEventListener('click', randomProduct);
imgContainer1.addEventListener('click', randomProduct1);
imgContainer2.addEventListener('click', randomProduct2);

imgContainer.src = Product.allProducts[1].filepath;
imgContainer1.src = Product.allProducts[2].filepath;
imgContainer2.src = Product.allProducts[3].filepath;

function randomProduct() {
    var randomIdx = Math.floor(Math.random() * Product.allProducts.length);
    var randomIdxNS1 = Math.floor(Math.random() * Product.allProducts.length);
    var randomIdxNS2 = Math.floor(Math.random() * Product.allProducts.length);
}

function randomProduct1() {
    var randomIdx = Math.floor(Math.random() * Product.allProducts.length);
    var randomIdxNS1 = Math.floor(Math.random() * Product.allProducts.length);
    var randomIdxNS2 = Math.floor(Math.random() * Product.allProducts.length);
}

function randomProduct2() {
    var randomIdx = Math.floor(Math.random() * Product.allProducts.length);
    var randomIdxNS1 = Math.floor(Math.random() * Product.allProducts.length);
    var randomIdxNS2 = Math.floor(Math.random() * Product.allProducts.length);
}