import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
    getFirestore,
    collection,
    getDocs,
    doc,
    deleteDoc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

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

        usersGrid.innerHTML = "";
        usersGrid.style.display = "grid";
        noUsersState.style.display = "none";

        querySnapshot.forEach((docSnap) => {
            const user = docSnap.data();
            const docId = docSnap.id;

            const userCard = `
                <div class="user-card" data-id="${docId}">
                    <div class="user-header">
                        <div class="user-avatar">${user.name?.charAt(0).toUpperCase() || "U"}</div>
                        <div class="user-basic-info">
                            <div class="user-name">${user.name || "Unnamed"}</div>
                            <div class="user-email">${user.email || "No Email"}</div>
                        </div>
                    </div>

                    <div class="user-details">
                        <div class="detail-item"><div class="detail-label">Father Name</div><div class="detail-value">${user.fathername || "N/A"}</div></div>
                        <div class="detail-item"><div class="detail-label">Phone</div><div class="detail-value">${user.phonenumber || "N/A"}</div></div>
                        <div class="detail-item"><div class="detail-label">CNIC</div><div class="detail-value">${user.cnicnumber || "N/A"}</div></div>
                        <div class="detail-item"><div class="detail-label">Father CNIC</div><div class="detail-value">${user.fathercnic || "N/A"}</div></div>
                        <div class="detail-item"><div class="detail-label">Date of Birth</div><div class="detail-value">${user.dob || "N/A"}</div></div>
                        <div class="detail-item"><div class="detail-label">Address</div><div class="detail-value">${user.address || "N/A"}</div></div>
                    </div>

                    <div class="user-tags">
                        <span class="tag course">${user.course || "No Course"}</span>
                        <span class="tag country">${user.country || "No Country"}</span>
                        <span class="tag proficiency">${user.proficiency || "No Level"}</span>
                        <span class="tag gender">${user.gender || "No Gender"}</span>
                    </div>

                    <div class="card-actions">
                        <button class="btn-edit" data-id="${docId}">Edit</button>
                        <button class="btn-delete" data-id="${docId}">Delete</button>
                    </div>
                </div>
            `;

            usersGrid.innerHTML += userCard;
        });

        // Add event listeners
        bindCardActions();

    } catch (error) {
        console.error("Error fetching users:", error);
        noUsersState.style.display = "block";
        noUsersState.querySelector("h3").textContent = "Error loading users";
        noUsersState.querySelector("p").textContent = "Please try again later.";
    }
}

// Bind edit/delete button actions
function bindCardActions() {
    document.querySelectorAll(".btn-delete").forEach((btn) => {
        btn.addEventListener("click", async (e) => {
            const id = e.target.dataset.id;
            if (confirm("Are you sure you want to delete this user?")) {
                await deleteDoc(doc(db, "formfill", id));
                loadUsers();
            }
        });
    });

    document.querySelectorAll(".btn-edit").forEach((btn) => {
        btn.addEventListener("click", async (e) => {
            const id = e.target.dataset.id;
            const userRef = doc(db, "formfill", id);

            const updatedFields = {};
            const fields = [
                "name", "email", "fathername", "phonenumber",
                "cnicnumber", "fathercnic", "dob", "address",
                "course", "country", "proficiency", "gender"
            ];

            for (let field of fields) {
                const newValue = prompt(`Enter new value for ${field}:`);
                if (newValue !== null && newValue.trim() !== "") {
                    updatedFields[field] = newValue.trim();
                }
            }

            if (Object.keys(updatedFields).length > 0) {
                await updateDoc(userRef, updatedFields);
                loadUsers();
            }
        });
    });
}

// Load on page ready
document.addEventListener("DOMContentLoaded", loadUsers);
