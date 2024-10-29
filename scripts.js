// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiKqa0d1QHR4CmIw6gwGGqcDFw2lTxZr8",
  authDomain: "foodieblog-4747a.firebaseapp.com",
  databaseURL: "https://foodieblog-4747a-default-rtdb.firebaseio.com",
  projectId: "foodieblog-4747a",
  storageBucket: "foodieblog-4747a.appspot.com",
  messagingSenderId: "807471016720",
  appId: "1:807471016720:web:d97964f188a984d25a9395",
  measurementId: "G-6GXWZSNHD2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Signup Function
const signupForm = document.getElementById("signup-form");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.querySelector('input[name="name"]').value; // Capture name
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Get user information
        const user = userCredential.user;
        
        // Save user data to the database
        set(ref(database, 'users/' + user.uid), {
          username: name,
          email: email,
          // Add more fields if needed
        }).then(() => {
          // Redirect to the home page
          window.location.href = "index.html";
        }).catch((error) => {
          console.error("Error saving user data:", error.message);
          alert("Error saving user data: " + error.message);
        });
      })
      .catch((error) => {
        console.error("Signup failed", error.message);
        alert("Signup failed: " + error.message);
      });
  });
}

// Login Function
const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Redirect to the home page
        window.location.href = "index.html";
      })
      .catch((error) => {
        console.error("Login failed", error.message);
        alert("Login failed: " + error.message);
      });
  });
}

