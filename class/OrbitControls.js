var OrbitControls = function(camera, renderer, background) {
    this.controls = new THREE.OrbitControls(camera, renderer);
    this.controls.enableZoom = true;

    this.controls.minDistance = 1;
    this.controls.maxDistance = 1000;
    
    this.controls.maxPolarAngle = 2.3;
    this.controls.minPolarAngle = 1;
}