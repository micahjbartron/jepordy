export default class Question {
  constructor(data) {
    this.question = data.question
    this.answer = data.answer
    this.points = data.points

    let urlArr = data.url.split("/")
    this.id = urlArr[urlArr.length - 2]
  }



  get Template() {
    return this.title
  }


  get QuestionTemplate() {
    return `
<div class="card text-left">
        <div class="card-body">
          <h4 class="card-title">NAME: ${this.question}</h4>
          <p class="card-text">Gender: ${this.answer}</p>
          <p class="card-text">Height: ${this.points}</p>
        </div>
      </div>
`
  }
}