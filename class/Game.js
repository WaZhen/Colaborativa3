var Game = function(argContainer) {
    var gameScope = this;
    
    this.timer = null;
    
    this.fps = 1000 / 30;

    
    this.width = window.innerWidth;
    this.height = window.innerHeight
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(70, this.width / this.height, 1, 1000);
    this.camera.position.set(10, 10, 10)
    this.scene.add(this.camera);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setClearColor(0xffffff);
    this.renderer.setSize(this.width, this.height);
    argContainer.appendChild(this.renderer.domElement);
    
    this.orbit = new OrbitControls(this.camera, this.renderer.domElement);
    
    // provisional
    this.sphere = [];
    this.material = [];
    this.merge = [];
    for(var i = 0; i < 5; i++) {
        this.sphere[i] = new THREE.SphereGeometry(2, 20, 20);
        this.material[i] = new THREE.MeshBasicMaterial({color:0xff00ff});
        this.merge[i] = new THREE.Mesh(this.sphere[i], this.material[i]);
        this.merge[i].position.set(Math.random() * 10 - 20, Math.random() * 10 - 20, Math.random() * 10 - 20);
        this.scene.add(this.merge[i]);
        // provisionla
    }
    
    this.update = function() {
        console.log("loop");
        this.orbit.controls.update();
        this.render();
    }
    
    this.render = function() {
        this.renderer.render(gameScope.scene, gameScope.camera);
    }
    
};