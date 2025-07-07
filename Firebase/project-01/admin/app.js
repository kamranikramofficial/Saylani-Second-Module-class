import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDP5X-Ly48292xhIYybNhdTVEvUG8-jTLg",
  authDomain: "formfill-bbd98.firebaseapp.com",
  projectId: "formfill-bbd98",
  storageBucket: "formfill-bbd98.firebasestorage.app",
  messagingSenderId: "275544598377",
  appId: "1:275544598377:web:b027e65146a24f0ec13ff8",
  measurementId: "G-58E218S28W"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", async function (e) {
    e.preventDefault(); 
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("errorMessage");
    const successMessage = document.getElementById("successMessage");

    // Hide messages before processing
    errorMessage.style.display = "none";
    successMessage.style.display = "none";

    try {
      await signInWithEmailAndPassword(auth, email, password);
      successMessage.textContent = "Login successful. Redirecting...";
      successMessage.style.display = "block";
      setTimeout(() => {
        window.location.href = "../view/index.html";
      }, 1500);
    } catch (error) {
      errorMessage.textContent = "Invalid email or password.";
      errorMessage.style.display = "block";
    }
  });
});
