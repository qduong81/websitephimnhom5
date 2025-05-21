
document.addEventListener('DOMContentLoaded', function() {
  const moviesRow = document.getElementById('movies-row');
  const movies = document.querySelectorAll('.movie');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const movieWidth = movies[0].offsetWidth;
  const gap = 15; // Khớp với gap trong CSS
  let currentPosition = 0;
  
  // Tính toán vị trí tối đa có thể cuộn
  const maxPosition = -(movies.length * (movieWidth + gap)) + moviesRow.offsetWidth;

  // Hàm cập nhật vị trí và trạng thái nút
  function updateCarousel() {
    moviesRow.style.transform = `translateX(${currentPosition}px)`;
    
    // Ẩn/hiện nút điều hướng khi ở đầu/cuối
    prevButton.style.visibility = currentPosition >= 0 ? 'hidden' : 'visible';
    nextButton.style.visibility = currentPosition <= maxPosition ? 'hidden' : 'visible';
  }

  // Xử lý sự kiện click nút
  prevButton.addEventListener('click', function() {
    if (currentPosition < 0) {
      currentPosition += movieWidth + gap;
      if (currentPosition > 0) currentPosition = 0;
      updateCarousel();
    }
  });

  nextButton.addEventListener('click', function() {
    if (currentPosition > maxPosition) {
      currentPosition -= movieWidth + gap;
      if (currentPosition < maxPosition) currentPosition = maxPosition;
      updateCarousel();
    }
  });

  // Khởi tạo ban đầu
  updateCarousel();
});





function showRanking(type) {
            // Hide all ranking lists
            document.querySelectorAll('.ranking-list').forEach(list => {
                list.classList.remove('active');
            });
            
            // Deactivate all tabs
            document.querySelectorAll('.ranking-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Show selected ranking and activate its tab
            document.getElementById(`${type}-ranking`).classList.add('active');
            event.target.classList.add('active');
        }


// thanh search o dien thoai
document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.querySelector(".search-toggle");
  const searchBar = document.getElementById("searchBar");

  searchBtn.addEventListener("click", function () {
    searchBar.classList.toggle("show");
  });
});




const moviesRow = document.getElementById('movies-row');
const movies = document.querySelectorAll('.movie');
const btnPrev = document.querySelector('.carousel-button.prev');
const btnNext = document.querySelector('.carousel-button.next');
let currentIndex = 0;

function getVisibleCount() {
  return window.innerWidth <= 600 ? 2 : 5;
}

function updateButtons() {
  const visibleCount = getVisibleCount();
  const maxIndex = movies.length - visibleCount;

  btnPrev.style.display = currentIndex === 0 ? 'none' : 'flex';
  btnNext.style.display = currentIndex >= maxIndex ? 'none' : 'flex';
}

function moveCarousel(direction) {
  const visibleCount = getVisibleCount();
  const maxIndex = movies.length - visibleCount;

  currentIndex += direction;

  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > maxIndex) currentIndex = maxIndex;

  const style = getComputedStyle(movies[0]);
  const width = movies[0].offsetWidth;
  const gap = parseInt(style.marginRight) || 15;

  const moveDistance = (width + gap) * currentIndex;
  moviesRow.style.transform = `translateX(-${moveDistance}px)`;

  updateButtons();
}

// Reset vị trí khi resize và cập nhật nút bấm
window.addEventListener('resize', () => {
  currentIndex = 0;
  moviesRow.style.transform = 'translateX(0)';
  updateButtons();
});

// Khởi tạo lần đầu
updateButtons();



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







