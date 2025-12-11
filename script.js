document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const arrow = question.querySelector('.arrow');

            // Toggle active class
            answer.classList.toggle('active');

            // Toggle rotation of arrow (optional visual cue)
            if (answer.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                arrow.textContent = '-';
                arrow.style.color = 'var(--accent-color)';
            } else {
                answer.style.maxHeight = null;
                arrow.textContent = '+';
                arrow.style.color = 'inherit';
            }
        });
    });

    // Reveal on Scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Observe all sections and cards
    document.querySelectorAll('section, .card, .step, .timeline-item, .method-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // Add visible class styling dynamically via JS or check CSS
    // Let's add the class logic here to be sure, or rely on CSS. 
    // I'll add a style block to head to ensure visible class works if I missed it in CSS.
    const style = document.createElement('style');
    style.innerHTML = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});

// Update Date in Top Bar
document.addEventListener('DOMContentLoaded', () => {
    const dateSpan = document.getElementById('current-date');
    if (dateSpan) {
        const today = new Date();
        dateSpan.textContent = today.toLocaleDateString('pt-BR');
    }
});
