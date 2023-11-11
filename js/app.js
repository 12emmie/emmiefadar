$('.signup').hide();

$('#signin, #signup').on(
  'click',
  function(){
    $('.signin, .signup').toggle()
  }
)
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots: true,
  smartSpeed: 700,
  responsive: {
    0: {
      items:1
    },
    600: {
      items:3
    },
    1000: {
      items:3,
      center: true,
    }
  }
})
