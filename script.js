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
});
