$(document).ready(function(){

//setting base variables  to 0
var wins = 0;
var losses = 0;
var userGuess = 0;
//setting target number random from 19-120
var targetNumber = Math.floor(Math.random()*(120-19+1)+19);
//setting dog values random from 1-12
var dog1= Math.floor(Math.random()*(12)+1);
var dog2 = Math.floor(Math.random()*(12)+1);
var dog3 = Math.floor(Math.random()*(12)+1);
var dog4 = Math.floor(Math.random()*(12)+1);
console.log(dog1)
console.log(dog2)
console.log(dog3)
console.log(dog4)
//writing html into target score, user score, win counter, loss counter
$('#target-score').text(targetNumber);
$('#user-score').text(userGuess);
$('#win-counter').text("wins: " + wins);
$('#loss-counter').text("losses: " + losses);

//picking a random value for each dog

//assigning these values to each dog
// $("#dog-1").val(dog1);
// console.log(dog1)
// $("#dog-2").val(dog2);
// console.log(dog2)
// $("#dog-3").val(dog3);
// console.log(dog3)
// $("#dog-4").val(dog4);
// console.log(dog4)

//reset function
 function reset(){
     targetNumber = Math.floor(Math.random()*(120-19+1)+19);
     dog1 = Math.floor(Math.random()*(12)+1);
     dog2 = Math.floor(Math.random()*(12)+1);
     dog3 = Math.floor(Math.random()*(12)+1);
     dog4 = Math.floor(Math.random()*(12)+1);
     userGuess = 0;
     $('#target-score').html(targetNumber);
     $('#user-score').html(userGuess);
 }

//win function
function win(){
    alert("YOU WIN!");
    wins++
    $('#win-counter').html("wins: " + wins);
    reset();
}

function lose(){
    alert("YOU LOSE, LOSER!");
    losses++
    $('#loss-counter').html("losses: " + losses);
    reset();
}


//adding dogs value to user guess
$('#dog-1').on('click',function(){
    $("#dog-1").val(dog1);
    console.log(dog1);
    userGuess += dog1;
    console.log(userGuess);
    $('#user-score').text(userGuess);
    if (userGuess == targetNumber){
       win();
       userGuess = 0;
    }
    else if (userGuess > targetNumber){
        lose();
        userGuess = 0;
    }
    
})
$('#dog-2').on('click',function(){
    $("#dog-2").val(dog2);
console.log(dog2)
    userGuess += dog2;
    console.log(userGuess);
    $('#user-score').text(userGuess);
    if (userGuess == targetNumber){
        win();
        userGuess = 0;
    }
    else if (userGuess > targetNumber){
        lose();
        userGuess = 0;
    }
})
$('#dog-3').on('click',function(){
    $("#dog-3").val(dog3);
console.log(dog3)
    userGuess += dog3;
    console.log(userGuess);
    $('#user-score').text(userGuess);
    if (userGuess == targetNumber){
        win();
        userGuess = 0;
    }
    else if (userGuess > targetNumber){
        lose();
        userGuess = 0;
    }
})
$('#dog-4').on('click',function(){
    $("#dog-4").val(dog4);
console.log(dog4)
    userGuess += dog4;
    console.log(userGuess);
    $('#user-score').text(userGuess);
    if (userGuess == targetNumber){
        win();
        userGuess = 0;
    }
    else if (userGuess > targetNumber){
        lose();
        userGuess = 0;
    }
})


});



