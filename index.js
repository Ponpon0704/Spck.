let wrapper = document.querySelector('.wrapper');
let registerLink = document.querySelector('.register-link');
let loginLink = document.querySelector('.login-link');

registerLink.addEventListener("click", () => {
    wrapper.classList.add("active") 
 })
loginLink.addEventListener("click", () => {
    wrapper.classList.remove("active") 
 })
 

