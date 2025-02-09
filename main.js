// Show Menu
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");

  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form");
contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();
  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      "service_fl7m4sk",
      "template_37hnvwx",
      "#contact-form",
      "-2nHTJzEypHUPsR46"
    )
    .then(
      () => {
        // Show sent message
        contactMessage.textContent = "Message sent successfully ✅";
        // Remove message after five seconds
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        contactForm.reset();
      },
      () => {
        contactMessage.textContent = "Message Not Sent (Service Error) ❌";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);
/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);
/*=============== DARK LIGHT THEME ===============*/
const bulbText = document.getElementById("bulbtext");
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-lightbulb-line";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme)
    ? "ri-lightbulb-flash-line"
    : "ri-lightbulb-line";

// validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, ask what the issue was to know if activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[
    selectedIcon === "ri-lightbulb-flash-line" ? "add" : "remove"
  ](iconTheme);
}
const lights = function () {
  document.body.classList.contains(darkTheme)
    ? (bulbText.textContent = " Lights Off")
    : (bulbText.textContent = " Lights On");
};
lights();
// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
  lights();
});
/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2400,
  delay: 200,
  reset: true,
});

document.addEventListener("DOMContentLoaded", function () {
  sr.reveal(".home__perfil, .about__image, .contact__mail", {
    origin: "right",
  });
  sr.reveal(
    ".home__name, .home__info, .about__container .section__title-1,\
   .about__info, .contact__social, .contact__data",
    {
      origin: "left",
    }
  );
  sr.reveal(".services__card, .projects__card", { interval: 100 });

  setTimeout(() => {
    document.getElementById("body").classList.remove("hidden");
  }, 300);
});

// Image grid puppies

document.addEventListener("DOMContentLoaded", function () {
  const imageGrid = document.getElementById("imageGrid");

  // Array of local image file names
  const imageFiles = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

  // Folder where images are stored
  const imageFolder = "images/";

  // Loop through image filenames and create img elements
  imageFiles.forEach((fileName) => {
    const img = document.createElement("img");
    img.src = imageFolder + fileName; // Set the source to the local path
    img.alt = "Grid Image";
    imageGrid.appendChild(img);
  });
});
