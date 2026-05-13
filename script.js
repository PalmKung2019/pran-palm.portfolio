const portfolioWorks = [
  // --- งานเดิมของคุณ ---
  {
    name: "Savor Happiness",
    category: "Thesis Project",
    tags: "Editorial / Layout / Branding",
    desc: "โปรเจกต์จบการศึกษา หนังสือไกด์บุ๊ก 126 หน้า แนะนำคาเฟ่และร้านอาหาร 20 แห่ง พร้อมการวาง Layout ที่เน้นความสบายตา",
    img: "image/SavorHappiness-Cover.webp",
  },
  {
    name: "Cafe Photography",
    category: "Photography",
    tags: "Nikon D5200 / Lighting / Retouch",
    desc: "ชุดภาพถ่ายคาเฟ่ที่ใช้ในโปรเจกต์ Thesis เน้นการจับแสงธรรมชาติและการจัดองค์ประกอบเพื่อเล่าเรื่อง",
    img: "image/photo2.webp",
  },
  {
    name: "Lolphine Café",
    category: "Branding",
    tags: "Logo Design / Identity",
    desc: "งานออกแบบอัตลักษณ์แบรนด์คาเฟ่จำลอง รวมถึงการออกแบบมาสคอตและสื่อสิ่งพิมพ์",
    img: "image/LolphineCaféLogo.webp",
  },
  {
    name: "Character Illustration",
    category: "Illustration",
    tags: "Character Design / Digital Art",
    desc: "รวมงานวาดภาพประกอบและออกแบบตัวละครในสไตล์ดิจิทัลพ่นสี",
    img: "image/Character-1.webp",
  },

  // --- งานชุดใหม่ 6 ภาพ ---
  {
    name: "Joonner My - Content Creation",
    category: "Social Media",
    tags: "Brand Admin / Graphic Design",
    desc: "งานออกแบบกราฟิกและอาร์ตเวิร์กโปรโมทสำหรับแบรนด์ Joonner My ในส่วนของการจัดการคอนเทนต์หน้าเพจ",
    img: "image/image_3a3e7b.webp",
  },
  {
    name: "Joonner My - Brand Artwork",
    category: "Social Media",
    tags: "Digital Content / Layout",
    desc: "การจัดวางองค์ประกอบภาพและข้อความ เพื่อสื่อสารเอกลักษณ์ของแบรนด์ Joonner My ให้เข้าถึงกลุ่มเป้าหมาย",
    img: "image/image_3a3e58.webp",
  },
];

function renderPortfolio() {
  const grid = document.getElementById("portfolioGrid");
  if (!grid) return;

  grid.innerHTML = "";
  portfolioWorks.forEach((work) => {
    const card = document.createElement("div");
    card.className = "news-card";
    card.innerHTML = `
            <div class="news-image-wrapper">
                <img src="${work.img}" alt="${work.name}">
                <span class="news-badge">${work.category}</span>
            </div>
            <div class="news-content">
                <h3>${work.name}</h3>
                <p>${work.desc}</p>
                <small style="color:var(--accent-color); display:block; margin-top:10px; font-weight:600;">${work.tags}</small>
            </div>
        `;
    grid.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Initial Swiper
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  renderPortfolio();
});
