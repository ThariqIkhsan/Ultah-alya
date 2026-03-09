// login page scripts
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  validateForm();
});

function validateForm() {
  var username = document.getElementById("username").value.trim();
  var password = document.getElementById("password").valuetrim();

  if (username === "THARIQ IKHSAN" && password === "15 AGUSTUS 2002") {
    Swal.fire({
      icon: "success",
      title: "Login berhasil!",
      text: "Welcome Bogel",
      showConfirmButton: false,
      timer: 1500,
    }).then(function () {
      window.location.href = "./birthday.html";
    });
    
  } else {
    Swal.fire({
      icon: "error",
      title: "Login gagal!",
      text: "KOK BISA SALAH, DODOL 🤬",
      confirmButtonText: "Coba lagi",
      confirmButtonColor: "#ff7675",
    });
  }
}}
