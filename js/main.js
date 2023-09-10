//scrollbar navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
};

//nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".nav-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

const navLinks = document.querySelectorAll("nav a");

// Loop melalui setiap tautan dan tambahkan event listener
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Mencegah perilaku bawaan tautan (pembaruan halaman)
    e.preventDefault();

    // Ambil href dari tautan yang diklik
    const href = link.getAttribute("href");

    // Pindahkan halaman ke href yang sesuai
    window.location.href = href;
  });
});
