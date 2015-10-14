function async_main() {

	console.log('Entering main.');

	// "Parallel" will fire each function synchronously
	// and block main thread until finished.
	async.parallel([
    	tasks.expensiveTaskA,
    	tasks.expensiveTaskB
	]);

	console.log('Main ended.');
}