$(document).ready(function () {

    $('#regForm').validate({
        rules: {
            name: {
                required: true,
                rangelength: [2, 15]
            },
            password: {
                required: true,
                rangelength: [2, 13]
            },
            phone: {
                required: true,
                digits: true
            },
        }
    });

    $('#logForm').validate({
        rules: {
            username: {
                required: true,
                rangelength: [2, 15]
            },
            password: {
                required: true,
                rangelength: [2, 13]
            },
        }
    });
});