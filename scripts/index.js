const loginPage = "login.html";

const player = document.querySelector(".bg-music");

setTimeout(()=>{
player.muted = false;
player.play();
},1000);

player.addEventListener("click",PlayMusic function(){

    current++;
    
    if(current >= playlist.length){
    current = 0;
    }
    
    player.src = playlist[current];
    player.play();
    
    });
