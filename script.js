let currentPageNum = 1;

// الانتقال للصفحة التالية
function nextPage() {
    const currentPage = document.getElementById(`page${currentPageNum}`);
    currentPage.classList.remove('active-page');
    
    currentPageNum++;
    const nextPage = document.getElementById(`page${currentPageNum}`);
    nextPage.classList.add('active-page');
}

// ابدأ عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    // اضغط أي مكان للانتقال
    document.addEventListener('click', () => {
        if (currentPageNum < 3) {
            nextPage();
        }
    });
});
