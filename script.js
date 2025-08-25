// Toast Notification Utility
function showToast(title, message, type = "success") {
  const toast = document.getElementById("toast-notification");
  const toastTitle = document.getElementById("toast-title");
  const toastMessage = document.getElementById("toast-message");

  // Set content
  toastTitle.textContent = title;
  toastMessage.textContent = message;

  // Reset classes
  toast.classList.remove(
    "opacity-0",
    "scale-90",
    "bg-red-500",
    "bg-accent-gold",
    "bg-ocean-black",
    "text-white",
    "text-text-primary"
  );
  toast.classList.add("opacity-100", "scale-100");

  // Set color based on type
  if (type === "error") {
    toast.classList.add("bg-red-500", "text-white");
  } else {
    // Use ocean-black for success/info to avoid gold overuse
    toast.classList.add("bg-ocean-black", "text-white");
  }

  // Show toast
  toast.style.display = "block";

  // Auto-hide after 5 seconds
  setTimeout(() => {
    toast.classList.remove("opacity-100", "scale-100");
    toast.classList.add("opacity-0", "scale-90");

    // Fully hide after transition
    setTimeout(() => {
      toast.style.display = "none";
    }, 300);
  }, 5000);
}

// Loading Spinner Utility
function showLoader() {
  document.getElementById("loading-spinner").classList.remove("hidden");
  document.getElementById("submit-button").disabled = true;
}

function hideLoader() {
  document.getElementById("loading-spinner").classList.add("hidden");
  document.getElementById("submit-button").disabled = false;
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuButton = document.getElementById("mobile-menu-button");

  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
    // Change hamburger to X
    mobileMenuButton.innerHTML = `
      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    `;
  } else {
    mobileMenu.classList.add("hidden");
    // Change X back to hamburger
    mobileMenuButton.innerHTML = `
      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    `;
  }
}

// Smooth Scrolling for Navigation Links
function smoothScrollTo(targetId) {
  const target = document.querySelector(targetId);
  if (target) {
    const offsetTop = target.offsetTop - 80; // Account for fixed header
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
}

// Scroll Arrow Visibility Logic
function handleScrollArrowVisibility() {
  const scrollArrow = document.getElementById("scroll-arrow");
  const heroSection = document.getElementById("hero");

  if (!scrollArrow || !heroSection) return;

  const heroRect = heroSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (heroRect.top <= 0 && heroRect.bottom >= windowHeight) {
    scrollArrow.style.opacity = "1";
  } else {
    scrollArrow.style.opacity = "0";
  }
}

// Form Handling for Local and Production
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    // Check if we're in local development
    const isLocal =
      window.location.protocol === "file:" ||
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1" ||
      window.location.hostname === "";

    if (isLocal) {
      e.preventDefault();
      showLoader();

      // Simulate form submission for local testing
      setTimeout(() => {
        try {
          // Clear form
          this.querySelectorAll("input, textarea").forEach(
            (el) => (el.value = "")
          );

          hideLoader();
          showToast(
            "We Move with Intention",
            "Your message has been received. We appreciate your alignment.",
            "success"
          );
        } catch (error) {
          hideLoader();
          showToast(
            "Submission Error",
            "There was an error submitting your form. Please try again.",
            "error"
          );
          console.error("Local form submission error:", error);
        }
      }, 1500);
    } else {
      // For production/Netlify deployment
      showLoader();

      setTimeout(() => {
        hideLoader();
      }, 2000);
    }
  });

// Initialize AOS animations
AOS.init({
  duration: 800,
  once: true,
});

// Add scroll event listener for arrow visibility
window.addEventListener("scroll", handleScrollArrowVisibility);

// Initial check for arrow visibility
document.addEventListener("DOMContentLoaded", function () {
  handleScrollArrowVisibility();

  // Mobile menu toggle
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener("click", toggleMobileMenu);
  }

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      smoothScrollTo(targetId);

      // Close mobile menu if open
      const mobileMenu = document.getElementById("mobile-menu");
      if (!mobileMenu.classList.contains("hidden")) {
        toggleMobileMenu();
      }
    });
  });
});
