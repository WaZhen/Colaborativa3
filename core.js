var game;
var texturasPlanetas = [];

$(document).ready(function(){
    init();
});

function init() {
    var container = document.createElement("div");
    document.body.appendChild(container);
    
    cargaTexturasPlanetas();
    
    game = new Game(container);
    game.render();
    
    game.timer = setTimeout(loop,0);
}

function loop() {
    game.update();
    clearTimeout(game.timer);
    game.timer = setTimeout(loop, game.fps);
}


function cargaTexturasPlanetas() {
    $.ajax({
      url: 'php/cargaTexturas.php',
      success: exitoCargaTexturas,
      dataType: 'html'
    });
}

function exitoCargaTexturas(data) {
    var texturasTemporales = data.split(",");
    for(var i = 0; i < texturasTemporales.length; i++) {
        var temporal = texturasTemporales[i];
        texturasPlanetas[i] = new THREE.ImageUtils.loadTexture("assets/planetTextures/"+temporal);
    }
    console.log("texturas de planetas cargadas en variable texturas");
    
    for(var i = 0; i < 20; i++) {
        var dispersion = 1000;
        var minRadius = 10;
        var radiusDispersion = 50;
        game.planets.push(new Planet(game.camera.position.x + Math.random() * dispersion - dispersion/2, game.camera.position.y + Math.random() * dispersion - dispersion/2, game.camera.position.z + Math.random() * dispersion - dispersion/2, minRadius + Math.random() * radiusDispersion, game));
    }
}