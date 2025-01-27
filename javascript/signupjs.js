function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}

const sign_in_btn = document.getElementById("sign-in-btn");
const sign_up_btn = document.getElementById("sign-up-btn");
const container = document.getElementById("container");

function addSignUpMode() {
  console.log("Hawk Tuah");
  container.classList.add("signupmode");
}

function removeSignUpMode() {
  console.log("Hawk Tuah Hawk");
  container.classList.remove("signupmode");
}
