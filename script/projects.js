require(['jquery'], function($) {
    var FIREBASE_URL = "https://incandescent-inferno-2819.firebaseio.com/";
    var projectRef = new Firebase( FIREBASE_URL + "/web/data/projects" );

    var template = $('[data-project-list-item-template] > [data-template]');
    var scale = window.devicePixelRatio ? window.devicePixelRatio.toString() : '1';

    projectRef.once('value', function(allProjectsSnapshot) {
        allProjectsSnapshot.forEach(function(projectSnapshot) {
            var k = projectSnapshot.key();
            var v = projectSnapshot.val();

            console.log(v);

            var html = template.clone();
            html.find('[data-title]').html(v.name);
            html.find('[data-description]').html(v.description);
            html.find('[data-project-link]').attr({href: '/project.html?key=' + k});
            if (v.location.latitude) {
                html.find('[data-image]').attr({
                    src: 'https://maps.googleapis.com/maps/api/staticmap'
                        + '?markers=' + [v.location.latitude, v.location.longitude].join(',')
                        + '&size=90x90'
                        + '&scale=' + scale,
                    height: '90',
                    width: '90'
                });
            }

            $(function() {
                $("[data-project-list]").append( html );
            });
        });
    });
});

