onmessage = function(args) {
	
	for(var i = 0; i < 10000; i++) {
		console.log('expensiveTaskB: ' + i);
	}

	postMessage('my_args');
}