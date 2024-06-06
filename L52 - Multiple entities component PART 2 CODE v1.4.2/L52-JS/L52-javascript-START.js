AFRAME.registerComponent('multiple-entities', {
	schema: {
		num: {type: 'number', default: 5},
		w: {type: 'number', default: 1},
		h: {type: 'number', default: 1},
		d: {type: 'number', default: 1},
		colorDefault: {type: 'color', default: '#212121'},
		colorHover: {type: 'color', default: '#FF7700'}
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
			
//			myBox.setAttribute('position', {x: i, y: 0.5, z: 0});
			myBox.object3D.position.x = i * data.w + data.w / 2;
			myBox.object3D.position.y = data.h / 2;
			
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