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

    bodies.sol = new Zdog.Shape({
        addTo: illo,
        stroke: coreSize + 90,
        color: '#993d10',
    });

    bodies.solSur = new Zdog.Shape({
        addTo: illo,
        stroke: coreSize + 100,
        color: '#ff660050',
    });

    bodies.solSur2 = new Zdog.Shape({
        addTo: illo,
        stroke: coreSize + 110,
        color: '#ffa36650',
    });

    bodies.solSur3 = new Zdog.Shape({
        addTo: illo,
        stroke: coreSize + 120,
        color: '#ffa36650',
    });
}

function createMercury() {
    bodies.mercury = new Zdog.Shape({
        addTo: illo,
        stroke: 5,
        translate: { x: 200 },
        color: '#8E8E8E',
    });
}

function createVenus() {
    bodies.venus = new Zdog.Shape({
        addTo: illo,
        stroke: 11,
        translate: { x: 250 },
        color: '#C9C97B',
    });
}

function createEarth() {
    bodies.earth = new Zdog.Shape({
        addTo: illo,
        stroke: 12,
        translate: { x: 300 },
        color: '#000090',
    });

    bodies.moon = new Zdog.Shape({
        addTo: illo,
        stroke: 2,
        translate: { x: 310 },
        color: '#808080',
    });

}

function createMars() {
    bodies.mars = new Zdog.Shape({
        addTo: illo,
        stroke: 8,
        translate: { x: 360 },
        color: '#993d10',
    });

    bodies.deimos = new Zdog.Shape({
        addTo: illo,
        stroke: 1,
        translate: { x: 365 },
        color: '#808080',
    });

    bodies.phobos = new Zdog.Shape({
        addTo: illo,
        stroke: 1,
        translate: { x: 370 },
        color: '#808080',
    });

}

function createAsteroidBelt() {

}

function createJupiter() {
    bodies.jupiter = new Zdog.Shape({
        addTo: illo,
        stroke: 30,
        translate: { x: 400 },
        color: '#993d10',
    });

    bodies.io = new Zdog.Shape({
        addTo: illo,
        stroke: 2,
        translate: { x: 400 },
        color: '#993d10',
    });

    bodies.europa = new Zdog.Shape({
        addTo: illo,
        stroke: 2,
        translate: { x: 400 },
        color: '#993d10',
    });

    bodies.ganymede = new Zdog.Shape({
        addTo: illo,
        stroke: 2,
        translate: { x: 400 },
        color: '#993d10',
    });

    bodies.callisto = new Zdog.Shape({
        addTo: illo,
        stroke: 2,
        translate: { x: 400 },
        color: '#993d10',
    });
}

function createSaturn() {

    bodies.saturnRings = [];

    bodies.saturn = new Zdog.Shape({
        addTo: illo,
        stroke: 28,
        color: '#993d10',
    });

    bodies.mimas = new Zdog.Shape({
        addTo: illo,
        stroke: 2,
        color: '#993d10',
    });

    bodies.enceladus = new Zdog.Shape({
        addTo: illo,
        stroke: 2,
        color: '#993d10',
    });

    bodies.tethys = new Zdog.Shape({
        addTo: illo,
        stroke: 2,
        color: '#993d10',
    });

    bodies.dione = new Zdog.Shape({
        addTo: illo,
        stroke: 2,
        color: '#993d10',
    });

    bodies.rhea = new Zdog.Shape({
        addTo: illo,
        stroke: 2,
        color: '#993d10',
    });

    bodies.titan = new Zdog.Shape({
        addTo: illo,
        stroke: 2,
        color: '#993d10',
    });

    bodies.hyperion = new Zdog.Shape({
        addTo: illo,
        stroke: 2,
        color: '#993d10',
    });

    bodies.iapetus = new Zdog.Shape({
        addTo: illo,
        stroke: 2,
        color: '#993d10',
    });



    /*saturn2 = new Zdog.Shape({
        addTo: illo,
        stroke: 85,
        color: '#ffffff50',
    });*/


    for (let index = 0; index < 30; index = index + 3) {
        let minD = 35;
        let color = ringColors[Math.round(Math.random() * ringColors.length)];
        bodies.saturnRings.push(new Zdog.Ellipse({
            addTo: illo,
            diameter: minD + index,
            stroke: 1,
            color: color,
            quarters: 1,
        }));
        bodies.saturnRings.push(new Zdog.Ellipse({
            addTo: illo,
            diameter: minD + index,
            stroke: 1,
            rotate: { x: Math.PI },
            color: color,
            quarters: 1,
        }));
        bodies.saturnRings.push(new Zdog.Ellipse({
            addTo: illo,
            diameter: minD + index,
            stroke: 1,
            rotate: { y: Math.PI },
            color: color,
            quarters: 1,
        }));
        bodies.saturnRings.push(new Zdog.Ellipse({
            addTo: illo,
            diameter: minD + index,
            stroke: 1,
            rotate: { z: Math.PI },
            color: color,
            quarters: 1,
        }));

    }


}

