(function () {
    "use strict";

    var scene;
    var plane, box, controls;
    var sphere1, sphere2, sphere3;
    var camera;
    var light;
    var ambient;
    var renderer;
    var width = 500;
    var height = 250;
    var ghelper, ahelper, rhelper, theta = 0;
    var shadowHelper;

    scene = new THREE.Scene();

    box = new THREE.Mesh(
        new THREE.BoxGeometry(50, 50, 50),
        new THREE.MeshLambertMaterial({ color: 0xff0000 })
    );
    box.position.set(0, 0, 0);
    scene.add(box);

    sphere1 = new THREE.Mesh(
        new THREE.SphereGeometry(50, 20, 20),
        new THREE.MeshLambertMaterial({ color: 0x4caf50 })
    );
    sphere1.position.set(100, 0, -150);
    scene.add(sphere1);
    sphere2 = new THREE.Mesh(
        new THREE.SphereGeometry(50, 20, 20),
        new THREE.MeshLambertMaterial({ color: 0x4caf50 })
    );
    sphere2.position.set(100, 0, 0);
    scene.add(sphere2);

    sphere3 = new THREE.Mesh(
        new THREE.SphereGeometry(50, 20, 20),
        new THREE.MeshLambertMaterial({ color: 0x4caf50, wireframe: true })
    );
    sphere3.position.set(100, 0, 150);
    scene.add(sphere3);


    plane = new THREE.Mesh(
        new THREE.PlaneGeometry(200, 200),
        new THREE.MeshLambertMaterial({ color: 0x0096d6, side: THREE.DoubleSide })
    );
    plane.position.set(0, -50, 0);
    plane.rotation.x = 90 * Math.PI / 180;
    scene.add(plane);

    light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 100, 30);
    scene.add(light);
    ambient = new THREE.AmbientLight(0x404040);
    scene.add(ambient);

    ghelper = new THREE.GridHelper(200, 50);
    scene.add(ghelper);
    ahelper = new THREE.AxisHelper(1000);
    scene.add(ahelper);
    rhelper = new THREE.DirectionalLightHelper(light, 20);
    scene.add(rhelper);

    camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(200, 100, 300);
    camera.lookAt(scene.position);

    controls = new THREE.OrbitControls(camera);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xefefef);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('stage').appendChild(renderer.domElement);

    renderer.shadowMap.enabled = true;
    light.castShadow = true;
    light.shadow.camera.left = -200;
    light.shadow.camera.right = 200;
    light.shadow.camera.top = 200;
    light.shadow.camera.bottom = -200;

    shadowHelper = new THREE.CameraHelper(light.shadow.camera);
    scene.add(shadowHelper);
    box.castShadow = true;
    plane.receiveShadow = true;

    // function render() {
    //     requestAnimationFrame(render);
    //     theta += 0.1;
    //     camera.position.x = Math.cos(THREE.Math.degToRad(theta)) * 300;
    //     camera.position.z = Math.sin(THREE.Math.degToRad(theta)) * 300;
    //     camera.lookAt(scene.position);
    //     renderer.render(scene, camera);
    // }

    function render() {
        requestAnimationFrame(render);
        controls.update();
        renderer.render(scene, camera);
    }

    render();

})();
