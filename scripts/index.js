const loginPage = "login.html";

const player = document.querySelector(".bg-music");
document.addEventListener("click", playMusic, {once:true});

player.addEventListener("click",PlayMusic function(){

    current++;
    
    if(current >= playlist.length){
    current = 0;
    }
    
    player.src = playlist[current];
    player.play();
    
    });
