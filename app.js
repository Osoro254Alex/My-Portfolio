const navSectionOne = document.querySelector('.info'); // container containing menu and nav links
const navSectionTwo = document.querySelector('.menu-icon'); // menu-icon
const links = document.querySelectorAll('.co'); // navigation class list
const sections = document.querySelectorAll('.sections'); // sections classlist
const windowPopup = document.querySelector('.window-popup');// container containiing the popup
const downloadBtn = document.querySelector('.gmr');

const butt = document.querySelector('.all-container'); // general body contain
const bigContainer = document.getElementById('portfolio'); // container for the cards

// display the menu bar
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

const resumeFile = 'portfolio-images/Resume.pdf';
downloadBtn.addEventListener('click', () => {
  window.open(resumeFile, '_blank');
});

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

// Email validation
const emailE = document.querySelector('#email');
const form = document.querySelector('#forme');
const error = document.querySelector('#error');

// Check if email meets Requirement
function validator(emailAcquire) {
  if (emailAcquire.match(/^[a-z@.0-9-_]*$/)) {
    return true;
  }
  return false;
}

const nameData = document.querySelector('#name');
const messageData = document.querySelector('#message');
const emptyArr = {};

function storag() {
  emptyArr.namee = nameData.value;
  emptyArr.email = emailE.value;
  emptyArr.message = messageData.value;
  localStorage.setItem('object', JSON.stringify(emptyArr));
}

// Accessing data and loading it on the page
const acquire = JSON.parse(localStorage.getItem('object'));

if (acquire === null) {
  nameData.value = '';
  emailE.value = '';
  messageData.value = '';
} else {
  nameData.value = acquire.namee;
  emailE.value = acquire.email;
  messageData.value = acquire.message;
}

// Message to display Depending on Email validation status
form.addEventListener('submit', (e) => {
  if (validator(emailE.value)) {
    error.textContent = '';
    storag();
  } else {
    storag();
    e.preventDefault();
    emailE.style.border = '3px solid red';
    error.style.display = 'flex';
    error.textContent = 'Error! Please Use Lowercase Email.';
  }
});

// PopUp Window details

