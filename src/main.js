import "./style.css";
import "./normalize.css";

///// DARK LIGHT MODE /////

const darkModeBtn = document.getElementById("darklight");

function getCurrentTheme() {
  let theme = window.matchMedia("(prefers-color-scheme: dim)").matches
    ? "dim"
    : "bright";
  localStorage.getItem("theme")
    ? (theme = localStorage.getItem("theme"))
    : null;
  return theme;
}

function loadTheme(theme) {
  const root = document.querySelector(":root");
  if (theme === "bright") {
    darkModeBtn.innerHTML = `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-sun"
      >
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>`;
  } else {
    darkModeBtn.innerHTML = `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-moon"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>`;
  }

  root.setAttribute("color-scheme", `${theme}`);
}

darkModeBtn.addEventListener("click", () => {
  let theme = getCurrentTheme();
  if (theme === "dim") {
    theme = "bright";
  } else {
    theme = "dim";
  }
  localStorage.setItem("theme", `${theme}`);
  loadTheme(theme);
});

window.addEventListener("DOMContentLoaded", () => {
  loadTheme(getCurrentTheme());
});

///// ICON SLIDER /////

var copy = document.querySelector(".iconsSlide").cloneNode(true);
document.querySelector(".icons").appendChild(copy);

///// PORTFOLIO IMG /////

import battleshipImg from './asset/scbattleship.png';
const battleshipDiv = document.querySelector('.battleship');
const battleship = new Image();
battleship.src = battleshipImg;
battleship.alt = 'Screenshot of my battleship project'; 
battleshipDiv.appendChild(battleship);

import sketchImg from './asset/scSketch.png';
const sketchDiv = document.querySelector('.sketch');
const sketch = new Image();
sketch.src = sketchImg;
sketch.alt = 'Screenshot of my etch a sketch'; 
sketchDiv.appendChild(sketch);

import weatherImg from './asset/scWeather.png';
const weatherDiv = document.querySelector('.weather');
const weather = new Image();
weather.src = weatherImg;
weather.alt = 'Screenshot of my weather forecast site'; 
weatherDiv.appendChild(weather);

import todoImg from './asset/scTodo.png';
const todoDiv = document.querySelector('.todos');
const todo = new Image();
todo.src = todoImg;
todo.alt = 'Screenshot of my todo app'; 
todoDiv.appendChild(todo);

///// ABOUT/CONTACT IMG /////

import aboutImg from './asset/aboutHero.jpg';
const aboutHeroDiv = document.querySelector('.about-hero');
const about = new Image();
about.src = aboutImg;
about.alt = 'a silhouette of someone'; 
aboutHeroDiv.appendChild(about);

import contactImg from './asset/contactHero.svg';
const contactHeroDiv = document.querySelector('.contact-hero');
const contact = new Image();
contact.src = contactImg;
contact.alt = 'a svg of a pixel art character'; 
contactHeroDiv.appendChild(contact);