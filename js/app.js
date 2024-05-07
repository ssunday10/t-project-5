baguetteBox.run('.gallery');

const search = document.getElementById('search').addEventListener('keyup', e => {
   let currentValue = e.target.value.toLowerCase();
   let captions = document.querySelectorAll('a');
   captions.forEach (captions=> { 
         if (search) {
            return `${gallery}.show()`;
          } else {
               return `${gallery}.hide()`;
          }
   });
   console.log(captions);
});