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

    $('.portfolio-thumb').on('click', (event) => {
        let $parent = $(event.target).closest('.portfolio-wrapper');

        const foodImgUrl = $parent.find('img').first().attr('src');

        const foodId = $parent.data('id');
        const foodName = $parent.find('h3 a').first().html();
        const price = $parent.find('.text-category').first().html();
        const priceAsNr = parseFloat(price.substring(2).trim());
        const quantity = 1;

        const itemTemplate = $('<li>').addClass('clearfix list-group-item')
            .append($('<img>').addClass('cartOrderImages'))
            .append($('<span>').addClass('item-name'))
            .append($('<div>').append($('<span>').addClass('item-price')))
            .append($('<div>').append($('<span>').addClass('item-quantity')))
            .append($('<button>').addClass('btn btn-primary btn-danger btn-xs').attr('type', 'button').html('Remove'));

        itemTemplate.find('.cartOrderImages').attr('src', foodImgUrl);
        itemTemplate.find('.item-name').html(foodName);
        itemTemplate.find('.item-price').html('Price: ' + price);
        itemTemplate.find('.item-quantity').html('Quantity: ' + quantity);
        $('#basket').append(itemTemplate);

        // save in lockal storage 
        var foods = JSON.parse(localStorage['basket'] || "[]");

        const isInBasket = false; 
        foods.map((food) => {
            if(food.id === foodId)  {
                food.quantity +=1;
                isInBasket = true;
            }
        });
        if(!isInBasket) {
            foods.push({
                id: foodId,
                quantity: 1,
                price: priceAsNr,
            });
        }
        localStorage['basket'] = JSON.stringify(foods);
        console.log(localStorage['basket']);
    });

    // $('h3').on('click', () => {
    //     $this = $(this);
    //     // console.log($this.text())

    //     // addToCart();
    //     //use data attr when db is set

    // });

});