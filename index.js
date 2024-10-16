const express = require('express');
const app = express();

const questions = [
  {
    text: "What is a firewall?",
    options: ["A type of malware", "A hardware or software security device", "A programming language", "A network protocol"],
    correctAnswer: "A hardware or software security device"
  },
  // Add more questions here
];

app.get('/api/questions', (req, res) => {
  res.json(questions[currentQuestionIndex]);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});