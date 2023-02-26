var backdrop = document.querySelector(".backdrop");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var portofolio = document.querySelector(".dropbtn__mobile");
var dropdownContentMobile = document.querySelector(".dropdown-content__mobile");

backdrop.addEventListener("click", function () {
  // mobileNav.style.display = 'none';
  mobileNav.classList.remove("open");
  // dropdownContentMobile.style.display = "none";
  closeModal();
  dropdownContentMobile.style.display = "none";
});

function closeModal() {
  //   backdrop.style.display = "none";
  //   modal.style.display = "none";
  if (backdrop) {
    backdrop.classList.remove("open");
    setTimeout(function () {
      backdrop.style.display = "none";
    }, 200);
  }
}

toggleButton.addEventListener("click", function () {
  // mobileNav.style.display = 'block';
  // backdrop.style.display = 'block';
  mobileNav.classList.add("open");
  backdrop.style.display = "block";
  setTimeout(function () {
    backdrop.classList.add("open");
  }, 10);
});

portofolio.addEventListener("click", function () {
  dropdownContentMobile.style.display = "block";
});
