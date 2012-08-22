//action: processes action under every element of array
(function(){
	Array.prototype.each = function(action){
					for (var i = 0; i < this.length; ++i){
						action(this[i]);
					}
				};
})();
