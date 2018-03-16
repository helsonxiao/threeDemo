var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(
    60,                                   // Field of view
    window.innerWidth/window.innerHeight, // Aspect ratio
    0.1,                                  // Near clipping pane
    1000                                  // Far clipping pane
);

camera.position.set(0, 5, 15);
camera.lookAt(new THREE.Vector3(0,0,0));

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0xfff6e6 );

document.body.appendChild( renderer.domElement );

// A mesh is created from the geometry and material, then added to the scene
var plane = new THREE.Mesh(
    new THREE.PlaneGeometry( 10, 10, 10, 10 ),
    new THREE.MeshBasicMaterial( { color: 0x393839, wireframe: true } )
);

// 绕 X 轴旋转半周
plane.rotateX(Math.PI/2);
scene.add( plane );

var boxGeometry = new THREE.BoxGeometry(1, 1, 1);
var boxMaterial = new THREE.MeshBasicMaterial({ color: 0xf5c672 });
positionX = -1.5;
for (i = 1; i <= 3; i++)
{
	var cube = new THREE.Mesh(boxGeometry, boxMaterial);
	cube.position.x = positionX += 1;
	cube.position.y = 0.5;
	cube.position.z = 0.5;
	scene.add(cube);
}

renderer.render(scene, camera);

// Add an orbit control which allows us to move around the scene. See the three.js example for more details
// https://github.com/mrdoob/three.js/blob/dev/examples/js/controls/OrbitControls.
var controls = new THREE.OrbitControls( camera, renderer.domElement );

 // add this only if there is no animation loop (requestAnimationFrame)
controls.addEventListener( 'change', function() { renderer.render(scene, camera); } );
