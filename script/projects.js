$(function() {
    var FIREBASE_URL = "https://incandescent-inferno-2819.firebaseio.com/";
    var projectRef = new Firebase( FIREBASE_URL + "/web/data/projects" );

    projectRef.once('value', function(allProjectsSnapshot) {
        allProjectsSnapshot.forEach(function(projectSnapshot) {
            var k = projectSnapshot.key();
            var v = projectSnapshot.val();
            console.log(k);
            console.log(v);

            $("#projectList").append( $("<li></li>").text(v["name"]) );
        }); 
    });
});
