let currentPage = 1;

function nextPage() {
    const page = document.getElementById(`page${currentPage}`);
    page.classList.remove('active');
    
    currentPage++;
    const nextPageEl = document.getElementById(`page${currentPage}`);
    nextPageEl.classList.add('active');
}

function showHearts() {
    document.getElementById('page2').classList.remove('active');
    document.getElementById('page3').classList.add('active');
    
    createHearts();
}

function createHearts() {
    const container = document.getElementById('heartsContainer');
    container.innerHTML = '';
    
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '💙';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(heart);
    }
}
