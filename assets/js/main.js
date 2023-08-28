/*=============== SHOW MENU ===============*/
const hamburger = document.querySelector('#hamburger');
// console.log(hamburger);
hamburger.onclick = function () {
  // console.log('hello');
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

// =========CloudAnimation===========

function cloudAnimation(selector, xValue) {
  gsap.to(selector, {
    x: xValue,
    duration: 40,
    delay: 0,
    repeat: -1,
    yoyo: true,
    yoyoEase: true,
  });
}

cloudAnimation('.cloud1', '80vw');
cloudAnimation('.cloud2', '22vw');
cloudAnimation('.cloud3', '-85vw');

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
    if (tablinks[i].innerText === tabName) {
      tablinks[i].className = tablinks[i].className = 'tablinks active';
    } else {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
  }

  document.getElementById(tabName);
  document.getElementById(tabName).style.display = 'block';
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
/*=============== LocoMotive ===============*/
// const scrollSelector = '#scroll-trigger';

const loco = scrollSelector => {
  gsap.registerPlugin(ScrollTrigger);

  // gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(scrollSelector),
    smooth: true,
    scrollFromAnywhere: true,
    reloadOnContextChange: true,
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

  window.addEventListener('load', () => {
    const navBtn1 = document.getElementById('home_nav');
    const navBtn2 = document.getElementById('about_nav');
    const navBtn3 = document.getElementById('skills_nav');
    const navBtn4 = document.getElementById('services_nav');
    const navBtn5 = document.getElementById('projects_nav');
    const navBtn6 = document.getElementById('contact_nav');
    locoScroll.on('call', callValue => {
      let inView = document.getElementsByClassName('is-inview')[0];
      // console.log(inView);
      activeController(inView.getAttribute('data-scroll-call'));
    });

    function activeController(input) {
      if (input === 'home_section') {
        navBtn1.classList.add('active_nav');
      } else {
        if (navBtn1.classList[1]) {
          navBtn1.classList.remove('active_nav');
        }
      }
      if (input === 'about_section') {
        navBtn2.classList.add('active_nav');
      } else {
        if (navBtn2.classList[1]) {
          navBtn2.classList.remove('active_nav');
        }
      }
      if (input === 'skills_section') {
        navBtn3.classList.add('active_nav');
      } else {
        if (navBtn3.classList[1]) {
          navBtn3.classList.remove('active_nav');
        }
      }
      if (input === 'services_section') {
        navBtn4.classList.add('active_nav');
      } else {
        if (navBtn4.classList[1]) {
          navBtn4.classList.remove('active_nav');
        }
      }
      if (input === 'projects_section') {
        navBtn5.classList.add('active_nav');
      } else {
        if (navBtn5.classList[1]) {
          navBtn5.classList.remove('active_nav');
        }
      }
      if (input === 'contact_section') {
        navBtn6.classList.add('active_nav');
      } else {
        if (navBtn6.classList[1]) {
          navBtn6.classList.remove('active_nav');
        }
      }
    }
  });

  const select = document.getElementsByClassName('nav__list')[0];
  select.addEventListener('click', e => {
    navScroll(e.target.getAttribute('name'));
  });
  function navScroll(input) {
    // console.log(input);
    locoScroll.scrollTo(document.querySelector(input));
  }
};

loco('#scroll-trigger');
/*=============== Gsap Scroll Trigger ===============*/

/*== Services Scroll Trigger ==*/

function servicesAnimation(selector, xValue) {
  gsap.from(selector, {
    x: xValue,
    ease: 'power1.inOut',
    stagger: 0.2,
    scrollTrigger: {
      trigger: selector,
      scroller: '#scroll-trigger',
      start: 'top 100%',
      end: 'top 50%',
      scrub: 1,
    },
  });
}

servicesAnimation('#box-left', '-45vw');
servicesAnimation('#box-right', '45vw');

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
      end: 'top 50%',
      scrub: 1,
    },
  });
}
projectAnimate('#project-5');
projectAnimate('#project-1');
projectAnimate('#project-2');
projectAnimate('#project-3');
projectAnimate('#project-4');

/*== Email ==*/

const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = e => {
  e.preventDefault();
  emailjs
    .sendForm(
      'service_cshhtr5',
      'template_439u8cf',
      '#contact-form',
      'LSCfRMhVbXhCKl-4Y'
    )
    .then(
      () => {
        // Show sent message
        contactMessage.textContent = 'Message sent successfully. ✅';
        setTimeout(() => {
          contactMessage.textContent = '';
        }, 10000);
        contactForm.reset();
      },
      () => {
        contactMessage.textContent =
          'Error occured. Drop an email to soumyabiswas250498@gmail.com. ❌';
        setTimeout(() => {
          contactMessage.textContent = '';
        }, 10000);
      }
    );
};

contactForm.addEventListener('submit', sendEmail);
