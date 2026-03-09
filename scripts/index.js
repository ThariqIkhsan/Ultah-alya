const loginPage = "index.html";

player.addEventListener("load", function(){

    current++;
    
    if(current >= playlist.length){
    current = 0;
    }
    
    player.src = playlist[current];
    player.play();
    
    });
