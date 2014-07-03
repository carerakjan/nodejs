/**
 * New node file
 */

function main(){
	var http = require('http');
	var router = require('router');
	
	http.createServer(function (request, response) {
		try {
			var r = router.initial(request, response);
			if(!r.segment(0)) {
				require('home').initial(r);
				return;
			};
			require(''+r.segment(0)).initial(r);
		}catch(e){
			response.writeHead({"Content-Type":"html/plane"});
			response.write('404');
			response.end();
			return;
		}
	}).listen(4321);
}

main();
