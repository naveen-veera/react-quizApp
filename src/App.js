import { Component } from "react";
import classes from "./App.module.css"
import Button from "./components/UI/Button/Button";
import Card from "./components/UI/Card/Card";
import Banner from "./components/UI/Banner/Banner"
import axios from "axios";
import questions from './Data/quizQuestions';

class App extends Component {

  state = {
    startQuiz : false,
    questionSet : [],
    questionsCorrect : 0,
    questionsInTotal : 5,
    totalTries : 0,
    showResult : false
  }

  onEachTry = () => {
    this.setState(prevState => (
      {totalTries : prevState.totalTries + 1}
    ));

  }

  showEndResult = () => {
    
    this.setState(prevState => (
      {
        startQuiz: false,
        showResult : true,
        questionSet: [],
        totalTries : 0
      }
    ))
  }

  onAnswerCorrect = () => {
    if(this.state.questionsCorrect <= this.state.questionsInTotal) {
      this.setState(prevState => {
        return {
          questionsCorrect : prevState.questionsCorrect + 1
        }
      })
    }
  }

  onQuizToggler = () => {
    this.setState({startQuiz : true, showResult : false, questionsCorrect : 0, totalTries: 0});
    this.startQuiz();
  }

   startQuiz = async () => {
    
    let newQuestions = questions;
    console.log("Stared");
    // await axios.get("http://localhost:8080/")
    //     .then(async (res) => {

    //       newQuestions = await res.data;
    //       console.log(newQuestions);

    //     }).catch((error) => {
    //       console.log(error);
    //     })

    let QuestionCards = newQuestions.map((values, ind) => (
      <Card
        key={values.questionId}
        question={values.question}
        correctAnswerMarkUpdate={this.onAnswerCorrect}
        attempt={this.onEachTry}
        options={{
          option1: values.option1,
          option2: values.option2,
          option3: values.option3,
          option4: values.option4
        }}
        answer={values.answer}
      />
    ))
    this.setState({questionSet : QuestionCards, questionsInTotal: QuestionCards.length, startQuiz : true})
  }

  

  render() {

    return (
      <div>
        <h1> <center>Quizz App</center> </h1>
        {this.state.showResult &&  <Banner>You have answered <b>{this.state.questionsCorrect} / {this.state.questionsInTotal} </b> Correctly</Banner>}
        {!this.state.startQuiz && <Button click = {this.onQuizToggler}>Start Quiz</Button>}
        <div className={classes.Questions}>
          {this.state.questionSet}
        </div>
        
        {this.state.totalTries === this.state.questionsInTotal? <Button click = {this.showEndResult}>Show Results</Button> : null}
      </div>
    )
  }

}
export default App;
