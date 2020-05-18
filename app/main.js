//import ValuesController from "./Controllers/ValuesController.js";
import QuestionsController from "./Controllers/questionController.js"

class App {
  questionsController = new QuestionsController();
}

window["app"] = new App();
