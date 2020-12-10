const questions = [
    {
        questionId : 1,
        question : "Who is the father of our nation ?",
        option1 : "Mahatma Gandhi",
        option2 : "Jawaharlal Nehru",
        option3 : "Donald Trump",
        option4 : "Barrack Obama",
        answer : "Mahatma Gandhi"
    },
    {
        questionId : 2,
        question : "What color is are the leaves ?",
        option1 : "Blue",
        option2 : "Red",
        option3 : "Yellow",
        option4 : "Green",
        answer : "Green"
    },
    {
        questionId : 3,
        question : "What color is the sky ?",
        option1 : "Blue",
        option2 : "Red",
        option3 : "Yellow",
        option4 : "Green",
        answer : "Blue"
    },
    {
        questionId : 4,
        question : "What color is the sky ?",
        option1 : "Blue",
        option2 : "Red",
        option3 : "Yellow",
        option4 : "Green",
        answer : "Blue"
    },
    {
        questionId : 5,
        question : "What color is the fire ?",
        option1 : "Blue",
        option2 : "Red",
        option3 : "Yellow",
        option4 : "Green",
        answer : "Red"
    },
]

export const getRandomQuestions = (questionCount) => {

    let newQuestions = [];
    let questionsGathered = [];
    let randomId = null;

    if(questionCount > questions.length) {
        questionCount = questions.length;
    }
    
    for(let i = 1; i <= questionCount; ) {
        randomId = Math.ceil( Math.random() * questionCount );
        
        if(!questionsGathered.includes(randomId) ) {
            // console.log("Random Id generated ===", randomId);
            questionsGathered.push(randomId);
            // console.log("QuestionFetch ===", questions[randomId-1] );
            newQuestions.push(questions[randomId-1]);
            i++;
        }
    }
    return newQuestions;
}


export default questions;