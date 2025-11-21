/* -----------------------------------------------
   GSAP HERO ANIMATIONS
--------------------------------------------------*/

// Name + titles fade + slide
gsap.from(".name", {
  y: 30,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
});

gsap.from(".titles", {
  y: 20,
  opacity: 0,
  duration: 1.2,
  delay: 0.2,
  ease: "power3.out"
});

gsap.from(".tagline", {
  y: 15,
  opacity: 0,
  duration: 1.2,
  delay: 0.4
});

gsap.from(".cta-row", {
  y: 20,
  opacity: 0,
  duration: 1.2,
  delay: 0.6
});

/* -----------------------------------------------
   AVATAR FLOAT + GLOW PULSE
--------------------------------------------------*/
gsap.to(".avatar-img", {
  y: -8,
  repeat: -1,
  yoyo: true,
  duration: 2.4,
  ease: "power1.inOut"
});

gsap.to(".avatar-img", {
  boxShadow: "0 0 40px rgba(127, 92, 255, 0.7)",
  repeat: -1,
  yoyo: true,
  duration: 3,
  ease: "sine.inOut"
});

/* -----------------------------------------------
   SECTION ANIMATION ON SCROLL
--------------------------------------------------*/
gsap.utils.toArray(".section").forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%", 
    }
  });
});

/* -----------------------------------------------
   SMOOTH SCROLL FOR NAVIGATION LINKS
--------------------------------------------------*/
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

/* -----------------------------------------------
   CONTACT FORM SUBMIT (DEMO)
--------------------------------------------------*/
function onContactSubmit(event) {
  event.preventDefault();
  alert("Thank you! Your message has been sent.");
}

/* -----------------------------------------------
   AUTO YEAR UPDATE
--------------------------------------------------*/
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------------------------------------------------------
   MATRIX RAIN BACKGROUND
------------------------------------------------------------*/
const canvas = document.createElement("canvas");
canvas.id = "matrixCanvas";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00e1ff";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 45);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

/* ---------------------------------------------------------
   NEON CURSOR GLOW TRAIL
------------------------------------------------------------*/
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});

/* ---------------------------------------------------------
   TYPING ANIMATION
------------------------------------------------------------*/

const typingText = [
  "Creative Developer",
  "UI/UX Designer",
  "3D Enthusiast",
  "Cyberpunk Coder"
];

let typingIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const element = document.getElementById("typing");

  if (!element) return;

  let current = typingText[typingIndex];

  if (isDeleting) {
    element.textContent = current.substring(0, charIndex--);
  } else {
    element.textContent = current.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === current.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    typingIndex = (typingIndex + 1) % typingText.length;
  }

  setTimeout(typeEffect, isDeleting ? 70 : 120);
}

typeEffect();
/* ---------------------------------------------------------
   3D TILT EFFECT
------------------------------------------------------------*/
document.querySelectorAll(".tilt").forEach((box) => {
  
  box.addEventListener("mousemove", (e) => {
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    box.style.transform = `perspective(800px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`;
  });

  box.addEventListener("mouseleave", () => {
    box.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
  });

});
