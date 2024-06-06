/* THE JAVASCRIPT IN THE <script> TAG BEFORE <a-scene> DOES NOT WORK
function randomColor() {
	var red = document.querySelector('#red');
	var randomHEX = '#' + Math.random().toString(16).substr(-6);
	// credit: http://stackoverflow.com/a/7638362

	red.setAttribute('material', 'color', randomHEX);
}
*/

/* IF YOU MOVE IT AFTER </a-scene>, YOU NEED TO WAIT FOR THE SCENE TO LOAD
function randomColor() {
	var red = document.querySelector('#red');
	var randomHEX = '#' + Math.random().toString(16).substr(-6);
	// credit: http://stackoverflow.com/a/7638362

	red.setAttribute('material', 'color', randomHEX);
}

var scene = document.querySelector('a-scene');

if (scene.hasLoaded) {
	randomColor();
} else {
	scene.addEventListener('loaded', randomColor);
}
*/

AFRAME.registerComponent ('random-color', {
	
});