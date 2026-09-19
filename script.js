import { db } from "./firebase-config.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

/* ================= MOBILE MENU ================= */

const menuButton = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });
});


/* ================= LOAD CONTENT FROM FIRESTORE ================= */

function setPhoto(id, url) {
    if (!url) return;
    const el = document.getElementById(id);
    if (!el) return;
    el.style.backgroundImage = "url('" + url + "')";
    el.style.backgroundSize = "cover";
    el.style.backgroundPosition = "center";
    el.textContent = "";
}

async function loadSiteContent() {
    try {
        const snap = await getDoc(doc(db, "site", "content"));

        if (!snap.exists()) {
            // No content saved yet — keep the default placeholder text
            return;
        }

        const data = snap.data();

        const textFields = {
            "bio-text": data.bio,
            "father-name": data.fatherName,
            "father-info": data.fatherInfo,
            "mother-name": data.motherName,
            "mother-info": data.motherInfo,
            "family-story-text": data.familyStory
        };

        Object.keys(textFields).forEach(function (id) {
            const value = textFields[id];
            if (value) {
                document.getElementById(id).textContent = value;
            }
        });

        setPhoto("profile-photo-box", data.profilePhoto);
        setPhoto("about-photo-box", data.aboutPhoto);
        setPhoto("father-photo-box", data.fatherPhoto);
        setPhoto("mother-photo-box", data.motherPhoto);
        setPhoto("sibling-photo-box", data.siblingPhoto);

        const gallery = data.gallery || [];
        for (let i = 0; i < 6; i++) {
            setPhoto("gallery-photo-" + (i + 1), gallery[i]);
        }

    } catch (err) {
        console.error("Could not load site content:", err);
    }
}

loadSiteContent();
