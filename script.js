// Modal functionality for gallery images
function openModal(src) {
  const modal = document.createElement('div');
  modal.className = 'modal';
  
  const modalContent = document.createElement('img');
  modalContent.src = src;
  
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  
  modal.addEventListener('click', () => {
    modal.remove();
  });

  // Add modal styles dynamically
  const style = document.createElement('style');
  style.textContent = `
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.9);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1001;
      cursor: pointer;
    }
    .modal img {
      max-width: 90%;
      max-height: 90vh;
      object-fit: contain;
    }
  `;
  document.head.appendChild(style);
}

// Form submission handling
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    projectType: document.getElementById('projectType').value,
    message: document.getElementById('message').value
  };
  
  // Here you would typically send the data to your server
  console.log('Form submitted:', formData);
  
  // Show success message
  alert('Thank you for your interest! We will contact you soon.');
  
  // Reset form
  this.reset();
});

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

// Responsive navigation menu
const createMobileMenu = () => {
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');
  
  // Create hamburger button
  const menuBtn = document.createElement('button');
  menuBtn.className = 'menu-btn';
  menuBtn.innerHTML = '☰';
  
  // Add styles for mobile menu
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 768px) {
      .menu-btn {
        display: block;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: #2c3e50;
      }
      
      nav {
        display: none;
        width: 100%;
        padding: 1rem 0;
      }
      
      nav.active {
        display: block;
      }
      
      .nav-links {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
    }
    
    @media (min-width: 769px) {
      .menu-btn {
        display: none;
      }
      
      nav {
        display: block !important;
      }
    }
  `;
  document.head.appendChild(style);
  
  // Toggle menu
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
  
  // Insert button before nav
  header.insertBefore(menuBtn, nav);
};

// Initialize mobile menu
window.addEventListener('DOMContentLoaded', createMobileMenu);