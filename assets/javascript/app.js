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
        question: "WHO IS THE GIANT IN CASTLE LEMONGRAB?",
        answer: "LEMONJON",
        wrongAns1: "LEMONHOPE",
        wrongAns2: "EARL OF LEMONGRAB",
        wrongAns3: "TRAVIS",
    };
    var qa2 = {
        question: "WHICH OF THESE IS NOT JAKE’S CHILD?",
        answer: "PEPPERMINT BUTLER",
        wrongAns1: "JAKE JR.",
        wrongAns2: "KIM KIL WHAN",
        wrongAns3: "T.V.",
    };
    var qa3 = {
        question: "WHAT LANGUAGE DOES LADY RAINICORN SPEAK?",
        answer: "KOREAN",
        wrongAns1: "PIG LATIN",
        wrongAns2: "SPANISH",
        wrongAns3: "GERMAN",
    }
    var qa4 = {
        question: "WHO RAISED MARCY AFTER THE MUSHROOM WAR?",
        answer: "SIMON",
        wrongAns1: "JAKE",
        wrongAns2: "BOB",
        wrongAns3: "CINNAMON BUN",
    }
    var answerChosen = 1;
    var canClick = true;
    $("#question").hide();
    $(".answer").hide();
    $("#answer1").hide();
    $("#answer2").hide();
    $("#answer3").hide();
    $("#answer4").hide();
    $(".scoreboard").hide();
    $("#timer").hide()
    startGame();

    function startGame() {
        $(".startButton").unbind().click(function () {
            $(".startButton").slideToggle(300);
            $("#question").slideToggle(300);
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
        $("#question").show();
        $(".answer").show();
        $("#answer1").show();
        $("#answer2").show();
        $("#answer3").show();
        $("#answer4").show();
        $(".scores").show();
        $("#timer").show()
        $("#answer1").append(stringedAns[0]);
        $("#answer2").append(stringedAns[1]);
        $("#answer3").append(stringedAns[2]);
        $("#answer4").append(stringedAns[3]);
        $("#answer1").css({backgroundColor:"rgb(128, 216, 87)"});
        $("#answer2").css({backgroundColor:"rgb(97, 187, 55)"});
        $("#answer3").css({backgroundColor:"rgb(128, 216, 87)"});
        $("#answer4").css({backgroundColor:"rgb(97, 187, 55)"});
        console.log("before: " + canClick);

        $(".answer").unbind().click(function () {
            if (canClick) {
                canClick = false;
                console.log("after: " + canClick);
                if ($(this).text() == (obj.answer)) {
                    correctTotal++
                    stopTimer();
                    $("#timer").html(obj.answer + " IS CORRECT!");
                    clearAnswers();
                    answerChosen++;

                } else {
                    incorrectTotal++
                    stopTimer();
                    $("#timer").html("INCORRECT!");
                    setTimeout(function () {
                        $("#timer").html("THE CORRECT ANSWER WAS " + obj.answer);
                    }, 1000);
                    clearAnswers();
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
    function clearAnswers() {
        $("#answer1").html("");
        $("#answer2").html("");
        $("#answer3").html("");
        $("#answer4").html("");
        $("#answer1").css({backgroundColor:"white"});
        $("#answer2").css({backgroundColor:"white"});
        $("#answer3").css({backgroundColor:"white"});
        $("#answer4").css({backgroundColor:"white"});
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
            clearAnswers();
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
        $(".scoreboard").show();
        $("#correct").html("CORRECT: " + correctTotal);
        $("#incorrect").html("INCORRECT: " + incorrectTotal);
        $("#timed-out").html("TIMED-OUT: " + timedOutTotal);
        $("#timer").hide();
        $("#question").hide();
        $("#answer1").hide();
        $("#answer2").hide();
        $("#answer3").hide();
        $("#answer4").hide();
        
        answerChosen = 1;
        setTimeout(function () {
            $("#correct").html("");
            $("#incorrect").html("");
            $("#timed-out").html("");
            $(".scoreboard").hide();
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


