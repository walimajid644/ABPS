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