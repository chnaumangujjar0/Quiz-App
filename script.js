let questionArray=[
    {
        question:"what is  name of our country?"
    },
    {
        question:"what is  name of twiiter's Owner?"
    },
    {
        question:"what is  name of our national poet?"
    },
    {
        question:"who is the founder of Pakistan?"
    },
    {
        question:"what is the name of our national animal?"
    }
]
let options=[
    ["pakistan","lahore","iran","india"],
    ["Elon musk","imran khan","shahbaz sharif","starc"],
    ["Allama Iqbal","Quaid e Azam","Dr.israr","imran khan"],
    ["Allama Iqbal","Quaid e Azam","Dr.israr","imran khan"],
    ["cow","tiger","lion","markhor"]
]   
let answers=["pakistan","Elon musk","Allama Iqbal","Quaid e Azam","markhor"]

let question=document.querySelector("#question")
let btnContainer=document.querySelector("#btn-container")
let choice=document.querySelectorAll(".btns")
let next=document.querySelector(".next button");
let quiz=document.querySelector(".quiz")
let score=0;
let i=0;

btnContainer.addEventListener("click",(e)=>{
     
   if(e.target.innerHTML==answers[i]){
     e.target.style.backgroundColor="#0ae4e4"
     score++;
     console.log(score)
     for (const element of choice) {
        element.disabled=true;
     }
   }else{
    e.target.style.backgroundColor="#f3768b"
    for (const element of choice) {    
        if(element.innerHTML==answers[i]){
         element.style.backgroundColor="#0ae4e4"

    }
        element.disabled=true;

    }
   }

       
})

   next.addEventListener("click",()=>{
      i++;
    if(i === questionArray.length){
     quiz.style.display="none"
     let h1=document.createElement("h1")
     h1.innerHTML=`you got ${score} score out of ${questionArray.length}`
     document.querySelector(".quiz-app").appendChild(h1);
     return;
    }
   if(choice[0].disabled==true){
    
    for (const element of choice) {
        element.disabled=false;
        element.style.backgroundColor=" rgb(0, 153, 255)"
    }
   
    newQuestion();
   }else{
    alert("Please select a choice")
   }
})

function newQuestion(){

    for(let j=0;j<4;j++){
   question.innerHTML=questionArray[i].question
   choice[j].innerHTML=options[i][j]; 
}
}


newQuestion();
