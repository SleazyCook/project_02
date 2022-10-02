// ---------------main-counting-variables---------------
// variable - score value (how many puppies)
let score = 0;
//variable - score display (total puppies)
let scoreDisplay = document.getElementById("score");
//  variable - passive rate value (puppeies per second)
let rate = 0;
//variable - passive rate display (puppies per second)
let rateDisplay = document.getElementById("rate");
//variable - cute puppy Button
const puppyButton = document.getElementById("puppy");



// -------------active-clicking-function---------------
//Create a click function within puppy icon
puppyButton.addEventListener('click', function(puppyClick) {
    // if puppy is clicked by user
    if (puppyClick.target.matches('#puppy')) {
        // tell console "you got a puppy!"
        console.log("You got a puppy!");
        // increase score by 1
        score++;
        // display new score on website 
        scoreDisplay.innerText = score;
    }
});



// ------------passive-clicking-function---------------

// Create a function for rate
setInterval(function() {
    // add rate to original score to make new score
    newScore = score += rate;
    // display new score to the score display
    scoreDisplay.innerText = newScore;
    // do this every second
}, 1000);




// ---------------------item:kibble-------------------
// variable - buy button
const kibbleButton = document.getElementById('kibble-button');
// variable - item cost
const kibbleCost = document.getElementById('kibble-cost');
// variable - quantity
const kibbleQuantity = document.getElementById('kibble-owned');
// variable - passive puppies
const kibbleRate = 1;
// variable - initial value of item cost
let kibblePrice = 10;
// variable - initial value of item quntity
let kibbleInventory = 0;

// Create a function for buy button // phone listener
kibbleButton.addEventListener('click'/* || 'touchstart'*/, function(clickKibble) {
    // if user clicks the buy button
    if (clickKibble.target.matches('#kibble-button')) {
        // check to see if score can afford item price
        if (kibblePrice <= score) {
            // tell the console "You bought kibble"
        console.log("You bought kibble");
            // subtract item price from score after purchase
            score = score - kibblePrice;
            // display new score after purchase
            scoreDisplay.innerText = score;
            // add modifier to rateDisplay
            rate = rate + kibbleRate;
            // tell the console updated "puppies per second"
            console.log("Puppies per second : ", rate);
            // display new rate after purchase
            rateDisplay.innerText = rate;
            // raise price after purchase
            kibblePrice = Math.floor(kibblePrice + (kibblePrice/10));
            // tell the console item price
            console.log("Kibble price: ", kibblePrice);
            // display new price after purchase
            kibbleCost.innerText = kibblePrice;
            // update inventory by 1 after purchase
            kibbleInventory++;
            // display updated inventory after purchase
            kibbleQuantity.innerText = kibbleInventory;
            // tell the console update quantity
            console.log("Kibble Owned: ", kibbleInventory);
        }
    // save values 
    } return;
})

// ---------------------item:bone-------------------
/*
Repeat all steps from item:kibble
// but change the following: 
    -change any instance of "kibble" to currentItem
    -update itemRate
    -update itemPrice
*/

const boneButton = document.getElementById('bone-button');
const boneCost = document.getElementById('bone-cost');
const boneQuantity = document.getElementById('bone-owned');
const boneRate = 2;
let bonePrice = 50;
let boneInventory = 0;

boneButton.addEventListener('click', function(clickBone) {
    if (clickBone.target.matches('#bone-button')) {
        if (bonePrice <= score) {
        console.log("You bought a bone");
            score = score - bonePrice;
            scoreDisplay.innerText = score;
            rate = rate + boneRate;
            console.log("Puppies per second : ", rate);
            rateDisplay.innerText = rate;
            bonePrice = Math.floor(bonePrice + (bonePrice/10));
            console.log("Bone price: ", bonePrice);
            boneCost.innerText = bonePrice;
            boneInventory++;
            boneQuantity.innerText = boneInventory;
            console.log("Bones Owned: ", boneInventory);
        }
    } return;
})

// ---------------------item:bed-------------------
/*
Repeat all steps from item:kibble
// but change the following: 
    -change any instance of "kibble" to currentItem
    -update itemRate
    -update itemPrice
*/

const bedButton = document.getElementById('bed-button');
const bedCost = document.getElementById('bed-cost');
const bedQuantity = document.getElementById('bed-owned');
const bedRate = 5;
let bedPrice = 100;
let bedInventory = 0;

bedButton.addEventListener('click', function(clickBed) {
    if (clickBed.target.matches('#bed-button')) {
        if (bedPrice <= score) {
        console.log("You bought a bed");
            score = score - bedPrice;
            scoreDisplay.innerText = score;
            rate = rate + bedRate;
            console.log("Puppies per second : ", rate);
            rateDisplay.innerText = rate;
            bedPrice = Math.floor(bedPrice + (bedPrice/10));
            console.log("Bed price: ", bedPrice);
            bedCost.innerText = bedPrice;
            bedInventory++;
            bedQuantity.innerText = bedInventory;
            console.log("Beds Owned: ", bedInventory);
        }
    } return;
})

