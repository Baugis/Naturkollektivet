// Get all the buttons
const buttons = document.querySelectorAll('.btn-outline-primary');

// Add a click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove background color from all buttons
    buttons.forEach(button => button.classList.remove('btnActive'));
    // Add background color to the clicked button
    button.classList.add('btnActive');
  });
});


function changeBg(){
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;
    if(scrollValue < 100){
        navbar.classList.remove('bgColor');
    } else {
        navbar.classList.add('bgColor');
    }
};

window.addEventListener('scroll', changeBg)

