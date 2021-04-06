let nav = document.querySelector(".ham-icon");

let openNav = () => {
  document.querySelector(".sidebar").style.width = "300px";
};
let closeNav = () => {
  document.querySelector(".sidebar").style.width = "0px";
  setTimeout(() => location.reload(), 1000);
};
const typed = new Typed(".type", {
  strings: ["Business", "Front - end web development", "User experience design"],
  smartBackspace: true,
  loop: true,
  typeSpeed: 100,
  backSpeed: 70,
});
