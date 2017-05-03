var Game = function(argContainer) {
    var gameScope = this;
    
    this.timer = null;
    
    this.fps = 1000 / 30;

    
    this.width = window.innerWidth;
    this.height = window.innerHeight
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(70, this.width / this.height, 1, 5000);
    this.camera.position.set(10, 10, 10)
    this.scene.add(this.camera);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setClearColor(0xffffff);
    this.renderer.setSize(this.width, this.height);
    argContainer.appendChild(this.renderer.domElement);
    
    this.orbit = new OrbitControls(this.camera, this.renderer.domElement);
    
    this.background = new Background(gameScope.scene);
    
    this.planets = [];
    

    
    this.update = function() {
        this.orbit.controls.update();
        this.background.update();
        this.render();
    }
    
    this.render = function() {
        this.renderer.render(gameScope.scene, gameScope.camera);
    }
    
};