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