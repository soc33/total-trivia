var questionArr = [
    question1 = {
        questionText: "question1",
        answer1: "a1",
        answer2: "a2",
        answer3: "a3",
        answer4: "a4",
        correctAnswer: "a1",
        picture: "<img src='' height='200' width='auto'></img>"
    },

    question2 = {
        questionText: "question2",
        answer1: "b1",
        answer2: "b2",
        answer3: "b3",
        answer4: "b4",
        correctAnswer: "b2",
        picture: "<img src='' height='200' width='auto'></img>"
    }];

$(document).ready(function () {
    //starting variables for game
    var intervalId;
    var clockRunning = false;
    var time = 5;
    var losses = 0;
    var timeouts = 0;
    var wins = 0;
    var timeoutPicture = "<img src='assets/images/running-out-of-time.jpg' height='200' width='auto'></img>";
    // var userName = prompt("What's your name?");

    //function to start the timer
    function start() {
        if (!clockRunning) {
            clockRunning = true;
            intervalId = setInterval(count, 1000);
        }
    }

    //function to check if user is out of time
    function checkForTimeOut() {
        if (time === 0) {
            stop();
            $("#game").css("display", "none");
            $("#scoreBoard").css("display", "block");
            timeouts++;
            $("#score").text("Unanswered: " + timeouts + " Losses: " + losses + " Wins: " + wins);
            $("#winLossText").text("You ran out of time!");
            $("#picture").html(timeoutPicture);
            i++;
        }
    }

    // function to run the clock
    function count() {
        time--;
        $("#timer").text("Time Left: " + time + " seconds");
        checkForTimeOut();
    }

    // function to stop the clock
    function stop() {
        clockRunning = false;
        clearInterval(intervalId);
        time = 5;
        $("#timer").text("Time Left: " + time + " seconds");
    }

    // function for onclick of start button
    $("#startButton").click(function () {
        $("#startButton").css("display", "none");
        $("#game").css("display", "block");
        start();
        startGame();
    });

    var i = 0;
    //function for displaying questions and answer choices
    function startGame() {
        $("#question").text(questionArr[i].questionText);
        $("#answerChoiceOne").text(questionArr[i].answer1);
        $("#answerChoiceTwo").text(questionArr[i].answer2);
        $("#answerChoiceThree").text(questionArr[i].answer3);
        $("#answerChoiceFour").text(questionArr[i].answer4);
    }

    function setWinLoss() {
        $("#answer").text("The answer was: " + questionArr[i].correctAnswer);
        $("#picture").html(questionArr[i].picture);
        i++;
    }

    function lost() {
        losses++;
        $("#winLossText").text("You lost!");
        setWinLoss();
    }

    function win() {
        wins++;
        $("#winLossText").text("You won!");
        setWinLoss;
    }

    //function for on click of next button
    $("#next").click(function () {
        $("#scoreBoard").css("display", "none");
        $("#game").css("display", "block");
        start();
        startGame();

    });

    // function for picking an answer choice 
    $("#answerChoiceOne").click(function () {
        if (questionArr[i].answer1 === questionArr[i].correctAnswer) {
            win();
        } else {
            lost();
        }
    });
    $("#answerChoiceTwo").click(function () {
        if (questionArr[i].answer1 === questionArr[i].correctAnswer) {
            win();
        } else {
            lost();
        }
    });
    $("#answerChoiceThree").click(function () {
        if (questionArr[i].answer1 === questionArr[i].correctAnswer) {
            win();
        } else {
            lost();
        }
    });
    $("#answerChoiceFour").click(function () {
        if (questionArr[i].answer1 === questionArr[i].correctAnswer) {
            win();
        } else {
            lost();
        }
    });


});

