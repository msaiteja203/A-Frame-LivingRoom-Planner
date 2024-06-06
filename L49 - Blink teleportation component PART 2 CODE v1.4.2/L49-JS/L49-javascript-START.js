AFRAME.registerComponent('blink-teleportation', {
	schema: {
		pos: {type: 'vec3'},
		dur: {type: 'number', default: 300}
	},
	
	init: function () {
		var el = this.el;
		var data = this.data;
		var camera = document.querySelector('#camera');
		var cameraRig = document.querySelector('#cameraRig');
		
		// CREATE A TRANSPARENT BLACK IMAGE
		var blink = document.createElement('a-image');
		blink.setAttribute('material', {
			color: '#000000',
			opacity: 0
		});
		
		// SET THE BLACK IMAGE POSITION AND APPEND IT AS CAMERA'S CHILD ENTITY
		blink.setAttribute('position', {x: 0, y: 0, z: -0.1});
		camera.appendChild(blink);
		
		// ON CLICK, ANIMATE THE BLACK IMAGE (FADE-IN)
		el.addEventListener('click', function () {
			blink.setAttribute('animation', {
				property: 'material.opacity',
				from: 0,
				to: 1,
				dur: data.dur,
				easing: 'easeOutCubic'
			});
			
			// WHEN FADE-IN ANIMATION COMPLETES, MOVE THE CAMERA RIG TO DESTINATION
			setTimeout(function () {
				cameraRig.setAttribute('position', data.pos);
				// EMIT CUSTOM EVENT TO TRIGGER THE FADE-OUT ANIMATION
				el.emit('position-changed');
			}, data.dur);
		});
		
		// ON CUSTOM EVENT, ANIMATE THE BLACK IMAGE (FADE-OUT)
		el.addEventListener('position-changed', function () {
			blink.setAttribute('animation', {
				to: 0
			});
		});
	}
});