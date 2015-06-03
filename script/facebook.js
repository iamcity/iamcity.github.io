require(['jquery', 'app'], function($, app) {

    $(function(){
        if (app.authData && app.authData.facebook ) {
            $("[data-facebook-login]").text( app.authData.facebook.displayName );
        } else {
            $("[data-facebook-login]").on("click", function(evt) {
                evt.preventDefault();
                app.firebase.authWithOAuthRedirect("facebook", function(error) {
                    if (error) {
                        console.log("Login Failed!", error);
                    }
                });
            });
        }
    });
});
