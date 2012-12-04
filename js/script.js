;(function() {

window.g = window.g || {};

// empty GA object to satisfy Closure Advanced Optimizations
window._gaq = window._gaq || {
    push: function() {
        return false;
    }
};

g = {
    canvasScale: 1,
    cwidth: 900,
    cheight: 600,
    fpsCount: 0,
    fpsTimer: 0,
    canvas: document.getElementById('gamecanvas'),
    bgcanvas: document.getElementById('bgcanvas')
};

g.ctx = g.canvas.getContext("2d");

g.canvas.setAttribute('width', g.cwidth);
g.canvas.setAttribute('height', g.cheight);

window.onload = function() {

	// stuff

};

})();