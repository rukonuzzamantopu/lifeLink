/* =====================================
   PAGE TRANSITION FADE-IN
===================================== */
document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    body.style.opacity = 0;
    setTimeout(() => {
        body.style.transition = "opacity 1s";
        body.style.opacity = 1;
    }, 50);
});

/* =====================================
   BUTTON RIPPLE EFFECT (JS Controlled)
===================================== */
document.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
        let button = e.target;
        let ripple = document.createElement("span");

        ripple.classList.add("ripple");
        button.appendChild(ripple);

        let x = e.clientX - button.getBoundingClientRect().left;
        let y = e.clientY - button.getBoundingClientRect().top;

        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
});

/* =====================================
   SMOOTH SCROLL (for internal links)
===================================== */
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

/* =====================================
   FAKE AI LOADING FOR PREDICTION
===================================== */
function showResult() {
    const box = document.getElementById("result-box");
    const text = document.getElementById("result-text");

    box.style.display = "block";
    text.innerHTML = "<span style='color:#7fffd4;'>Analyzing symptoms with AI...</span>";

    // Fake loading delay for effect
    setTimeout(() => {
        text.innerHTML = `
            Based on your symptoms, you may have:
            <br><br>
            <b style="color:#7fffd4; font-size:20px;">Viral Fever (Low Severity)</b>
            <br><br>
            Stay hydrated and monitor your symptoms.
        `;
    }, 1500);
}

/* =====================================
   LOCATION DETECTION SIMULATION
===================================== */
function detectLocation() {
    alert("Detecting your location...");
    setTimeout(() => {
        alert("Location detected: Mirpur, Dhaka");
    }, 1200);
}

/* =====================================
   CONTACT BUTTON POPUP
===================================== */
function callNow(number) {
    alert("Calling " + number + "...");
}

/* =====================================
   FADE-IN ANIMATION TRIGGER ON SCROLL
===================================== */
const fadeElements = document.querySelectorAll(".fade, .fade-up, .card");

window.addEventListener("scroll", () => {
    fadeElements.forEach(el => {
        let position = el.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if (position < screenHeight - 80) {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }
    });
});
