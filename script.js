// DOM Elements for enhanced interactions
document.addEventListener('DOMContentLoaded', function() { 
    // smooth transitions
    document.body.style.transition = 'all 0.3s ease';
    
    // About section toggle functionality
    const aboutBtn = document.getElementById('aboutBtn');
    const aboutSection = document.getElementById('aboutSection');
    
    if (aboutBtn && aboutSection) {
        aboutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            aboutSection.classList.toggle('active');
            
            // Change button text based on state
            if (aboutSection.classList.contains('active')) {
                this.textContent = 'FERMER';
                this.style.background = 'rgba(255, 255, 255, 0.2)';
            } else {
                this.textContent = 'À PROPOS';
                this.style.background = 'rgba(255, 255, 255, 0.1)';
            }
        });
    } else {
        console.error('About button or section not found!'); // Debug
    }
    
    // hover effects for project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // button hover effects
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Smooth scroll for links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
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
});