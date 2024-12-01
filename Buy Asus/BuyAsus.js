//main picture
var picture = document.querySelector('#pic888');
//side picture
var picture1 = document.querySelector('#pic111');
var picture2 = document.querySelector('#pic222');
var picture3 = document.querySelector('#pic333');
var picture4 = document.querySelector('#pic444');
var picture5 = document.querySelector('#pic555');
//List of pictures
picList = [picture1, picture2, picture3, picture4, picture5]
//Active Picture
let picActive = 1;
//Add a Boxshadow to the first picture
picture1.classList.add('img-active');
//change image
function changeImage(imgSrc, n) {
    // This will change the main img
    picture.src = imgSrc;
    //Remove box shadow
    picList[picActive - 1].classList.remove('img-active');
    //add box shadow to active side picture
    picList[n-1].classList.add('img-active')

    picActive = n;
}