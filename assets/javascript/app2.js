$(document).ready(function () {
// Variables
var timer = 31;
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
var qa3 = {
    question: "WHAT COLOR IS AN EGGPLANT?",
    answer: "PURPLE",
    wrongAns1: "BLUE",
    wrongAns2: "RED",
    wrongAns3: "YELLOW",
}
    
function display(obj) {
    $("#question").html(obj.question);
    var stringedAns = [];
    stringedAns.push(obj.answer, obj.wrongAns1, obj.wrongAns2, obj.wrongAns3);
    stringedAns.sort(function () { return .5 - Math.random(); });
    // $(".answer").slideToggle(300);
    $("#answer1").append(stringedAns[0]);
    $("#answer2").append(stringedAns[1]);
    $("#answer3").append(stringedAns[2]);
    $("#answer4").append(stringedAns[3]);
    $(".answer").on("click", function () {
        if ($(this).text() === obj.answer) {
            stopTimer();
            $("#timer").html("CORRECT!");
            return;
            
        }
    });
};
display(qa1);


display(qa2);


















// Timer


function runTimer() {
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
            $("#timer").html("TIME'S UP!");
        }
    }
    function stopTimer() {
        clearInterval(intervalId);
    }
});