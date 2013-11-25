(function(w){

	var command = function(){
		console.log('Some crazy stuff');
		return true;
	}

	w.doCrazyStuff = command;

})(window);