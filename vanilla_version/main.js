// ==========================================================================
// SCROLL ANIMATIONS (Reveal on Scroll)
// ==========================================================================

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 
};

// Create the Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

// Observe all fade elements when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const hiddenElements = document.querySelectorAll('.fade-up, .fade-left, .fade-right');
    hiddenElements.forEach((el) => observer.observe(el));
});


// ==========================================================================
// DYNAMIC NAVBAR
// ==========================================================================

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// ==========================================================================
// MOBILE MENU TOGGLE
// ==========================================================================

const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const navCta = document.querySelector('.nav-cta');
const menuIcon = menuToggle.querySelector('i');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if (navCta) navCta.classList.toggle('active');
    
    // Switch icon between Menu and X
    if(navLinks.classList.contains('active')) {
        menuIcon.classList.remove('bx-menu');
        menuIcon.classList.add('bx-x');
    } else {
        menuIcon.classList.remove('bx-x');
        menuIcon.classList.add('bx-menu');
    }
});

// Close mobile menu when a link is clicked
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        if (navCta) navCta.classList.remove('active');
        menuIcon.classList.remove('bx-x');
        menuIcon.classList.add('bx-menu');
    });
});


// ==========================================================================
// HERO PARALLAX & CURSOR TRACKING
// ==========================================================================

const hero = document.getElementById('home');

if (hero) {
    hero.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = hero.getBoundingClientRect();
        
        // Calculate center-relative position (-0.5 to 0.5)
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;
        
        // Update CSS variables for parallax (pixel-based for easier calc in CSS)
        // We'll use approx 100px range for the calc
        hero.style.setProperty('--mx', `${x * 100}px`);
        hero.style.setProperty('--my', `${y * 100}px`);
    });

    // Reset on leave for a soft return to center
    hero.addEventListener('mouseleave', () => {
        hero.style.setProperty('--mx', `0px`);
        hero.style.setProperty('--my', `0px`);
    });
}


// ==========================================================================
// ACTIVE LINK HIGHLIGHTING
// ==========================================================================

const sections = document.querySelectorAll('section, header');
const navLinksList = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinksList.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active');
        }
    });
});
