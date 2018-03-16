var scene = new THREE.Scene();

// THREE.PerspectiveCamera(fov, aspect, near, far)
var camera = new THREE.PerspectiveCamera(
	75, 
	window.innerWidth/window.innerHeight, 
	0.1, 
	1000
);
camera.position.z = 100;

var controls = new THREE.OrbitControls(camera);

var geometry = new THREE.BoxGeometry(20, 20, 20);

// 不发光的材料，需要灯光才能显示
var color = new THREE.Color("#7833aa");
var material = new THREE.MeshLambertMaterial({color: color.getHex(), wireframe: true});
// var material = new THREE.MeshNormalMaterial();

var RX = 0.45;
var RY = -0.25;
var renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// var cube = new THREE.Mesh(geometry, material);
// scene.add(cube);
// renderer.render(scene, camera);

function update () {
	requestAnimationFrame(update);

	var scene = new THREE.Scene();
	RX += 0.01;
	RY += 0.01;
	for (var i = 0; i < 2; i++) {
		var cube = new THREE.Mesh(geometry, material);
		var SIZE = i * 25 - 10;
		cube.rotation.x = RX;
		cube.rotation.y = RY;
		cube.position.x = cube.position.y = cube.position.y = SIZE;
		scene.add(cube);
	}

	var light = new THREE.PointLight( 0xFFFFFF , 1.5);
	light.position.set( 10, 0, 80 );
	scene.add( light );

	var light = new THREE.PointLight( 0xFFFFFF , 1.5);
	light.position.set( 25, 0, -80 );
	scene.add( light );

	controls.update();
	renderer.render(scene, camera);
}

requestAnimationFrame(update);
