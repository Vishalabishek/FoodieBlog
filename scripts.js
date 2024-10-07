// Toggle Dark Mode
const toggleSwitch = document.getElementById('theme-toggle');
if (toggleSwitch) {
  toggleSwitch.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
  });
}

// Character Count for Post Form
const postTextarea = document.querySelector('textarea[name="content"]');
const charCount = document.getElementById('char-count');

if (postTextarea) {
  postTextarea.addEventListener('input', function() {
    const currentLength = postTextarea.value.length;
    charCount.textContent = `${currentLength}/500 characters`;

    if (currentLength > 500) {
      charCount.style.color = 'red';
    } else {
      charCount.style.color = 'black';
    }
  });
}

// Post Form Submission
if (document.getElementById('post-form')) {
  document.getElementById('post-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.querySelector('input[name="title"]').value;
    const content = document.querySelector('textarea[name="content"]').value;

    if (content.length > 500) {
      alert("Content exceeds the 500 character limit!");
    } else {
      alert(`Post submitted!\nTitle: ${title}\nContent: ${content}`);
      // Here, you can add functionality to save the post to a database
    }
  });
}

// Comment Form Submission
if (document.getElementById('comment-form')) {
  document.getElementById('comment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const comment = document.querySelector('textarea[name="comment"]').value;

    alert(`Comment submitted!\nComment: ${comment}`);
    // Here, you can add functionality to save the comment to a database
  });
}

// Login Form Submission
if (document.getElementById('login-form')) {
  document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission for this demo

    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    alert(`Logged in with email: ${email}`);
    // Here, you can add functionality for user authentication
  });
}

// Signup Form Submission
if (document.getElementById('signup-form')) {
  document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission for this demo

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    alert(`Signed up successfully!\nName: ${name}\nEmail: ${email}`);
    // Here, you can add functionality to save the user data to a database
  });
}
 
 