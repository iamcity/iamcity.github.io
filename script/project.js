require(['jquery', 'app'], function ($, app) {
    var pRef, pk, match;

    match = RegExp('[?&]' + 'key' + '=([^&]*)').exec(window.location.search);
    if (match && decodeURIComponent(match[1].replace(/\+/g, ' '))) {
        pk = match[1];
    }
    if (!pk) {
        location.href = "/projects.html";
    }

    app.firebase.child("web/data/projects").child(pk).on("value", function(p) {
        var pv = p.val();
        console.log(pv);
        var pdiv = $("[data-project]");
        pdiv.find("h3").text( pv.name );
        pdiv.find("[data-project-owner]").text( pv.user.facebook.displayName );
        pdiv.find("[data-project-description]").text( pv.description );
        pdiv.find("[data-project-participants]").text("( ... participants ... )");
    });
});
