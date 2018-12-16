var questionArr = [
    question1 = {
        questionText: "Which of these can NOT be crafted into armor?",
        answer1: "wood",
        answer2: "diamond",
        answer3: "iron",
        answer4: "leather",
        correctAnswer: "wood",
        picture: "<img src='assets/images/Inkedwood.jpg' height='200' width='auto'></img>"
    },

    question2 = {
        questionText: "How do you make a large chest?",
        answer1: "Place two chests next to each other",
        answer2: "Place one chest on top of another",
        answer3: "Craft it by placing two chests next to each other in your workbench",
        answer4: "Use twice as much wood in the workbench",
        correctAnswer: "Place two chests next to each other",
        picture: "<img src='assets/images/chests.png' height='200' width='auto'></img>"
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
        $("#score").text("Unanswered: " + timeouts + " Losses: " + losses + " Wins: " + wins);
        clearInterval(intervalId);
        i++;
    }

    function lost() {
        losses++;
        $("#game").css("display", "none");
        $("#scoreBoard").css("display", "block");
        $("#winLossText").text("You lost!");
        setWinLoss();
    }

    function win() {
        wins++;
        $("#game").css("display", "none");
        $("#scoreBoard").css("display", "block");
        $("#winLossText").text("You won!");
        setWinLoss();
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
        if (questionArr[i].answer1.text === questionArr[i].correctAnswer.text) {
            win();
        } else {
            lost();
        }
    });
    $("#answerChoiceTwo").click(function () {
        if (questionArr[i].answer2 === questionArr[i].correctAnswer) {
            win();
        } else {
            lost();
        }
    });
    $("#answerChoiceThree").click(function () {
        if (questionArr[i].answer3 === questionArr[i].correctAnswer) {
            win();
        } else {
            lost();
        }
    });
    $("#answerChoiceFour").click(function () {
        if (questionArr[i].answer4 === questionArr[i].correctAnswer) {
            win();
        } else {
            lost();
        }
    });


});

