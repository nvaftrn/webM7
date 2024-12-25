document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "123") {
        alert("Login Sukses");
        window.location.href = "index.html"; // Redirect to index.html
    } else {
        alert("Login Gagal");
        window.location.href = "Login.html"; // Redirect back to Login.html
    }
});