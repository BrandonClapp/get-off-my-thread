function webworker_main() {

	console.log('Entering main');

	// set up workers 
	var worker_a = new Worker('worker_a.js');
	var worker_b = new Worker('worker_b.js');

	worker_a.onmessage = function(msg){
		console.log('Main thread: Worker A is complete');
	}

	worker_b.onmessage = function(msg){
		console.log('Main thread: Worker B is complete');
	}

	// Start both workers
	worker_a.postMessage('whatever');
	worker_b.postMessage('blah');

    // how to terminate workers
    // setTimeout(function() {
    // 	worker_a.terminate();
    // }, 200);

    console.log('main finished');
}