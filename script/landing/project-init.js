$(function($) {
    var FIREBASE_URL = "https://incandescent-inferno-2819.firebaseio.com/";

    $("#projectInitForm").on("submit", function() {
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
                projectRef.set(p);
                console.log("COOL");
            }
        });

        return false;
    });
});