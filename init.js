AFRAME.registerComponent('random-color', {
	init: function () {
		var el = this.el;
		
		el.addEventListener('click', function () {
			var randomHEX = '#' + Math.random().toString(16).substr(-6);
			
			el.setAttribute('material', 'color', randomHEX);
		});
	}
});