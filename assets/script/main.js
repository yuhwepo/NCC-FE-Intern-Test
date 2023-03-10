const menuBtn = document.querySelector(".menu-mobile i");
// const sidebar = document.querySelector(".sidebar");
const backDrop = document.querySelector(".backdrop");

menuBtn.addEventListener("click", function () {
  document.querySelector("main").classList.add("active");
  document.querySelector("body").style.overflow = "hidden";
});

backDrop.addEventListener("click", function () {
  document.querySelector("main").classList.remove("active");
  document.querySelector("body").style.overflow = "auto";
});
