$(document).ready(function () {
    // Make a trivia game that asks five questions and gives four multiple choice answers to choose from.
    // Use javascript for the functionality and jQuery to transfer it to html document. There will be a timer
    // for each question. The game will silently track correct answers, incorrect answers and timed out answers.
    // After each question is answered it will show correct or incorrect (or timed out) and an image/gif.
    // After all questions are answered it will display the results.

    // Set variables

    //     var canClick = true;

    // $("#message").on("click", function() {
    // if (canClick) {
    //     canClick = false;
    //     doThings();
    //     setTimeout(function(){
    //         canClick = true;
    //     }, 5000);
    // }
    // });

    // function doThings(){
    //     console.log("CLICK");
    // }



    var correctTotal = 0;
    var incorrectTotal = 0;
    var timedOutTotal = 0;

    var qa1 = {
        question: "WHAT COLOR IS A BANANA?",
        answer: "YELLOW",
        wrongAns1: "BLUE",
        wrongAns2: "ORANGE",
        wrongAns3: "RED",
    };
    var qa2 = {
        question: "WHAT COLOR IS AN APPLE?",
        answer: "RED",
        wrongAns1: "BLUE",
        wrongAns2: "ORANGE",
        wrongAns3: "YELLOW",
    };
    var qa3 = {
        question: "WHAT COLOR IS AN ORANGE?",
        answer: "ORANGE",
        wrongAns1: "BLUE",
        wrongAns2: "RED",
        wrongAns3: "YELLOW",
    }
    var qa4 = {
        question: "WHAT COLOR IS AN EGGPLANT?",
        answer: "PURPLE",
        wrongAns1: "BLUE",
        wrongAns2: "RED",
        wrongAns3: "YELLOW",
    }
    var answerChosen = 1;
    var canClick = true;
    startGame();

    function startGame() {
        $(".startButton").unbind().click(function () {
            $(".startButton").slideToggle(300);
            askQuestions();
        });
    }

    function askQuestions() {
        canClick = true
        if (answerChosen == 1) {
            display(qa1);
        }
        if (answerChosen == 2) {
            display(qa2);
        }
        if (answerChosen == 3) {
            display(qa3);
        }
        if (answerChosen == 4) {
            display(qa4);
        }
    }

    function display(obj) {
        $(".answer").off();
        $("#timer").html("15 SECONDS");
        runTimer();

        $("#question").html(obj.question);
        var stringedAns = [];
        stringedAns.push(obj.answer, obj.wrongAns1, obj.wrongAns2, obj.wrongAns3);
        stringedAns.sort(function () { return .5 - Math.random(); });

        $("#answer1").append(stringedAns[0]);
        $("#answer2").append(stringedAns[1]);
        $("#answer3").append(stringedAns[2]);
        $("#answer4").append(stringedAns[3]);
        console.log("before: " + canClick);

        $(".answer").unbind().click(function () {
            if (canClick) {
                canClick = false;
                console.log("after: " + canClick);
                if ($(this).text() == (obj.answer)) {
                    correctTotal++
                    stopTimer();
                    $("#timer").html(obj.answer + " IS CORRECT!");
                    $("#answer1").html("");
                    $("#answer2").html("");
                    $("#answer3").html("");
                    $("#answer4").html("");
                    answerChosen++;

                } else {
                    incorrectTotal++
                    stopTimer();
                    $("#timer").html("INCORRECT!");
                    setTimeout(function () {
                        $("#timer").html("THE CORRECT ANSWER WAS " + obj.answer);
                    }, 1000);
                    $("#answer1").html("");
                    $("#answer2").html("");
                    $("#answer3").html("");
                    $("#answer4").html("");
                    answerChosen++;
                }
                if (answerChosen == 5) {
                    setTimeout(function () {
                        newGame();
                    }, 2000);
                } else {
                    setTimeout(function () {
                        askQuestions();
                    }, 3000);
                }
            }

        });
    }

    function runTimer() {
        timer = 15;
        intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
        if (timer > 0) {
            timer--;
            if (timer < 10) {
                $("#timer").html("0" + timer + " SECONDS")
            } else {
                $("#timer").html(timer + " SECONDS");
            }
        } else {
            stopTimer();
            timedOutTotal++
            answerChosen++
            $("#timer").html("TIME'S UP!")
            setTimeout(function () {
                $("#timer").html("THE CORRECT ANSWER WAS " + obj.answer);
            }, 1000);
            $("#answer1").html("");
            $("#answer2").html("");
            $("#answer3").html("");
            $("#answer4").html("");
            if (answerChosen == 5) {
                setTimeout(function () {
                    newGame();
                }, 2000);
            } else {
                setTimeout(function () {
                    askQuestions();
                }, 3000);
            }
        }
    }

    function newGame() {
        $("#correct").html("CORRECT: " + correctTotal);
        $("#incorrect").html("INCORRECT: " + incorrectTotal);
        $("#timed-out").html("TIMED-OUT: " + timedOutTotal);
        $("#timer").html("");
        $("#question").html("");
        answerChosen = 1;
        setTimeout(function () {
            $("#correct").html("");
            $("#incorrect").html("");
            $("#timed-out").html("");
            correctTotal = 0;
            incorrectTotal = 0;
            timedOutTotal = 0;
            $(".startButton").slideToggle(300);
            startGame();
        }, 3000);
    }
    var timer = 15;
    function stopTimer() {
        clearInterval(intervalId);
    }
});


