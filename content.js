const imageupload = document.getElementById('image-upload');
const canvas = document.getElementById('preview-canvas');
const ctx = canvas.getContext('2d');
const scanBtn = document.getElementById('scan-btn');

let currentImage = null;

imageupload.addEventListener('change',function(event)){
    const file = event.target.files[0];
    

    const reader = new FileReader();
    reader.onload = function(e){
        currentImage = new Image();

        currentImage.onload = function(){

            canvas.style.display = 'block';

            canvas.width = currentImage.width;
            canvas.height = currentImage.height;
            
            ctx.drawImage(currentImage, 0, 0);
        };

        currentImage.src = e.target.result;
    };

    reader.readAsDataURL(file);
};