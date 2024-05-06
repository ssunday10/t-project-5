baguetteBox.run('.gallery');

const search = document.getElementById('search', 'data-caption');
search.addEventListener('keyup', e=> {
   let currentValue = e.target.value.toLowerCase();
   let captions = document.querySelectorAll('a');
   captions.forEach (caption => {
       while ("search", caption.textContent.includes(currentValue)) {
         return search, caption.parentNode.style.display = "block";
       } 
       console.log(caption.getAttribute("data-caption"));
      });
   });


   