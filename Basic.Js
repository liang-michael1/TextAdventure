//start
//text prompts
var player = prompt("whats your characters name?")
var weapon = prompt('what is your charcters weapon? Hammer, Sword, Fist, and Pole Arm')
var transport = prompt("Whats your form of transportation? Horse, goat, or camel?")

var intro;
intro = ("You are in the midevil times, and you have been requested to ride your " + transport + " to the kings castle. The only thing is the journey you are about to embark on is full of terrors and suprises ")

var firestaff_text;
firestaff_text = ("Good Luck " + player)

var has_staff;
has_staff = "Losing sunlight fast, You decide to stop and set up camp for loding and dinner"

var no_staff;
no_staff = "You decide against setting up camp, and decide to head straight to the kings castle with urgency."
var has_fight;
has_fight = ("you have beaten the ghost with your" + weapon)

var no_fight;
no_fight = ("You have died")

var has_crux;
has_crux = ("You go towards the noise and you see a amphibian like creature in the act of kidnapping a nearby villager, with your " + weapon + " you quickly take him out")

var no_crux
no_crux = ("You ignore the shreik and you go about your own way. As you ride off the sound intensifies. You have taken the most efficient route.")

var muchthings;
muchthings = false;

var spare;
spare = "I will let you off this time. Next time you wont be so lucky"

var kill;
kill = ("Anyone who crosses me will taste my " + weapon)

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

alert("GiddyUp !");
var user_play;


while (muchthings == false) {

    user_play = confirm(player + ", are you ready to ride through the forest of no return?");

    if (user_play == true) {
        alert("Do you willingly choose to embark on this mission?");
        alert(intro);

        firestaff = confirm("You have been on your journey for the past 6 hours, and losing sunlight fast.Not to mention You have felt an onminous pressence since you left home. Will we OK-camp near the forest or CANCEL-ride through the night");
        alert(firestaff_text);

        if (firestaff == true) {
            alert(has_staff);
        }
        else {
            alert(no_staff);
        }
        fightscene = confirm("You are being attacked will you CANCEL-RUN or OK-ATTACK ")
        if (fightscene == true) {
            alert(has_fight);
        }
        else {
            alert(no_fight);
        }

        remarks = confirm("you have beaten the enemy will you OK-spare or CANCEL-Kill ")
        if (remarks == true) {
            alert(spare);
        }
        else {
            alert(kill);
        }

        crux = confirm("You hear a shriek..... Will you take a detour and check it out? OK-Check it out or CANCEL-keep on trucking ")
        if (crux == true) {
            alert(has_crux);
        } else {
            alert(no_crux);
        }
    }

    alert("hello");
    muchthings = confirm("do you wanna leave?")
}


/*
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
*/


