$(function($) {
    var FIREBASE_URL = "https://incandescent-inferno-2819.firebaseio.com/";

    $("[data-project-init-form]").on("submit", function() {
        console.log("tttt");
        var p = {
            name: $("input#projectName").val(),
            description: $("textarea#projectDescription").val()
        };

        var ref = new Firebase( FIREBASE_URL );
        ref.authAnonymously(function(error, authData) {
            if (error) {
                // console.log("Login Failed!", error);
            } else {
                // console.log("Authenticated successfully with payload:", authData);

                var projectRef = new Firebase( FIREBASE_URL + "/web/data/projects" );
                projectRef.push(p);

            }
        });

        return false;
    });
});