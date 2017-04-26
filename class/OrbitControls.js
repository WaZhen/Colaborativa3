var OrbitControls = function(camera, renderer) {
    this.controls = new THREE.OrbitControls(camera, renderer);
    this.controls.enableZoom = true;

    this.controls.minZoom = 1;
    this.controls.maxZoom = 1000;
}