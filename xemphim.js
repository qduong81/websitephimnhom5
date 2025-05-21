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
const episodes = {
    1: {
      title: "Dưa hấu lấp lánh - Tập 1",
      subtitle: "Twinkling Watermelon(2025)",
      description: "Một học sinh CODA (con của người lớn khiếm thính) sinh ra với năng khiếu về âm nhạc đã hạ cánh xuống một nơi xa lạ sau một thời gian du hành qua một cửa hàng âm nhạc đáng ngờ. Tại đây, anh thành lập ban nhạc Watermelon Sugar cùng với những thanh niên bí ẩn khác."
    },
    2: {
      title: "Dưa hấu lấp lánh - Tập 2",
      subtitle: "Twinkling Watermelon(2025)",
      description: "Cậu ấy bắt đầu hiểu rõ hơn về mối quan hệ giữa cha mẹ và chính mình, đồng thời đối mặt với thử thách từ quá khứ."
    },
    3: {
      title: "Dưa hấu lấp lánh - Tập 3",
      subtitle: "Twinkling Watermelon(2025)",
      description: "Tập này giới thiệu thêm các nhân vật phụ và mở ra mối tình đầu đầy cảm xúc."
    }
    
  };

  function changeEpisode(ep) {
    // Cập nhật text
    document.getElementById("episodeTitle").textContent = episodes[ep]?.title || `Dưa hấu lấp lánh - Tập ${ep}`;
    document.getElementById("episodeSubtitle").textContent = episodes[ep]?.subtitle || "Twinkling Watermelon(2025)";
    document.getElementById("episodeDescription").textContent = episodes[ep]?.description || "Nội dung đang cập nhật...";

    // Đổi class active
    const buttons = document.querySelectorAll(".epi button");
    buttons.forEach(btn => btn.classList.remove("active"));
    buttons[ep - 1].classList.add("active");
  }
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







function toggleSearchBar() {
  const searchBar = document.getElementById("searchBar");
  searchBar.classList.toggle("active");
}


 function toggleSearchBar() {
    var searchBar = document.getElementById("searchBar");
    searchBar.classList.toggle("show");
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