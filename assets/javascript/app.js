$(document).ready(function () {



    // Make a trivia game that asks five questions and gives four multiple choice answers to choose from.
    // Use javascript for the functionality and jQuery to transfer it to html document. There will be a timer
    // for each question. The game will silently track correct answers, incorrect answers and timed out answers.
    // After each question is answered it will show correct or incorrect (or timed out) and an image/gif.
    // After all questions are answered it will display the results.

    // Set variables

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
    // $("#answer1").html("");
    // $("#answer2").html("");
    // $("#answer3").html("");
    // $("#answer4").html("");

    // Grab a random index from the qa arrays but not index 0.
    //console.log(answerChosen);
    function startGame() {
        $(".startButton").on("click", function () {
            $(".startButton").slideToggle(200);
            display(qa1);

        });
    }
    function askQuestions() {
        if (answerChosen == 2) {
            display(qa2);
        }
        if (answerChosen == 3) {
            display(qa3);
        }
        if (answerChosen == 4) {
            display(qa4);
        }
        if (answerChosen == 5) {
            $("#timer").html(correctTotal + "<br />" + incorrectTotal + "<br />" + timedOutTotal);
            setTimeout (function() {
                startGame();
                $("#timer").html("");
                $(".startButton").slideToggle(200);
            }, 1000);
        }
    }

    //display(qa2);


    function display(obj) {
        $(".answer").off();
        console.log("first" + obj.answer);
        runTimer();
        //answerChosen=1;

        $("#question").html(obj.question);
        var stringedAns = [];
        stringedAns.push(obj.answer, obj.wrongAns1, obj.wrongAns2, obj.wrongAns3);
        stringedAns.sort(function () { return .5 - Math.random(); });

        $("#answer1").append(stringedAns[0]);
        $("#answer2").append(stringedAns[1]);
        $("#answer3").append(stringedAns[2]);
        $("#answer4").append(stringedAns[3]);
        $(".answer").on("click", function () {
            if (timer > 0) {
                console.log("clicked: ", $(this).text())
                console.log("answer: ", obj.answer)
                if ($(this).text() == (obj.answer)) {
                    correctTotal++
                    delete obj.answer;
                    stopTimer();
                    $("#timer").html("CORRECT!");
                    //$("#timer").css({ color: "green" })
                    //$(".answer").slideToggle(300);
                    $("#answer1").html("");
                    $("#answer2").html("");
                    $("#answer3").html("");
                    $("#answer4").html("");
                    setTimeout(function () {
                        $("#timer").html("");
                        //$(".answer").slideToggle(300);
                        // $("#question").slideToggle(300);
                        answerChosen++;
                    }, 2000);
                    setTimeout(function () {
                        askQuestions();
                    }, 3000);



                    // answerChosen = true;
                    return;
                } else {
                    incorrectTotal++
                    delete obj.answer;
                    console.log(obj.answer);
                    stopTimer();
                    $("#timer").html("INCORRECT!");
                    //$("#timer").css({ color: "green" })
                    //$(".answer").slideToggle(300);
                    $("#answer1").html("");
                    $("#answer2").html("");
                    $("#answer3").html("");
                    $("#answer4").html("");
                    setTimeout(function () {
                        $("#timer").html("");
                        //$(".answer").slideToggle(300);
                        // $("#question").slideToggle(300);
                        answerChosen++;
                    }, 2000);
                    setTimeout(function () {
                        askQuestions();
                    }, 3000);
                    
                    return;

                }

            }

        });

    }





    startGame();


    var timer = 3;

    function runTimer() {
        timer = 3;
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
            $("#timer").html("TIME'S UP!");
            $("#answer1").html("");
            $("#answer2").html("");
            $("#answer3").html("");
            $("#answer4").html("");
            setTimeout(function() {
                askQuestions();
            },3000);

        }
    }
    function stopTimer() {
        clearInterval(intervalId);
    }
});


