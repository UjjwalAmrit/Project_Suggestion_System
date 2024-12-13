document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        alert("Logged in successfully!");
        // Add backend integration here
    } else {
        alert("Please fill in all fields.");
    }
});

document.getElementById("createAccountLink").addEventListener("click", function (e) {
    e.preventDefault();
    alert("Redirecting to Sign-Up page...");
    // Implement signup redirection logic
});
