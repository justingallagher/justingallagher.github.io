var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setClearColor(0xffffff, 0);
renderer.setSize(
  window.innerWidth * window.devicePixelRatio,
  window.innerHeight * window.devicePixelRatio,
  false
);
document.body.appendChild(renderer.domElement);

var ambientLight = new THREE.AmbientLight(0x6cc389);
scene.add(ambientLight);

var lights = [];
lights[0] = new THREE.PointLight(0xf6f6f6, 0.2, 0);
lights[1] = new THREE.PointLight(0xf6f6f6, 0.5, 0);
lights[2] = new THREE.PointLight(0xf6f6f6, 0.2, 0);

lights[0].position.set(0, 200, 0);
lights[1].position.set(100, -200, 100);
lights[2].position.set(-200, -200, -200);

scene.add(lights[0]);
scene.add(lights[1]);
scene.add(lights[2]);

var detailLevel = 1;

var geometry = null;
var geometryObjects = [
  THREE.IcosahedronGeometry,
  THREE.DodecahedronGeometry,
  THREE.OctahedronGeometry
];

var geometryIndex = Math.floor(0.1 * geometryObjects.length);
var geometry = new geometryObjects[geometryIndex](1, detailLevel);
var wireframe = new THREE.MeshPhongMaterial({
  shading: THREE.FlatShading,
  wireframeLinewidth: 3
});

var shape = new THREE.Mesh(geometry, wireframe);
shape.scale.set(1, 1, 1);
shape.position.set(0, 0, 0);
scene.add(shape);

camera.position.z += 3;

var render = function() {
  requestAnimationFrame(render);

  shape.rotation.x += 0.0008;
  shape.rotation.y += 0.0009;

  renderer.render(scene, camera);
};

render();

window.addEventListener("resize", onWindowResize, false);
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(
    window.innerWidth * window.devicePixelRatio,
    window.innerHeight * window.devicePixelRatio,
    false
  );
}
