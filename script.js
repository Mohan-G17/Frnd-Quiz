
// Secret Password

let correctPassword = "Moonlight Ninaivu";


// Unlock Function

function unlock(){

    let enteredPassword =
    document.getElementById("password").value;


    if(enteredPassword === correctPassword){


        document.getElementById("unlockScreen").style.display="none";


        document.getElementById("mainContent").style.display="block";


        startSlideshow();

        startCounter();

        startTyping();


    }

    else{

        document.getElementById("error").innerHTML =
        "❄️ Wrong Code! Try Again 💙";

    }

}







// Music Control

let music =
document.getElementById("music");


function toggleMusic(){


    if(music.paused){

        music.play();

    }

    else{

        music.pause();

    }

}







// Image Slideshow


let images=[

"pic1.jpg",

"pic2.jpg",

"pic3.jpg",
"pic4.jpg" 

];


let index=0;


function startSlideshow(){


    setInterval(function(){


        index++;


        if(index >= images.length){

            index=0;

        }


        document.getElementById("slide").src =
        images[index];


    },3000);


}







// Friendship Counter


function startCounter(){


    let startDate =
    new Date("2025-08-07");


    let today =
    new Date();


    let difference =
    today - startDate;


    let days =
    Math.floor(
        difference/(1000*60*60*24)
    );


    document.getElementById("days").innerHTML =

    "❄️ We have been friends for "
    + days +
    " beautiful days 💙";


}







// Typing Letter


let message =

"Dear Friend 💙, Every moment with you is a special memory. Thank you for all the smiles, support and unforgettable moments. Our friendship will always stay frozen in my heart forever ❄️";


let charIndex=0;


function startTyping(){


    let typing =
    document.getElementById("typing");


    function type(){


        if(charIndex < message.length){


            typing.innerHTML +=
            message.charAt(charIndex);


            charIndex++;

            setTimeout(type,50);


        }


    }


    type();


}







// Quiz


let score=0;


function checkAnswer(button,answer){


    if(answer==="correct"){


        score++;


        button.style.background="#22c55e";


    }


    else{


        button.style.background="#ef4444";


    }


    document.getElementById("score").innerHTML =

    "💙 Your Score: "
    + score
    + "/3";


}







// Final Surprise


function showSurprise(){


    document.getElementById("finalMessage")
    .style.display="block";


    window.scrollTo({

        top:document.body.scrollHeight,

        behavior:"smooth"

    });


}
