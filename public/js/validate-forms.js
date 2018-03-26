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

    $('#feedbackForm').validate({
        rules: {
            name: {
                required: true,
                rangelength: [2, 15],
            },
            subject: {
                rangelength: [1, 50],
            },
            email: {
                required: true,
                rangelength: [1, 50],
            },
            text: {
                required: true,
                rangelength: [1, 500],
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