/*=============== SHOW MENU ===============*/
const hamburger = document.querySelector('#hamburger');
console.log(hamburger);
hamburger.onclick = function () {
  console.log('hello');
  const navbar = document.querySelector('#nav-menu');
  const hamburger = document.querySelector('#hamburger');
  navbar.classList.toggle('active');
  hamburger.classList.toggle('openHamburger');
};

gsap.to('.nav__logo', {
  x: 5,
  duration: 0.2,
  delay: 0,
  repeat: -1,
  yoyo: true,
  yoyoEase: true,
});

/*=============== Home Amination ===============*/

let tl1 = gsap.timeline();

gsap.fromTo(
  '.home__subtitle',
  { x: '-100px' },
  { x: '0px', duration: 0.5, delay: 0.5 }
);

tl1.fromTo(
  '.home__title',
  { x: '80px', duration: 0.25, delay: 0.5 },
  {
    x: '0px',
    duration: 2,
    delay: 0.5,
    repeat: 2,
    yoyo: true,
    yoyoEase: true,
  }
);
tl1.to('.home__education', {
  x: 5,
  duration: 0.2,
  delay: 0,
  repeat: -1,
  yoyo: true,
  yoyoEase: true,
});
gsap.to('.cloud1', {
  x: '80vw',
  duration: 20,
  delay: 0,
  repeat: -1,
  yoyo: true,
  yoyoEase: true,
});
gsap.to('.cloud2', {
  x: '22vw',
  duration: 30,
  delay: 0,
  repeat: -1,
  yoyo: true,
  yoyoEase: true,
});
gsap.to('.cloud3', {
  x: '-85vw',
  duration: 40,
  delay: 0,
  repeat: -1,
  yoyo: true,
  yoyoEase: true,
});

/*=================About Page==================*/

const tabSelects = [...document.querySelectorAll('#tabClick')];
tabSelects.forEach(tabSelect => {
  tabSelect.addEventListener('click', tabScript);
});

function tabScript(event) {
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  let tabName = event.target.innerText;
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    // console.log(tablinks[i].innerText);
    if (tablinks[i].innerText === tabName) {
      tablinks[i].className = tablinks[i].className = 'tablinks active';
    } else {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
  }

  document.getElementById(tabName);
  document.getElementById(tabName).style.display = 'block';
}

/*=============== REMOVE MENU MOBILE ===============*/

/*=============== ADD BLUR TO HEADER ===============*/

/*=============== EMAIL JS ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
/*=============== LocoMotive ===============*/
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on('scroll', ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy('.main', {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector('.main').style.transform
    ? 'transform'
    : 'fixed',
});

// const scroll = new LocomotiveScroll({
//   el: document.querySelector('.main'),
//   smooth: true,
// });

VANTA.BIRDS({
  el: '#skills',
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  birdSize: 1.0,
  wingSpan: 9.0,
  speedLimit: 3.0,
  separation: 11.0,
  quantity: 2.0,
  cohesion: 30.0,
  backgroundColor: 0x245d6b,
});

// about me
