AOS.init({
  duration: 800,
  offset: 100
});
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll("[data-countup]");
  elements.forEach((el) => {
    const endVal = parseInt(el.getAttribute("data-countup"));
    const counter = new countUp.CountUp(el, endVal, { duration: 2 });
    if (!counter.error) counter.start();
  });
});

const toggleBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
toggleBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});