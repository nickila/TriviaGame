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
    // var question = ["WHAT COLOR IS A BANANA?", "WHAT COLOR IS AN APPLE?", "WHAT COLOR IS AN ORANGE?", "WHAT COLOR IS AN EGGPLANT?"];
    // var answer1 = ["YELLOW <br />", "RED <br />", "ORANGE <br />", "PURPLE <br />"];
    // var answer2 = ["RED", "YELLOW", "ORANGE", "PURPLE"];
    // var answer2 = ["RED", "YELLOW", "ORANGE", "PURPLE"];

    // var answer1 = {
    //     correct: "YELLOW",
    //     incorrect1: "RED",
    //     incorrect2: "ORANGE",
    //     incorrect3: "PURPLE"
    // }

    // var questionAnswer1 = {
    //     question: "What color is a banana?",
    //     answer: [{
    //         correct: "YELLOW",
    //         incorrect1: "BLUE",
    //         incorrect2: "ORANGE",
    //         incorrect3: "PURPLE"
    //     }]
    // }


    var qa1 = {
        question: "WHAT COLOR IS A BANANA?",
        answer: "YELLOW",
        wrongAnswer1: "BLUE",
        wrongAnswer2: "ORANGE",
        wrongAnswer3: "RED",
    };
    var qa2 = {
        question: "WHAT COLOR IS AN APPLE?",
        answer: "RED",
        wrongAnswer1: "BLUE",
        wrongAnswer2: "ORANGE",
        wrongAnswer3: "YELLOW",
    };

    // Grab a random index from the qa arrays but not index 0.
    
    

    function display(obj) {
        $("#question").html(obj.question);
        // $("#answer1").html(obj.answer);
        // $("#answer2").html(obj.wrongAnswer1);
        // $("#answer3").html(obj.wrongAnswer2);
        // $("#answer4").html(obj.wrongAnswer3);
        var stringedAnswers = [];
        stringedAnswers.push(obj.answer, obj.wrongAnswer1, obj.wrongAnswer2, obj.wrongAnswer3);
        console.log(stringedAnswers);
        // var randomAnswer = stringedAnswers[Math.floor(Math.random() * stringedAnswers.length)]
        // console.log(randomAnswer);
        stringedAnswers.sort(function(){return .5-Math.random();});
        console.log(stringedAnswers);
        $("#answer1").append(stringedAnswers[0]);
        $("#answer2").append(stringedAnswers[1]);
        $("#answer3").append(stringedAnswers[2]);
        $("#answer4").append(stringedAnswers[3]);
        $(".answer").on("click", function () {
            if ($(this).text() === obj.answer) {
                $(this).css({color:'blue'});
                
            }
        });
    }
    display(qa2);
    // for (i = 0; i < question.length; i++) {
    //     console.log(question[i]);
    //     console.log(answer1[i]);
    // }




    var timer = 30;

    function runTimer() {
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        if (timer > 0) {
            timer--;
            $("#timer").html(timer + " SECONDS");
        } else {
            // stop();
            $("#timer").html("TIME'S UP!");
        }
    }
    function stopTimer() {
        clearInterval(intervalId);
    }




var answerChosen=true;
    // Set array of questions and answers in key:object form


    $(".startButton").on("click", function () {

    //     runTimer();
    //     $(".startButton").slideToggle(200);
        
    //         for (i = 0; i < question.length; i++) {
    //             if (answerChosen = true) {
    //             answerChosen = false;
    //             // $.each(answer1, function (index, value) {
    //             //     $("#answer1").html(value + "<br /");
    //             //     console.log(value);
    //             console.log(question[i]);
    //             console.log(answer1[i]);
    //             $("#question").show(question[i]);
    //             $(".answer").append(answer1[i]);
    //             $(".answer").on("click", function () {
    //                var answerId = $(this).attr('data-answerid');
    //                $("#" + answerId).css({color:"red"});
    //                setTimeout (function(){
    //                    runTimer();
    //                    answerChosen = true;
    //                });
                   
    //             });
                


    //             $(".question").toggle();
    //             $(".answer").toggle();
    //             $(".question").html(question[i]);
    //         }
    //     }
    // });

    





    // $(".answer").on("click", function () {   THIS WORKS.
    //     // if (timer > 0) {
    //     //     stopTimer();
    //     var answerId = $(this).attr('data-answerid')
    //     $("#" + answerId).hide();




    // });



    // $(".answer2").on("click", function() {
    // if (timer > 0) {
    //     stopTimer();
    // $(".answer2").css({color:"lightgreen"}, 300);
    // $(".answer1").css({opacity:".25"}, 300);
    // $(".answer3").css({opacity:".25"}, 300);
    // $(".answer4").css({opacity:".25"}, 300);
    // } else {
    //     return;
    // }
});


});

