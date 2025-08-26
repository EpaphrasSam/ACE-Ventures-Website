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
    "bg-white",
    "text-white",
    "text-text-primary",
    "border",
    "border-accent-gold"
  );
  toast.classList.add("opacity-100", "scale-100");

  // Set color based on type
  if (type === "error") {
    toast.classList.add("bg-red-500", "text-white", "border");
  } else {
    // High-contrast on dark footer: white bg with gold border and dark text
    toast.classList.add(
      "bg-white",
      "text-text-primary",
      "border",
      "border-accent-gold"
    );
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
  const scrolled = window.scrollY > 0;

  // Ensure theme matches current scroll state when opening
  if (mobileMenu && mobileMenu.classList.contains("hidden")) {
    updateMobileMenuTheme(scrolled);
  }

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

// Nav appearance updater
function updateNavAppearance(scrolled) {
  const nav = document.getElementById("site-nav");
  if (!nav) return;
  const desktopNav = document.getElementById("desktop-nav");
  const desktopLinks = desktopNav ? desktopNav.querySelectorAll("a") : [];
  const logoText = nav.querySelector("span");
  const mobileMenuButton = document.getElementById("mobile-menu-button");

  if (scrolled) {
    // Transparent state cleanup (including any gradient leftovers)
    nav.classList.remove(
      "bg-transparent",
      "backdrop-blur-0",
      "border-transparent",
      "bg-gradient-to-b",
      "from-black/20",
      "via-black/10",
      "to-transparent"
    );
    // Restore blurred glass with shadow and subtle border
    nav.classList.add(
      "bg-white/70",
      "backdrop-blur-lg",
      "backdrop-saturate-150",
      "border-gray-100",
      "shadow-md"
    );

    desktopLinks.forEach((link) => {
      link.classList.remove("text-white");
      link.classList.add("text-text-primary");
    });
    if (logoText) {
      logoText.classList.remove("text-white");
      logoText.classList.add("text-text-primary");
    }
    if (mobileMenuButton) {
      mobileMenuButton.classList.remove("text-white", "text-gray-700");
      mobileMenuButton.classList.add("text-text-primary");
    }
  } else {
    // Remove scrolled styles
    nav.classList.remove(
      "bg-white/70",
      "backdrop-blur-lg",
      "backdrop-saturate-150",
      "border-gray-100",
      "shadow-md"
    );
    // Restore simple transparent state
    nav.classList.add(
      "bg-transparent",
      "backdrop-blur-0",
      "border-transparent"
    );

    desktopLinks.forEach((link) => {
      link.classList.remove("text-text-primary");
      link.classList.add("text-white");
    });
    if (logoText) {
      logoText.classList.remove("text-text-primary");
      logoText.classList.add("text-white");
    }
    if (mobileMenuButton) {
      mobileMenuButton.classList.remove("text-text-primary", "text-gray-700");
      mobileMenuButton.classList.add("text-white");
    }
  }

  // If mobile menu is open, keep its theme in sync with scroll state
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
    updateMobileMenuTheme(scrolled);
  }
}

// rAF-throttled scroll handler
let navTicking = false;
function onScrollUpdateNav() {
  if (!navTicking) {
    navTicking = true;
    window.requestAnimationFrame(() => {
      const scrolled = window.scrollY > 0;
      updateNavAppearance(scrolled);
      navTicking = false;
    });
  }
}

// Initial handler (kept for direct calls)
function handleNavBlend() {
  const scrolled = window.scrollY > 0;
  updateNavAppearance(scrolled);
}

// Mobile menu theming based on scroll state
function updateMobileMenuTheme(scrolled) {
  const mobileMenu = document.getElementById("mobile-menu");
  if (!mobileMenu) return;
  // Inner container holds the links
  const inner = mobileMenu.querySelector("div");
  const links = inner ? inner.querySelectorAll("a") : [];

  if (scrolled) {
    // Scrolled: solid white dropdown, dark text links
    mobileMenu.classList.remove("bg-black/70", "backdrop-blur-sm");
    mobileMenu.classList.add("bg-white");
    if (inner) inner.classList.remove("divide-white/10");
    links.forEach((a) => {
      a.classList.remove("text-white");
      a.classList.add("text-text-primary");
    });
  } else {
    // At top: translucent dark overlay, white links
    mobileMenu.classList.remove("bg-white");
    mobileMenu.classList.add("bg-black/70", "backdrop-blur-sm");
    if (inner) inner.classList.add("divide-white/10");
    links.forEach((a) => {
      a.classList.remove("text-text-primary");
      a.classList.add("text-white");
    });
  }
}

