AFRAME.registerComponent('blink-teleportation', {
	schema: {
		pos: {type: 'vec3'},
		dur: {type: 'number', default: 300},
		hide: {type: 'boolean', default: false}
	},
	
	init: function () {
		var el = this.el;
		var data = this.data;
		var camera = document.querySelector('a-camera');
		var cameraRig = document.querySelector('#cameraRig');
		var cursor = document.querySelector('a-cursor');
		var blinkTeleportationEl = document.querySelectorAll('[blink-teleportation]');

    // CREATE A CURSOR AND NEST IT INSIDE THE CAMERA
    // This has to go before the a-image because of the A-Frame rendering order
    // If you create and append the a-cursor AFTER the a-image, it won't be visible
    var cursor = document.createElement('a-cursor');
    // SET SELECTIVE INTERSECTIONS
    cursor.setAttribute('raycaster', 'objects', '.clickable');
    camera.appendChild(cursor);
		
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
				
				// RESET VISIBLE AND CLASS VALUES FOR ALL THE BLINK-TELEPORTATION ENTITIES
				for (var i = 0; i < blinkTeleportationEl.length; i++) {
					blinkTeleportationEl[i].setAttribute('visible', 'true');
					blinkTeleportationEl[i].setAttribute('class', 'clickable');
				}
				
				// IF HIDE PROPERTY IS SET TO TRUE, HIDE THE BLINK-TELEPORTATION ENTITY
				if (data.hide === true) {
					el.setAttribute('visible', 'false');
				}
                
                // THEN MAKE ONLY THE SELECTED BLINK-TELEPORTATION ENTITY NOT-CLICKABLE
                // NOTE: not only is it possible to move these 2 lines of code (57 and 58) out of the "for" loop,
                //       but it would also be the best approach because you would reduce the performance overhead
                //       caused by setAttribute() being used on each increment.
                // PS:   Apologies for any confusion, guys! :-)
                el.setAttribute('class', 'not-clickable');
                cursor.components.raycaster.refreshObjects();
				
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