// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    hamburger.innerHTML = mobileMenu.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});

// Booking Modal
const bookButtons = document.querySelectorAll('.book-btn');
const bookingModal = document.getElementById('bookingModal');
const closeModal = document.querySelector('.close-modal');
const packageInput = document.getElementById('package');
const submitBooking = document.querySelector('.submit-booking');

bookButtons.forEach(button => {
    button.addEventListener('click', () => {
        const packageName = button.getAttribute('data-package');
        packageInput.value = packageName;
        bookingModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

closeModal.addEventListener('click', () => {
    bookingModal.classList.remove('active');
    document.body.style.overflow = '';
});

submitBooking.addEventListener('click', () => {
    alert('Thank you for your booking! We will contact you shortly to confirm your travel details.');
    bookingModal.classList.remove('active');
    document.body.style.overflow = '';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === bookingModal) {
        bookingModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Gallery Image Preview
const galleryItems = document.querySelectorAll('.gallery-item');
const imagePreview = document.getElementById('imagePreview');
const previewImage = imagePreview.querySelector('img');
const closePreview = document.querySelector('.close-preview');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const imageUrl = item.getAttribute('data-src');
        previewImage.setAttribute('src', imageUrl);
        imagePreview.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

closePreview.addEventListener('click', () => {
    imagePreview.classList.remove('active');
    document.body.style.overflow = '';
});

// Close preview when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === imagePreview) {
        imagePreview.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Testimonial Carousel
const testimonialsContainer = document.querySelector('.testimonials-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

function updateCarousel() {
    testimonialsContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % 3;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + 3) % 3;
    updateCarousel();
});

// Contact Form Submission
const contactSubmit = document.querySelector('.contact-submit');

contactSubmit.addEventListener('click', () => {
    alert('Thank you for contacting us. We will get back to you soon!');
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});

// Auto-advance testimonials
setInterval(() => {
    currentIndex = (currentIndex + 1) % 3;
    updateCarousel();
}, 5000);