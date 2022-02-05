/*

 var p1 = new THREE.Vector3(-5, 10, 20);
    var p2 = new THREE.Vector3(0, 6, 2);
    var p3 = new THREE.Vector3(5, 0, -10);

    var p4 = new THREE.Vector3(10, 10, 20);
    var p5 = new THREE.Vector3(15, -10, 10);
    var p6 = new THREE.Vector3(10, 2, -8);

 */
// var pointData1 = [
//     new THREE.Vector3(-5, 10, 20), // p1
//     new THREE.Vector3(0, 6, 2),    // p2
//     new THREE.Vector3(5, 0, -10)   // p3              
// ];

/*

data ------ pipes
            |____ segments ( which has coordinates of segments i.e. two points)

*/

var data = [

    [   [[-5, 10, 20], [0, 6, 2]], //segment 1 ( START, END )
        [[0, 6, 2], [5, 0, -10]]  //segment 2
    ], //pipe 1

    [
        [[10, 10, 20], [15, -10, 10]], //segment 1
        [[15, -10, 10], [10, 2, -8]]  //segment 2 
    ]
]

var pointData1 = [
    [-5, 10, 20], // p1
    [0, 6, 2],    // p2
    [5, 0, -10],  // p3              
];

var pointData2 = [          
    {x:10, y:10, z:20}, // p4
    {x:15, y:-10, z:10},// p5
    {x:10, y:2, z:-8}   // p6
];

var selectedPipes = [];

function printBoxResults() {
    var spanresult = document.getElementById("result");
    spanresult.value = "";

    var x = document.getElementById("select");
    for (var i = 0; i < x.options.length; i++) {
        if (x.options[i].selected == true) {
            selectedPipes.push(i);
            spanresult.value += x.options[i].value + "  |  ";
            document.getElementById("result").innerHTML = spanresult.value;
            document.getElementById("result").style.color = "black";
        }
        // else selectedPipes[i] = false;
    }

    if (document.getElementById("result").value == "") {
        document.getElementById("result").innerHTML = "Nothing Selected !";
        document.getElementById("result").style.color = "red";
    }
}
// global variables
var renderer;
var scene;
var camera;
var geometry;
var control;
var count = 0;
var animationTracker;
var numPipes = 2;
var controls;

init();
drawSpline();
// animate();

function init()
{
    // create a scene, that will hold all our elements such as objects, cameras and lights.
    scene = new THREE.Scene();

    // create a camera, which defines where we're looking at.
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // create a render, sets the background color and the size
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor('black', 1.0);
    // renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setSize(window.innerWidth/2, window.innerHeight/2);

    // position and point the camera to the center of the scene
    camera.position.x = 10;
    camera.position.y = 40;
    camera.position.z = 60;
    camera.lookAt(scene.position);

    // add the output of the renderer to the html element
    // document.body.appendChild(renderer.domElement);
    const node = document.getElementById('canvas');
    var controls = new THREE.OrbitControls (camera, renderer.domElement);
    controls.update();
    node.appendChild(renderer.domElement);
}

function drawSpline()
{
    var numPoints = 1000;
    var radius = 0.5;
    // var i = pointData1[0][0];
    // var j = pointData1[0][1];
    // var k = pointData1[0][2];

    // var p1 = new THREE.Vector3(pointData1[0][0],  pointData1[0][1], pointData1[0][2]);
    // var p1 = pointData1[0];
    // var p1 = new THREE.Vector3(-5, 10, 20);
    // var p2 = new THREE.Vector3(pointData1[1][0],  pointData1[1][1], pointData1[1][2]);
    // var p3 = new THREE.Vector3(pointData1[2][0],  pointData1[2][1], pointData1[2][2]);

    // var p4 = new THREE.Vector3(10, 10, 20);
    // var p5 = new THREE.Vector3(15, -10, 10);
    // var p6 = new THREE.Vector3(10, 2, -8);


    var material = new THREE.MeshNormalMaterial({
        color: 0x00ff00,
        wireframeLinejoin: "round",
        wireframeLinecap: "round",
        opacity: 0.9,
        transparent:true
    })

    var numPipes = data.length; // number of pipes
    var allMesh = []; //main mesh to render all the components

    for(var p=0; p<numPipes; p++){
        // join all the segments in the pipe
        // and add them to the mesh
        // if(selectedPipes[p] == true)
        if(true)
        {

            var pipe = data[p];
            var totalSegments = pipe.length; // no. of segments
            // var allMesh = [];
            for(var i=0; i<totalSegments; i++){
                var segment = pipe[i];
                var startPoint = new THREE.Vector3(segment[0][0], segment[0][1], segment[0][2]);
                var endPoint = new THREE.Vector3(segment[1][0], segment[1][1], segment[1][2]);
                var line = new THREE.LineCurve3(startPoint, endPoint);
                var tube = new THREE.TubeGeometry(line, numPoints, radius, 20, true);
                var mesh = new THREE.Mesh(tube, material);
                allMesh.push(mesh);
            }

        }
    }


    // //pipe 1
    // var curveQuad1 = new THREE.LineCurve3(p1, p2);
    // var curveQuad2 = new THREE.LineCurve3(p2, p3);

    // //pipe 2
    // var curveQuad3 = new THREE.LineCurve3(p4, p5);
    // var curveQuad4 = new THREE.LineCurve3(p5, p6);

    // var tube1 = new THREE.TubeGeometry(curveQuad1, numPoints, 0.5, 20, true);
    // var mesh1 = new THREE.Mesh(tube1, material);
    
    // var tube2 = new THREE.TubeGeometry(curveQuad2, numPoints, 0.5, 20, true);
    // var mesh2 = new THREE.Mesh(tube2, material);

    // var tube3 = new THREE.TubeGeometry(curveQuad3, numPoints, 0.5, 20, true);
    // var mesh3 = new THREE.Mesh(tube3, material);

    // var tube4 = new THREE.TubeGeometry(curveQuad4, numPoints, 0.5, 20, true);
    // var mesh4 = new THREE.Mesh(tube4, material);


    // scene.add(mesh1, mesh2, mesh3, mesh4);
    // scene.add(mesh1);
    // scene.add(mesh2);
    // scene.add(mesh3);
    // scene.add(mesh4);

    var totalMesh = allMesh.length;
    console.log(totalMesh);
    for(var i=0; i<totalMesh; i++){
        // console.log(i+1);
        scene.add(allMesh[i]);
    }
    // controls.update();
    renderer.render(scene, camera);
}

function animate() {
    controls.update();
    requestAnimationFrame(animate);
    renderer.render(scene, camera)
}