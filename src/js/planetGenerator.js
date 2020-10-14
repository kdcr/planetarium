import { Star } from "./model.js";
const ringColors = ['#706355', '#847364', '#aa9484', '#c9a47f', '#9b7e64', '#7c6452', '#d6ae8a', '#605448'];

const root = document.documentElement;
const spaceContainer = document.querySelector('.spaceContainer');

export class PlanetGenerator {
    constructor(illo) {
        this.illo = illo;

        // Astronomical boddies definition
        let sun, sunSur, sunSur2, sunSur3,
            mercury,
            venus,
            earth, earthSouthPole, earthNorthPole, africa, moon,
            mars, phobos, deimos,
            pallas, ceres, juno, vesta,
            jupiter, io, europa, ganymede, callisto,
            saturn, mimas, enceladus, tethys, dione, rhea, titan, hyperion, iapetus, saturnRings,
            uranus, miranda, ariel, umbriel, titania, oberon,
            neptune, triton;

        this.bodies = {
            sun,
            sunSur,
            sunSur2,
            sunSur3,
            mercury,
            venus,
            earth,
            earthSouthPole,
            earthNorthPole,
            africa,
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

    }

    createSun() {
        const coreSize = 100;

        this.bodies.sun = new Zdog.Shape({
            addTo: this.illo,
            stroke: coreSize + 90,
            color: '#993d10',
        });

        this.bodies.sunSur = new Zdog.Shape({
            addTo: this.illo,
            stroke: coreSize + 100,
            color: '#ff660050',
        });

        this.bodies.sunSur2 = new Zdog.Shape({
            addTo: this.illo,
            stroke: coreSize + 110,
            color: '#ffa36650',
        });

        this.bodies.sunSur3 = new Zdog.Shape({
            addTo: this.illo,
            stroke: coreSize + 120,
            color: '#ffa36650',
        });
    }

    createMercury() {
        this.bodies.mercury = new Zdog.Shape({
            addTo: this.illo,
            stroke: 5,
            color: '#8E8E8E',
        });
    }

    createVenus() {
        this.bodies.venus = new Zdog.Shape({
            addTo: this.illo,
            stroke: 11,
            color: '#C9C97B',
        });
    }

    createEarth() {
        this.bodies.earth = new Zdog.Shape({
            addTo: this.illo,
            stroke: 12,
            color: '#000090',
        });

        this.bodies.earthSouthPole = new Zdog.Ellipse({
            addTo: this.illo,
            diameter: 3,
            stroke: 0.1,
            fill: true,
            color: '#fff',
            backface: '#fff',
        });

        this.bodies.earthNorthPole = new Zdog.Ellipse({
            addTo: this.illo,
            diameter: 3,
            stroke: 0.1,
            fill: true,
            color: '#fff',
            backface: '#fff',
        });

        this.bodies.africa = new Zdog.Shape({
            addTo: this.illo,
            rotate: { x: Math.PI / -2 },
            path: [
                { x: 0.5, y: 0, z: 0.8 },
                { x: -0., y: 1, z: 0.8 },
                { x: 1, y: 2, z: 0.3 },
                { x: 2, y: 2, z: 0.2 },
                { x: 3, y: 5, z: -2 },
                { x: 3.5, y: 2, z: -1 },
                { x: 4, y: 1.5, z: -0.5 },
                { x: 3, y: -0.1, z: -0.2 },
            ],
            fill: true,
            closed: true,
            stroke: 1,
            color: '#006600'
        });

        this.bodies.moon = new Zdog.Shape({
            addTo: this.illo,
            stroke: 3,
            color: '#808080',
        });

    }

    createMars() {
        this.bodies.mars = new Zdog.Shape({
            addTo: this.illo,
            stroke: 8,
            color: '#993d10',
        });

        this.bodies.deimos = new Zdog.Shape({
            addTo: this.illo,
            stroke: 1,
            color: '#808080',
        });

        this.bodies.phobos = new Zdog.Shape({
            addTo: this.illo,
            stroke: 1,
            color: '#808080',
        });

    }

    // function createAsteroidBelt() {}

    createJupiter() {
        this.bodies.jupiter = new Zdog.Shape({
            addTo: this.illo,
            stroke: 30,
            color: '#993d10',
        });

        this.bodies.io = new Zdog.Shape({
            addTo: this.illo,
            stroke: 4,
            color: '#fff2a7',
        });

        this.bodies.europa = new Zdog.Shape({
            addTo: this.illo,
            stroke: 2,
            color: '#b6c9c5',
        });

        this.bodies.ganymede = new Zdog.Shape({
            addTo: this.illo,
            stroke: 3,
            color: '#8b7c78',
        });

        this.bodies.callisto = new Zdog.Shape({
            addTo: this.illo,
            stroke: 3,
            color: '#996e5b',
        });
    }

    createSaturn() {

        this.bodies.saturnRings = [];

        this.bodies.saturn = new Zdog.Shape({
            addTo: this.illo,
            stroke: 28,
            color: '#993d10',
        });

        this.bodies.mimas = new Zdog.Shape({
            addTo: this.illo,
            stroke: 2,
            color: '#575756',
        });

        this.bodies.enceladus = new Zdog.Shape({
            addTo: this.illo,
            stroke: 2,
            color: '#575756',
        });

        this.bodies.tethys = new Zdog.Shape({
            addTo: this.illo,
            stroke: 2,
            color: '#575756',
        });

        this.bodies.dione = new Zdog.Shape({
            addTo: this.illo,
            stroke: 2,
            color: '#575756',
        });

        this.bodies.rhea = new Zdog.Shape({
            addTo: this.illo,
            stroke: 2,
            color: '#575756',
        });

        this.bodies.titan = new Zdog.Shape({
            addTo: this.illo,
            stroke: 2,
            color: '#d4af82',
        });

        this.bodies.hyperion = new Zdog.Shape({
            addTo: this.illo,
            stroke: 2,
            color: '#575756',
        });

        this.bodies.iapetus = new Zdog.Shape({
            addTo: this.illo,
            stroke: 2,
            color: '#575756',
        });

        let ringSeparation = 10;
        const minD = 35;
        for (let index = 0; index <= 10; index++) {
            const color = ringColors[Math.round(Math.random() * ringColors.length)];
            this.bodies.saturnRings.push(new Zdog.Ellipse({
                addTo: this.illo,
                diameter: minD + ringSeparation,
                stroke: 1,
                color: color,
                quarters: 1,
            }));
            this.bodies.saturnRings.push(new Zdog.Ellipse({
                addTo: this.illo,
                diameter: minD + ringSeparation,
                stroke: 1,
                rotate: { x: Math.PI },
                color: color,
                quarters: 1,
            }));
            this.bodies.saturnRings.push(new Zdog.Ellipse({
                addTo: this.illo,
                diameter: minD + ringSeparation,
                stroke: 1,
                rotate: { y: Math.PI },
                color: color,
                quarters: 1,
            }));
            this.bodies.saturnRings.push(new Zdog.Ellipse({
                addTo: this.illo,
                diameter: minD + ringSeparation,
                stroke: 1,
                rotate: { z: Math.PI },
                color: color,
                quarters: 1,
            }));

            ringSeparation++;
            ringSeparation++;
            ringSeparation++;

        }


    }

    createUranus() {

        this.bodies.uranus = new Zdog.Shape({
            addTo: this.illo,
            stroke: 15,
            color: '#6895a9',
        });

        this.bodies.miranda = new Zdog.Shape({
            addTo: this.illo,
            stroke: 2,
            color: '#575756',
        });

        this.bodies.ariel = new Zdog.Shape({
            addTo: this.illo,
            stroke: 2,
            color: '#575756',
        });

        this.bodies.umbriel = new Zdog.Shape({
            addTo: this.illo,
            stroke: 2,
            color: '#575756',
        });

        this.bodies.titania = new Zdog.Shape({
            addTo: this.illo,
            stroke: 2,
            color: '#575756',
        });

        this.bodies.oberon = new Zdog.Shape({
            addTo: this.illo,
            stroke: 2,
            color: '#575756',
        });

    }

    createNeptune() {

        this.bodies.neptune = new Zdog.Shape({
            addTo: this.illo,
            stroke: 15,
            color: '#4175a9',
        });

        this.bodies.triton = new Zdog.Shape({
            addTo: this.illo,
            stroke: 2,
            color: '#c3b097',
        });
    }

    createPlanets(illo) {

        this.illo = illo;

        this.createSun();

        this.createMercury();

        this.createVenus();

        this.createEarth();

        this.createMars();

        this.createJupiter();

        this.createSaturn();

        this.createUranus();

        this.createNeptune();

        return this.bodies;

    }

    createStar() {
        const pos = [Math.random() * (spaceContainer.clientWidth - 10), Math.random() * (spaceContainer.clientHeight - 10)];
        const element = document.createElement("div");
        element.classList.add('star');
        element.style.left = pos[0] + "px";
        element.style.top = pos[1] + "px";
        const lifeSpan = Math.random() * 2000;



        const colorVal = Math.round(Math.random() * 100);
        if (colorVal <= 75) {
            element.classList.add("starWhite");
        } else if (colorVal <= 90) {
            element.classList.add("starRed");
        } else if (colorVal <= 98) {
            element.classList.add("starYellow");
        } else if (colorVal <= 100) {
            element.classList.add("starBlue");
        }
        element.classList.add("starShine");
        root.style.setProperty('--shineSize', (Math.random() * 120) + "%");
        spaceContainer.appendChild(element);

        return new Star(lifeSpan, pos, element);
    }

}