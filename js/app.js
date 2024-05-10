const gallery = document.querySelector('.gallery');
baguetteBox.run('.gallery');

const search = document.getElementById('search').addEventListener('keyup', (e) => {
      // user input value
   let currentValue = e.target.value.toLowerCase();
   // searches captions
   let captions = document.querySelectorAll('a');

   captions.forEach((caption) => { 
      let dataCaption = caption.getAttribute('data-caption');
      if (currentValue === dataCaption) {
          return "href".parentNode.style.display = "block";
      } else {
         null;
      }
   });
});