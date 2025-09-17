document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.querySelector('.card-container');
    const confettiContainer = document.querySelector('.confetti-container');
    const pages = document.querySelectorAll('.card-page');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentPageIndex = 0;

    // Card Opening Logic
    cardContainer.addEventListener('click', () => {
        // Only open the card if it's not already open
        if (!cardContainer.classList.contains('open')) {
            cardContainer.classList.add('open');
            startConfetti();
        }
    });

    // Navigation Buttons Logic
    nextBtn.addEventListener('click', (e) => {
        // Prevent card from re-closing
        e.stopPropagation(); 
        
        if (currentPageIndex < pages.length - 1) {
            pages[currentPageIndex].classList.remove('active');
            currentPageIndex++;
            pages[currentPageIndex].classList.add('active');
            updateNavButtons();
        }
    });

    prevBtn.addEventListener('click', (e) => {
        // Prevent card from re-closing
        e.stopPropagation();

        if (currentPageIndex > 0) {
            pages[currentPageIndex].classList.remove('active');
            currentPageIndex--;
            pages[currentPageIndex].classList.add('active');
            updateNavButtons();
        }
    });

    function updateNavButtons() {
        prevBtn.disabled = currentPageIndex === 0;
        nextBtn.disabled = currentPageIndex === pages.length - 1;
    }

    // Confetti Function (unchanged)
    function startConfetti() {
        const colors = ['#e94e77', '#f19e38', '#4CAF50', '#00bcd4', '#9c27b0'];
        confettiContainer.innerHTML = '';
        
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = `${Math.random() * 5}s`;
            confetti.style.animationDuration = `${5 + Math.random() * 3}s`;
            confettiContainer.appendChild(confetti);
        }
    }
});
