

baguetteBox.run('.gallery');

const inputFieldId = document.getElementById('inputFieldId');
 inputFieldId.addEventListener('keyup', e=> {
    let currentValue = e.target.value.toLowerCase();
    let captions =document.querySelectorAll('a.data-caption');
    captions.forEach(captions => {
        if (captions.textContent.toLowerCase().includes(currentValue)) {
            captions.style.display = 'block';
        } else {
            captions.style.display = 'none';
        }
    });
});
