/*function promptFunction() {
    let playerName = console.log("what shall your name be?")
    if (playerName === "") {
        console.log("no name was given.....")
    } else {
        (playerName != null)
        console.log(playerName + "welcome to croakymon");
    }
}
*/

//start
function() {
    let name = prompt("whats your characters name?")
    if (name === "") {
        alert("no name was entered..");
    } else if (name != null) {
        alert("Welcome to the text game")
    }
}
function ()

var weapon = prompt('what is your charcters weapon? Hammer, Sword, Fist, and Pole Arm')
var transport = prompt("horse, goat, or camel?")

//text prompts
let intro;
intro = ("You are in the midevil times, and you have been requested to ride your " + transport + " to the kings castle. The only thing is the journey you are about to embark on is full of terrors and suprises ")

let firestaff_text;
firestaff_text = ("Good Luck " + player)

let has_staff;
has_staff = "Losing sunlight fast, You decide to stop and set up camp for loding and dinner"

let no_staff;
no_staff = "You decide against setting up camp, and decide to head straight to the kings castle with urgency."

let muchthings;
muchthings = false;

//start
let player = prompt("whats your characters name?")
let weapon = prompt('what is your charcters weapon? Hammer, Sword, Fist, and Pole Arm')
let transport = prompt("Which is your form of transportation horse, goat, or camel?")


alert("GiddyUp !");
let user_play;


while (muchthings == false) {

    user_play = confirm(player + ", are you ready to ride through the forest of no return?");

    if (user_play == true) {
        alert("Do you willingly choose to embark on this mission?");
        alert(intro);

        firestaff = confirm("You have been on your journey for the past 6 hours, and losing sunlight fast.Not to mention You have felt an onminous pressence since you left home. Will we CONFIRM-camp near the forest or CLOSE-ride through the night");
        alert(firestaff_text);

        if (firestaff == true) {
            alert(has_staff);
        }
        else {
            alert(no_staff);
        }



        alert("R.I.P");
    }

    else {
        alert("Sorry you're a party pooper");
    }

    alert("hello");
    muchthings = confirm("do you wanna leave?")
}

const expr = ("commands")

switch (expr) {
    case '-1':
        alert("Case -1");
        break;
    case '1':
        alert("Case 1");
        break;
    default:
        alert('Sorry, we are out of ' + expr + '.');
}

alert("Is there anything else you'd like?");

