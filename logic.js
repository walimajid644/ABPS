const showButton = document.querySelectorAll('.myButton');
const renderedContainer = document.querySelector('.container-boxes');

function displayServices(serviceType) {
    renderedContainer.innerHTML = '';
    services.forEach(service =>{
        let userCardHtml = "";
        if (service.Type === serviceType){
           userCardHtml = `
            <div class = "box" >
            <img src="${service.imageUrl}" alt="" loading="lazy"/>
            <p>${service.Name}</p>
            <div class ="des">${service.Description}</div>
            </div>
            `;}
    renderedContainer.innerHTML += userCardHtml;
});
} 

showButton.forEach(button => {
    button.addEventListener('click', () => {
      
      const typeToShow = button.dataset.type;
      
      if (typeToShow) {
        displayServices(typeToShow);
      }
    });
  });


  const urlParams = new URLSearchParams(window.location.search);
const initialType = urlParams.get("type");
if (initialType) {
  displayServices(initialType);
}

// Scroll Animation Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Page Loader
window.addEventListener('load', () => {
  const loader = document.querySelector('.page-loader');
  setTimeout(() => {
    loader.classList.add('hidden');
  }, 500);
});

// Observe elements on page load
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.main, .parent-container, .choosebox, .box, footer');
  animatedElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
  
  // Add stagger effect to boxes
  const boxes = document.querySelectorAll('.box');
  boxes.forEach((box, index) => {
    box.style.animationDelay = `${index * 0.1}s`;
  });
});