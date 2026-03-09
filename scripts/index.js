const loginPage = "login.html";

player.addEventListener("click",PlayMusic function(){

    current++;
    
    if(current >= playlist.length){
    current = 0;
    }
    
    player.src = playlist[current];
    player.play();
    
    });