// ---------------------item:beef-gravy-------------------
/*
Repeat all steps from item:kibble
// but change the following: 
    -change any instance of "kibble" to currentItem
    -update itemRate
    -update itemPrice
*/

const beefButton = document.getElementById('beef-button');
const beefCost = document.getElementById('beef-cost');
const beefQuantity = document.getElementById('beef-owned');
const beefRate = 10;
let beefPrice = 500;
let beefInventory = 0;

beefButton.addEventListener('click', function(clickBeef) {
    if (clickBeef.target.matches('#beef-button')) {
        if (beefPrice <= score) {
        console.log("You bought a beef");
            score = score - beefPrice;
            scoreDisplay.innerText = score;
            rate = rate + beefRate;
            console.log("Puppies per second : ", rate);
            rateDisplay.innerText = rate;
            beefPrice = Math.floor(beefPrice + (beefPrice/10));
            console.log("Beef price: ", beefPrice);
            beefCost.innerText = beefPrice;
            beefInventory++;
            beefQuantity.innerText = beefInventory;
            console.log("Beef Owned: ", beefInventory);
        }
    } return;
})

// ---------------------item:beef-squeaky-toy-------------------
/*
Repeat all steps from item:kibble
// but change the following: 
    -change any instance of "kibble" to currentItem
    -update itemRate
    -update itemPrice
*/

const toyButton = document.getElementById('toy-button');
const toyCost = document.getElementById('toy-cost');
const toyQuantity = document.getElementById('toy-owned');
const toyRate = 20;
let toyPrice = 1000;
let toyInventory = 0;

toyButton.addEventListener('click', function(clickToy) {
    if (clickToy.target.matches('#toy-button')) {
        if (toyPrice <= score) {
        console.log("You bought a toy");
            score = score - toyPrice;
            scoreDisplay.innerText = score;
            rate = rate + toyRate;
            console.log("Puppies per second : ", rate);
            rateDisplay.innerText = rate;
            toyPrice = Math.floor(toyPrice + (toyPrice/10));
            console.log("Toy price: ", toyPrice);
            toyCost.innerText = toyPrice;
            toyInventory++;
            toyQuantity.innerText = toyInventory;
            console.log("Toys Owned: ", toyInventory);
        }
    } return;
})

// ---------------------item:beef-vitaman-------------------
/*
Repeat all steps from item:kibble
// but change the following: 
    -change any instance of "kibble" to currentItem
    -update itemRate
    -update itemPrice
*/

const vitamanButton = document.getElementById('vitaman-button');
const vitamanCost = document.getElementById('vitaman-cost');
const vitamanQuantity = document.getElementById('vitaman-owned');
const vitamanRate = 50;
let vitamanPrice = 5000;
let vitamanInventory = 0;

vitamanButton.addEventListener('click', function(clickVitman) {
    if (clickVitamin.target.matches('#vitaman-button')) {
        if (vitamanPrice <= score) {
        console.log("You bought a vitaman");
            score = score - vitamanPrice;
            scoreDisplay.innerText = score;
            rate = rate + vitamanRate;
            console.log("Puppies per second : ", rate);
            rateDisplay.innerText = rate;
            vitamanPrice = Math.floor(vitamanPrice + (vitamanPrice/10));
            console.log("Vitmain price: ", vitamanPrice);
            vitamanCost.innerText = vitamanPrice;
            vitamanInventory++;
            vitamanQuantity.innerText = vitamanInventory;
            console.log("Vitmains Owned: ", vitamanInventory);
        }
    } return;
})

// ---------------------item:beef-duck-foot-------------------
/*
Repeat all steps from item:kibble
// but change the following: 
    -change any instance of "kibble" to currentItem
    -update itemRate
    -update itemPrice
*/

const footButton = document.getElementById('foot-button');
const footCost = document.getElementById('foot-cost');
const footQuantity = document.getElementById('foot-owned');
const footRate = 75;
let footPrice = 10000;
let footInventory = 0;

footButton.addEventListener('click', function(clickFoot) {
    if (clickFoot.target.matches('#foot-button')) {
        if (footPrice <= score) {
        console.log("You bought a duck foot");
            score = score - footPrice;
            scoreDisplay.innerText = score;
            rate = rate + footRate;
            console.log("Puppies per second : ", rate);
            rateDisplay.innerText = rate;
            footPrice = Math.floor(footPrice + (footPrice/10));
            console.log("Foot price: ", footPrice);
            footCost.innerText = footPrice;
            footInventory++;
            footQuantity.innerText = footInventory;
            console.log("Feet Owned: ", footInventory);
        }
    } return;
})

// ---------------------item:beef-pig-ear-------------------
/*
Repeat all steps from item:kibble
// but change the following: 
    -change any instance of "kibble" to currentItem
    -update itemRate
    -update itemPrice
*/

const earButton = document.getElementById('ear-button');
const earCost = document.getElementById('ear-cost');
const earQuantity = document.getElementById('ear-owned');
const earRate = 100;
let earPrice = 50000;
let earInventory = 0;

