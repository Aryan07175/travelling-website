// Welcome alert
window.onload = function() {
    setTimeout(function() {
        alert('Welcome to the Traveling Website!');
    }, 500);
};

// 3D tilt effect for gallery images
const galleryImages = document.querySelectorAll('.gallery-images img');
galleryImages.forEach(img => {
    img.addEventListener('mousemove', function(e) {
        const rect = img.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((x - centerX) / centerX) * 10;
        img.style.transform = `scale(1.04) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
        img.classList.add('animated');
    });
    img.addEventListener('mouseleave', function() {
        img.style.transform = '';
        img.classList.remove('animated');
    });
    img.addEventListener('click', function() {
        showModal(img.src, img.alt);
    });
});

// Parallax effect for hero image
const hero = document.querySelector('.hero img');
window.addEventListener('scroll', function() {
    if (hero) {
        const scrolled = window.scrollY;
        hero.style.transform = `scale(1.1) translateY(${scrolled * 0.2}px)`;
    }
});

// Lightbox modal for gallery images
function showModal(src, alt) {
    let modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = 0;
    modal.style.left = 0;
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.background = 'rgba(0,0,0,0.8)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = 1000;
    modal.innerHTML = `<img src="${src}" alt="${alt}" style="max-width:90vw; max-height:80vh; border-radius:12px; box-shadow:0 4px 32px rgba(0,0,0,0.3);"><span style="position:absolute;top:30px;right:50px;font-size:3rem;color:#fff;cursor:pointer;">&times;</span>`;
    document.body.appendChild(modal);
    modal.querySelector('span').onclick = () => document.body.removeChild(modal);
    modal.onclick = (e) => { if (e.target === modal) document.body.removeChild(modal); };
}

// Scroll reveal animation
function revealOnScroll() {
    const reveals = document.querySelectorAll('[data-reveal]');
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight - 60) {
            el.classList.add('revealed');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Login modal logic
const openLogin = document.getElementById('openLogin');
const closeLogin = document.getElementById('closeLogin');
const loginModal = document.getElementById('loginModal');
const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');

if (openLogin && closeLogin && loginModal) {
    openLogin.onclick = () => loginModal.classList.add('active');
    closeLogin.onclick = () => {
        loginModal.classList.remove('active');
        loginMessage.textContent = '';
    };
    window.onclick = function(event) {
        if (event.target === loginModal) {
            loginModal.classList.remove('active');
            loginMessage.textContent = '';
        }
    };
}
if (loginForm) {
    loginForm.onsubmit = function(e) {
        e.preventDefault();
        // Fake login: just show a welcome message
        loginMessage.textContent = 'Welcome, ' + loginForm.elements[0].value + '!';
        setTimeout(() => {
            loginModal.classList.remove('active');
            loginMessage.textContent = '';
        }, 1500);
    };
}
// Contact form logic
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.onsubmit = function(e) {
        e.preventDefault();
        contactForm.reset();
        alert('Thank you for contacting us! We will get back to you soon.');
    };
} 