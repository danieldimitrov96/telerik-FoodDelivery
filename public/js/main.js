$(document).ready(function () {

    String.prototype.replaceAll = function(search, replacement) {
        var target = this;
        return target.split(search).join(replacement);
    };

    const renderFood = (food, foodCattegory, price, imgURL) => {
        var htmlstring = "<div class=\"col-md-3 col-sm-6 mix portfolio-item ${foodCattegory}\"> <div class=\"portfolio-wrapper\"> <div class=\"portfolio-thumb\"> <img src=\"${imgURL}\" alt=\"\"> <div class=\"hover\"> <div class=\"hover-iner\"> <a class=\"fancybox\" href=\"${imgURL}\"> <img src=\"./../../static/images/open-icon.png\" alt=\"\"> </a> <span>${foodCattegory}</span> </div> </div> </div> <div class=\"label-text\"> <h3> <a href=\"#\">${food}</a> </h3> <span class=\"text-category\">${price}</span> </div> </div> </div>";
        htmlstring = htmlstring.replaceAll("${food}", food);
        htmlstring = htmlstring.replaceAll("${foodCattegory}", foodCattegory);
        htmlstring = htmlstring.replaceAll("${price}", price);
        htmlstring = htmlstring.replaceAll("${imgURL}", imgURL);
        $(htmlstring).appendTo($('#Container'));
    }

    renderFood('nqkva supa', 'soups', '10$', './../../static/images/product1.jpg')

    $(' .shopping-cart-items').css({
        'padding-left': '0'
    });

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

    

    // Instantiate MixItUp:

    $('#Container').mixItUp();

    $(".fancybox").fancybox();

    if ($('.input-error').html()){
        $('#myAccaunt').click();
    }



    $('h3').on('click', () => {
        $this = $(this);
        console.log($this.text())

        // addToCart();
        //use data attr when db is set

    })

   
});