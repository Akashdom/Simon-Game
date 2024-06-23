let gameSeq = [];
let userSeq = [];

let btns = ["Yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function (event) {
    if (event.code == "KeyA") {
        console.log("Game Started");
        started = true;
        levelUp();
    }
});

function gameflash(btn) {
    btn.classList.add("gameflash")
    setTimeout(function () {
        btn.classList.remove("gameflash")
    }, 250);
}

function Userflash(btn) {
    btn.classList.add("Userflash")
    setTimeout(function () {
        btn.classList.remove("Userflash")
    }, 250);
}

function levelUp() {
    // if(level > 2){
        // userSeq.remove();
        // use/rSeq=[];
        // console.log("on button");
    // }
     userSeq=[];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    gameflash(randBtn);

    higscro();
    
};

let h4 = document.querySelector("h4");
function higscro(){
    h4.innerText=`High Score ${level}`;

};

function checkAns(idx) {

    console.log(`index number ${idx}`);
    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            // levelUp();
            setTimeout(levelUp, 1000)
           
        }
           
    } else {
        h2.innerHTML = `Game Over! your Score was <b>${level}</b> <br/> Press any key to Start.`
        document.querySelector("body").style.background = "red";
        
        setTimeout(function () {
            document.querySelector("body").style.background = "white";
        }, 150);
        reset();
    }

    // higscro();   
}

function UserPress() {
    let btn = this;
    Userflash(btn);
    console.log(this);

    let UserColor = btn.getAttribute("id");
    console.log(`user color ${UserColor}`);
    userSeq.push(UserColor);

    checkAns(userSeq.length - 1);
   
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", UserPress);
}

function reset() {
    started = false;
    level = 0;
    userSeq = [];
    gameSeq = [];
   
}