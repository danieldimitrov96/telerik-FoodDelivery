$(document).ready(function () {

    $(' .shopping-cart-items').css({
        'padding-left': '0'
    });

    $("#cart").on("click", function () {
        $(".checkout").hide("slow");
        $(".shopping-cart").fadeToggle("fast");
        $('.close').click();
    });

    $("#userOrders").on("click", function () {
        $(".shopping-cart").hide("slow");
        $(".checkout").fadeToggle("fast");
        $('.close').click();
    });

    $('#myAccaunt').on('click', ()=>{
        $(".shopping-cart").hide("fast");
    })



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

    });

});