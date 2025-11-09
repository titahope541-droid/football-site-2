// Mobile menu functionality
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    const isClickInside =
      mobileMenuButton.contains(event.target) ||
      mobileMenu.contains(event.target);

    if (!isClickInside && !mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
    }
  });

  // Handle window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      // md breakpoint
      mobileMenu.classList.add("hidden");
    }
  });
});
