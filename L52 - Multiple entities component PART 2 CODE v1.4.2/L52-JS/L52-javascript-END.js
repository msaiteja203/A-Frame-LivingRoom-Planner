AFRAME.registerComponent('multiple-entities', {
	schema: {
		num: {type: 'number', default: 5},
		w: {type: 'number', default: 1},
		h: {type: 'number', default: 1},
		d: {type: 'number', default: 1},
		colorDefault: {type: 'color', default: '#212121'},
		colorHover: {type: 'color', default: '#FF7700'},
        axis: {type: 'string', default: 'x'},
        dir: {type: 'string', default: 'positive'},
        gap: {type: 'number', default: 0}
	},
	
	init: function () {
		var el = this.el;
		var data = this.data;
		
		for (var i = 0; i < data.num; i++) {
			let myBox = document.createElement('a-entity')
			
			myBox.setAttribute('geometry', {
				primitive: 'box',
				width: data.w,
				height: data.h,
				depth: data.d
			});
			
			myBox.setAttribute('material', 'color', data.colorDefault);
            
            var alignX = i * (data.w + data.gap) + data.w / 2;
            var alignY = i * (data.h + data.gap) + data.h / 2;
            var alignZ = i * (data.d + data.gap);
            
            var direction;
            
            if (data.dir === 'positive') {
				direction = 1;
			} else if (data.dir === 'negative') {
				direction = -1;
			}
            
            if (data.axis === 'x') {
                myBox.object3D.position.x = alignX * direction;
                myBox.object3D.position.y = data.h / 2;
            } else if (data.axis === 'y') {
                myBox.object3D.position.y = alignY * direction;
            } else if (data.axis === 'z') {
                myBox.object3D.position.z = alignZ * direction;
                myBox.object3D.position.y = data.h / 2;
            }
			
			el.appendChild(myBox);
			
			myBox.addEventListener('mouseenter', function () {
				myBox.setAttribute('material', 'color', data.colorHover);
			});
			
			myBox.addEventListener('mouseleave', function () {
				myBox.setAttribute('material', 'color', data.colorDefault);
			});
		}
	}
});