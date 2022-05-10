import * as Fireworks from "fireworks-canvas";

export const getFireworks = () => {
  const container = document.getElementById("fireworks");

  const options = {
    maxRockets: 20, // max # of rockets to spawn
    rocketSpawnInterval: 150, // millisends to check if new rockets should spawn
    numParticles: 500, // number of particles to spawn when rocket explodes (+0-10)
    explosionMinHeight: 0.4, // percentage. min height at which rockets can explode
    explosionMaxHeight: 0.9, // percentage. max height before a particle is exploded
    explosionChance: 0.08, // chance in each tick the rocket will explode
    width: container.clientWidth - 20, // override the width, defaults to container width
    height: container.clientHeight - 20, // override the height, defaults to container height

    // array of points, defaults to []
    // when x is null or not defined, uses random position between 0 -> container width
    // when y is null or not defined, uses container height
    cannons: [{ x: container.clientWidth * 0.2 }, { x: container.clientWidth * 0.8 }],

    // defines a single cannon with null for height and provided value for X.
    // will be apended to provided cannons
    rocketInitialPoint: container.clientWidth * 0.5,
  };

  return new Fireworks(container, options);
};
