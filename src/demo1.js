const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
const scene = new THREE.Scene();

const FOV = 50;
const ASPECT = WIDTH / HEIGHT;
const NEAR = 0.1;
const FAR = 2000;
const camera = new THREE.PerspectiveCamera(
    FOV,
    ASPECT,
    NEAR,
    FAR
);
camera.position.z = 100;

const RADIUS = 100;
const WIDTHSEGMENTS = 16;
const HEIGHTSEGMENTS = 16;
const sphereMaterial = new THREE.MeshLambertMaterial({
	color: 0xCC0000,
});
const sphere = new THREE.Mesh(
	new THREE.SphereGeometry(RADIUS, WIDTHSEGMENTS, HEIGHTSEGMENTS),
	sphereMaterial
);
sphere.position.z = -300;

const pointLight = new THREE.PointLight(0xFFFFFF);
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;

scene.add(camera);
scene.add(sphere);
scene.add(pointLight);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(WIDTH, HEIGHT);
renderer.render(scene, camera);

const container = document.querySelector("#container");
container.appendChild(renderer.domElement);

function update () {
  renderer.render(scene, camera);

  window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);
