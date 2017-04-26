var game;

$(document).ready(function(){
    init();
});

function init() {
    var container = document.createElement("div");
    document.body.appendChild(container);
    game = new Game(container);
    game.render();
    game.timer = setTimeout(loop,0);
}

function loop() {
    game.update();
    clearTimeout(game.timer);
    game.timer = setTimeout(loop, game.fps);
}