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
