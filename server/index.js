const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  
  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];
  
  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortunes", (req, res) => {
  const fortunes = ["You will win!",
           "You will die!",
           "You will cry.",
           "You shall find joy.",
           "You will run away."
  ];

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortunes = fortunes[randomIndex];
  
  res.status(200).send(randomFortunes);

});

app.get("/api/advice", (req, res) => {
  const advice= ["Just give up!",
           "You will not make it out alive!",
           "It is not worth your time.",
           "Like nike has said, just do it!",
           "Run and never come back!"
  ];

  let randomIndex = Math.floor(Math.random() * advice.length);
  let randomAdvice = advice[randomIndex];
  
  res.status(200).send(randomAdvice);

});

app.get("/api/money", (req, res) => {
  const money= ["$1 has been deposited into your account!",
           "$5 has been deposited in your account",
           "$10,000 has been deposited into your account",
           "$200 has been deposited into our account from your account!",
           "You've failed and get nothing."
  ];

  let randomIndex = Math.floor(Math.random() * money.length);
  let randomMoney = money[randomIndex];
  
  res.status(200).send(randomMoney);

});

app.post("/api/creditcard", (req, res) => {
  let creditCardNumber = req.body.creditcard
  res.status(200).send(`Thankyou! Your credit card number ${creditCardNumber} will be charged $2000.`)
})



app.listen(4000, () => console.log("Server running on 4000"));
