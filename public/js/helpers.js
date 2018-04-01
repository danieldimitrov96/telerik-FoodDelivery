const helpers = (function(params) {
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

    return {
        bootboxMsg,
    };
}());
