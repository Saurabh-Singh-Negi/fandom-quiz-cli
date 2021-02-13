var readlineSync = require("readline-sync");

var userName = readlineSync.question("Enter your name ");
console.log("Welcome to the football quiz",userName);

var questionArr = [
    {
      question: "Captain of Indian Football team?(first name) ",
      answer: "sunil"
    },
  
    {
      question: "Which country will host the FIFA world cup 2022? ",
      answer: "qatar"
    },
  
    {
      question: "Current FIFA champions? ",
      answer: "france"
    },
  
    {
      question: "Ballon d'Or 2020 winner?(only last name) ",
      answer: "ronaldo"
    },
  
    {
      question: "Which club has won the most champions league title? ",
      answer: "real madrid"
    },
  
    {
      question: "Which country has won the most world cups? ",
      answer: "brazil"
    }
  ];

var score = 0;
function check(question, answer) {
  var userAns = readlineSync.question(question);
  if(userAns === answer) {
    console.log("Yay! you are right");
    score++;
  }

  else {
    console.log("you got it wrong");
  }

  console.log("Current Score:", score);
  console.log("-----------------------");
}

for(var i=0;i<questionArr.length;i++) {
    check(questionArr[i].question,questionArr[i].answer); 
}

var highScores = [
    {
      name: "ABC",
      score: 5
    },
    {
      name: "XYZ",
      score: 4
    }
  ];
  
  console.log("High scorers");
  for(let i=0;i<highScores.length;i++) {
    console.log(highScores[i].name + " " + highScores[i].score )
  }
  
  for(let i=0;i<highScores.length;i++) {
    if(score>highScores[i].score) {
      console.log("You've made it to the high scorers list");
    }
    break;
  }

console.log("Your final score is",score);