// Hero video play/pause toggle
function setupHeroVideoToggle() {
  const video = document.getElementById("hero-video");
  const toggle = document.getElementById("hero-video-toggle");
  const icon = document.getElementById("hero-video-toggle-icon");
  if (!video || !toggle || !icon) return;

  function setPausedUI(paused) {
    if (paused) {
      icon.setAttribute("viewBox", "0 0 24 24");
      icon.innerHTML = '<path d="M8 5v14l11-7z"/>'; // show Play icon when paused
      toggle.setAttribute("aria-label", "Play background video");
    } else {
      icon.setAttribute("viewBox", "0 0 24 24");
      icon.innerHTML = '<path d="M6 5h4v14H6zM14 5h4v14h-4z"/>'; // show Pause icon when playing
      toggle.setAttribute("aria-label", "Pause background video");
    }
  }

  // Reflect actual state from video events
  video.addEventListener("play", () => setPausedUI(false));
  video.addEventListener("pause", () => setPausedUI(true));
  video.addEventListener("ended", () => setPausedUI(true));
  video.addEventListener("loadeddata", () => setPausedUI(video.paused));

  // Initialize on setup in case events haven't fired yet
  setPausedUI(video.paused);

  // Toggle only playback; UI will sync via events
  toggle.addEventListener("click", () => {
    try {
      if (video.paused) {
        const p = video.play();
        if (p && typeof p.then === "function") {
          p.catch(() => {});
        }
      } else {
        video.pause();
      }
    } catch (e) {
      console.error("Hero video toggle error", e);
    }
  });
}

// Form Handling for Local and Production
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    const form = this;
    // Determine local vs production
    const isLocal =
      window.location.protocol === "file:" ||
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1" ||
      window.location.hostname === "";

    // Always handle inline to avoid page navigation; keep action as a no-JS fallback
    e.preventDefault();
    showLoader();

    if (isLocal) {
      // Simulate form submission for local testing
      setTimeout(() => {
        try {
          form
            .querySelectorAll("input, textarea")
            .forEach((el) => (el.value = ""));
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
      }, 1200);
      return;
    }

    // Production: Submit to Netlify via fetch for inline success
    try {
      const formData = new FormData(form);
      // Ensure form-name is present (hidden input already exists in HTML)
      if (!formData.get("form-name")) {
        const nameInput = form.querySelector('input[name="form-name"]');
        if (nameInput && nameInput.value)
          formData.set("form-name", nameInput.value);
      }

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then((res) => {
          // Netlify returns the hosting page; treat 200-299 as success
          if (!res.ok)
            throw new Error(`Netlify submission failed: ${res.status}`);
          form
            .querySelectorAll("input, textarea")
            .forEach((el) => (el.value = ""));
          hideLoader();
          showToast(
            "We Move with Intention",
            "Your message has been received. We appreciate your alignment.",
            "success"
          );
        })
        .catch((error) => {
          console.error("Production form submission error:", error);
          hideLoader();
          showToast(
            "Submission Error",
            "There was an error submitting your form. Please try again.",
            "error"
          );
        });
    } catch (error) {
      console.error("Unexpected submission error:", error);
      hideLoader();
      showToast(
        "Submission Error",
        "There was an error submitting your form. Please try again.",
        "error"
      );
    }
  });

// Initialize AOS animations
AOS.init({
  duration: 250,
  once: true,
});

// Ensure nav updates on scroll
window.addEventListener("scroll", onScrollUpdateNav, { passive: true });

// Init
document.addEventListener("DOMContentLoaded", function () {
  handleNavBlend();
  setupHeroVideoToggle();

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
      if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
        toggleMobileMenu();
      }
    });
  });

  // Footer JSON preview (developer-style) for the main contact form
  const footerForm = document.getElementById("contact-form");
  const footerShowJson = document.getElementById("show-json");
  const footerJsonPre = document.getElementById("footer-brief-json");

  function refreshFooterJson() {
    if (!footerForm || !footerJsonPre) return;
    const data = {
      name: footerForm.elements?.namedItem("name")?.value || "",
      email: footerForm.elements?.namedItem("email")?.value || "",
      message: footerForm.elements?.namedItem("message")?.value || "",
    };
    footerJsonPre.textContent = JSON.stringify(data, null, 2);
  }

  if (footerShowJson && footerJsonPre && footerForm) {
    footerShowJson.addEventListener("change", () => {
      const on = footerShowJson.checked;
      footerJsonPre.classList.toggle("hidden", !on);
      if (on) refreshFooterJson();
    });
    ["input", "keyup", "change"].forEach((ev) => {
      footerForm.addEventListener(ev, () => {
        if (!footerJsonPre.classList.contains("hidden")) refreshFooterJson();
      });
    });
  }

  // Performance: respect reduced motion and small screens for video
  const video = document.getElementById("hero-video");
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (video) {
    const smallScreen = () => window.matchMedia("(max-width: 640px)").matches;
    function updateVideoState() {
      if (prefersReduced.matches || smallScreen()) {
        try {
          video.pause();
        } catch (_) {}
      }
    }
    updateVideoState();
    prefersReduced.addEventListener?.("change", updateVideoState);
    window.addEventListener(
      "resize",
      () => {
        // throttle via rAF
        window.requestAnimationFrame(updateVideoState);
      },
      { passive: true }
    );
  }
});
