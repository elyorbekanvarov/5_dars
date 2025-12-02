const lightBtn = document.getElementById("light-btn");
const sunBtn = document.querySelector(".sun");
let SunEl = document.getElementById("sun");
let MoonEl = document.getElementById("moon");

const menuBtnEl = document.getElementById("menu-btn");
const SideBarEl = document.querySelector(".side-bar");

lightBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.add("light-mode");

  lightBtn.classList.add("hidden");
  sunBtn.classList.remove("hidden");

  SunEl.classList.remove("hidden");
  MoonEl.classList.add("hidden");
});

sunBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.remove("light-mode");

  sunBtn.classList.add("hidden");
  lightBtn.classList.remove("hidden");

  SunEl.classList.add("hidden");
  MoonEl.classList.remove("hidden");
});

menuBtnEl.addEventListener("click", () => {
  SideBarEl.classList.toggle("show");
});