function createUranus() {

    bodies.uranus = new Zdog.Shape({
        addTo: illo,
        stroke: 15,
        color: '#993d10',
    });

    bodies.miranda = new Zdog.Shape({
        addTo: illo,
        stroke: 2,
        color: '#993d10',
    });

    bodies.ariel = new Zdog.Shape({
        addTo: illo,
        stroke: 2,
        color: '#993d10',
    });

    bodies.umbriel = new Zdog.Shape({
        addTo: illo,
        stroke: 2,
        color: '#993d10',
    });

    bodies.titania = new Zdog.Shape({
        addTo: illo,
        stroke: 2,
        color: '#993d10',
    });

    bodies.oberon = new Zdog.Shape({
        addTo: illo,
        stroke: 2,
        color: '#993d10',
    });

}

function createPlanets() {

    createSol();

    createMercury();

    createVenus();

    createEarth();

    createMars();

    createJupiter();

    createSaturn();

    createUranus();

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

function lookAtBody(body) {
    xCamPos = xCamPos - body.translate.x;
    yCamPos = yCamPos - body.translate.y;
}

function translatePlanet(planet, a, b, radius, theta) {
    let x = a + radius * Math.cos(theta);
    let y = b + radius * Math.sin(theta);

    x = x + xCamPos;
    y = y + yCamPos;

    planet.translate = { x: x, y: y };
}

function translateSatellite(satellite, planet, radius, theta) {
    let x = planet.translate.x + radius * Math.cos(theta);
    let y = planet.translate.y + radius * Math.sin(theta);

    satellite.translate = { x: x, y: y };
}

//setInterval(function() { cycleStars() }, 1);

let stars = [];
let spaceContainer = document.querySelector('.spaceContainer');
let root = document.documentElement;
let canvas = document.querySelector('.zdog-canvas');
let zoomRange = document.querySelector('#zoomRange');
let searchField = document.querySelector('#bodySearch')
let searchButton = document.querySelector('#bodySearchBtn')
let xCamPos = 0,
    yCamPos = 0;

const varToString = varObj => Object.keys(varObj)[0]

searchButton.addEventListener('click', function() { focusedBody = bodies[searchField.value] });

// Astronomical boddies definition
let sol, solSur, solSur2, solSur3,
    mercury,
    venus,
    earth, moon,
    mars, phobos, deimos,
    pallas, ceres, juno, vesta,
    jupiter, io, europa, ganymede, callisto,
    saturn, mimas, enceladus, tethys, dione, rhea, titan, hyperion, iapetus, saturnRings,
    uranus, miranda, ariel, umbriel, titania, oberon,
    neptune, triton;

const illo = new Zdog.Illustration({
    element: '.zdog-canvas',
    dragRotate: true,
    resize: true,
    zoom: 0.3
});

let bodies = {
    sol,
    solSur,
    solSur2,
    solSur3,
    mercury,
    venus,
    earth,
    moon,
    mars,
    phobos,
    deimos,
    pallas,
    ceres,
    juno,
    vesta,
    jupiter,
    io,
    europa,
    ganymede,
    callisto,
    saturn,
    mimas,
    enceladus,
    tethys,
    dione,
    rhea,
    titan,
    hyperion,
    iapetus,
    saturnRings,
    uranus,
    miranda,
    ariel,
    umbriel,
    titania,
    oberon,
    neptune,
    triton
};

createPlanets();

let focusedBody = bodies.sol;

function animate() {
    illo.updateRenderGraph();
    requestAnimationFrame(animate);
}

animate();

setInterval(function() {
    let time = new Date().getTime();
    translatePlanet(bodies.sol, 0, 0, 0, 0);
    translatePlanet(bodies.solSur, 0, 0, 0, 0);
    translatePlanet(bodies.solSur2, 0, 0, 0, 0);
    translatePlanet(bodies.solSur3, 0, 0, 0, 0);

    translatePlanet(bodies.mercury, 0, 0, 200, 0.0008 * time);
    translatePlanet(bodies.venus, 0, 0, 250, -0.0004 * time);
    /**Earth**/
    translatePlanet(bodies.earth, 0, 0, 300, 0.0003 * new Date().getTime());
    translateSatellite(bodies.moon, bodies.earth, 10, 0.002 * time);
    /**Mars**/
    translatePlanet(bodies.mars, 0, 0, 360, 0.0002 * new Date().getTime());
    translateSatellite(bodies.deimos, bodies.mars, 9, 0.001 * time);
    translateSatellite(bodies.phobos, bodies.mars, 5, 0.001 * time);

    /**Jupiter**/
    translatePlanet(bodies.jupiter, 0, 0, 550, 0.0001 * time);
    translateSatellite(bodies.io, bodies.jupiter, 15, 0.001 * time);
    translateSatellite(bodies.europa, bodies.jupiter, 25, 0.001 * time);
    translateSatellite(bodies.ganymede, bodies.jupiter, 30, 0.001 * time);
    translateSatellite(bodies.callisto, bodies.jupiter, 50, 0.001 * time);

    /**Saturn**/
    translatePlanet(bodies.saturn, 0, 0, 750, 0.0001 * time);
    bodies.saturnRings.forEach(element => {
        translateSatellite(element, bodies.saturn, 0, 0);
    });
    translateSatellite(bodies.mimas, bodies.saturn, 45, 0.001 * time);
    translateSatellite(bodies.enceladus, bodies.saturn, 50, 0.001 * time);
    translateSatellite(bodies.tethys, bodies.saturn, 53, 0.001 * time);
    translateSatellite(bodies.dione, bodies.saturn, 58, 0.001 * time);
    translateSatellite(bodies.rhea, bodies.saturn, 61, 0.001 * time);
    translateSatellite(bodies.titan, bodies.saturn, 65, 0.001 * time);
    translateSatellite(bodies.hyperion, bodies.saturn, 70, 0.001 * time);
    translateSatellite(bodies.iapetus, bodies.saturn, 72, 0.001 * time);

    /**Uranus**/
    translatePlanet(bodies.uranus, 0, 0, 950, 0.0001 * time);
    translateSatellite(bodies.miranda, bodies.uranus, 10, 0.001 * time);
    translateSatellite(bodies.ariel, bodies.uranus, 15, 0.001 * time);
    translateSatellite(bodies.umbriel, bodies.uranus, 20, 0.001 * time);
    translateSatellite(bodies.titania, bodies.uranus, 25, 0.001 * time);
    translateSatellite(bodies.oberon, bodies.uranus, 30, 0.001 * time);

    illo.zoom = zoomRange.value * 0.1;
    lookAtBody(focusedBody);
}, 1);