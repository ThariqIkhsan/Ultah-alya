const loginPage = "login.html";

const player = document.querySelector(".bg-music");

player.addEventListener("load", function(){

    current++;
    
    if(current >= playlist.length){
    current = 0;
    }
    
    player.src = playlist[current];
    player.play();
    
    });
