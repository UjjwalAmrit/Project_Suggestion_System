document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!username || !name || !email || !password || !confirmPassword) {
        alert("All fields are required except GitHub link!");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    alert("Account created successfully!");
    // Implement backend logic here
});

document.getElementById("cancelButton").addEventListener("click", function () {
    if (confirm("Are you sure you want to cancel?")) {
        window.location.href = "index.html"; // Redirect to another page if necessary
    }
});
