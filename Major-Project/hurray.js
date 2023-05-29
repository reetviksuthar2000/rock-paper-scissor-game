let rulesbtn =document.querySelector('.rules');
let popup =document.querySelector('.rule_popup')
let closebtn = document.querySelector('.sign');

rulesbtn.addEventListener("click",()=>{
    popup.style.display="flex";

})


closebtn.addEventListener("click",()=>{
    popup.style.display="none";
    
})
