var Background = function (escena) {
    var backgroundScope = this;
    this.size = 3000;
    
    this.geometry = new THREE.SphereGeometry(this.size, 30, 30);
    this.texture = new THREE.ImageUtils.loadTexture("assets/jpg/background.jpg");
    this.material = new THREE.MeshBasicMaterial({map:this.texture});
    this.material.side = THREE.BackSide;
    
    this.background = new THREE.Mesh(backgroundScope.geometry, this.material);
    
    escena.add(this.background);
    
    this.update = function() {
        this.background.rotation.y += 0.001;
    }
    
    
}