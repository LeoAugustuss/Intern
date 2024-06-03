let slide = document.querySelectorAll(".patientReview");
let card = document.querySelectorAll(".card");
let closeBtn = document.getElementById("closeBtn");
let connectBtn = document.getElementById("connectBtn");



let count = 0;

slide.forEach(function(slides, index){
   slides.style.left=`${index * 100}%`
})

function myFun(){
   slide.forEach(function(curVal){
       curVal.style.transform=`translateX(-${count * 100}%)`
   })
}
setInterval(function(){
   count++;
   if(count == slide.length){
       count=0;
   }
   myFun()
}, 2000)

const names = [
    "Shiva Lal",
    "Susmita Adhikari",
    "Purna Kumari Sanyasi"
];

const descriptions = [
    " Did master in one of the well known colleges in India known as SRM University, Serving country for more the 20 years. Pack loaded Experience.",
    "Completed degree for Ophthalmology with good grading in MMU university, Serving country for more the 20 years. Pack loaded Experience.",
    "Being one of the most senior Staff in Hospital with great knowledge of Medicine and its working, Serving country for more the 20 years. Pack loaded Experience."
];
card.forEach(function(cards,index){
   cards.addEventListener("click", function(){
       console.log(cards);
       document.querySelector(".detail").style.display="block"
       document.querySelector(".content").innerHTML=`
       <img src=${cards.firstElementChild.src} alt="">
           <div class="contentText">
           <h1>${names[index]}</h1> 
           <p>${descriptions[index]}</p> 
           </div>
       `
      closeBtn.addEventListener("click", function(){
       document.querySelector(".detail").style.display="none"
      })
   })
})

connectBtn.addEventListener("click", function(){
   let email = document.getElementById("email");
   let pass = document.getElementById("pass");

   if(email.value == "" && pass.value == ""){
       alert("Enter Details")
   }else{
       alert("You Logged IN")
   }
})
