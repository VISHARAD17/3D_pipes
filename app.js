// // var scene = new THREE.Scene();
// // var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

// // var renderer = new THREE.WebGLRenderer();
// // renderer.setSize( window.innerWidth, window.innerHeight );
// // document.body.appendChild( renderer.domElement );

// // var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// // var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// // var cube = new THREE.Mesh( geometry, material );
// // scene.add( cube );

// // camera.position.z = 5;

// // var animate = function () {
// // 	requestAnimationFrame( animate );

// // 	cube.rotation.x += 0.01;
// // 	cube.rotation.y += 0.01;

// // 	renderer.render( scene, camera );
// // };

// // animate();

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// const node = document.getElementById("canvas");
// node.appendChild(renderer.domElement);
// // document.body.appendChild( renderer.domElement );

// const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
// camera.position.set( 0, 0, 100 );
// camera.lookAt( 0, 0, 0 );

// const scene = new THREE.Scene();
// const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
// const points = [];
// points.push( new THREE.Vector3( - 10, 0, 0 ) );
// points.push( new THREE.Vector3( 0, 10, 0 ) );
// points.push( new THREE.Vector3( 10, 0, 0 ) );

// const geometry = new THREE.BufferGeometry().setFromPoints( points );
// const line = new THREE.Line( geometry, material );
// scene.add( line );
// renderer.render( scene, camera );

// function to print box result

// function printBoxResults() {
//     var spanresult = document.getElementById("result");
//     spanresult.value = "";
//     var x = document.getElementById("select");

//     for(var i=0; i<x.options.length; i++){
//         if(x.options[i].selected == true){
//             spanresult.value += x.options[i].value + " ";
//             document.getElementById("result").innerHTML = spanresult.value;
//             document.getElementById("result").style.color = green;
//         }
//     }

//     if(document.getElementById("result").value == ""){
//         document.getElementById("result").innerHTML = "select something";
//         document.getElementById("result").style.background = red;
//     }
// }

function printBoxResults() {
    var spanresult = document.getElementById("result");
    spanresult.value = "";

    var x = document.getElementById("select");
    for (var i = 0; i < x.options.length; i++) {
        if (x.options[i].selected == true) {
            spanresult.value += x.options[i].value + "  |  ";
            document.getElementById("result").innerHTML = spanresult.value;
            document.getElementById("result").style.color = "black";
        }
    }

    if (document.getElementById("result").value == "") {
        document.getElementById("result").innerHTML = "Nothing Selected !";
        document.getElementById("result").style.color = "red";
    }
}


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth/2, window.innerHeight/2);
const node = document.getElementById("canvas");
node.appendChild(renderer.domElement);
// document.body.appendChild( renderer.domElement );
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
};

animate();



// import * as THREE from 'three';

//     import Stats from './jsm/libs/stats.module.js';
//     import { GPUStatsPanel } from './jsm/utils/GPUStatsPanel.js';

//     import { GUI } from './jsm/libs/lil-gui.module.min.js';
//     import { OrbitControls } from './jsm/controls/OrbitControls.js';
//     import { Line2 } from './jsm/lines/Line2.js';
//     import { LineMaterial } from './jsm/lines/LineMaterial.js';
//     import { LineGeometry } from './jsm/lines/LineGeometry.js';
//     import * as GeometryUtils from './jsm/utils/GeometryUtils.js';

//     let line, renderer, scene, camera, camera2, controls;
//     let line1;
//     let matLine, matLineBasic, matLineDashed;
//     let stats, gpuPanel;
//     let gui;

//     // viewport
//     let insetWidth;
//     let insetHeight;

