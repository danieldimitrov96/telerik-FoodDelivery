$(document).ready(() => {
    const orderDetailsSuccess = (response) => {
        bootbox.alert({
            message: 'Your order was recieved!',
            buttons: {
                'ok': {
                    className: 'btn-orage',
                }
            }
        })
        $('#basket').empty();
        localStorage.clear();
        $('#cart .badge').first().html(0);
        $('#basketContainer .badge').first().html(0);
        $('#total').html(0);

        // localStorage.setItem('basket', JSON.stringify([]));
        // localStorage.setItem('basketTotal', JSON.stringify({
        //     totalQuantity: +0,
        //     totalSum: +0,
        // }));
        // updateBasket();
    };

    const orderDetailsError = (error) => {
        if ($('#userOrders').length === 0) {
            bootbox.alert({
                message: 'Please, log in first.',
                buttons: {
                    'ok': {
                        className: 'btn-orage'
                    }
                }
            })
        } else {
            bootbox.alert({
                message: 'Check your internet connection.',
                buttons: {
                    'ok': {
                        className: 'btn-orage'
                    }
                }
            })
        }
    };

    const sendOrderDetails = () => {
        const data = JSON.parse(localStorage.getItem('basket'));
        if (localStorage.length === 0) {

            bootbox.alert({
                message: 'Please add at least one item in the cart.',
                buttons: {
                    'ok': {
                        className: 'btn-orage'
                    }
                }
            })
            return;
        } else if (!data.length || data.length === 0) {
            bootbox.alert({
                message: 'Please add at least one item in the cart.',
                buttons: {
                    'ok': {
                        className: 'btn-orage'
                    }
                }
            })
            return;

        }



        $.post({
                method: 'POST',
                url: '/checkout',
                data: JSON.stringify(data),
                contentType: 'application/json',
                dataType: 'json',
            })
            .then(orderDetailsSuccess)
            .catch(orderDetailsError);
    }

    $(' .shopping-cart-items').css({
        'padding-left': '0',
    });

    $('#cart').on('click', function() {
        if ($('.shopping-cart').is(':hidden')) {
            $('.checkout').hide('fast');
            $('.shopping-cart').show('fast');
            $('.close').click();
        }
    });

    $('#userOrders').on('click', function() {
        if ($('.checkout').is(':hidden')) {
            $('.shopping-cart').hide('slow');
            $('.checkout').show('fast');
            $('.close').click();
        }
    });

    $('#myAccaunt').on('click', () => {
        $('.shopping-cart').hide('fast');
    });

    $('#checkoutBtn').on('click', function() {
        sendOrderDetails();
    });

    $(document).mouseup(function(e) {
        const container = $('.shopping-cart');
        const container2 = $('.portfolio-wrapper');

        if (!container.is(e.target) &&
            container.has(e.target).length === 0 &&
            !container2.is(e.target) &&
            container2.has(e.target).length === 0
        ) {
            container.hide(400);
        }
    });

    $(document).mouseup(function(e) {
        const container = $('.checkout');
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.hide(400);
        }
    });

    $('[data-foodid]').toArray().forEach((foodItem) => {
        $(foodItem).on('click', 'a:first', basket.addFoodToBasket);
    });

    basket.updateBasket();

    // Instantiate MixItUp:
    $('#Container').mixItUp();

    $('.fancybox').fancybox();

    const error = $('.input-error').html();
    if (error) {
        if (error.includes('already taken')) {
            $('#myAccaunt').click();
            $('#regTab').click();
        } else {
            $('#myAccaunt').click();
        }
    }
});
