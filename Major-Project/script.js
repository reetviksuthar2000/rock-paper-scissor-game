let your = document.querySelectorAll('.your');
let computer = document.querySelectorAll('.computer');
let random = Math.floor(Math.random()*3);
let user = document.querySelector('.user');
let machine = document.querySelector('.pc')
let win = document.querySelector('.win');
let player=document.querySelector('.player');
let tieup = document.querySelector('.tieup');
let play =document.querySelector('.play');
let replay =document.querySelector('.replay');
let myscore = JSON.parse(localStorage.getItem("myscore"));
let pcscore = JSON.parse(localStorage.getItem("pcscore"));
let cscore =document.getElementById("cscore");
let yscore= document.getElementById("yscore");
let nextbtn = document.querySelector('.next_button');

// ---- data store in local storage-------
if(myscore){
    
    yscore.innerText=myscore;
}
if(pcscore){
    cscore.innerText=pcscore;
}

//---- whole game logic -----

let computervalue =0;
let yourvalue = 0;


let tringle = document.querySelector('.tran');
your.forEach( (element,index )=> {
    element.addEventListener("click", ()=>{
        user.style.opacity ="1";
        tringle.style.display="none";

        // console.log(element);
        your.forEach(item=>{
            item.style.display="none";

        });
        element.style.display="block";
        element.classList.add("show");  
        setTimeout(()=>{
            machine.style.opacity ="1";
            setTimeout(()=>{
                computer[random].style.display="block";
                computer[random].classList.add("right");
            },1000);
            setTimeout(()=>{
                if(index==0 && random==2 || index==2 && random==1 || index==1 && random==0){
                    win.style.display="grid";
                    player.innerText="YOU WIN";
                    yourvalue= myscore;
                    yourvalue++;
                    yscore.innerText=yourvalue; 
                    localStorage.setItem("myscore", JSON.stringify(yourvalue));
                    next_btn.style.display = 'inline-block';

                }else if(index==0 && random ==0 || index==1 && random ==1 || index ==2 && random==2){

                    tieup.style.display="grid";
                    // tieup.innerText="TIE UP";

                }
                else{
                    win.style.display="grid";
                    player.innerText="YOU LOOSE";
                    computervalue=pcscore;
                    computervalue++;
                    cscore.innerText=computervalue;
                    localStorage.setItem("pcscore",JSON.stringify(computervalue));

                };
                
            },1500);

        },500);
    })
    
});


// ---- play & replay button event -----

play.addEventListener("click", ()=>{
    window.location.reload();
});
replay.addEventListener("click", ()=>{
    window.location.reload();
});

// ------------------- rules button event ---------------

let rulesbtn =document.querySelector('.rules');
let popup =document.querySelector('.rule_popup')
let closebtn = document.querySelector('.sign');



rulesbtn.addEventListener("click",()=>{
    popup.style.display="flex";

})


closebtn.addEventListener("click",()=>{
    popup.style.display="none";
    
})









