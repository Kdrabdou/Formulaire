const container = document.querySelector(".container"),
    btnlogin = document.querySelector(".btnlogin"),
    btnsignup = document.querySelector(".btnsignup");
  
btnsignup.addEventListener("click", () =>{
    container.classList.add("activer");
});    
btnlogin.addEventListener("click", () =>{
    container.classList.remove("activer");
});    