//     init();
//     animate();

    // function init() {

    //     renderer = new THREE.WebGLRenderer( { antialias: true } );
    //     renderer.setPixelRatio( window.devicePixelRatio );
    //     renderer.setClearColor( 0x000000, 0.0 );
    //     renderer.setSize( window.innerWidth, window.innerHeight );
    //     document.body.appendChild( renderer.domElement );

    //     scene = new THREE.Scene();

    //     camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
    //     camera.position.set( - 40, 0, 60 );

    //     camera2 = new THREE.PerspectiveCamera( 40, 1, 1, 1000 );
    //     camera2.position.copy( camera.position );

    //     controls = new OrbitControls( camera, renderer.domElement );
    //     controls.minDistance = 10;
    //     controls.maxDistance = 500;


    //     // Position and THREE.Color Data

    //     const positions = [];
    //     const colors = [];

    //     const points = GeometryUtils.hilbert3D( new THREE.Vector3( 0, 0, 0 ), 20.0, 1, 0, 1, 2, 3, 4, 5, 6, 7 );

    //     const spline = new THREE.CatmullRomCurve3( points );
    //     const divisions = Math.round( 12 * points.length );
    //     const point = new THREE.Vector3();
    //     const color = new THREE.Color();

    //     for ( let i = 0, l = divisions; i < l; i ++ ) {

    //         const t = i / l;

    //         spline.getPoint( t, point );
    //         positions.push( point.x, point.y, point.z );

    //         color.setHSL( t, 1.0, 0.5 );
    //         colors.push( color.r, color.g, color.b );

    //     }


    //     // Line2 ( LineGeometry, LineMaterial )

    //     const geometry = new LineGeometry();
    //     geometry.setPositions( positions );
    //     geometry.setColors( colors );

    //     matLine = new LineMaterial( {

    //         color: 0xffffff,
    //         linewidth: 5, // in world units with size attenuation, pixels otherwise
    //         vertexColors: true,

    //         //resolution:  // to be set by renderer, eventually
    //         dashed: false,
    //         alphaToCoverage: true,

    //     } );

    //     line = new Line2( geometry, matLine );
    //     line.computeLineDistances();
    //     line.scale.set( 1, 1, 1 );
    //     scene.add( line );


    //     // THREE.Line ( THREE.BufferGeometry, THREE.LineBasicMaterial ) - rendered with gl.LINE_STRIP

    //     const geo = new THREE.BufferGeometry();
    //     geo.setAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ) );
    //     geo.setAttribute( 'color', new THREE.Float32BufferAttribute( colors, 3 ) );

    //     matLineBasic = new THREE.LineBasicMaterial( { vertexColors: true } );
    //     matLineDashed = new THREE.LineDashedMaterial( { vertexColors: true, scale: 2, dashSize: 1, gapSize: 1 } );

    //     line1 = new THREE.Line( geo, matLineBasic );
    //     line1.computeLineDistances();
    //     line1.visible = false;
    //     scene.add( line1 );

    //     //

    //     window.addEventListener( 'resize', onWindowResize );
    //     onWindowResize();

    //     stats = new Stats();
    //     document.body.appendChild( stats.dom );

    //     gpuPanel = new GPUStatsPanel( renderer.getContext() );
    //     stats.addPanel( gpuPanel );
    //     stats.showPanel( 0 );

    //     initGui();

    // }

    // function onWindowResize() {

    //     camera.aspect = window.innerWidth / window.innerHeight;
    //     camera.updateProjectionMatrix();

    //     renderer.setSize( window.innerWidth, window.innerHeight );

    //     insetWidth = window.innerHeight / 4; // square
    //     insetHeight = window.innerHeight / 4;

    //     camera2.aspect = insetWidth / insetHeight;
    //     camera2.updateProjectionMatrix();

    // }

    // function animate() {

    //     requestAnimationFrame( animate );

    //     stats.update();

    //     // main scene

    //     renderer.setClearColor( 0x000000, 0 );

    //     renderer.setViewport( 0, 0, window.innerWidth, window.innerHeight );

    //     // renderer will set this eventually
    //     matLine.resolution.set( window.innerWidth, window.innerHeight ); // resolution of the viewport

    //     gpuPanel.startQuery();
    //     renderer.render( scene, camera );
    //     gpuPanel.endQuery();

    //     // inset scene

    //     renderer.setClearColor( 0x222222, 1 );

    //     renderer.clearDepth(); // important!

    //     renderer.setScissorTest( true );

    //     renderer.setScissor( 20, 20, insetWidth, insetHeight );

    //     renderer.setViewport( 20, 20, insetWidth, insetHeight );

    //     camera2.position.copy( camera.position );
    //     camera2.quaternion.copy( camera.quaternion );

    //     // renderer will set this eventually
    //     matLine.resolution.set( insetWidth, insetHeight ); // resolution of the inset viewport

    //     renderer.render( scene, camera2 );

    //     renderer.setScissorTest( false );

    // }

    // //

    // function initGui() {

    //     gui = new GUI();

    //     const param = {
    //         'line type': 0,
    //         'world units': false,
    //         'width': 5,
    //         'alphaToCoverage': true,
    //         'dashed': false,
    //         'dash scale': 1,
    //         'dash / gap': 1
    //     };

    //     gui.add( param, 'line type', { 'LineGeometry': 0, 'gl.LINE': 1 } ).onChange( function ( val ) {

    //         switch ( val ) {

    //             case '0':
    //                 line.visible = true;

    //                 line1.visible = false;

    //                 break;

    //             case '1':
    //                 line.visible = false;

    //                 line1.visible = true;

    //                 break;

    //         }

    //     } );

    //     gui.add( param, 'world units' ).onChange( function ( val ) {

    //         matLine.worldUnits = val;
    //         matLine.needsUpdate = true;

    //     } );

    //     gui.add( param, 'width', 1, 10 ).onChange( function ( val ) {

    //         matLine.linewidth = val;

    //     } );

    //     gui.add( param, 'alphaToCoverage' ).onChange( function ( val ) {

    //         matLine.alphaToCoverage = val;

    //     } );

    //     gui.add( param, 'dashed' ).onChange( function ( val ) {

    //         matLine.dashed = val;
    //         line1.material = val ? matLineDashed : matLineBasic;

    //     } );

    //     gui.add( param, 'dash scale', 0.5, 2, 0.1 ).onChange( function ( val ) {

    //         matLine.dashScale = val;
    //         matLineDashed.scale = val;

    //     } );

    //     gui.add( param, 'dash / gap', { '2 : 1': 0, '1 : 1': 1, '1 : 2': 2 } ).onChange( function ( val ) {

    //         switch ( val ) {

    //             case '0':
    //                 matLine.dashSize = 2;
    //                 matLine.gapSize = 1;

    //                 matLineDashed.dashSize = 2;
    //                 matLineDashed.gapSize = 1;

    //                 break;

    //             case '1':
    //                 matLine.dashSize = 1;
    //                 matLine.gapSize = 1;

    //                 matLineDashed.dashSize = 1;
    //                 matLineDashed.gapSize = 1;

    //                 break;

    //             case '2':
    //                 matLine.dashSize = 1;
    //                 matLine.gapSize = 2;

    //                 matLineDashed.dashSize = 1;
    //                 matLineDashed.gapSize = 2;

    //                 break;

    //         }

    //     } );

	//		}