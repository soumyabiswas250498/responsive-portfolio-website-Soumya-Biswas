// TsParticles

const options = {
  fullScreen: {
    enable: false,
    zIndex: 50000,
  },
  background: {
    color: '#046c95',
  },
  interactivity: {
    events: {
      onClick: {
        // this handles the mouse click event
        enable: true,
        mode: 'push', // this adds particles
      },
      onHover: {
        // this handles the mouse hover event
        enable: true,
        mode: 'repulse', // this make particles move away from the mouse
      },
    },
    modes: {
      push: {
        quantity: 6, // number of particles to add
      },
      repulse: {
        distance: 100,
        duration: 1,
        factor: 5,
        speed: 1,
        maxSpeed: 5,
        easing: 'ease-out-sine',
        divs: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: 'ease-out-quad',
          selectors: [],
        },
      },
    },
  },
  particles: {
    color: {
      value: '#FEC603',
    },
    move: {
      enable: true, // this makes particles move
      speed: { min: 0, max: 0.2 }, // this is the speed of the particles
    },

    opacity: {
      value: { min: 1, max: 0.5 }, // this sets the opacity of the particles
    },
    size: {
      value: { min: 0.5, max: 2 }, // this sets the size of the particles
    },
    shape: {
      close: true,
      fill: true,
      options: {},
      type: 'star',
    },
    number: {
      density: {
        enable: true,
      },
      limit: 0,
      value: 200,
    },
    twinkle: {
      particles: {
        enable: true,
        frequency: 0.1,
        opacity: 1,
        color: {
          value: '#ffffff',
        },
      },
    },
  },
};

// tsParticles.load has two parameters, the first one is the id of the container, the second one is an object with the options
console.log('hello');
tsParticles.load('tsparticles', options);
