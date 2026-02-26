/* IMMERSIVE MODE TOGGLE */

document.getElementById("toggleMode").addEventListener("click", function(){
    document.body.classList.toggle("immersive");
    document.body.classList.toggle("normal");
});

/* CONTACT TEXTAREA BEHAVIOUR */

const messageBox = document.getElementById("messageBox");

messageBox.value = "leave us a message...";

messageBox.addEventListener("focus", function(){
    if(this.value === "leave us a message..."){
        this.value = "";
    }
});

messageBox.addEventListener("blur", function(){
    if(this.value.trim() === ""){
        this.value = "leave us a message...";
    }
});

/* AUDIO FUNCTION */

function playAudio(id){
    document.getElementById(id).play();
}


/* ================= NAVBAR AUTO HIDE ================= */

let lastScrollY = window.scrollY;
const nav = document.querySelector("nav");
const threshold = 10;

window.addEventListener("scroll", () => {

    const currentScrollY = window.scrollY;
    const diff = currentScrollY - lastScrollY;

    if (Math.abs(diff) < threshold) return;

    // always show at very top
    if (currentScrollY <= 0){
        nav.classList.remove("nav-hidden");
    }
    // scrolling down → hide
    else if (diff > 0){
        nav.classList.add("nav-hidden");
    }
    // scrolling up → show
    else{
        nav.classList.remove("nav-hidden");
    }

    lastScrollY = currentScrollY;
});