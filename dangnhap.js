
document.addEventListener("DOMContentLoaded", function () {
  const eyeIcon = document.getElementById("eye");
  const passwordInput = document.querySelector(".form-input[type='password']");

  eyeIcon.addEventListener("click", function () {
    const icon = this.querySelector("i");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
    } else {
      passwordInput.type = "password";
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    }
  });

  // Xử lý sự kiện khi ấn nút "Đăng nhập"
  const form = document.getElementById("form-login");
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Ngăn reload trang

    const username = form.querySelector("input[type='text']").value.trim();
    const password = form.querySelector("input[type='password']").value.trim();

    if (!username || !password) {
      alert("Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu.");
    } else {
      alert("Bạn đã đăng nhập thành công!");
      window.location.href = "index.html"; // Chuyển về trang chủ
    }
  });
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