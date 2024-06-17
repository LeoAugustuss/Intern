let slide = document.querySelectorAll(".patientReview");
let card = document.querySelectorAll(".card");
let closeBtn = document.getElementById("closeBtn");
let connectBtn = document.getElementById("connectBtn");
const popup = document.getElementById("popup");
const signupBtn = document.getElementById("signUpbtn");
const closeSignBtn = document.getElementById("closeSignIn");


/*function signUp(){
    const error = checkPassword();
    if(!error){

        closepopup();

    }
    
}

function checkPassword(){
    let password = document.getElementById("password").value;
    let cnfrmPassword = document.getElementById("Cpassword").value;
    console.log(" Password:", password,'\n',"Confirm Password:",cnfrmPassword);
    let message = document.getElementById("message");

    if(password.length != 0){
        if(password !== cnfrmPassword){
            message.textContent = "Password don't match";
            message.style.backgroundColor = "#ff4d4d";
            return true;
        }
    }
    else{
        alert("Password can't be empty!");
        message.textContent = "";
    }
}*/
signupBtn.addEventListener("click",function(){
    popup.classList.add("open-popup");
})
closeSignBtn.addEventListener("click",function(){
    popup.classList.remove("open-popup");
})


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
   }
   if (email === "" || password === "") {
    alert("Both email and password must be filled out");
    return false;
}
   else{
       alert("You Logged IN")
   }
})

function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    return true;
}

