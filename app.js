const navSectionOne = document.querySelector('.info'); // container containing menu and nav links
const navSectionTwo = document.querySelector('.menu-icon'); // menu-icon
const links = document.querySelectorAll('.co'); // navigation class list
const sections = document.querySelectorAll('.sections'); // sections classlist
const windowPopup = document.querySelector('.window-popup');// container containiing the popup
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

const nameDate = document.querySelector('#name');
const messageData = document.querySelector('#message');
const emptyArr = {};

function storag() {
  emptyArr.name = nameDate.value;
  emptyArr.email = emailE.value;
  emptyArr.message = messageData.value;
  localStorage.setItem('object', JSON.stringify(emptyArr));
}
// Accessing data and loading it on the page
const acquire = JSON.parse(localStorage.getItem('object'));

nameDate.value = acquire.name;
emailE.value = acquire.email;
messageData.value = acquire.message;

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

// All popup Cards
const popup = [
  {
    id: 'cardOne',
    title: 'Tonic',
    education: ['CANOPY', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",

    technologies: ['html', 'css', 'javascript'],
    technologies2: ['github', 'ruby', 'Bootstrap'],
    image: {
      mainImg: 'portfolio-images/SnapshootPortfolio-first.png',
      counter: './portfolio-images/Counter.png',
      liveIcon: './portfolio-images/see-live.png',
      sourceIcon: './portfolio-images/see-source.png',
    },
    butn1: 'See live',
    butn2: 'See Source',
    cancel: '&times;',
    navigation: {
      live: 'https://osoro254alex.github.io/Mobile-Portfolio-Setup-Repo/',
      source: 'https://github.com/Osoro254Alex/Mobile-Portfolio-Setup-Repo',
    },
  },

  {
    id: 'cardTwo',
    title: 'Multi-Post Stories',
    education: ['FACEBOOK', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",

    technologies: ['html', 'css', 'javascript'],
    technologies2: ['github', 'ruby', 'Bootstrap'],
    image: {
      mainImg: 'portfolio-images/desktop-2.png',
      counter: './portfolio-images/Counter.png',
      liveIcon: './portfolio-images/see-live.png',
      sourceIcon: './portfolio-images/see-source.png',
    },
    butn1: 'See live',
    butn2: 'See Source',
    cancel: '&times;',
    navigation: {
      live: 'https://osoro254alex.github.io/Mobile-Portfolio-Setup-Repo/',
      source: 'https://github.com/Osoro254Alex/Mobile-Portfolio-Setup-Repo',
    },
  },

  {
    id: 'cardThree',
    title: 'Facebook 360',
    education: ['CANOPY', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",

    technologies: ['html', 'css', 'javascript'],
    technologies2: ['github', 'ruby', 'Bootstrap'],
    image: {
      mainImg: 'portfolio-images/desktop-middle.png',
      counter: './portfolio-images/Counter.png',
      liveIcon: './portfolio-images/see-live.png',
      sourceIcon: './portfolio-images/see-source.png',
    },
    butn1: 'See live',
    butn2: 'See Source',
    cancel: '&times;',
    navigation: {
      live: 'https://osoro254alex.github.io/Mobile-Portfolio-Setup-Repo/',
      source: 'https://github.com/Osoro254Alex/Mobile-Portfolio-Setup-Repo',
    },
  },

  {
    id: 'cardfour',
    title: 'Uber Navigation',
    education: ['Uber', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",

    technologies: ['html', 'css', 'javascript'],
    technologies2: ['github', 'ruby', 'Bootstrap'],
    image: {
      mainImg: 'portfolio-images/desktop-last.png',
      counter: './portfolio-images/Counter.png',
      liveIcon: './portfolio-images/see-live.png',
      sourceIcon: './portfolio-images/see-source.png',
    },
    butn1: 'Seelive',
    butn2: 'See Source',
    cancel: '&times;',
    navigation: {
      live: 'https://osoro254alex.github.io/Mobile-Portfolio-Setup-Repo/',
      source: 'https://github.com/Osoro254Alex/Mobile-Portfolio-Setup-Repo',
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