// All Cards data
const cards = [
  {
    id: 'cardOne',
    title: 'Awesome Book',
    education: ['CANOPY', '&nbsp; Front End Dev', '&nbsp; 2022'],
    description:
      ' Microverse Module 02 Project: This is education project that allow user to add desire books to the list and also delete books. It makes use of local storage to preserve the data on the web browser',
    technologies: ['html5', 'css3', 'javascript', 'ES6'],
    image: {
      mainImg: 'portfolio-images/osoro254alex.github.io_Awesome-Book_ (1).png',
      counter: './portfolio-images/Counter.png',
    },
    button: 'See Project',
  },

  {
    id: 'cardTwo',
    title: 'Capstone3-World-Countries',
    education: ['FACEBOOK', '&nbsp; Back End Dev', '&nbsp; 2022'],
    description: `This React capstone project is about building a mobile web application to check a list of metrics that you will create making use of React and Redux.
    In this simple React Web Application developed to display a list of countries and their details fetched from an API. the project makes use of key React features such as Redux, Thunk and Loggers.
    [World-Countries ] is a simple project based on data from the globe. An API populates data about countries in a specific regioned and data is rendered through react functions.`,
    technologies: ['html', 'css', 'javascript', 'ES6'],
    image: {
      mainImg: 'portfolio-images/world-country.png',
      counter: './portfolio-images/Counter.png',
    },
    button: 'See Project',
    orderClas: 'card-twos',
  },

  {
    id: 'cardThree',
    title: 'Space Traveller\'s Hub',
    education: ['CANOPY', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: 'Space Travellers Hub is a web application that provides commercial and scientific space travel services. We designed the website to allow users to book rockets and join selected space missions. The website may also use real-time data from the SpaceX API to provide information on upcoming launches and available rockets for booking. The website is likely to cater to both individual space enthusiasts and organizations interested in space exploration.',
    technologies: ['html', 'css', 'javascript'],
    image: {
      mainImg: 'portfolio-images/space-travel.png',
      counter: './portfolio-images/Counter.png',
    },
    button: 'See Project',
  },

  {
    id: 'cardfour',
    title: 'Delicious Meals',
    education: ['Uber', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description:
      'A meal web app that retrieves data from an API could provide users with access to a vast library of recipes and nutritional information. Users can browse through the recipes, filter them based on their dietary requirements, or search for specific ingredients. The app can also provide a video link to show users how the meal is prepared step-by-step.',
    technologies: ['html', 'css', 'javascript'],
    image: {
      mainImg: 'portfolio-images/delicious-meal.png',
      counter: './portfolio-images/Counter.png',
    },
    button: 'See Project',
    orderClas: 'card-twos',
  },
];

// All popup Cards
const popup = [
  {
    id: 'cardOne',
    title: 'Awesome Book',
    education: ['CANOPY', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description:
      'Microverse Module 02 Project: This is education project that allow user to add desire books to the list and also delete books. It makes use of local storage to preserve the data on the web browser',

    technologies: ['html5', 'css3', 'javascript', 'React'],
    technologies2: ['github', 'ruby', 'Bootstrap'],
    image: {
      mainImg: 'portfolio-images/osoro254alex.github.io_Awesome-Book_ (1).png',
      counter: './portfolio-images/Counter.png',
      liveIcon: './portfolio-images/see-live.png',
      sourceIcon: './portfolio-images/see-source.png',
    },
    butn1: 'See live',
    butn2: 'See Source',
    cancel: '&times;',
    navigation: {
      live: 'https://osoro254alex.github.io/Awesome-Book/',
      source: 'https://github.com/Osoro254Alex/Awesome-Book',
    },
  },

  {
    id: 'cardTwo',
    title: 'Capstone3-World-Countries',
    education: ['FACEBOOK', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: `This React capstone project is about building a mobile web application to check a list of metrics that you will create making use of React and Redux.
    In this simple React Web Application developed to display a list of countries and their details fetched from an API. the project makes use of key React features such as Redux, Thunk and Loggers.
    [World-Countries ] is a simple project based on data from the globe. An API populates data about countries in a specific regioned and data is rendered through react functions.`,

    technologies: ['html', 'css', 'javascript', 'React & Redux'],
    technologies2: ['github', 'ruby', 'Bootstrap'],
    image: {
      mainImg: 'portfolio-images/world-country.png',
      counter: './portfolio-images/Counter.png',
      liveIcon: './portfolio-images/see-live.png',
      sourceIcon: './portfolio-images/see-source.png',
    },
    butn1: 'See live',
    butn2: 'See Source',
    cancel: '&times;',
    navigation: {
      live: 'https://explore-the-world-countries.netlify.app/',
      source: 'https://github.com/Osoro254Alex/Capstone3-World-Countries-',
    },
  },

  {
    id: 'cardThree',
    title: 'Space Traveller\'s Hub',
    education: ['CANOPY', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: 'Space Travellers Hub is a web application that provides commercial and scientific space travel services. We designed the website to allow users to book rockets and join selected space missions. The website may also use real-time data from the SpaceX API to provide information on upcoming launches and available rockets for booking. The website is likely to cater to both individual space enthusiasts and organizations interested in space exploration.',

    technologies: ['html', 'css', 'javascript', 'React & Redux'],
    technologies2: ['github', 'ruby', 'Bootstrap'],
    image: {
      mainImg: 'portfolio-images/space-travel.png',
      counter: './portfolio-images/Counter.png',
      liveIcon: './portfolio-images/see-live.png',
      sourceIcon: './portfolio-images/see-source.png',
    },
    butn1: 'See live',
    butn2: 'See Source',
    cancel: '&times;',
    navigation: {
      live: 'https://space-travel-hubs.netlify.app/',
      source: 'https://github.com/Osoro254Alex/Space-Travel-s-Hub',
    },
  },

  {
    id: 'cardfour',
    title: 'Delicious Meals',
    education: ['Uber', '&nbsp; Back End Dev', '&nbsp; 2022'],
    description:
      'A meal web app that retrieves data from an API could provide users with access to a vast library of recipes and nutritional information. Users can browse through the recipes, filter them based on their dietary requirements, or search for specific ingredients. The app can also provide a video link to show users how the meal is prepared step-by-step.',

    technologies: ['html', 'css', 'javascript'],
    technologies2: ['github', 'ruby', 'Bootstrap'],
    image: {
      mainImg: 'portfolio-images/delicious-meal.png',
      counter: './portfolio-images/Counter.png',
      liveIcon: './portfolio-images/see-live.png',
      sourceIcon: './portfolio-images/see-source.png',
    },
    butn1: 'Seelive',
    butn2: 'See Source',
    cancel: '&times;',
    navigation: {
      live: 'https://osoro254alex.github.io/Delicious-Meals/',
      source: 'https://github.com/Osoro254Alex/Delicious-Meals',
    },
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

// Add a popCard on click see project
function pageTransition() {
  if (windowPopup.classList.contains('pop-body')) {
    windowPopup.classList.remove('pop-body');
  } else {
    windowPopup.classList.add('pop-body');
    sections.forEach((sect) => {
      sect.classList.toggle('active');
    });
  }
}
// Removes the Popup on click close button and Navigate to see live and see source on click
windowPopup.addEventListener('click', (e) => {
  const klas = e.target.classList.contains('butz');
  if (klas) {
    windowPopup.classList.remove('pop-body');
    sections.forEach((sect) => {
      sect.classList.toggle('active');
    });
  }
});

// Loads the popup card on click
butt.addEventListener('click', (e) => {
  const klas = e.target.getAttribute('data-id');
  popup.forEach((object) => {
    if (klas === object.id) {
      windowPopup.innerHTML = `<div id="${object.id}" class="pop-up">
       <div class="pop-head">
         <h2 class="ton-del">
         ${object.title}
         </h2>
         <button type="button" class="cancel butz">
           ${object.cancel}
         </button>
       </div>
       <ul class="education">
         <li class="cano">
           ${object.education[0]}"
         </li>
         <li> <img src="${object.image.counter}" alt="counter image">${object.education[1]}</li>
         <li> <img src="${object.image.counter}" alt="counter image">${object.education[2]}</li>
       </ul>
       <div>
         <img class="pop-img" src="${object.image.mainImg}" alt="Snapshoot Portfolio image">
       <div>
         <div class="pop-bottom">
           <p class="pop-para">
             ${object.description}
           </p>
           <div class="sect-butns">
             <div>
               <ul class="tech javaht">
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
             <ul class="tech bootrap">
                 <li>
                     ${object.technologies2[0]}
                 </li>
                 <li>
                     ${object.technologies2[1]}
                 </li>
                 <li>
                     ${object.technologies2[2]}
                 </li>
             </ul>
             </div>
             <hr class="single-line">
             <nav class="pop-nav">
             <a class="navii1" href="${object.navigation.live}" target="_blank">
               <button class="pop-btn btn1 butz" type="button">
               ${object.butn1}
                 <img class="butz" src="${object.image.liveIcon}" alt="live-icon">
               </button>
             </a>
             <a class="navii2" href="${object.navigation.source}" target="_blank">
               <button class="pop-btn btn2 butz"  type="button">
               ${object.butn2}
               <img class="butz" src="${object.image.sourceIcon}" alt="github-icon">
               </button>
             </a>
             </nav>
           </div>
         </div>
       </div>
      </div>
     </div>`;
      pageTransition();
    }
  });
});
