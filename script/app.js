define([ window ], function () {
    var app = window.app = {};

    var FIREBASE_URL = "https://incandescent-inferno-2819.firebaseio.com/web/data";
    app.firebase = new Firebase( FIREBASE_URL );
    app.authData = null;

    app.firebase.onAuth(function(authData) {
        if (authData) {
            app.authData = authData;
        }
    });

    return app;
});
