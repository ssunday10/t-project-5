document.addEventListener('', function() {
    baguetteBox.run('.gallery');
});


document.addEventListener('DOMContentLoaded', function() {
    baguetteBox.run('.gallery');
        var inputField = document.getElementById('inputFieldId');
        var thumbnailsContainer = document.getElementById('thumbnails');

        inputField.addEventListener('keyup', function(event) {
            if (event.target.value.length >= 3) { // Example condition
                var thumbnails = thumbnailsContainer.getElementsByTagName('img');
                for (var i = 0; i < thumbnails.length; i++) {
                    thumbnails[i].addEventListener('click', function() {
                        var mainImage = document.getElementsByTagName('a');
                        mainImage.src = this.src.replace('thumbnail', 'fullsize');
                    });
                }
            }
        });
});