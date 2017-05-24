import AudioData from "../js/AudioData";

let scene = new THREE.Scene();
let aspect = window.innerWidth / window.innerHeight;
let camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/*var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshNormalMaterial();
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;
*/
camera.position.z = 5;

let material = new THREE.LineBasicMaterial({color: 0x0034ff});
let track = new AudioData();
let vertexTable = new THREE.Geometry();
vertexTable.push(new THREE.Vector2(window.innerHeight/2,0));

var render = function (){
    requestAnimationFrame(render);
    track.getAudio();
    for (let i=0; i < track.bufferLength; i++)
    {
        let x = i;
        let y = track.dataArray[i];
        vertexTable.vertices.push(new THREE.Vector2(x, y));
    }
    let waveform = new THREE.Line(vertexTable, material);
    scene.add(waveform);
    renderer.render(scene, camera);
}
render();

/*var render = function(){
  requestAnimationFrame(render);
  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;
  renderer.render(scene, camera);
}
*/


