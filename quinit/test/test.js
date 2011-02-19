

$(document).ready(function(){	
	var ccw = $.rpcservice(smd);
	var ajaxAdd = ccw.remoteService( {
						data: {
							someDataToSendToTheServer:1
						},
						success: function (data) {
							alert(data);
						},
						error: function (data) {
							alert(data);
						}
					});

	console.log(ajaxAdd);
	
	test("basic inheritance", function() {
		equals( true, true, "" );
	});
});


var smd = {
    "transport": "POST",
    "envelope": "URL",
    "target": "/service/",
    "additionalParameters": true,
    "services": {
        "remoteService": {
            "transport": "GET",
            "target": "executeFoo.php",
        }
    }
}