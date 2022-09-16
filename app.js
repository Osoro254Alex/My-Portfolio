const navSectionOne = document.querySelector('.info'); // container containing menu and nav links
const navSectionTwo = document.querySelector('.menu-icon'); // menu-icon
const links = document.querySelectorAll('.co'); // navigation class list
const sections = document.querySelectorAll('.sections'); // sections classlist
const bigContainer = document.getElementById('portfolio'); // container for the cards

// displas the menu bar
function menuTransition() {
  if (navSectionOne.classList.contains('phone')) {
    navSectionOne.classList.remove('phone');
  } else {
    navSectionOne.classList.add('phone');
    sections.forEach((sect) => {
      sect.classList.toggle('active');
    });
  }
}

navSectionTwo.addEventListener('click', menuTransition);

// hides the menu bar
function removeMenu() {
  if (navSectionOne.classList.contains('phone')) {
    navSectionOne.classList.remove('phone');
    sections.forEach((sect) => {
      sect.classList.toggle('active');
    });
  }
}

links.forEach((link) => {
  link.addEventListener('click', removeMenu);
});

// PopUp Window details

// All Cards data
const cards = [
  {
    id: 'cardOne',
    title: 'Tonic',
    education: ['CANOPY', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: ' A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript'],
    image: {
      mainImg: 'portfolio-images/SnapshootPortfolio-first.png',
      counter: './portfolio-images/Counter.png',
    },
    button: 'See Project',
  },

  {
    id: 'cardTwo',
    title: 'Multi-Post Stories',
    education: ['FACEBOOK', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: ['html', 'css', 'javascript'],
    image: {
      mainImg: 'portfolio-images/desktop-2.png',
      counter: './portfolio-images/Counter.png',
    },
    button: 'See Project',
    orderClas: 'card-twos',
  },

  {
    id: 'cardThree',
    title: 'Facebook 360',
    education: ['CANOPY', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    technologies: ['html', 'css', 'javascript'],
    image: {
      mainImg: 'portfolio-images/desktop-middle.png',
      counter: './portfolio-images/Counter.png',
    },
    button: 'See Project',
  },

  {
    id: 'cardfour',
    title: 'Uber Navigation',
    education: ['Uber', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript'],
    image: {
      mainImg: 'portfolio-images/desktop-last.png',
      counter: './portfolio-images/Counter.png',
    },
    button: 'See Project',
    orderClas: 'card-twos',
  },
];

// Loading All the cards online when the webpage Loads
cards.forEach((object) => {
  bigContainer.innerHTML += `<div class="card">
  <img class="img ${object.orderClas}" src="${object.image.mainImg}" alt="Snapshoot Portfolio image">
  <div class="sec-content">
  <h2 class="ton-del">
   ${object.title}
  </h2>
  <ul class="education">
  <li class="cano">
    ${object.education[0]}
  </li>
  <li> <img src="${object.image.counter}" alt="counter image">${object.education[1]}</li>
  <li> <img src="${object.image.counter}" alt="counter image">${object.education[2]}</li>
  </ul>
  <p>
    ${object.description}
  </p>
  <ul class="tech">
      <li>
        ${object.technologies[0]}
      </li>
      <li>
         ${object.technologies[1]}
      </li>
      <li>
         ${object.technologies[2]}
      </li>
  </ul>
  <button data-id="${object.id}" class="button" type="button">
    ${object.button}
  </button>
  </div>
  </div>`;
});