earButton.addEventListener('click', function(clickEar) {
    if (clickEar.target.matches('#ear-button')) {
        if (earPrice <= score) {
        console.log("You bought a pig ear");
            score = score - earPrice;
            scoreDisplay.innerText = score;
            rate = rate + earRate;
            console.log("Puppies per second : ", rate);
            rateDisplay.innerText = rate;
            earPrice = Math.floor(earPrice + (earPrice/10));
            console.log("Ear price: ", earPrice);
            earCost.innerText = earPrice;
            earInventory++;
            earQuantity.innerText = earInventory;
            console.log("Ears Owned: ", earInventory);
        }
    } return;
}) 

// ---------------------item:beef-dog-house-------------------
/*
Repeat all steps from item:kibble
// but change the following: 
    -change any instance of "kibble" to currentItem
    -update itemRate
    -update itemPrice
*/

const houseButton = document.getElementById('house-button');
const houseCost = document.getElementById('house-cost');
const houseQuantity = document.getElementById('house-owned');
const houseRate = 200;
let housePrice = 100000;
let houseInventory = 0;

houseButton.addEventListener('click', function(clickHouse) {
    if (clickHouse.target.matches('#house-button')) {
        if (housePrice <= score) {
        console.log("You bought a dog house");
            score = score - housePrice;
            scoreDisplay.innerText = score;
            rate = rate + houseRate;
            console.log("Puppies per second : ", rate);
            rateDisplay.innerText = rate;
            housePrice = Math.floor(housePrice + (housePrice/10));
            console.log("House price: ", housePrice);
            houseCost.innerText = housePrice;
            houseInventory++;
            houseQuantity.innerText = houseInventory;
            console.log("Houses Owned: ", houseInventory);
        }
    } return;
}) 

// ---------------------item:beef-dog-park-------------------
/*
Repeat all steps from item:kibble
// but change the following: 
    -change any instance of "kibble" to currentItem
    -update itemRate
    -update itemPrice
*/

const parkButton = document.getElementById('park-button');
const parkCost = document.getElementById('park-cost');
const parkQuantity = document.getElementById('park-owned');
const parkRate = 500;
let parkPrice = 500000;
let parkInventory = 0;

parkButton.addEventListener('click', function(clickPark) {
    if (clickPark.target.matches('#park-button')) {
        if (parkPrice <= score) {
        console.log("You bought a dog park");
            score = score - parkPrice;
            scoreDisplay.innerText = score;
            rate = rate + parkRate;
            console.log("Puppies per second : ", rate);
            rateDisplay.innerText = rate;
            parkPrice = Math.floor(parkPrice + (parkPrice/10));
            console.log("Park price: ", parkPrice);
            parkCost.innerText = parkPrice;
            parkInventory++;
            parkQuantity.innerText = parkInventory;
            console.log("Parks Owned: ", parkInventory);
        }
    } return;
}) 

// ---------------------item:beef-dog-show-------------------
/*
Repeat all steps from item:kibble
// but change the following: 
    -change any instance of "kibble" to currentItem
    -update itemRate
    -update itemPrice
*/

const showButton = document.getElementById('show-button');
const showCost = document.getElementById('show-cost');
const showQuantity = document.getElementById('show-owned');
const showRate = 750;
let showPrice = 1000000;
let showInventory = 0;

showButton.addEventListener('click', function(clickShow) {
    if (clickShow.target.matches('#show-button')) {
        if (showPrice <= score) {
        console.log("You bought a dog show");
            score = score - showPrice;
            scoreDisplay.innerText = score;
            rate = rate + showRate;
            console.log("Puppies per second : ", rate);
            rateDisplay.innerText = rate;
            showPrice = Math.floor(showPrice + (showPrice/10));
            console.log("Show price: ", showPrice);
            showCost.innerText = showPrice;
            showInventory++;
            showQuantity.innerText = showInventory;
            console.log("Shows Owned: ", showInventory);
        }
    } return;
}) 

// ---------------------item:beef-dog-celebrity-------------------
/*
Repeat all steps from item:kibble
// but change the following: 
    -change any instance of "kibble" to currentItem
    -update itemRate
    -update itemPrice
*/

const celebrityButton = document.getElementById('celebrity-button');
const celebrityCost = document.getElementById('celebrity-cost');
const celebrityQuantity = document.getElementById('celebrity-owned');
const celebrityRate = 1000;
let celebrityPrice = 5000000;
let celebrityInventory = 0;

celebrityButton.addEventListener('click', function(clickCelebrity) {
    if (clickCelebrity.target.matches('#celebrity-button')) {
        if (celebrityPrice <= score) {
        console.log("You bought a dog celebrity");
            score = score - celebrityPrice;
            scoreDisplay.innerText = score;
            rate = rate + celebrityRate;
            console.log("Puppies per second : ", rate);
            rateDisplay.innerText = rate;
            celebrityPrice = Math.floor(celebrityPrice + (celebrityPrice/10));
            console.log("Celebrity price: ", celebrityPrice);
            celebrityCost.innerText = celebrityPrice;
            celebrityInventory++;
            celebrityQuantity.innerText = celebrityInventory;
            console.log("Celebrities Owned: ", celebrityInventory);
        }
    } return;
}) 