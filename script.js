const portfolioWorks = [
    // --- งานหลัก (Highlight Projects) ---
    {
        name: "Savor Happiness",
        category: "Thesis Project",
        tags: "Editorial / Layout / Branding",
        desc: "โปรเจกต์จบการศึกษา หนังสือไกด์บุ๊ก 126 หน้า แนะนำคาเฟ่และร้านอาหาร 20 แห่ง พร้อมการวาง Layout ที่เน้นความสบายตา",
        img: "image/SavorHappiness-Cover.jpg"
    },
    {
        name: "My Professional Resume",
        category: "CV / Profile",
        tags: "Experience / Skills / Education",
        desc: "รายละเอียดประวัติการทำงาน ทักษะด้านการออกแบบ และประวัติการศึกษาโดยย่อ",
        img: "image/Resume-Pran-2025.png"
    },

    // --- งานเซ็ตใหม่ 6 ภาพ (New Additions) ---
    {
        name: "Joonner My - Content Creation",
        category: "Social Media",
        tags: "Brand Admin / Graphic Design",
        desc: "งานออกแบบกราฟิกและอาร์ตเวิร์กโปรโมทสำหรับแบรนด์ Joonner My ในส่วนของการจัดการคอนเทนต์หน้าเพจ",
        img: "image/image_3a3e7b.png"
    },
    {
        name: "Joonner My - Brand Artwork",
        category: "Social Media",
        tags: "Digital Content / Layout",
        desc: "การจัดวางองค์ประกอบภาพและข้อความ เพื่อสื่อสารเอกลักษณ์ของแบรนด์ Joonner My ให้เข้าถึงกลุ่มเป้าหมาย",
        img: "image/image_3a3e58.png"
    },
    {
        name: "Fairy Tale Milk Bar",
        category: "Photography",
        tags: "Nikon D5200 / Cafe Vibes",
        desc: "ภาพถ่ายบรรยากาศและการตกแต่งภายในร้าน Fairy Tale Milk Bar หนึ่งในร้านไฮไลต์จากโปรเจกต์เล่ม Thesis",
        img: "image/image_3a3b56.jpg"
    },
    {
        name: "Americano Pineapple",
        category: "Photography",
        tags: "Beverage / Retouch",
        desc: "งานถ่ายภาพเมนูเครื่องดื่ม Americano Pineapple โดยเน้นการดึงสีสันและ Mood & Tone ให้ดูสดชื่นน่าทาน",
        img: "image/image_3a3b32.jpg"
    },
    {
        name: "Cafe Hopping Vibe",
        category: "Photography",
        tags: "Lifestyle / Lighting",
        desc: "ภาพถ่ายไลฟ์สไตล์การดื่มกาแฟ เน้นการใช้แสงธรรมชาติเพื่อสร้างความรู้สึกอบอุ่นและผ่อนคลาย",
        img: "image/image_3a3af9.jpg"
    },
    {
        name: "Creative Lighting Setup",
        category: "Photography",
        tags: "Studio / Equipment",
        desc: "ผลงานการทดลองจัดแสงและเงาเพื่อสร้างมิติให้กับภาพถ่าย โดยใช้อุปกรณ์กล้อง DSLR และเลนส์เฉพาะทาง",
        img: "image/image_3a3ad4.jpg"
    }
];

// โค้ดส่วน renderPortfolio() ด้านล่างยังคงใช้ของเดิมได้เลยครับ
function renderPortfolio() {
    const grid = document.getElementById('portfolioGrid');
    if (!grid) return;
    
    grid.innerHTML = "";
    portfolioWorks.forEach(work => {
        const card = document.createElement('div');
        card.className = 'news-card';
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
