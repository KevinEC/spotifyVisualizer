"use strict";

var _AudioData = require("../js/AudioData");

var _AudioData2 = _interopRequireDefault(_AudioData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/*var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshNormalMaterial();
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;
*/
camera.position.z = 5;

var material = new THREE.LineBasicMaterial({ color: 0x0034ff });
var track = new _AudioData2.default();
var vertexTable = new THREE.Geometry();
vertexTable.push(new THREE.Vector2(window.innerHeight / 2, 0));

var render = function render() {
    requestAnimationFrame(render);
    track.getAudio();
    for (var i = 0; i < track.bufferLength; i++) {
        var x = i;
        var y = track.dataArray[i];
        vertexTable.vertices.push(new THREE.Vector2(x, y));
    }
    var waveform = new THREE.Line(vertexTable, material);
    scene.add(waveform);
    renderer.render(scene, camera);
};
render();

/*var render = function(){
  requestAnimationFrame(render);
  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;
  renderer.render(scene, camera);
}
*/