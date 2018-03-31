$(document).ready(function () {
    const orderDetailsSuccess = (response) => {
        // console.log('checkout success');
        alert('checkout success');
        $("#basket").empty();
        localStorage.clear();
        $('#cart .badge').first().html(0);
        $('#basketContainer .badge').first().html(0);
        $('#total').html(0);
    }

    const orderDetailsError = (error) => {
        alert("Network error, try again");
    }

    const sendOrderDetails = () => {
        const data = JSON.parse(localStorage.getItem('basket'));
        if (!data.length || data.length === 0) {
            return;
        }

        $.post({
                method: 'POST',
                url: '/checkout',
                data: JSON.stringify(data),
                contentType: "application/json",
                dataType: 'json'
            })
            .then(orderDetailsSuccess)
            .catch(orderDetailsError);
    }

    $(' .shopping-cart-items').css({
        'padding-left': '0'
    });

    $("#cart").on("click", function () {
        if ($(".shopping-cart").is(':hidden')) {
            $(".checkout").hide("fast");
            $(".shopping-cart").show("fast");
            $('.close').click();
        }
    });

    $("#userOrders").on("click", function () {
        if ($(".checkout").is(':hidden')) {
            $(".shopping-cart").hide("slow");
            $(".checkout").show("fast");
            $('.close').click();
        }
    });

    $('#myAccaunt').on('click', () => {
        $(".shopping-cart").hide("fast");
    })

    $("#checkoutBtn").on("click", function () {
        sendOrderDetails();
    });

    $(document).mouseup(function (e) {
        let container = $(".shopping-cart");
        let container2 = $('.portfolio-wrapper');

        if (!container.is(e.target) &&
            container.has(e.target).length === 0 &&
            !container2.is(e.target) &&
            container2.has(e.target).length === 0
        ) {
            container.hide(400);
        }
    });

    $(document).mouseup(function (e) {
        let container = $(".checkout");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.hide(400);
        }
    });


    // add to basket process:
    const takeOutFromBasket = (event) => {
        const $li = $(event.currentTarget).closest('li');
        const foodId = $li.data('inbasket');

        const basketArr = JSON.parse(localStorage.getItem('basket'));
        const foodObjIndex = basketArr.findIndex((obj) => obj['foodId'] === foodId);
        const foodObj = basketArr[foodObjIndex];
        const basketTotalObj = JSON.parse(localStorage.getItem('basketTotal'));

        if (!foodObj) {
            return;
        } else if (foodObj['quantity'] > 1) {
            foodObj['quantity'] -= 1;
            foodObj['sum'] -= Number(foodObj['price']);
            basketTotalObj['totalQuantity'] -= 1;
            basketTotalObj['totalSum'] -= Number(foodObj['price']);
        } else {
            basketTotalObj['totalQuantity'] -= 1;
            basketTotalObj['totalSum'] -= Number(foodObj['price']);
            basketArr.splice(foodObjIndex, 1);
        }

        localStorage.setItem('basket', JSON.stringify(basketArr));
        localStorage.setItem('basketTotal', JSON.stringify(basketTotalObj));

        updateBasket();
    }

    const updateBasket = () => {
        if (!localStorage.getItem('basketTotal')) {
            // console.log('There is no basketTotal info');
            return;
        }
        const basketTotalObj = JSON.parse(localStorage.getItem('basketTotal'));
        const totalQuantity = basketTotalObj['totalQuantity'];
        const totalSum = basketTotalObj['totalSum'];
        $('#cart span').first().html(totalQuantity);
        $('#basketHeader span').first().html(totalQuantity);
        $('#basketHeader span').last().html('$ ' + totalSum);

        if (!localStorage.getItem('basket')) {
            // console.log('empty current basket');
            return;
        }
        const currentBasketArr = JSON.parse(localStorage.getItem('basket'));
        // console.log(currentBasketArr);
        const $basket = $('#basket');
        $basket.empty();

        currentBasketArr.forEach((obj) => {
            const template = foodItemTemplate(obj);
            // console.log(obj);
            $basket.append(template);
        });
    }

    const foodItemTemplate = (obj) => {
        const foodId = obj['foodId'];
        const foodName = obj['foodName'];
        const foodImgUrl = obj['foodImgUrl'];
        const quantity = obj['quantity'];
        const price = obj['price'];
        const sum = obj['sum'];

        const btn = $('<button>').addClass('btn btn-primary btn-danger btn-xs')
            .attr('type', 'button').html('Remove');
        $(btn).on('click', takeOutFromBasket);

        return itemTemplate = $('<li>').addClass('clearfix list-group-item').attr('data-inbasket', foodId)
            .append($(`<img src=${foodImgUrl}>`).addClass('cartOrderImages'))
            .append($(`<span>${foodName}</span>`).addClass('item-name'))
            .append($(`<div> Price: ${price}</div>`).append($('<span>').addClass('item-price')))
            .append($('<div>').append($(`<span> Quantity: ${quantity}</span>`).addClass('item-quantity')))
            .append($('<div>').append($(`<span>Sum: ${sum}</span>`).addClass('item-total')))
            .append($(btn));
    }

    const addFoodToBasket = (event) => {
        setTimeout(function () {
            $('.fancybox-skin').slideUp(400);
            $('.fancybox-close').click();
        }, 1000);

        const $parent = $(event.currentTarget).closest('.portfolio-wrapper');

        const foodId = $parent.data('foodid');
        const foodImgUrl = $parent.find('img').first().attr('src');
        const foodName = $parent.find('h3 a').first().html();
        const price = $parent.find('.text-category').first().html();
        const priceAsNr = parseFloat(price.substring(2).trim());
        const quantity = +1;

        const basketArr = JSON.parse(localStorage['basket'] || "[]");
        const basketTotalObj = JSON.parse(localStorage['basketTotal'] || "{}");
        const foodObj = basketArr.find((obj) => obj['foodId'] === foodId);

        if (foodObj) {
            foodObj['quantity'] += 1;
            foodObj['sum'] += priceAsNr;
        } else {
            basketArr.push({
                foodId: foodId,
                foodName: foodName,
                foodImgUrl: foodImgUrl,
                quantity: quantity,
                price: priceAsNr,
                sum: priceAsNr,
            });
        }

        if (!basketTotalObj['totalQuantity'] || !basketTotalObj['totalSum']) {
            // console.log('innn');
            // console.log(basketTotalObj);
            basketTotalObj['totalQuantity'] = +0;
            basketTotalObj['totalSum'] = +0;
        }
        basketTotalObj['totalQuantity'] += 1;
        basketTotalObj['totalSum'] += priceAsNr;

        localStorage.setItem('basket', JSON.stringify(basketArr));
        localStorage.setItem('basketTotal', JSON.stringify(basketTotalObj));

        updateBasket();
    }

    $('[data-foodid]').toArray().forEach(foodItem => {
        $(foodItem).on('click', 'a:first', addFoodToBasket);
    });

    updateBasket();

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
});