var startButton = document.querySelector('#start');
var timerDiv = document.querySelector('.timer');
var timeLeft = 76;

var questionDiv = document.querySelector('#questions');
var questionTitle = document.querySelector('#question-title');
var choices = document.querySelector('#choices');

var challengeText = document.querySelector('#start-screen');


// timerDiv.innerText = 'Time: ' + timeLeft;

function countdown() {
    // timeLeft--;
    // timerDiv.innerText = 'Time: ' + timeLeft;

    timeInterval = setInterval(function () {
        timeLeft--;
        timerDiv.innerText = 'Time: ' + timeLeft;
        if (timeLeft <= 0) {
            timerDiv.innerText = 'Time: 0';
            clearInterval(timeInterval);
            //FUNCTION TO RUN AFTER TIMER REACHES 0
        }
    }, 1000);
};

startButton.addEventListener("click", countdown);
startButton.addEventListener("click", loadQuestion);

function loadQuestion() {
    // var questionLength = questions.length;
    
    challengeText.setAttribute('class', 'hide');
    currentIteration=0;
    // while (currentIteration <= questionLength)
        questionTitle.innerText = questions[currentIteration].question;
        questionDiv.setAttribute('class', '');
        var ans = []
        ans = questions[0].answers;
        
        for (answer in ans) {
            var btn = document.createElement('button');
            btn.innerText = answer;
            choices.appendChild(btn);
        }
}


