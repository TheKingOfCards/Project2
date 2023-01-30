//location variabels 
let createdQuestion = document.querySelector(".createdQuestion")

//Buttons
let newQuestionBtn = document.querySelector(".newQuestion");
let finishBtn = document.querySelector(".finishButton");
let checkAnswersBtn = document.querySelector(".checkAnswers");

newQuestionBtn.addEventListener("click", NewQuestion);
finishBtn.addEventListener("click", MakeQuiz);
checkAnswersBtn.addEventListener("click", CheckAnswer);

let number = 0;
let btnNameNumber = -1;
let btnIdNumber = 0;

let finishedQuiz = document.querySelector(".finishedQuiz");
let pointsDiv = document.querySelector(".points");
pointsDiv.classList.add("hidden");
finishedQuiz.classList.add("hidden");


//Makes a new question every time the 
function NewQuestion()
{
    if(number <= 9)
    {
        btnNameNumber++;
        //New div for question name
        let questionNameDiv = document.createElement("div");
        questionNameDiv.classList.add("questionName");
        createdQuestion.append(questionNameDiv);
    
        //New div for answers
        let answersDiv = document.createElement("div");
        answersDiv.classList.add("answers");
        createdQuestion.append(answersDiv);
    
        //Question number
        number++;
        let qustionNumber = document.createElement("h3");
        qustionNumber.innerHTML = "Question "+ number +" ";
        questionNameDiv.append(qustionNumber);
    
        //Question
        let questionName = document.createElement("input");
        questionName.setAttribute("type", "text");
        questionName.setAttribute("placeholder", "Question");
        questionName.setAttribute("class", "questionName");
        questionNameDiv.append(questionName);
    
        //Answers
        let rightAnswerButton1 = document.createElement("input");
        rightAnswerButton1.setAttribute("type", "radio");
        rightAnswerButton1.setAttribute("name", btnNameNumber);
        rightAnswerButton1.setAttribute("id", btnIdNumber);
        btnIdNumber++;
        rightAnswerButton1.setAttribute("class", "answerInputBtn");
        rightAnswerButton1.style.width = "20px"
        let answer1 = document.createElement("input");
        answer1.setAttribute("type", "text");
        answer1.setAttribute("placeholder", "Answer 1");
        answer1.setAttribute("class", "answerInput");
        answersDiv.append(rightAnswerButton1);
        answersDiv.append(answer1);
    
        let rightAnswerButton2 = document.createElement("input");
        rightAnswerButton2.setAttribute("type", "radio");
        rightAnswerButton2.setAttribute("name", btnNameNumber);
        rightAnswerButton2.setAttribute("id", btnIdNumber);
        btnIdNumber++;
        rightAnswerButton2.setAttribute("class", "answerInputBtn");
        rightAnswerButton2.style.width = "20px"
        let answer2 = document.createElement("input");
        answer2.setAttribute("type", "text");
        answer2.setAttribute("placeholder", "Answer 2");
        answer2.setAttribute("class", "answerInput");
        answersDiv.append(rightAnswerButton2);
        answersDiv.append(answer2);
    
        let rightAnswerButton3 = document.createElement("input");
        rightAnswerButton3.setAttribute("type", "radio");
        rightAnswerButton3.setAttribute("name", btnNameNumber);
        rightAnswerButton3.setAttribute("id", btnIdNumber);
        btnIdNumber++;
        rightAnswerButton3.setAttribute("class","answerInputBtn");
        rightAnswerButton3.style.width = "20px"
        let answer3 = document.createElement("input");
        answer3.setAttribute("type", "text");
        answer3.setAttribute("placeholder", "Answer 3");
        answer3.setAttribute("class", "answerInput");
        answersDiv.append(rightAnswerButton3);
        answersDiv.append(answer3);
    
        let rightAnswerButton4 = document.createElement("input");
        rightAnswerButton4.setAttribute("type", "radio");
        rightAnswerButton4.setAttribute("name", btnNameNumber);
        rightAnswerButton4.setAttribute("id", btnIdNumber);
        btnIdNumber++;
        rightAnswerButton4.setAttribute("class", "answerInputBtn");
        rightAnswerButton4.style.width = "20px";
        let answer4 = document.createElement("input");
        answer4.setAttribute("type", "text");
        answer4.setAttribute("placeholder", "Answer 4");
        answer4.setAttribute("class", "answerInput");
        answersDiv.append(rightAnswerButton4);
        answersDiv.append(answer4);
    }else
    {
        alert("You cannot add anymore questions");
    }
}





//Makes the new quiz
function MakeQuiz()
{
    let finishedBtnName = -1;   
    //Adds hidden to auizmaking and removes it from the finished quiz
    let quizMaking = document.querySelector(".quizMaking");
    quizMaking.classList.add("hidden");
    finishedQuiz.classList.remove("hidden")
    
    //Quiz title
    let finishedHeader = document.querySelector(".finishedHeader");
    let title = document.querySelector(".titleName");
    let quizHeader = document.createElement("h1");
    quizHeader.innerHTML = title.value;
    finishedHeader.append(quizHeader);
    
    //Quiz description
    let finishedDescription = document.querySelector(".finishedDescription");
    let description = document.querySelector(".description");
    let quizDescrition = document.createElement("h2");
    quizDescrition.innerHTML = description.value; 
    finishedDescription.append(quizDescrition);
    

    //Arrays
    quesitons = document.querySelectorAll("input.questionName");
    answers = document.querySelectorAll(".answerInput");

    let theQuiz = document.querySelector(".theQuiz");

    
    let answerAmount = -1;
    let idCheck = -1;
    
    quesitons.forEach((question) => {
        //Question
        finishedBtnName++;
        let quizQuestion = document.createElement("h3");
        quizQuestion.setAttribute("class", "finishedQuesiton")
        quizQuestion.innerHTML = question.value;
        theQuiz.append(quizQuestion);

        //Answers
        let answersDiv = document.createElement("div");
        answersDiv.setAttribute("class", "answersDiv") 
        theQuiz.append(answersDiv);
        for (let i = 0; i < 4; i++) {            
            answerAmount++;
            idCheck++;
            let finishedAnswerBtn = document.createElement("input");
            finishedAnswerBtn.setAttribute("type", "radio");
            finishedAnswerBtn.setAttribute("name", finishedBtnName);
            finishedAnswerBtn.setAttribute("value", 0);
            if(document.getElementById(idCheck).checked)
            {
                finishedAnswerBtn.value = 1;
            }

            finishedAnswerBtn.style.width = "20px";
            
            let answerElement = document.createElement("h4");
            answerElement.innerHTML = answers[answerAmount].value;
            answersDiv.append(finishedAnswerBtn)
            answersDiv.append(answerElement);
        }
    })
}


function CheckAnswer()
{
    finishedQuiz.classList.add("hidden");
    pointsDiv.classList.remove("hidden");
    let points = 0;
    let pointsLabel = document.querySelector(".pointsLabel");

    let anwsers = document.querySelectorAll("input:checked"); 
    for (let anwser = 0; anwser < anwsers.length; anwser++){
        points += parseInt(anwsers[anwser].value, 10);
    }
    
    pointsLabel.innerHTML = points;
}
