// for(var i=0;i<7;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",msg);
// }

// function msg(){
//     var audio=new Audio("./sounds/crash.mp3");
//     audio.play(); 
//     // this.style.color="white";
// }

var numberOfButtons=document.querySelectorAll("button").length;
for(var i=0;i<numberOfButtons;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var buttonInnerHTML=this.innerHTML;
        activate(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        
    })
}

document.addEventListener("keydown", function(event){
    // alert("key pressed");
    // console.log(event);
    activate(event.key);
    buttonAnimation(event.key);
})

function activate(key){
    switch(key){
        case "w":
            var tom1=new Audio("./tom-1.mp3");
            tom1.play();
        break;

        case "a":
            var tom2=new Audio("./tom-2.mp3");
            tom2.play();
        break;

        case "s":
            var tom3=new Audio("./tom-3.mp3");
            tom3.play();
        break;

        case "d":
            var tom4=new Audio("./tom-4.mp3");
            tom4.play();
        break;

        case "j":
            var snare=new Audio("./crash.mp3");
            snare.play();
        break;

        case "k":
            var crash=new Audio("./kick.mp3");
            crash.play();
        break;
        
        case "l":
            var kick=new Audio("./snare.mp3");
            kick.play();
        break;
        
        default:
            console.log(key+" pressed");
    }
}

function buttonAnimation(key){
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("." + key).classList.remove("pressed");
    },100);
}