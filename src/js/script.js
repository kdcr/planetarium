ringColors = ['#000', '#cc6600', '#994d00', '#994d00', '#994d00', '#994d00', '#4d2e00'];

class Star {
    constructor() {

    }
    lifeSpan = 0;
    currentLifeSpan = 0;
    pos = [];
    element = {};
}

function createSol() {
    let coreSize = 100;

    let solCore = new Zdog.Shape({
        addTo: illo,
        stroke: coreSize + 90,
        color: '#993d10',
    });

    let solSur = new Zdog.Shape({
        addTo: illo,
        stroke: coreSize + 100,
        color: '#ff660050',
    });

    let solSur2 = new Zdog.Shape({
        addTo: illo,
        stroke: coreSize + 110,
        color: '#ffa36650',
    });

    let solSur3 = new Zdog.Shape({
        addTo: illo,
        stroke: coreSize + 120,
        color: '#ffa36650',
    });
}

function createMercury() {
    mercury = new Zdog.Shape({
        addTo: illo,
        stroke: 5,
        translate: { x: 200 },
        color: '#8E8E8E',
    });
}

function createVenus() {
    venus = new Zdog.Shape({
        addTo: illo,
        stroke: 11,
        translate: { x: 250 },
        color: '#C9C97B',
    });
}

function createEarth() {
    earth = new Zdog.Shape({
        addTo: illo,
        stroke: 12,
        translate: { x: 300 },
        color: '#000090',
    });

    moon = new Zdog.Shape({
        addTo: illo,
        stroke: 2,
        translate: { x: 310 },
        color: '#808080',
    });

}

function createMars() {
    mars = new Zdog.Shape({
        addTo: illo,
        stroke: 8,
        translate: { x: 360 },
        color: '#993d10',
    });

    deimos = new Zdog.Shape({
        addTo: illo,
        stroke: 1,
        translate: { x: 365 },
        color: '#808080',
    });

    phobos = new Zdog.Shape({
        addTo: illo,
        stroke: 1,
        translate: { x: 370 },
        color: '#808080',
    });

}

function createAsteroidBelt() {

}

function createSaturn() {
    let saturn = new Zdog.Shape({
        addTo: illo,
        stroke: 80,
        color: '#993d10',
    });

    let saturn2 = new Zdog.Shape({
        addTo: illo,
        stroke: 85,
        color: '#ffffff50',
    });


    for (let index = 0; index < 20; index = index + 3) {
        let minD = 100;
        let color = ringColors[Math.round(Math.random() * ringColors.length)];
        new Zdog.Ellipse({
            addTo: illo,
            diameter: minD + index,
            stroke: 1,
            color: color,
            quarters: 1,
        });
        new Zdog.Ellipse({
            addTo: illo,
            diameter: minD + index,
            stroke: 1,
            rotate: { x: Math.PI },
            color: color,
            quarters: 1,
        });
        new Zdog.Ellipse({
            addTo: illo,
            diameter: minD + index,
            stroke: 1,
            rotate: { y: Math.PI },
            color: color,
            quarters: 1,
        });
        new Zdog.Ellipse({
            addTo: illo,
            diameter: minD + index,
            stroke: 1,
            rotate: { z: Math.PI },
            color: color,
            quarters: 1,
        });

    }

    let dot = new Zdog.Shape({
        addTo: illo,
        stroke: 10,
        translate: { x: 100 },
        color: '#000099',
    });
    let dot2 = new Zdog.Shape({
        addTo: illo,
        stroke: 10,
        translate: { x: 120 },
        color: '#000099',
    });
}

function createPlanets() {

    createSol();

    createMercury();

    createVenus();

    createEarth();

    createMars();

    //createSaturn();

}

function createStar() {
    let newStar = new Star();
    newStar.pos = [Math.random() * spaceContainer.clientWidth, Math.random() * spaceContainer.clientHeight];
    newStar.element = document.createElement("div");
    newStar.element.classList.add('star');
    newStar.element.style.left = newStar.pos[0] + "px";
    newStar.element.style.top = newStar.pos[1] + "px";
    newStar.lifeSpan = Math.random() * 2000;
    let colorVal = Math.round(Math.random() * 100);
    if (colorVal <= 75) {
        newStar.element.classList.add("starWhite");
    } else if (colorVal <= 90) {
        newStar.element.classList.add("starRed");
    } else if (colorVal <= 98) {
        newStar.element.classList.add("starYellow");
    } else if (colorVal <= 100) {
        newStar.element.classList.add("starBlue");
    }
    newStar.element.classList.add("starShine");
    root.style.setProperty('--shineSize', (Math.random() * 120) + "%")
    spaceContainer.appendChild(newStar.element);
    stars.push(newStar);
    return newStar;
}

function cycleStars() {
    stars.forEach(star => {
        star.lifeSpan = star.lifeSpan - 100;
        if (star.lifeSpan < 0)
            star.element.remove();
    });
    createStar();
}

function translateBody(body, a, b, radius, theta) {
    let x = a + radius * Math.cos(theta);
    let y = b + radius * Math.sin(theta);
    body.translate = { x: x, y: y };
}

//setInterval(function() { cycleStars() }, 1);

let stars = [];
let spaceContainer = document.querySelector('.spaceContainer');
let root = document.documentElement;
let canvas = document.querySelector('zdog-canvas');
let zoomRange = document.querySelector('#zoomRange');

// Astronomical boddies definition
let sol, mercury, venus, earth, moon, mars, phobos, deimos, pallas, ceres, juno, vesta, jupiter;

const illo = new Zdog.Illustration({
    element: '.zdog-canvas',
    dragRotate: true,
    resize: true,
    zoom: 0.3
});
createPlanets();



function animate() {
    illo.updateRenderGraph();
    requestAnimationFrame(animate);
}

animate();

setInterval(function() {
    translateBody(mercury, 0, 0, 200, 0.0008 * new Date().getTime());
    translateBody(venus, 0, 0, 250, -0.0004 * new Date().getTime());
    /**Earth**/
    translateBody(earth, 0, 0, 300, 0.0001 * new Date().getTime());
    translateBody(moon, earth.translate.x, earth.translate.y, 10, 0.001 * new Date().getTime());
    /**Mars**/
    translateBody(mars, 0, 0, 360, 0.0001 * new Date().getTime());
    translateBody(deimos, mars.translate.x, mars.translate.y, 5, 0.001 * new Date().getTime());
    translateBody(phobos, mars.translate.x, mars.translate.y, 10, 0.001 * new Date().getTime());

    illo.zoom = zoomRange.value * 0.1;
}, 1);