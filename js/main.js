$(document).ready(() => {

$('.image1').on('click', () => {
  if ( $('.image1').attr('src') === 'images/facelift1.jpg' ){
    $('.image1').attr('src', 'images/facelift2.jpg')
  } else {
    $('.image1').attr('src', 'images/facelift1.jpg')
  }
});
$('.image2').on('click', () => {
  if ( $('.image2').attr('src') === 'images/facelift3.jpg' ){
    $('.image2').attr('src', 'images/facelift4.jpg')
  } else {
    $('.image2').attr('src', 'images/facelift3.jpg')
  }
});
});
