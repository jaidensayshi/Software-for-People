class Item {

    constructor(n, btn) {
        this.price = (+n + 1) * 50;
        this.id = n;
        this.on = false;
        this.img = document.getElementById(n);
        this.btn = btn;
    }

    /*resetColor() {
        this.btn.style.borderColor = "white";
    }*/

    choose() {
        if(this.on) {
            this.turnOff();
            availBalance += this.price;
        }
        else {
            if(availBalance >= this.price) {
                availBalance -= this.price;
                this.turnOn();
            } 
            else {
                buttonBad(this.btn);
            }
        }
    }

    

    

    // i'm making turnOff and turnOn their own methods because they'll get called outside of here
    // like when the pos/neg flips or the player can no longer afford their choices
    // i'll go through the whole array of these and turn em all off
    turnOn() { 
        this.on = true;
        this.img.style.opacity = 100;
        this.btn.style.opacity = 100;
        // change btn image to be "selected", or put some kind of outline, or something. 
        // maybe just btn is full opacity when selected, and when not selected is only full on hover? 
        // food for thought
    }

    turnOff() {
        this.on = false;
        this.img.style.opacity = 0;
        this.btn.style.opacity = "50%";
        // visually unselect btn 
    }
    
}

function buttonBad(btn) {
    btn.style.borderColor = "red";
    const myTimeout = setTimeout(function() {
        btn.style.borderColor = "white";
    }, 350);
}

//function resetColor(btn) {
  //  btn.style.borderColor = "white";
//}

const urlParams = new URLSearchParams(window.location.search); 
var balanceNum = 1;
if (urlParams.size != 0) balanceNum = urlParams.get('balance');
var valorous = true;
if (balanceNum < 0) valorous = false;


var availBalance = Math.abs(balanceNum);
var balanceText = document.getElementById("balance");
var value = document.getElementById("value");
var text = document.getElementById("text");
balanceText.innerHTML = balanceNum;


var choices = document.querySelectorAll(".choice");
var buttons = document.querySelectorAll(".btnImg");
var prices = document.querySelectorAll(".price");
var items = [];
// for each accessory option
for(let i = 0; i < choices.length; i++) {
    items[i] = new Item(i, choices[i]);
}

if(!valorous) {
    document.getElementById("style").setAttribute("href", "caenum.css");
    document.getElementById("model").src = "images/caenum/model.png";
    // change all images to caenum and turn them off
    items.forEach(item => {
        item.img.src= "images/caenum/" + item.id + ".png";
    })
    buttons.forEach(button => {
        button.src = "images/caenum/" + button.id + ".png";
    })
    prices.forEach(price => {
        price.innerHTML = "caenum";
    })
    text.innerHTML = "Earn valor to try valorous abacus styles, or choose an abacus to display your caenum."
}

var micas = document.querySelectorAll(".mica");

function randomMica() {
    micas.forEach(mica => {
        mica.style.bottom = Math.floor(Math.random() * window.innerHeight) + "px";
        mica.style.right = Math.floor(Math.random() * window.innerWidth) + "px";
        mica.style.width = Math.floor(Math.random() * 30 + 10) + "vw";
        //mica.style.width = Math.floor(Math.random() * 15 + 10) + "vw";
        mica.style.filter = "hue-rotate(" + (Math.floor(Math.random() * 90) - 20) + "deg)";
    })
}


randomMica();


var valorDeposit = [
    "Keep up the great work, citizen!",
    "At this rate, you'll be the next Maximillian Loxlee!",
    "You should be proud of your impressive balance!",
]

var valorDebit = [
    "Uh oh! You'll need to work hard to balance that out.",
    "Be careful not to fall too far.",
]

var caenumDeposit = [
    "Progress! Just keep contributing and you'll break even soon.",
    "There we go! You're improving.",
]

var caenumDebit = [
    "If you just worked a little harder you could be a good member of society.",
    "We're all rooting for you - when will you get your act together?",
]

function textUpdate(valor) {
    if(valorous && valor) { // if valorous and +valor
        text.innerHTML = valorDeposit[Math.floor(Math.random() * valorDeposit.length)]
    } else if (valorous) { // if valorous and -valor
        text.innerHTML = valorDebit[Math.floor(Math.random() * valorDebit.length)]
    } else if (valor) { // if caenumous and +valor
        text.innerHTML = caenumDeposit[Math.floor(Math.random() * caenumDeposit.length)]
    } else { // if caenumous and -valor
        text.innerHTML = caenumDebit[Math.floor(Math.random() * caenumDebit.length)]
    }
}

function updateBalance(valor) {
    // update balance: 
    // if adding valor
    if(valor) {
        balanceNum = +balanceNum + +value.value;
    }
    // else (subtracting valor)
    else {
        balanceNum = +balanceNum - +value.value;
    }
    balanceText.innerHTML = balanceNum;

    // check if changed from pos to neg/vice versa/broke even
    // if zero, go to zero page
    if (+balanceNum == 0) {
        window.location.href = 'zero.html';
    } 
    // if flipped to caenum
    else if(valorous && +balanceNum < 0) {
        // change style sheet
        document.getElementById("style").setAttribute("href", "caenum.css");
        document.getElementById("model").src = "images/caenum/model.png";
        // change all images to caenum and turn them off
        items.forEach(item => {
            item.turnOff();
            item.img.src= "images/caenum/" + item.id + ".png";
        })
        buttons.forEach(button => {
            button.src = "images/caenum/" + button.id + ".png";
        })
        prices.forEach(price => {
            price.innerHTML = "caenum";
        })
        // nothing is selected, so availableBalance = |balance|
        availBalance = Math.abs(+balanceNum);
        valorous = false;
        text.innerHTML = "How disappointing! You used to be a good person."
    } 
    // if flipped to valor
    else if(valorous == false && +balanceNum > 0) {
        // change style sheet
        document.getElementById("style").setAttribute("href", "valor.css");
        document.getElementById("model").src = "images/valor/model.png";
        // change all images to valor and turn them off
        items.forEach(item => {
            item.turnOff();
            item.img.src= "images/valor/" + item.id + ".png";
        })
        buttons.forEach(button => {
            button.src = "images/valor/" + button.id + ".png";
        })
        prices.forEach(price => {
            price.innerHTML = "valor";
        })
        // nothing is selected, so availableBalance = |balance|
        availBalance = Math.abs(+balanceNum);
        valorous = true;
        randomMica();
        text.innerHTML = "Congratulations! All you had to do was put your mind to it."
    } 
    // if no change in state
    else {
        // this section runs in the state doesn't flip
        if(valor) {
            if(valorous) {
                availBalance = +availBalance + +value.value;
            }
            else {
                availBalance = +availBalance - +value.value;
            }
        } else {
            if(valorous) {
                availBalance = +availBalance - +value.value;
            } else {
                availBalance = +availBalance + +value.value;
            }
        }
        if(+availBalance < 0){
            items.forEach(item => {
                item.turnOff();
                availBalance = Math.abs(balanceNum);
            })
        }
        textUpdate(valor);
    }
}
