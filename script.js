let currentPage = 1;

// إنشاء القلوب والـ Kitties
function createHearts() {
    const container = document.getElementById('heartsBg');
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '💙';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 7000);
    }, 300);
}

function createKitties() {
    const container = document.getElementById('kittysBg');
    
    setInterval(() => {
        const kitty = document.createElement('div');
        kitty.className = 'kitty';
        kitty.textContent = '😸';
        kitty.style.left = Math.random() * 100 + '%';
        kitty.style.animationDuration = (Math.random() * 4 + 5) + 's';
        
        container.appendChild(kitty);
        setTimeout(() => kitty.remove(), 9000);
    }, 500);
}

// الانتقال بين الصفحات
function goToPage(pageNum) {
    const page = document.getElementById(`page${currentPage}`);
    page.classList.remove('active');
    
    currentPage = pageNum;
    const nextPage = document.getElementById(`page${currentPage}`);
    nextPage.classList.add('active');
}

// الإجابة على السؤال
function answer(choice) {
    goToPage(3);
}

// اضغط على أي مكان في الصفحة الأولى للانتقال
document.addEventListener('DOMContentLoaded', () => {
    const page1 = document.getElementById('page1');
    
    page1.addEventListener('click', () => {
        goToPage(2);
    });
    
    // ابدأ القلوب والـ Kitties
    createHearts();
    createKitties();
});
