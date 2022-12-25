const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
const controls = new THREE.OrbitControls( camera, renderer.domElement );

//controls.update() must be called after any manual changes to the camera's transform
camera.position.set( 0, 20, 100 );
controls.update();

function animate() {

	requestAnimationFrame( animate );

	// required if controls.enableDamping or controls.autoRotate are set to true
	controls.update();

	renderer.render( scene, camera );

}



const loader = new THREE.GLTFLoader();

loader.load( 'botol.gltf', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

let planeGeo = new THREE.PlaneGeometry(100,100);
let PlaneMesh = new THREE.Mesh(planeGeo, new THREE.MeshBasicMaterial({color:0xffffff}) );
PlaneMesh.rotation.x -= Math.PI/2;
PlaneMesh.position.y -= 0.5;
scene.add(PlaneMesh);

let pLight = new THREE.PointLight(0xffffff,1);
pLight.position.set(1,1,2);
scene.add(pLight);
scene.add(new THREE.PointLightHelper(pLight,0,1,0xff0000));

function update() {
    renderer.render(scene,camera);
    requestAnimationFrame(update);
}
update();

// import React from 'react';
// import botol1 from './botol1.png';
// import grafik from './grafik.jpg';
// import './App.css';
// import * as THREE from 'THREE';
// import Bootstrap from 'bootstrap';
// import botol_persegi from './botol_persegi.gltf';
// import { GLTFLoader } from 'https://cdn.rawgit.com/mrdoob/THREE.js/master/examples/js/loaders/GLTFLoader.js';

// const renderer = new THREE.WebGLRenderer();
// const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
// const scene = new THREE.Scene();
// let Mesh;
// let light;

// function init() {
//   camera.position.set(0, 10, 20);
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   document.body.appendChild(renderer.domElement);
// }

// function setLight() {
//   light = new THREE.AmbientLight(0xffffff); // soft white light
//   scene.add(light);
// }

// function loadGLTF() {
//   let balloonLoader = new THREE.GLTFLoader();

//   balloonLoader.load({botol_persegi}, (gltf) => {
//   Mesh = gltf.scene;
//   Mesh.scale.set(0.2,0.2,0.2);
//   scene.add(Mesh);
//   Mesh.position.x = 0;
//   Mesh.position.y = 10;
//   Mesh.position.z = 15;
//   });
// }

// function animate() {
//   requestAnimationFrame(animate);
//   if (Mesh && Mesh.rotation) {
//     Mesh.rotation.y -= 0.005;
//   }
//   renderer.render(scene, camera);
// }


// function App() {
  

//   return (
    // <div className="body">
    //   <div className="container">
    //     <li><a href="#" className="cool-link" id="cool-link">Product</a></li>
    //     <li><a href="#" className="cool-link" id="cool-link">Sale</a></li>
    //     <li><a href="#" className="cool-link" id="cool-link">Contact</a></li>

    //   </div>

    //   <div style={{"marginTop" : "200px", "padding" : "20px"}} className="cool-image">
    //     <center>
    //       <img className="cool-image" src={botol1} alt="botol" width="242px" height="425px"/>
    //       <p style={{"marginTop" : "20px", "padding" : "20px", "fontFamily" : "gill sans mt"}}>
    //         A Bottle made of glass? Big No. This is our Bottle which made of LOVE.</p>
    //     </center>
    //   </div>

    //   <div style={{"marginTop" : "260px", "padding" : "20px"}} className="cool-graphic">
    //     <center>
    //       <img className="cool-image" src={grafik} alt="botol" width="242px" height="425px"/>
    //       <p style={{"marginTop" : "20px", "padding" : "20px", "fontFamily" : "gill sans mt"}}>
    //         Use by Over a Billion people around the world.</p>
    //     </center>
    //   </div>

    //   <div className="footer">
    //     <footer class="footer-distributed">
    //       <div class="footer-left">

    //         <p class="footer-links">
    //           <a href="#">Product</a>
    //            | 
    //           <a href="#">Sale</a>
    //            | 
    //           <a href="#">Contact</a>
    //         </p>

    //         <p class="footer-company-name">© 2021 PushTheme Learning Solutions Pvt. Ltd.</p>
    //       </div>

    //       <div class="footer-center">
    //         <div>
    //           <i class="fa fa-map-marker"></i>
    //             <p><span>116, Sekelimus, Batununggal</span>
    //             Bandung Kidul, Bandung - 40266</p>
    //         </div>

    //         <div>
    //           <i class="fa fa-phone"></i>
    //           <p>+62 856-12345678</p>
    //         </div>
    //         <div>
    //           <i class="fa fa-envelope"></i>
    //           <p><a href="https://www.github.com/nugrahaas">support@nugrahaas</a></p>
    //         </div>
    //       </div>

    //       <div class="footer-right">
    //         <p class="footer-company-about">
    //           <span>About the Dev</span>
    //           We offer training and skill building courses across Technology, Design, Management, Science and Humanities.</p>
    //         <div class="footer-icons">
    //           <a href="#"><i class="fa fa-facebook"></i></a>
    //           <a href="#"><i class="fa fa-twitter"></i></a>
    //           <a href="#"><i class="fa fa-instagram"></i></a>
    //           <a href="#"><i class="fa fa-linkedin"></i></a>
    //           <a href="#"><i class="fa fa-youtube"></i></a>
    //         </div>
    //       </div>
    //     </footer>

    //   </div>

    // </div>  
//   );
  
//   init();
//   setLight();
//   loadGLTF();
//   animate();
// }



// export default App;