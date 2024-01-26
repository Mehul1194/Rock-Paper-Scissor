let rock=document.querySelector(".icon-rock");
let paper=document.querySelector(".icon-paper");
let scissor=document.querySelector(".icon-scissor");
let countYou=document.querySelector(".count-you-count");
let countComp=document.querySelector(".count-comp-count");
let result=document.querySelector(".result-btn");
let comp=0;
let you=0;

let ranval=0;
const update=()=>{
    countComp.innerText=comp;
    countYou.innerText=you;
}


const win=()=>{
    you++;
    result.innerText="You Won!";
    result.style.backgroundColor="#2A4D14";
    update();
}

const lose=()=>{
    comp++;
    result.innerText="You Lost!";
    result.style.backgroundColor="#F03A47";
    update();
}

const draw=()=>{
    result.innerText="It Was Draw!";
    result.style.backgroundColor="#FFD166";
}
const randomVal=()=>{
    ranval=Math.floor(Math.random() * 3);
    console.log(ranval);
}
rock.addEventListener("click",()=>{
    randomVal();
    if(ranval==0){
        draw();
    }
    else if(ranval==1){
        win();
    }
    else{
        lose();
    }
});

scissor.addEventListener("click",()=>{
    randomVal();
    if(ranval==0){
        lose();
    }
    else if(ranval==1){
        draw();
    }
    else{
        win();
    }
});
paper.addEventListener("click",()=>{
    randomVal();
    if(ranval==0){
        win();
    }
    else if(ranval==1){
        lose();
    }
    else{
        draw();
    }
});