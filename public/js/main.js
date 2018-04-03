$(document).ready(() => {
    const bootboxMsg = (msg) => {
        bootbox.alert({
            message: msg,
            buttons: {
                'ok': {
                    className: 'btn-orage',
                },
            },
        });
    };

    const orderDetailsSuccess = async (response) => {
        bootboxMsg('Your order was recieved!');
        localStorage.setItem('basket', JSON.stringify([]));
        localStorage.setItem('basketTotal', JSON.stringify({
            totalQuantity: +0,
            totalSum: +0,
        }));
        basket.updateBasket();
    };

    const orderDetailsError = (error) => {
        if ($('#userOrders').length === 0) {
            bootboxMsg('Please, log in first.');
        } else {
            bootboxMsg('Check your internet connection.');
        }
    };

    const sendOrderDetails = async () => {
        const data = JSON.parse(localStorage.getItem('basket'));
        if (localStorage.length === 0) {
            bootboxMsg('Please add at least one item in the cart.');
            return;
        } else if (!data.length || data.length === 0) {
            bootboxMsg('Please add at least one item in the cart.');
            return;
        }

        let res;
        try {
            res = await $.post({
                method: 'POST',
                url: '/checkout',
                data: JSON.stringify(data),
                contentType: 'application/json',
                dataType: 'json',
            });
            orderDetailsSuccess(res);
        } catch (err) {
            orderDetailsError(err);
        }
        // .then(orderDetailsSuccess)
        // .catch(orderDetailsError);
    };

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

    $('#myAccount').on('click', () => {
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

    // basket functionality:
    $('[data-foodid]').toArray().forEach((foodItem) => {
        $(foodItem).on('click', 'a:first', (event) => {
            basket.addFoodToBasket(event);
            basket.updateBasket();
        });
    });
    basket.updateBasket();

    // Instantiate MixItUp:
    $('#Container').mixItUp();
    $('.fancybox').fancybox();

    const error = $('.input-error').html();
    if (error) {
        if (error.includes('already taken')) {
            $('#myAccount').click();
            $('#regTab').click();
        } else {
            $('#myAccount').click();
        }
    }
});
