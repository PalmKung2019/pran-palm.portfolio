const portfolioWorks = [
  {
    name: "Savor Happiness (Thesis)",
    category: "Editorial Design",
    tags: "Layout / Branding / InDesign",
    desc: "หนังสือไกด์บุ๊ก 126 หน้า แนะนำคาเฟ่ 20 แห่ง",
    img: "image/SavorHappiness_cover.webp",
    link: "https://savor-happiness-guide.pages.dev/",
    gallery: [
      "image/SavorHappiness-Cover.webp",
      "image/SavorHappiness-Back.webp",
      "image/SavorHappiness-Book_Mockup.webp",
      "image/SavorHappiness-Inside1.webp",
      "image/SavorHappiness-Inside2.webp",
      "image/SavorHappiness-AllMerch.webp",
      "image/SavorHappiness-collage-small.webp",
      "image/SavorHappiness-Sticker1.webp",
      "image/SavorHappiness-Postcards.webp",
      "image/SavorHappiness-PostcardMinburi.webp",
      "image/SavorHappiness-PostcardNongchok.webp",
      "image/SavorHappiness-Mug_Mockup_1.webp",
      "image/SavorHappiness-Mug_Mockup_2.webp",
      "image/SavorHappiness-Fashion.webp",
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
    let linkHtml = "";
    if (work.link) {
      linkHtml = `
        <a href="${work.link}" target="_blank" class="project-link-btn visit-btn" onclick="event.stopPropagation()">
          <i class="fa-solid fa-globe"></i>&nbsp; Visit Website
        </a>
      `;
    }

    const card = document.createElement("div");
    card.className = "news-card reveal";
    card.style.cursor = "pointer";
    card.onclick = () => openModal(work.gallery, work.name);
    card.innerHTML = `
      <div class="news-image-wrapper">
        <img src="${work.img}" alt="${work.name}" loading="lazy">
        <span class="news-badge">${work.category}</span>
      </div>
      <div class="news-content">
        <h3>${work.name}</h3>
        <p>${work.desc}</p>
        <div style="margin-top:auto;">
            ${linkHtml}
            <small style="color:var(--accent-blue,#0071e3); font-weight:600; display:block; margin-top:10px;">
              <i class="fa-solid fa-images"></i> ดูรูปเพิ่มเติม (${work.gallery.length} รูป)
            </small>
        </div>
      </div>
    `;
    // Mouse-tracking shimmer micro-interaction
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mx', x + '%');
      card.style.setProperty('--my', y + '%');
    });
    grid.appendChild(card);
  });
}

function openModal(images, title) {
  currentImages = images;
  currentIndex = 0;
  currentTitle = title;
  const modal = document.getElementById("imageModal");
  modal.style.display = "flex";
  document.body.style.overflow = "hidden"; // Prevent background scroll
  updateModal();
}

function updateModal() {
  document.getElementById("expandedImg").src = currentImages[currentIndex];
  document.getElementById("modalTitle").innerText = currentTitle;
  document.getElementById("modalCount").innerText =
    `Image ${currentIndex + 1} of ${currentImages.length}`;
}

document.getElementById("nextImg").onclick = (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % currentImages.length;
  updateModal();
};

document.getElementById("prevImg").onclick = (e) => {
  e.stopPropagation();
  currentIndex =
    (currentIndex - 1 + currentImages.length) % currentImages.length;
  updateModal();
};

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
  document.body.style.overflow = "auto";
}

document.getElementById("closeModal").onclick = closeModal;

// UX: Close modal on background click
window.onclick = function(event) {
  const modal = document.getElementById("imageModal");
  const navLinks = document.getElementById("mobile-menu").nextElementSibling;
  
  if (event.target == modal) {
    closeModal();
  }
  
  // Close mobile menu if clicked outside
  if (!event.target.closest('.navbar')) {
      navLinks.classList.remove('active');
  }
};

// Mobile Menu Toggle
document.getElementById("mobile-menu").onclick = function() {
    this.nextElementSibling.classList.toggle('active');
};

document.addEventListener("DOMContentLoaded", () => {
  if (typeof Swiper !== 'undefined') {
    new Swiper(".mySwiper", {
      loop: true,
      autoplay: { delay: 5000 },
      pagination: { el: ".swiper-pagination", clickable: true },
    });
  }
  renderPortfolio();

  // ── Scroll-Reveal (IntersectionObserver) ──
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  // Observe static reveal elements
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // Observe dynamically-added cards with staggered delay
  const grid = document.getElementById('portfolioGrid');
  if (grid) {
    const cards = grid.querySelectorAll('.news-card');
    cards.forEach((card, i) => {
      card.style.transitionDelay = (i * 0.08) + 's';
      revealObserver.observe(card);
    });
  }

  // ── Add reveal class to static sections ──
  document.querySelectorAll(
    '.news-header, .resume-wrapper, .product-container, .vw-footer'
  ).forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });
});
