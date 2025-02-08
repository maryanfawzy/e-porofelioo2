let contrastToggel=false
function moveBackGround(event){
   const shapes = document.querySelectorAll(".shape")
   const x = event.clientx;
   const y = event.clienty;
   for (let i = 0; i <shapes.length; ++i){
      shapes[i].style.transform=`translate(${x}px, ${y}px)`
   }
}
function toggleContrast(){
   contrastToggel=!contrastToggel;
   if(contrastToggel){
      document.body.classList += "dark-theme"}
   else{
      document.body.classList.remove("dark-theme")
   }


}
function contact(event) {
   event.preventDefault();
   const loading = document.querySelector(".model__overlay--loading");
   const success = document.querySelector(".model__overlay--sucsess");
   loading.classList += " model__overlay--visable";
   emailjs
     .sendForm(
       "service_q19ok5f",
       "template_kqbkzal",
       event.target,
      
     )
     .then(() => {
       loading.classList.remove("model__overlay--visable");
       success.classList += " model__overlay--visable";
     })
     .catch(() => {
       loading.classList.remove("model__overlay--visable");
       alert(
         "The email service is temporarily unavailable. Please contact me directly on ma@maryanfawzy.com"
       );
     });
 }


  let isModelOpen = false
  function toggleModal (){
  
   if (isModelOpen){
      isModelOpen=false
      return document.body.classList.remove("model__open")
   }
   isModelOpen= true
   document.body.classList+= " model__open"
  }

  const scrollBtn = document.getElementById("scrollTopBtn");

  scrollBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  

  

   
