document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    if (username === "" || password === "") {
        message.textContent = "Username dan Password tidak boleh kosong.";
        message.style.color = "red";
    } else if (username === "admin" && password === "1234") {
        message.textContent = "Login berhasil.";
        message.style.color = "green";
    } else {
        message.textContent = "Username atau Password salah.";
        message.style.color = "red";
    }
});
