$(document).ready(function () {

  $("#cart").on("click", function () {
    $(".shopping-cart").fadeToggle("fast");
  });

  $("a").css({
    'color': 'orange'
  });

  $("div.blog-post").hover(
    function () {
      $(this).find("div.content-hide").slideToggle("fast");
    },
    function () {
      $(this).find("div.content-hide").slideToggle("fast");
    }
  );

  $('.flexslider').flexslider({
    prevText: '',
    nextText: ''
  });

  $('.testimonails-slider').flexslider({
    animation: 'slide',
    slideshowSpeed: 5000,
    prevText: '',
    nextText: '',
    controlNav: false
  });

  $(function () {

    // Instantiate MixItUp:

    $('#Container').mixItUp();



    $(document).ready(function () {
      $(".fancybox").fancybox();
    });

  });

 

  $('h3').on('click', () => {
    $this = $(this);
    console.log($this.text())

    // addToCart();
    //use data attr when db is set

  })

});