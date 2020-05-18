import store from "../store.js";
import Question from "../Models/Question.js"


// @ts-ignore
const _api = axios.create({
  baseURL: "https://jservice.io/api/random"
})

class QuestionsService {






  getApiRandom() {
    _api.get("?page=" + store.State.page)
      .then(response => {
        let question = response.data.result.map(nq => new Question(nq))
        store.commit("questions", question)
      })
      .catch(error => {
        console.log(error);

      })
  }
}

const service = new QuestionsService();
export default service;
