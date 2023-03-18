
let btn = document.getElementById("btn");
let bulb = document.getElementById("bulb");

function toggle(e){
    if( btn.textContent.includes("On") ){
        bulb.src = "Bulb-Off.jpg";
        btn.textContent = "Turn Off";
        
    }
    else{
        bulb.src = "Bulb-On.jpg";
        btn.textContent = "Turn On";
    }
}

 btn.addEventListener( 'click' , toggle );






