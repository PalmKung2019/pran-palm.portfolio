const portfolioWorks = [
  {
    name: "Savor Happiness (Thesis)",
    category: "Editorial Design",
    tags: "Layout / Branding / InDesign",
    desc: "หนังสือไกด์บุ๊ก 126 หน้า แนะนำคาเฟ่ 20 แห่ง",
    img: "image/SavorHappiness-Cover.webp",
    gallery: [
      "image/SavorHappiness-Cover.webp",
      "image/SavorHappiness-Back.webp",
      "image/Savor-Happiness-Logo.webp",
    ],
  },
  {
    name: "Cafe Photography",
    category: "Photography",
    tags: "Nikon D5200 / Visual Story",
    desc: "รวมผลงานถ่ายภาพคาเฟ่ที่เน้นแสงเงาและบรรยากาศจริง",
    img: "image/photo1.webp",
    gallery: [
      "image/photo1.webp",
      "image/photo2.webp",
      "image/photo3.webp",
      "image/photo4.webp",
      "image/photo5.webp",
    ],
  },
  {
    name: "Content Trends",
    category: "Social Media",
    tags: "Digital Art / Marketing",
    desc: "งานดีไซน์คอนเทนต์และอาร์ตเวิร์กตามกระแสโซเชียล",
    img: "image/trend1.webp",
    gallery: [
      "image/trend1.webp",
      "image/trend2.webp",
      "image/trend3.webp",
      "image/trend4.webp",
      "image/trend5.webp",
      "image/trend6.webp",
      "image/trend7.webp",
      "image/trend8.webp",
    ],
  },
  {
    name: "Lolphine Café Branding",
    category: "Commercial Arts",
    tags: "Character / Logo Design",
    desc: "ออกแบบอัตลักษณ์แบรนด์และมาสคอตสำหรับธุรกิจคาเฟ่",
    img: "image/LolphineCaféLogo.webp",
    gallery: ["image/LolphineCaféLogo.webp", "image/LolphineCafé.webp"],
  },
  {
    name: "Character Design",
    category: "Illustration",
    tags: "Digital Paint / Character",
    desc: "งานวาดภาพประกอบตัวละครสไตล์ดิจิทัลอาร์ต",
    img: "image/Character-1.webp",
    gallery: ["image/Character-1.webp", "image/Character-2.webp"],
  },
];

let currentImages = [];
let currentIndex = 0;
let currentTitle = "";

function renderPortfolio() {
  const grid = document.getElementById("portfolioGrid");
  if (!grid) return;
  grid.innerHTML = "";
  portfolioWorks.forEach((work) => {
    const card = document.createElement("div");
    card.className = "news-card";
    card.style.cursor = "pointer";
    card.onclick = () => openModal(work.gallery, work.name);
    card.innerHTML = `
      <div class="news-image-wrapper">
        <img src="${work.img}" alt="${work.name}">
        <span class="news-badge">${work.category}</span>
      </div>
      <div class="news-content">
        <h3>${work.name}</h3>
        <p>${work.desc}</p>
        <small style="color:var(--accent-color); font-weight:600; display:block; margin-top:10px;">
          <i class="fa-solid fa-images"></i> ดูรูปเพิ่มเติม (${work.gallery.length} รูป)
        </small>
      </div>
    `;
    grid.appendChild(card);
  });
}

function openModal(images, title) {
  currentImages = images;
  currentIndex = 0;
  currentTitle = title;
  document.getElementById("imageModal").style.display = "flex";
  updateModal();
}

function updateModal() {
  document.getElementById("expandedImg").src = currentImages[currentIndex];
  document.getElementById("modalTitle").innerText = currentTitle;
  document.getElementById("modalCount").innerText =
    `Image ${currentIndex + 1} of ${currentImages.length}`;
}

document.getElementById("nextImg").onclick = () => {
  currentIndex = (currentIndex + 1) % currentImages.length;
  updateModal();
};

document.getElementById("prevImg").onclick = () => {
  currentIndex =
    (currentIndex - 1 + currentImages.length) % currentImages.length;
  updateModal();
};

document.getElementById("closeModal").onclick = () => {
  document.getElementById("imageModal").style.display = "none";
};

document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".mySwiper", {
    loop: true,
    pagination: { el: ".swiper-pagination", clickable: true },
  });
  renderPortfolio();
});
