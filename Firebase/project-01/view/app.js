import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

// Firebase config
  const firebaseConfig = {
    apiKey: "AIzaSyDP5X-Ly48292xhIYybNhdTVEvUG8-jTLg",
    authDomain: "formfill-bbd98.firebaseapp.com",
    projectId: "formfill-bbd98",
    storageBucket: "formfill-bbd98.firebasestorage.app",
    messagingSenderId: "275544598377",
    appId: "1:275544598377:web:b027e65146a24f0ec13ff8",
    measurementId: "G-58E218S28W"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// DOM Elements
const usersGrid = document.getElementById("usersGrid");
const noUsersState = document.getElementById("noUsersState");

// Load users from Firestore
async function loadUsers() {
    try {
        const querySnapshot = await getDocs(collection(db, "formfill"));
        if (querySnapshot.empty) {
            noUsersState.style.display = "block";
            usersGrid.style.display = "none";
            return;
        }

        usersGrid.innerHTML = ""; // Clear old data
        usersGrid.style.display = "grid";
        noUsersState.style.display = "none";

        querySnapshot.forEach((doc) => {
            const user = doc.data();
            const userCard = `
                <div class="user-card">
                    <div class="user-header">
                        <div class="user-avatar">${user.name?.charAt(0).toUpperCase() || "U"}</div>
                        <div class="user-basic-info">
                            <div class="user-name">${user.name || "Unnamed"}</div>
                            <div class="user-email">${user.email || "No Email"}</div>
                        </div>
                    </div>

                    <div class="user-details">
                        <div class="detail-item">
                            <div class="detail-label">Father Name</div>
                            <div class="detail-value">${user.fathername || "N/A"}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Phone</div>
                            <div class="detail-value">${user.phonenumber || "N/A"}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">CNIC</div>
                            <div class="detail-value">${user.cnicnumber || "N/A"}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Father CNIC</div>
                            <div class="detail-value">${user.fathercnic || "N/A"}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Date of Birth</div>
                            <div class="detail-value">${user.dob || "N/A"}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Address</div>
                            <div class="detail-value">${user.address || "N/A"}</div>
                        </div>
                    </div>

                    <div class="user-tags">
                        <span class="tag course">${user.course || "No Course"}</span>
                        <span class="tag country">${user.country || "No Country"}</span>
                        <span class="tag proficiency">${user.proficiency || "No Level"}</span>
                        <span class="tag gender">${user.gender || "No Gender"}</span>
                    </div>
                </div>
            `;
            usersGrid.innerHTML += userCard;
        });
    } catch (error) {
        console.error("Error fetching users:", error);
        noUsersState.style.display = "block";
        noUsersState.querySelector("h3").textContent = "Error loading users";
        noUsersState.querySelector("p").textContent = "Please try again later.";
    }
}

// Load on page ready
document.addEventListener("DOMContentLoaded", loadUsers);
