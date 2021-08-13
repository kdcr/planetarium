import { PlanetGenerator } from "./planetGenerator.js";



function cycleStars() {
    stars.forEach(star => {
        star.lifeSpan = star.lifeSpan - 100;
        if (star.lifeSpan < 0)
            star.element.remove();
    });
    stars.push(planetGenerator.createStar());
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

function translatePlanetFeature(planet, feature, offset) {
    const x = planet.translate.x + offset[0];
    const y = planet.translate.y + offset[1];
    const z = offset[2];

    feature.translate = { x: x, y: y, z: z };
}

function translateSatellite(satellite, planet, radius, theta) {
    const x = planet.translate.x + radius * Math.cos(theta);
    const y = planet.translate.y + radius * Math.sin(theta);

    satellite.translate = { x: x, y: y };
}

var handleScroll = function(evt) {
    if (!evt) evt = event;
    const direction = (evt.detail < 0 || evt.wheelDelta > 0) ? 1 : -1;
    if (direction > 0)
        zoomRange.value++;
    else
        zoomRange.value--;

};

const stars = [];

const zoomRange = document.querySelector('#zoomRange');
const searchField = document.querySelector('#bodySearch');
const selectField = document.querySelector('#bodySelect');
const searchButton = document.querySelector('#bodySearchBtn');
document.querySelector(".zdog-canvas").addEventListener('DOMMouseScroll', handleScroll, false); // for Firefox
document.querySelector(".zdog-canvas").addEventListener('mousewheel', handleScroll, false); // for everyone else

selectField.addEventListener('change', function() {
    searchField.value="";
});

searchField.addEventListener('input', function() {
    if (searchField.value !== "")
        selectField.value = "";
});

searchButton.addEventListener('click', function() {
    const searchedBody = selectField.value !== "" ? bodies[selectField.value] : bodies[searchField.value.toLowerCase()];
    if (searchedBody !== undefined)
        focusedBody = searchedBody;
});


let xCamPos = 0;
let yCamPos = 0;

// setInterval(function() { cycleStars(); }, 100);

const illo = new Zdog.Illustration({
    element: '.zdog-canvas',
    dragRotate: true,
    resize: true,
    zoom: 0.3
});

const planetGenerator = new PlanetGenerator(illo);

const bodies = planetGenerator.createPlanets(illo);

let focusedBody = bodies.sun;

function animate() {
    planetGenerator.illo.updateRenderGraph();
    requestAnimationFrame(animate);
}

animate();

setInterval(function() {
    let time = new Date().getTime();
    time = time * -1;
    translatePlanet(bodies.sun, 0, 0, 0, 0);
    translatePlanet(bodies.sunSur, 0, 0, 0, 0);
    translatePlanet(bodies.sunSur2, 0, 0, 0, 0);
    translatePlanet(bodies.sunSur3, 0, 0, 0, 0);

    /** Mercury**/
    translatePlanet(bodies.mercury, 0, 0, 200, 0.0008 * time);

    /** Venus**/
    translatePlanet(bodies.venus, 0, 0, 250, -0.0004 * time);

    /** Earth**/
    translatePlanet(bodies.earth, 0, 0, 300, 0.0003 * time);
    translatePlanetFeature(bodies.earth, bodies.earthSouthPole, [0, 0, -5.78]);
    translatePlanetFeature(bodies.earth, bodies.earthNorthPole, [0, 0, +5.9]);
    translatePlanetFeature(bodies.earth, bodies.africa, [0, +5, 0]);
    translateSatellite(bodies.moon, bodies.earth, 10, 0.002 * time);

    /** Mars**/
    translatePlanet(bodies.mars, 0, 0, 360, 0.0002 * time);
    translateSatellite(bodies.deimos, bodies.mars, 9, 0.002 * time);
    translateSatellite(bodies.phobos, bodies.mars, 5, 0.001 * time);

    /** Jupiter**/
    translatePlanet(bodies.jupiter, 0, 0, 550, 0.00001 * time);
    translateSatellite(bodies.io, bodies.jupiter, 20, 0.001 * time + 400);
    translateSatellite(bodies.europa, bodies.jupiter, 25, 0.0008 * time - 500);
    translateSatellite(bodies.ganymede, bodies.jupiter, 40, 0.0006 * time + 300);
    translateSatellite(bodies.callisto, bodies.jupiter, 50, 0.0005 * time);

    /** Saturn**/
    translatePlanet(bodies.saturn, 0, 0, 750, 0.00005 * time);
    bodies.saturnRings.forEach(element => {
        translateSatellite(element, bodies.saturn, 0, 0);
    });
    translateSatellite(bodies.mimas, bodies.saturn, 45, 0.001 * time);
    translateSatellite(bodies.enceladus, bodies.saturn, 50, 0.0009 * time);
    translateSatellite(bodies.tethys, bodies.saturn, 53, 0.00004 * time);
    translateSatellite(bodies.dione, bodies.saturn, 58, 0.00008 * -time);
    translateSatellite(bodies.rhea, bodies.saturn, 61, 0.00007 * -time);
    translateSatellite(bodies.titan, bodies.saturn, 65, 0.00008 * (time + 4000));
    translateSatellite(bodies.hyperion, bodies.saturn, 70, 0.00009 * time);
    translateSatellite(bodies.iapetus, bodies.saturn, 72, 0.0005 * -time);

    /** Uranus**/
    translatePlanet(bodies.uranus, 0, 0, 950, 0.00002 * time);
    translateSatellite(bodies.miranda, bodies.uranus, 10, 0.0005 * time);
    translateSatellite(bodies.ariel, bodies.uranus, 15, 0.0004 * -time);
    translateSatellite(bodies.umbriel, bodies.uranus, 20, 0.00007 * -time);
    translateSatellite(bodies.titania, bodies.uranus, 25, 0.00009 * time);
    translateSatellite(bodies.oberon, bodies.uranus, 30, 0.00002 * -time);

    /** Neptune**/
    translatePlanet(bodies.neptune, 0, 0, 1000, 0.000008 * time);
    translateSatellite(bodies.triton, bodies.neptune, 10, 0.001 * time);

    planetGenerator.illo.zoom = zoomRange.value * 0.1;


    lookAtBody(focusedBody);
}, 1);