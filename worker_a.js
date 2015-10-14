onmessage = function(args) {
	
	for(var i = 0; i < 10000; i++) {
		console.log('expensiveTaskA: ' + i);
	}

	postMessage('my_args');
}