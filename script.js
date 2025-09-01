// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
});

// Countdown functionality
const countdown = () => {
    const endDate = new Date("May 15, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const diff = endDate - now;

    if (diff <= 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Update all countdown elements
    const dayElements = document.querySelectorAll('[data-countdown="days"]');
    const hourElements = document.querySelectorAll('[data-countdown="hours"]');
    const minuteElements = document.querySelectorAll('[data-countdown="minutes"]');
    const secondElements = document.querySelectorAll('[data-countdown="seconds"]');

    dayElements.forEach(el => el.innerText = String(days).padStart(2, '0'));
    hourElements.forEach(el => el.innerText = String(hours).padStart(2, '0'));
    minuteElements.forEach(el => el.innerText = String(minutes).padStart(2, '0'));
    secondElements.forEach(el => el.innerText = String(seconds).padStart(2, '0'));
};

setInterval(countdown, 1000);
countdown(); // Run immediately