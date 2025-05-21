function toggleSidebar() {
    document.getElementById("sidebar").classList.add("open");
    document.getElementById("overlay").classList.add("active");
  }

  function closeSidebar() {
    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("overlay").classList.remove("active");

    // Ẩn tất cả submenu khi đóng
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





function toggleSearchBar() {
  const searchBar = document.getElementById("searchBar");
  searchBar.classList.toggle("active");
}

// Hàm tìm kiếm phim
function timKiemPhim() {
  const input = document.getElementById("search");
  const keyword = input.value.trim().toLowerCase();

  const phimMap = {
    "lãnh địa tử chiến": "lanhdiatuchien.html",
    "mobland": "lanhdiatuchien.html",
    "minions": "minions.html",
    "minion":"minions.html",
    "quả quýt": "whenlifegive.html",
    "khi cuộc đời cho bạn quả quýt": "whenlifegive.html",
    "nàng bạch tuyết": "snowwhite.html",
    "snow white": "snowwhite.html",
    "bạch tuyết": "snowwhite.html",
    "titan": "attacktitan.html",
    "attack on titan": "attacktitan.html",
    "người khổng lồ": "attacktitan.html",
    "cửu long thành trại": "cuulongtrai.html",
    "thành trại": "cuulongtrai.html",
    "avatar 2": "avatar2.html",
    "avatar": "avatar2.html",
    "mỹ nhân ngư": "mynhanngu.html",
    "the mermaid": "mynhanngu.html",
    "người cá": "mynhanngu.html",
    "một chén say tình": "motchensay.html",
    "second shot at love": "motchensay.html",
    "yêu nhầm bạn thân": "yeunhambanthan.html",
    "yêu nhầm": "yeunhambanthan.html",
    "bạn thân": "yeunhambanthan.html",
    "friend zone": "yeunhambanthan.html",
    "mật vụ phụ hồ": "matvuphuho.html",
    "a working man": "matvuphuho.html",
    "phụ hồ": "matvuphuho.html",
    "lật mặt": "latmat8.html",
    "lật mặt 8": "latmat8.html",
    "face off 8": "latmat8.html",
    "thợ săn hoang mạc": "tshoangmac.html",
    "thợ săn": "tshoangmac.html",
    "badland hunters": "tshoangmac.html",
    "siêu lừa gặp siêu lầy": "sieuluasieulay.html",
    "siêu lừa": "sieuluasieulay.html",
    "siêu lầy": "sieuluasieulay.html",
    "đầu gấu học nhóm": "daugauhocnhom.html",
    "study group": "daugauhocnhom.html",
    "mắt biếc": "matbiec.html",
    "dreamy eyes": "matbiec.html",
    "quá nhanh quá nguy hiểm": "quanhanhquanguyhiem.html",
    "quá nhanh": "quanhanhquanguyhiem.html",
    "fast and furious": "quanhanhquanguyhiem.html",
    "minecraft": "minecraft.html",
    "a minecraft movie": "minecraft.html",
    "điều kì diệu phòng giam số 7": "phonggiam7.html",
    "điều kì diệu": "phonggiam7.html",
    "number 7 room's gift": "phonggiam7.html",
    "phòng giam": "phonggiam7.html",
    "dưa hấu": "duhau.html",

    
    // Thêm phim khác nếu cần
  };

  if (phimMap[keyword]) {
    window.location.href = phimMap[keyword];
  } else {
    alert("Không tìm thấy phim: " + keyword);
  }
}

// Gán sự kiện khi ấn phím Enter
document.getElementById("search").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    timKiemPhim();
  }
});

// Gán sự kiện click cho biểu tượng tìm kiếm
document.querySelector(".search-bar .fas.fa-search").addEventListener("click", function() {
  timKiemPhim();
});