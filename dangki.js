// Bật/tắt hiển thị mật khẩu
document.querySelectorAll(".eye").forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
        const input = eyeIcon.previousElementSibling;
        if (input.type === "password") {
            input.type = "text";
            eyeIcon.innerHTML = '<i class="far fa-eye-slash"></i>';
        } else {
            input.type = "password";
            eyeIcon.innerHTML = '<i class="far fa-eye"></i>';
        }
    });
});

// Xử lý submit form
document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const email = document.getElementById("email").value.trim();

    if (!username || !password || !confirmPassword) {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }

    if (password !== confirmPassword) {
        document.getElementById("passwordError").textContent = "Mật khẩu không khớp!";
        return;
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    alert("Bạn đã đăng ký thành công!");
    window.location.href = "index.html";
});







function toggleSidebar() {
    document.getElementById("sidebar").classList.add("open");
    document.getElementById("overlay").classList.add("active");
  }

  function closeSidebar() {
    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("overlay").classList.remove("active");

    document.querySelectorAll(".submenu").forEach(el => el.classList.remove("open"));
  }

  function toggleSubmenu(id) {
    const submenu = document.getElementById("submenu-" + id);
    const plus = document.getElementById("plus-" + id);
    const isOpen = submenu.style.display === "block";

    submenu.style.display = isOpen ? "none" : "block";
    plus.textContent = isOpen ? "+" : "–";
  }
  


  function toggleSearchBar() {
    var searchBar = document.getElementById("searchBar");
    searchBar.classList.toggle("show");
  }