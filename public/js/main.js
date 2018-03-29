$(document).ready(function () {
    if (typeof localStorage.basket === undefined) {
        localStorage.setItem('basket', JSON.stringify([]));
    } else {
        //TODO: load cart from local storage
    }

    const orderDetailsSuccess = (response) => {
        alert('checkout success');
        $("#basket").empty();
        localStorage.clear();
    }

    const orderDetailsError = (error) => {
        alert("Network error, try again");
    }

    const sendOrderDetails = () => {
        const data = JSON.parse(localStorage.getItem('basket'));

        if (data.length === 0) {
            console.log('localStorage empty basket ');
            return;
        }

        $.post({
                method: 'POST',
                url: '/checkout',
                data: JSON.stringify(data),
                contentType: "application/json",
            })
            .then(orderDetailsSuccess)
            .catch(orderDetailsError);
    }

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

    $('#myAccaunt').on('click', () => {
        $(".shopping-cart").hide("fast");
    })

    $("#checkoutBtn").on("click", function () {
        console.log('checkot button clicked');
        sendOrderDetails();
    });

    // add to basket process:
    const takeOutFromBasket = (event) => {
        const $ul = $(event.currentTarget).parent();
        const foodId = $ul.data('inbasket');
        const $foodCounterBadge = $('.cart-info .badge').first();
        const currentFoodCounter = Number($foodCounterBadge.html());

        const basketArr = JSON.parse(localStorage.getItem('basket'));
        const foodObjIndex = basketArr.findIndex((obj) => obj['foodId'] === foodId);
        const foodObj = basketArr[foodObjIndex];

        if (!foodObj) {
            return;
        } else if (foodObj['quantity'] > 1) {
            foodObj['quantity'] -= 1;

            $ul.find('.item-quantity').first().html(foodObj['quantity']);
            $ul.find('.item-total').first().html('Quantity: ' + foodObj['quantity']);
            $basket.find(`[data-inbasket=${foodId}] .item-total`)
                .first().html(foodObj['quantity'] * (+foodObj['price']));

        } else {
            basketArr.splice(foodObjIndex, 1);
            $ul.empty();
        }

        $foodCounterBadge.html(currentFoodCounter - 1);
        const $foodCounterBadge2 = $('.shopping-cart-header .badge').first();
        $foodCounterBadge2.html(currentFoodCounter - 1);

        localStorage.setItem('basket', JSON.stringify(basketArr));
    }

    const foodItemTemplate = (foodId, foodImgUrl, foodName, price) => {
        const btn = $('<button>').addClass('btn btn-primary btn-danger btn-xs')
            .attr('type', 'button').html('Remove');
        $(btn).on('click', takeOutFromBasket);

        return itemTemplate = $('<li>').addClass('clearfix list-group-item').attr('data-inbasket', foodId)
            .append($(`<img src=${foodImgUrl}>`).addClass('cartOrderImages'))
            .append($(`<span>${foodName}</span>`).addClass('item-name'))
            .append($(`<div> Price: ${price}</div>`).append($('<span>').addClass('item-price')))
            .append($('<div>').append($(`<span> Quantity: ${1}</span>`).addClass('item-quantity')))
            .append($('<div>').append($(`<span>Sum: ${price}</span>`).addClass('item-total')))
            .append(btn);
    }

    const addFoodToBasket = (event) => {
        const $parent = $(event.currentTarget).closest('.portfolio-wrapper');
        const $basket = $('#basket');
        const $foodCounterBadge = $('.cart-info .badge').first();
        const currentFoodCounter = Number($foodCounterBadge.html());

        const foodId = $parent.data('foodid');
        const foodImgUrl = $parent.find('img').first().attr('src');
        const foodName = $parent.find('h3 a').first().html();
        const price = $parent.find('.text-category').first().html();
        const priceAsNr = parseFloat(price.substring(2).trim());

        const basketArr = JSON.parse(localStorage['basket'] || "[]");
        const foodObj = basketArr.find((obj) => obj['foodId'] === foodId);

        if (foodObj) {
            foodObj['quantity'] += 1;
            $basket.find(`[data-inbasket=${foodId}] .item-quantity`)
                .first().html('Quantity: ' + foodObj['quantity']);
            $basket.find(`[data-inbasket=${foodId}] .item-total`)
                .first().html('Sum: $ ' + foodObj['quantity'] * priceAsNr);
        } else {
            basketArr.push({
                foodId: foodId,
                quantity: 1,
                price: priceAsNr,
            });
            const template = foodItemTemplate(foodId, foodImgUrl, foodName, price);
            $basket.append(template);
        }

        $foodCounterBadge.html(currentFoodCounter + 1);
        const $foodCounterBadge2 = $('.shopping-cart-header .badge').first();
        $foodCounterBadge2.html(currentFoodCounter + 1);

        localStorage.setItem('basket', JSON.stringify(basketArr));
    }

    $('[data-foodid]').toArray().forEach(foodItem => {
        $(foodItem).on('click', 'a:first', addFoodToBasket);
    });

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

    $(document).mouseup(function (e) {
        var container = $(".shopping-cart");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.hide(400);
        }
    });

    $(document).mouseup(function (e) {
        var container = $(".checkout");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.hide(400);
        }
    });
});