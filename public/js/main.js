$(document).ready(function () {

    $(' .shopping-cart-items').css({
        'padding-left': '0'
    });

    $("#cart").on("click", function () {
        $(".shopping-cart").fadeToggle("fast");
    });

    $("div.blog-post").hover(
        function () {
            $(this).find("div.content-hide").slideToggle("fast");
        },
        function () {
            $(this).find("div.content-hide").slideToggle("fast");
        }
    );



    // Instantiate MixItUp:

    $('#Container').mixItUp();

    $(".fancybox").fancybox();

    var error = $('.input-error').html();
    if (error) {
        if (error.includes('already taken')) {
            $('#myAccaunt').click();
            $('#regTab').click();
        } else {
            $('#myAccaunt').click();
        }
    }





    $('h3').on('click', () => {
        $this = $(this);
        // console.log($this.text())

        // addToCart();
        //use data attr when db is set

    })


});