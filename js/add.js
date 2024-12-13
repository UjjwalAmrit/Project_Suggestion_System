document.getElementById("contributeForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const projectTitle = document.getElementById("projectTitle").value.trim();
    const technologyUsed = document.getElementById("technologyUsed").value.trim();
    const difficultyLevel = document.getElementById("difficultyLevel").value;
    const description = document.getElementById("description").value.trim();
    const githubLink = document.getElementById("githubLink").value.trim();
    const isPaid = document.getElementById("isPaid").checked;

    if (!projectTitle || !technologyUsed || !difficultyLevel || !description || !githubLink) {
        alert("Please fill all the fields.");
        return;
    }

    alert(`Project Submitted:
    - Title: ${projectTitle}
    - Technology: ${technologyUsed}
    - Difficulty: ${difficultyLevel}
    - Paid: ${isPaid ? "Yes" : "No"}`);
});
