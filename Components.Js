//text prompts
var intro;
intro = "You have woken up in the Avatar world in the year 3000. You notice that you have been enclosed in a block of ice in the middle of the ocean. You stare at the glacier you emerge from and notice a firestaff. You reach in to grab it"

var firestaff_text;
firestaff_text = "A insane gust of air cuts by. You notice an air nation blimp swoop low. You without a doubt now know you are being targeted."

var has_staff;
has_staff = "Your fight or flight response triggers and you instinctly grab the firestaff and propell yourself towards the air blimp."

var no_staff;
no_staff = "You are defenseless. You have beached yourself and decide to jump into the water to avoid the fight. Being a firebender, you cannot use your bending and you have now drown. Not a smart choice on out end huh?"

var muchthings;
muchthings = false;

//start
var player = prompt("whats your characters name?")
var weapon = prompt('what is your charcters weapon')
var shoe = prompt("whats your charcters shoe size?")


alert("Air Nation Attack!!!");
var user_play;


while (muchthings == false) {

  user_play = confirm(player + " you ready to battle?");

  if (user_play == true) {
    alert("Do you willingly choose to embark on this mission?");
    alert(intro);

    firestaff = confirm("Do you want to pick up staff?");
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