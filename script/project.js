require(
    ['jquery', 'app', 'project/actionCreation', 'project/actionList'],
    function ($, app, actionCreation, actionList) {
        var pRef, pk, match;

        match = RegExp('[?&]' + 'key' + '=([^&]*)').exec(window.location.search);
        if (match && decodeURIComponent(match[1].replace(/\+/g, ' '))) {
            pk = match[1];
        }
        if (!pk) {
            location.href = "/projects.html";
        }

        app.firebase.child(pk).on("value", function(p) {
            var pv = p.val();
            var pdiv = $("[data-project]");
            pdiv.find("h3").text( pv.name );
            pdiv.find("[data-project-owner]").text( pv.user.facebook.displayName );
            pdiv.find("[data-project-description]").text( pv.description );
            pdiv.removeClass('hidden');
            actionCreation($('[data-action-form]'), p);
            actionList($('[data-project-action-list]'), p.child('actions'));
        });
    }
);
