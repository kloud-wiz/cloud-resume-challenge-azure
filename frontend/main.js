
// DOM READY SAFETY
document.addEventListener('DOMContentLoaded', () => {
    
    //THEME TOGGLE SCRIPT

    // Theme toggle functionality with localStorage persistence
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        html.classList.toggle('dark', savedTheme === 'dark');
    } else {
        // Default to dark mode
        html.classList.add('dark');
    }
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        const isDark = html.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // Mobile menu toggle functionality
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    mobileMenuToggle.addEventListener('click', () => {
        const isOpen = !mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden');
        hamburgerIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
        mobileMenuToggle.setAttribute('aria-expanded', !isOpen);
    });

    // Close mobile menu when a link is clicked
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            hamburgerIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
        });
    });


    // AUTO-UPDATE COPYRIGHT YEAR
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

});

 // TYPING ANIMATION
function typeLoop(element, text, speed = 80, pause = 4500) {
    let i = 0;
    let deleting = false;

    function tick() {
        if (!deleting) {
            element.textContent = text.slice(0, i + 1);
            i++;
            if (i === text.length) {
                deleting = true;
                setTimeout(tick, pause);
                return;
            }
        } else {
            element.textContent = text.slice(0, i - 1);
            i--;
            if (i === 0) {
                deleting = false;
                setTimeout(tick, 400);
                return;
            }
        }
        setTimeout(tick, deleting ? speed / 2 : speed);
    }

    tick();
}

const typingEl = document.querySelector('.typing-target');
if (typingEl) {
    const text = typingEl.textContent.trim();
    typingEl.textContent = '';
    typeLoop(typingEl, text);
}
