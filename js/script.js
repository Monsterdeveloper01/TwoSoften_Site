// --- SLIDER LOGIC (Sama seperti sebelumnya) ---
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}
setInterval(nextSlide, 5000); // Ganti gambar tiap 5 detik

// --- NAVBAR SCROLL EFFECT ---
// Saat discroll ke bawah, navbar jadi ada background putih kaca
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// --- ANIMASI MUNCUL SAAT SCROLL (Gacor Effect) ---
// Kode ini bikin elemen 'reveal-scroll' muncul pelan-pelan saat dilihat
const revealElements = document.querySelectorAll('.reveal-scroll');

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const elementVisible = 150;

    revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);