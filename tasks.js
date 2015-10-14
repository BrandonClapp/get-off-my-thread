var tasks = {

	expensiveTaskA: function() {
		for(var i = 0; i < 10000; i++) {
			console.log('expensiveTaskA: ' + i);
		}
	},

	expensiveTaskB: function() {
		for(var i = 0; i < 10000; i++) {
			console.log('expensiveTaskB: ' + i);
		}
	}
 };