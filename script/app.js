define(['jquery'], function ($) {
    var app = window.app = {};

    var FIREBASE_URL = "https://incandescent-inferno-2819.firebaseio.com/";
    app.firebase = new Firebase( FIREBASE_URL );
    app.authData = null;

    app.firebase.onAuth(function(authData) {
        if (authData && authData.facebook) {
            app.authData = authData;
            $("[data-facebook-login]").text( app.authData.facebook.displayName );
        }
    });


    $(function(){
        if (app.authData && app.authData.facebook ) {
            $("[data-facebook-login]").text( app.authData.facebook.displayName );
            $("[data-facebook-login]").on("click", function(evt) {
                $(this).text("Login");
                app.firebase.unauth();
                evt.preventDefault();
                return false;
            });
        } else {
            $("[data-facebook-login]").on("click", function(evt) {
                evt.preventDefault();
                app.firebase.authWithOAuthRedirect("facebook", function(error) {
                    if (error) {
                        console.log("Login Failed!", error);
                    }
                });
                return false;
            });
        }
    });

    return app;
});
