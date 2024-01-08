const defaultRadioAnswer = -1;   // -1 for random answer, 0-5 for specific answer
const defaultTextAnswer = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

let saveButton = document.getElementById("btnKaydet");
let surveyGrid = document.getElementById("grdAnketSorular");
let surveyQuestions = surveyGrid.querySelectorAll("table[id^=grdAnketSorular]");

surveyQuestions.forEach(question => {
    let answerElement = question.querySelectorAll("input[type=radio]");

    if (answerElement.length <= 1) {
        let textAnswer = question.querySelector("input[type=text]");
        if (textAnswer) {
            textAnswer.value = defaultTextAnswer;
        } 
    } else {

        if (defaultRadioAnswer == -1) {
            let randomAnswer = Math.floor(Math.random() * answerElement.length);
            answerElement[randomAnswer].checked = true;
        } else {
            answerElement[defaultRadioAnswer].checked = true;
        }
    }

});

// saveButton.click();
