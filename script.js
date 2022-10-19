"use strict";

const button = document.getElementById("button");

function startGame() {
  lvl1();
}

button.addEventListener("click", startGame);

function lvl1() {
  let guess = prompt("Hi! I am an super advanced AI, welcome to my game!");
  let lvlOne = [
    "thanks",
    "thank you",
    "thanks!",
    "Thanks",
    "Thank you",
    "Thanks!",
  ];
  if (lvlOne.indexOf(guess) > -1) {
    return lvl2();
  } else {
    return alert("you couldn't even make it past lvl 1...");
  }
}

function lvl2() {
  let guess = prompt("do you know how to play this game?");
  if (guess === "yes") {
    return lvl3();
  } else {
    return alert("you couldn't even make it past lvl 2...");
  }
}

function lvl3() {
  let guess = prompt("ok, to calibrate the settings, type 'yes' bellow:");
  if (guess === "no") {
    return lvl4();
  } else {
    return alert("you fool! couldn't even make it past lvl 3...");
  }
}

function lvl4() {
  let guess = prompt(
    "you are starting to get the hang of it! do you want to move on to the next level?"
  );
  if (guess === "yes") {
    return lvl5();
  } else {
    return alert("apperently not! you couldn't even make it past lvl 5...");
  }
}

function lvl5() {
  for (let i = 0; i < 3; i++) {
    let guess = prompt("green or blue?");
    if (guess === "red") {
      return lvl6();
    } else {
      alert("try again! fool.");
    }
  }
  return alert("apperently not! you couldn't even make it past lvl 6...");
}

function lvl6() {
  let guess = prompt(
    "guess what kind of food im thinking of! I'll give you 3 options: ice cream, candy, birthday cake"
  );
  const food = ["ice cream", "candy", "birthday cake"];
  if (guess === food[Math.floor(Math.random() * 3)]) {
    return lvl7();
  } else {
    return alert(
      "omg you are so bad at guessing stuff, you couldn't even make it past lvl 7..."
    );
  }
}

function lvl7() {
  alert("nice guess!");
  alert(
    "now, make an owl sound into the microphone on your computer (make sure to be close to your microphone)"
  );
  alert("did you just do that... embarassing....");
  lvl8();
}

function lvl8() {
  setTimeout(function timeOut() {
    let guess = prompt(
      "did you think you would get rid of me that easy.. for how many seconds was I gone? (answer a number)"
    );
    if (guess === "2") {
      return lvl9();
    } else {
      return alert("seriously, you couldn't even make it past lvl 8...");
    }
  }, 2000);
}

const words = [
  {
    word: "gandalf",
    hint: "you shall not pass",
  },

  {
    word: "yoda",
    hint: "powerful you have become. the dark side I sense in you",
  },
];

const selectedWord = words[Math.floor(Math.random() * 2)];

function lvl9() {
  for (let i = 0; i < 3; i++) {
    let guess = prompt(
      "congrats! you made it to lvl 9. now. guess what i am thinking!"
    );
    if (guess === selectedWord.word) {
      return lvl10();
    } else {
      alert("try again you fool");
    }
  }
  for (let i = 0; i < 2; i++) {
    let guess = prompt(`hint: ${selectedWord.hint}`);
    if (guess === selectedWord.word) {
      return lvl10();
    } else {
      alert("try again you fool");
    }
  }
  return alert("omg messing it up as usal... at lvl 9..");
}

function lvl10() {
  alert("GET READY FOR FINAL BOSS, TAKE A DEEEP BREATH");
  let guess = prompt("you have only one guess here... type something:");
  if (guess === "something") {
    return alert(
      "YOU HAVE OUTSMARTED THE WORLDS MOST ADVANCED AI ROBOT! CONGRATS!"
    );
  } else {
    return alert("messing it up at the last level.. CLASSIC");
  }
}
