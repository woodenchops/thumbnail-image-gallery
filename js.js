let thumbIMGs = document.querySelectorAll('.thumbnail-images img');
let mainDiv = document.querySelector('.main-image');
let mainIMG = document.querySelector('.main-image img');


thumbIMGs.forEach((img) => {
   img.addEventListener('click', (e) => {
       let clickedImage = e.target;
//       mainIMG.setAttribute('src', clickedImage.src); // sets an image attr inside the div
       mainDiv.style.backgroundImage = "url(' " + clickedImage.src + "')"; // set the background image of the div to clicked-on image
   }); 
});