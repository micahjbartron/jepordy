import QuestionsService from "../Services/QuestionsService.js";
import store from "../store.js";

//Private
function _draw() {
  let questions = store.State.questions;
  let template = "";
  questions.forEach(q => {
    template += q.template
  })
  document.getElementById('questions').innerHTML = template
  console.log(questions);
}

function _drawDetails() {
  let question = store.State.activeQuestion
  document.getElementById('active-question').innerHTML = question.QuestionTemplate

}

//Public
export default class questionsController {
  constructor() {
    store.subscribe("questions", _draw);
    store.subscribe("activeQuestion", _drawDetails)
    QuestionsService.getApiRandom();
  }



}
