var Planet = function (x, y, z, radius, game) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.radius = radius;
    this.geometry = new THREE.SphereGeometry(this.radius, 20, 20);
    this.texture = texturasPlanetas[Math.floor(Math.random() * texturasPlanetas.length)];
    console.log(texturasPlanetas);
    this.material = new THREE.MeshBasicMaterial({map : this.texture});
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(this.x, this.y, this.z);
    game.scene.add(this.mesh);
    //game.planets.push(this);

}

function prueba() {
    // provisional
    game.sphere = [];
    game.material = [];
    game.merge = [];
    for(var i = 0; i < 5; i++) {
        game.sphere[i] = new THREE.SphereGeometry(2, 20, 20);
        game.material[i] = new THREE.MeshBasicMaterial({color:0xff00ff});
        game.merge[i] = new THREE.Mesh(game.sphere[i], game.material[i]);
        game.merge[i].position.set(Math.random() * 10 - 20, Math.random() * 10 - 20, Math.random() * 10 - 20);
        game.scene.add(game.merge[i]);
    }
    // provisional
    
    // luces
    light = new THREE.AmbientLight( 0xffffff, 1, 100 );
	light.position.set( 20, 20, 20 );
	game.scene.add(light);

    
    
    
    
    // model
	var onProgress = function ( xhr ) {
		if ( xhr.lengthComputable ) {
			var percentComplete = xhr.loaded / xhr.total * 100;
			console.log( Math.round(percentComplete, 2) + '% downloaded' );
		}
	};
	var onError = function ( xhr ) { };
	THREE.Loader.Handlers.add( /\.dds$/i, new THREE.DDSLoader() );
	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.setPath( 'assets/obj/' );
	mtlLoader.load( 'Planeta.mtl', function( materials ) {
		materials.preload();
		var objLoader = new THREE.OBJLoader();
		objLoader.setMaterials( materials );
		objLoader.setPath( 'assets/obj/' );
		objLoader.load( 'Planeta.obj', function ( object ) {
			object.position.set = (0, 0, 0);
			game.scene.add( object );
		}, onProgress, onError );
	});
	//
}
