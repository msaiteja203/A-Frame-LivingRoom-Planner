AFRAME.registerComponent('entity-spawner', {
	init: function () {
		var camera = document.querySelector('#cam');
		var scene = document.querySelector('a-scene');
		
		this.el.addEventListener('click', function () {
			var position = new THREE.Vector3();
			var direction = new THREE.Vector3();
			var target = new THREE.Vector3();
			
			camera.object3D.getWorldPosition(position);
			camera.object3D.getWorldDirection(direction);
			direction.multiplyScalar(-2);
			target.add(position).add(direction);

			var sphere = document.createElement('a-sphere');
			sphere.setAttribute('material', {color: '#0077FF', side: 'double'});
			sphere.setAttribute('radius', 0.25);
			sphere.setAttribute('position', target);

			scene.appendChild(sphere);
		});
	}
});

// WILL NOT CALCULATE THE CAMERA'S WORLD-SPACE POSITION INHERITED FROM THE CAMERA RIG
//AFRAME.registerComponent('entity-spawner-2', {
//	init: function() {
//		var camera = document.querySelector('#cam');
//		var scene = document.querySelector('a-scene');
//		
//		this.el.addEventListener('click', function() {
//			var cameraPosition = camera.getAttribute('position');
//			
//			var sphere = document.createElement('a-sphere');
//			sphere.setAttribute('material', {color: '#0077FF', side: 'double'});
//			sphere.setAttribute('radius', 0.25);
//			sphere.setAttribute('position', cameraPosition);
//			
//			scene.appendChild(sphere);
//		});
//	}
//});