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

function loco(scrollSelector) {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(scrollSelector),
    smooth: true,
  });

  locoScroll.on('scroll', ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(scrollSelector, {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector(scrollSelector).style.transform
      ? 'transform'
      : 'fixed',
  });

  ScrollTrigger.addEventListener('refresh', () => locoScroll.update());

  ScrollTrigger.refresh();
}
loco('#scroll-trigger');

/*=============== Gsap Scroll Trigger ===============*/

/*== Services Scroll Trigger ==*/

gsap.from('#services #box-left', {
  x: '-45vw',
  ease: 'power1.inOut',
  stagger: 0.2,
  scrollTrigger: {
    trigger: '#services #box-left',
    scroller: '#scroll-trigger',
    start: 'top 100%',
    end: 'top 50%',
    scrub: 1,
  },
});
gsap.from('#services #box-right', {
  x: '45vw',
  ease: 'power1.inOut',
  stagger: 0.2,
  scrollTrigger: {
    trigger: '#services #box-right',
    scroller: '#scroll-trigger',
    start: 'top 100%',
    end: 'top 50%',
    scrub: 1,
  },
});

/*== Project Scroll Trigger ==*/

function projectAnimate(selector) {
  gsap.from(selector, {
    scale: 0,
    ease: 'power1.inOut',
    stagger: 0.8,
    scrollTrigger: {
      trigger: selector,
      scroller: '#scroll-trigger',
      start: 'top 100%',
      markers: true,
      end: 'top 50%',
      scrub: 1,
    },
  });
}

projectAnimate('#project-1');
projectAnimate('#project-2');
projectAnimate('#project-3');
projectAnimate('#project-4');
