let gaemseq=[];
let userseq=[];
let yellow=document.querySelector(".yellow");
let green=document.querySelector(".green");
let red=document.querySelector(".red");
let purple=document.querySelector(".purple");

let box=document.querySelectorAll(".box");





let h2=document.querySelector("h2");
let btns=["red","yellow","green","purple"];

let started=false;
let level=0;

document.addEventListener("keypress",()=>{
if(started==false){
    console.log("game is started");
    started=true;
    levelUp();
}
});

function levelUp(){
    userseq=[];
    level++;
  h2.innerText=`Level ${level}`;
 //random button
 let random=Math.floor(Math.random()*4);
 let colorId=btns[random];
 let ranbtn=document.querySelector(`.${colorId}`);
gaemseq.push(colorId);
console.log(gaemseq);
  btnFlash(ranbtn);
}


function btnFlash(event){
  event.classList.add("flash");
  setTimeout(function (){
    event.classList.remove("flash");
  }, 250);

};


function userFlash(event){
    event.classList.add("userflash");
    setTimeout(function (){
      event.classList.remove("userflash");
    }, 250);
  
  };


function checkans(idx){
if(userseq[idx]===gaemseq[idx]){
    if(userseq.length ===gaemseq.length){
        setTimeout(levelUp,1000);
    }
}
else{
    h2.innerHTML=`Game Over Your score are <b>${level}</b> <br> ! Press any to start`;
//    document.querySelector("body").style.color="red";
//    setTimeout( function(){
//     document.querySelector("body").style.color="white";
//    },150);
   
   
    reset();
}
}



function btnsPress(){
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userseq.push(userColor);
    console.log(userseq);

     checkans(userseq.length-1);
}

for(boxs of box){
  boxs.addEventListener("click",btnsPress);
}

function reset(){
    started=false;
    level=0;
    gaemseq=[];
    userseq=[];

}