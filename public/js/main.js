$(document).ready(function () {
    localStorage.clear();

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
        } else {
            basketArr.splice(foodObjIndex, 1);
            $ul.empty();
        }

        $foodCounterBadge.html(currentFoodCounter - 1);
        localStorage.setItem('basket', JSON.stringify(basketArr));
    }

    const foodItemTemplate = (foodId, foodImgUrl, foodName, price) => {
        const btn = $('<button>').addClass('btn btn-primary btn-danger btn-xs')
            .attr('type', 'button').html('Remove');
        $(btn).on('click', takeOutFromBasket);

        return itemTemplate = $('<li>').addClass('clearfix list-group-item').attr('data-inbasket', foodId)
            .append($(`<img src=${foodImgUrl}>`).addClass('cartOrderImages'))
            .append($(`<span>${foodName}</span>`).addClass('item-name'))
            .append($(`<div>${price}</div>`).append($('<span>').addClass('item-price')))
            .append($('<div>').append($(`<span>${1}</span>`).addClass('item-quantity')))
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
                .first().html(foodObj['quantity']);
        } else {
            basketArr.push({
                foodId: foodId,
                quantity: 1,
            });
            const template = foodItemTemplate(foodId, foodImgUrl, foodName, price);
            $basket.append(template);
        }

        $foodCounterBadge.html(currentFoodCounter + 1);
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
});