import * as data from "../data/data.js";

// ######## load contact Date ##########
const contactContainer = document.querySelector(".contact__items");

data.contact.forEach((data) => {
  const markup = `
  <a href="${data.link}" class="contact__item s">
    <span class="logo">${data.logo}</span>
    <span class="value">${data.value}</span>
  </a>`;
  contactContainer.insertAdjacentHTML("beforeend", markup);
});

// ######## load technical skills Date ##########
const technicalSkillContainer = document.querySelector(".technical-skills");
const categorys = [
  ...new Set(data.technicalSkills.map((skill) => skill.field)),
];
categorys.forEach((category) => {
  const title = `<h3>${category}</h3>`;
  const skillsItems = data.technicalSkills
    .filter((skill) => skill.field === category)
    .map((skill) => `<span class="technical__item">${skill.value}</span>`)
    .join(" ");
  const markup = `<div class="technical__group"> ${title} <div class="technical__items">${skillsItems} </div> `;
  technicalSkillContainer.insertAdjacentHTML("beforeend", markup);
});
// ##########  Load personal skills data ############
const personalSkillsContainer = document.querySelector(".personal-skills");

data.personalSkills.forEach((skill) => {
  const markup = `<div class="personal__skill">${skill}</div>`;
  personalSkillsContainer.insertAdjacentHTML("beforeend", markup);
});
// ##########  Load languages data ############
const languagesContainer = document.querySelector(".languages");

data.languages.forEach((language) => {
  const markup = `<div class="language">${language.value} (${language.level})</div>`;
  languagesContainer.insertAdjacentHTML("beforeend", markup);
});

// ##########  Load profile data ############
const profileContainer = document.querySelector(".profile__text");
profileContainer.innerHTML = data.profile;
// ##########  Load education data ############
const educationContainer = document.querySelector(".education");

data.education.forEach((item) => {
  const markup = `          
  <div class="education__card">
    <div class="education__school">${item.school}</div>
    <div class="education__date">${item.date}</div>
    <div class="education__feild">${item.feild}</div>
  </div>`;
  educationContainer.insertAdjacentHTML("beforeend", markup);
});
// ##########  Load work-experiance data ############

const workExperienceContainer = document.querySelector(".work-experience");

data.workExperience.forEach((item) => {
  const markup = `
  <div class="work__card">
    <div class="work__title">${item.title}</div>
    <div class="work__date">${item.date}</div>
    <div class="work__description">${item.description}</div>
  </div>`;
  workExperienceContainer.insertAdjacentHTML("beforeend", markup);
});

const certificatesContainer = document.querySelector(".certifications__items");

data.certifications.forEach((item) => {
  const markup = `
  <div class="certifications__card">
    <span class="certification__title">${item.title}</span>
    <a target="_blank" href=${item.link}><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
    <div class="certification__from">${item.from}</div>
  </div>`;
  certificatesContainer.insertAdjacentHTML("beforeend", markup);
});

// NOTE: print btn

const printBtn = document.querySelector(".print");

printBtn.addEventListener("click", () => {
  window.print();
});
