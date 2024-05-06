const search = new Filter('search', 'data-caption');
baguetteBox.run('.gallery');

const search = document.getElementById('search');
 search.addEventListener('keyup', e=> {
    let currentValue = e.target.value.toLowerCase();
        let captions =document.querySelectorAll('a');
        captions.forEach(caption => {
        console.log(caption.getAttribute("data-caption"));
     });
});
