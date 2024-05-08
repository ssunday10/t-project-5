const gallery = document.querySelector('.gallery');
baguetteBox.run('.gallery');

const search = document.getElementById('search').addEventListener('keyup', (e) => {
      // user input value
   let currentValue = e.target.value.toLowerCase();
   let captions = document.querySelectorAll('a');

   captions.forEach(caption => { 
      let dataCaption = caption.getAttribute('data-caption');
      if (search) {
       dataCaption.includes(currentValue).parentNode.show();
      }
});