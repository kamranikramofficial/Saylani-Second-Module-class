  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

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
  const db = getFirestore(app);

  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.registration-form');

    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      const requiredFields = form.querySelectorAll('[required]');
      let isValid = true;
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          field.style.borderColor = '#dc3545';
          isValid = false;
        } else {
          field.style.borderColor = '#90EE90';
        }
      });

      if (!isValid) {
        alert('Please fill in all required fields.');
        return;
      }

      const data = {
        country: document.getElementById("country").value,
        city: document.getElementById("city").value,
        gender: document.getElementById("gender").value,
        course: document.getElementById("course").value,
        proficiency: document.getElementById("proficiency").value,
        name: document.getElementById("fullname").value,
        fathername: document.getElementById("fathername").value,
        email: document.getElementById("email").value,
        phonenumber: document.getElementById("phone").value,
        cnicnumber: document.getElementById("cnic").value,
        fathercnic: document.getElementById("father-cnic").value,
        dob: document.getElementById("dob").value,
        address: document.getElementById("address").value
      };

      try {
        const docRef = await addDoc(collection(db, "formfill"), data);
        console.log("Document written with ID: ", docRef.id);
        alert("Registration submitted successfully!");
        form.reset(); // Clear form
      } catch (e) {
        console.error("Error adding document: ", e);
        alert("Something went wrong. Try again.");
      }
    });

    const inputs = form.querySelectorAll('.form-input, .form-select');
    inputs.forEach(input => {
      input.addEventListener('blur', function () {
        if (this.hasAttribute('required') && !this.value.trim()) {
          this.style.borderColor = '#dc3545';
        } else {
          this.style.borderColor = '#90EE90';
        }
      });
    });
  });
