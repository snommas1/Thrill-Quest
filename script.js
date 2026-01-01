// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handling
const ctaForm = document.querySelector('.cta-form');
if (ctaForm) {
    ctaForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        // Show success message (you can customize this)
        const button = this.querySelector('button');
        const originalText = button.textContent;
        button.textContent = 'Welcome Aboard! 🎉';
        button.style.background = '#00D9FF';
        
        // Reset after 3 seconds
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
            this.reset();
        }, 3000);
        
        // Here you would typically send the email to your backend
        console.log('Email submitted:', email);
    });
}

// Add scroll-triggered animations for stats
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe stat items
document.querySelectorAll('.stat-item').forEach(stat => {
    observer.observe(stat);
});

// Observe feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    observer.observe(card);
});

// Add parallax effect to hero circles
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const circles = document.querySelectorAll('.circle');
    
    circles.forEach((circle, index) => {
        const speed = (index + 1) * 0.1;
        circle.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Navigation background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(10, 14, 39, 0.95)';
    } else {
        nav.style.background = 'rgba(10, 14, 39, 0.8)';
    }
});
