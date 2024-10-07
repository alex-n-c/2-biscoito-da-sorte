const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const imgClosedCookie = document.querySelector("#ImgClosedCookie");
const btnOpenNewCookie = document.querySelector("#btnOpenNewCookie");

imgClosedCookie.addEventListener('click', handleImgClosedCookie);
btnOpenNewCookie.addEventListener('click', handleBtnOpenNewCookie);


function handleImgClosedCookie(){  
    toggleScreen();
}

function handleBtnOpenNewCookie(){  
    toggleScreen();
}

function toggleScreen(){
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide"); 
}