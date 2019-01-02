var questionArr = [
    question1 = {
        questionText: "Which of these can NOT be crafted into armor?",
        answer1: "wood",
        answer2: "diamond",
        answer3: "iron",
        answer4: "leather",
        correctAnswer: "wood",
        picture: "<img src='assets/images/Inkedwood.jpg' height='200' width='auto'/>"
    },

    question2 = {
        questionText: "How do you make a large chest?",
        answer1: "Place two chests next to each other",
        answer2: "Place one chest on top of another",
        answer3: "Craft it by placing two chests next to each other in your workbench",
        answer4: "Use twice as much wood in the workbench",
        correctAnswer: "Place two chests next to each other",
        picture: "<img src='assets/images/chests.png' height='200' width='auto'/>"
    },

    question3 = {
        questionText: "Which of these can be used as fuel for your furnace?",
        answer1: "A Bucket of Lava",
        answer2: "All of these",
        answer3: "Charcoal",
        answer4: "Coal",
        correctAnswer: "All of these",
        picture: "<img src='assets/images/Lava_Bucket.png' height='200' width='auto'/>"
    },

    question4 = {
        questionText: "Which tool must you use to mine stone and ores?",
        answer1: "Shovel",
        answer2: "Axe",
        answer3: "Pickaxe",
        answer4: "Hoe",
        correctAnswer: "Pickaxe",
        picture: "<img src='assets/images/pickaxe.jpg' height='200' width='auto'/>"
    },

    question5 = {
        questionText: "What must you use to collect water and lava?",
        answer1: "cup",
        answer2: "bowl",
        answer3: "thermos",
        answer4: "bucket",
        correctAnswer: "bucket",
        picture: "<img src='assets/images/bucketWater.gif' height='200' width='auto'/>"
    },

    question6 = {
        questionText: "Which two blocks are affected by gravity?",
        answer1: "Sand and Gravel",
        answer2: "Dirt and Gravel",
        answer3: "Sand and Dirt",
        answer4: "Gravel and Wood",
        correctAnswer: "Sand and Gravel",
        picture: "<img src='assets/images/sand_fall.gif' height='200' width='auto'/>"
    },

    question7 = {
        questionText: "What block or blocks are formed when water meets lava (in any circumstance)?",
        answer1: "Just Obsidian",
        answer2: "Dirt and Obsidian",
        answer3: "Obsidian, Cobblestone and Stone",
        answer4: "Cobblestone and Dirt",
        correctAnswer: "Obsidian, Cobblestone and Stone",
        picture: "<img src='assets/images/lava.gif' height='200' width='auto'/>"
    },

    question8 = {
        questionText: "Which of these is the name of an alternate world to which you can travel?",
        answer1: "The Void",
        answer2: "The Nether",
        answer3: "Hell",
        answer4: "The Under",
        correctAnswer: "The Nether",
        picture: "<img src='assets/images/nether.jpg' height='200' width='auto'/>"
    },

    question9 = {
        questionText: "How many blocks of iron ore does it take to make one iron ingot?",
        answer1: "Nine",
        answer2: "Two",
        answer3: "Eight",
        answer4: "One",
        correctAnswer: "One",
        picture: "<img src='assets/images/make_iron_ingot.png' height='200' width='auto'/>"
    },

    question10 = {
        questionText: "Skeletons drop bones, and pigs drop pork chops. What do zombies drop?",
        answer1: "Brains",
        answer2: "Rotten Flesh",
        answer3: "Nothing",
        answer4: "Bones",
        correctAnswer: "Rotten Flesh",
        picture: "<img src='assets/images/zombie.jpg' height='200' width='auto'/>"
    }];

$(document).ready(function () {
    //starting variables for game
    var intervalId;
    var clockRunning = false;
    var time = 30;
    var losses = 0;
    var timeouts = 0;
    var wins = 0;
    var timeoutPicture = "<img src='assets/images/running-out-of-time.jpg' height='200' width='auto'/>";
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
        if (time === 3) {
            $("#timeAlmostOut-audio").get(0).play();
        } else if (time === 0) {
            stop();
            $("#game").css("display", "none");
            $("#scoreBoard").css("display", "block");
            timeouts++;
            $("#score").text("Unanswered: " + timeouts + " Wrong Answers: " + losses + " Right Answers: " + wins);
            $("#winLossText").text("You ran out of time!");
            $("#picture").html(timeoutPicture);
            $("#timeout-audio").get(0).play();
            i++;
            setTimeout(nextQuestion, 4000);
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
        time = 30;
        $("#timer").text("Time Left: " + time + " seconds");
    }

    // function for replay button
    $("#replay").click(function () {
        $("#replay").css("display", "none");
        $("#game").css("display", "block");
        i = 0;
        wins = 0;
        losses = 0;
        timeouts = 0;
        $("#scoreBoard").css("display", "none");
        start();
        startGame();
        // nextQuestion();
    });

    // function for onclick of start button
    $("#startButton").click(function () {
        $("#startButton").css("display", "none");
        $("#game").css("display", "block");
        $("#next-audio").get(0).play();
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
        $("#score").text("Unanswered: " + timeouts + " Wrong Answers: " + losses + " Right Answers: " + wins);
        stop();
        i++;
        setTimeout(nextQuestion, 4000);
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

    function nextQuestion() {
        if (i === 10) {
            $("#winLossText").text("Here's how you did!:");
            $("#levelUp-audio").get(0).play();
            $("#score").text("Unanswered: " + timeouts + " Wrong Answers: " + losses + " Right Answers: " + wins);
            $("#answer").text("");
            $("#picture").html("<img src='assets/images/gameOver.png' height='200' width='auto'></img>");
            $("#replay").css("display", "block");
            $("#replay").text("Replay?");
        } else {
            $("#scoreBoard").css("display", "none");
            $("#game").css("display", "block");
            $("#next-audio").get(0).play();
            start();
            startGame();
        }
    }

    // function for picking an answer choice 
    $("#answerChoiceOne").click(function () {
        if (questionArr[i].answer1 === questionArr[i].correctAnswer) {
            win();
            $("#yes-audio").get(0).play();
        } else {
            lost();
            $("#no-audio").get(0).play();
        }
    });
    $("#answerChoiceTwo").click(function () {
        if (questionArr[i].answer2 === questionArr[i].correctAnswer) {
            win();
            $("#yes-audio").get(0).play();
        } else {
            lost();
            $("#no-audio").get(0).play();
        }
    });
    $("#answerChoiceThree").click(function () {
        if (questionArr[i].answer3 === questionArr[i].correctAnswer) {
            win();
            $("#yes-audio").get(0).play();
        } else {
            lost();
            $("#no-audio").get(0).play();
        }
    });
    $("#answerChoiceFour").click(function () {
        if (questionArr[i].answer4 === questionArr[i].correctAnswer) {
            win();
            $("#yes-audio").get(0).play();
        } else {
            lost();
            $("#no-audio").get(0).play();
        }
    });
    $("#startButton").mouseenter(function () {
        $("#break-audio").get(0).play();
    });

});

