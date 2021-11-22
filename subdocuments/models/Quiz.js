const { Schema, model } = require("mongoose");

const questionSchema = new Schema({
  question: String,
  answer: String,
});

/*
Sample data for this Schema
{
  "name": "Quiz 1",
  "timestamps": {
    "created": 1637585965692,
    "updated": 1637585965692
  },
  "question": [
  {
    "question": "Can JS run in backend?",
    "answer": "Yes it can"
  },
  {
    "question": "Can you access the Window object in the backend?",
    "answer": "We can not, Window only exists in the browser environment"
  }
  ]
}
*/
const quizSchema = new Schema({
  name: { type: String, required: true },
  // nested path subdocument
  timestamps: {
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
  },
  // single nested subdocument
  // a subdocument which refers to an EXTERNAL schema
  // question: questionSchema,
  // an arry of nested subdocuments from an EXTERNAL schema
  questions: [questionSchema],
});

const Quiz = model("quizzes", quizSchema);

module.exports = Quiz;
