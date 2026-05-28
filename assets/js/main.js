// Cascais in June — small JS for shared UI behaviours.
// Keep this file dependency-free and tiny.

(function () {
  "use strict";

  // --- Mobile nav toggle ---
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // Close the nav when a link is followed (mobile usability).
    nav.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // --- Current-page highlight ---
  // Mark the nav link whose href matches the current top-level section.
  const path = window.location.pathname.replace(/\/index\.html$/, "/");
  const segments = path.split("/").filter(Boolean);
  const topSegment = "/" + (segments[0] ? segments[0] + "/" : "");

  document.querySelectorAll(".site-nav a").forEach(function (link) {
    const href = link.getAttribute("href");
    if (!href) return;
    const isHome = topSegment === "/" && (href === "/" || href === "/index.html");
    const isMatch = href === topSegment;
    if (isHome || isMatch) {
      link.setAttribute("aria-current", "page");
    }
  });

  // --- "Days until June" little widget (homepage only) ---
  const counter = document.querySelector("[data-days-to-june]");
  if (counter) {
    const now = new Date();
    const year = now.getMonth() <= 5 ? now.getFullYear() : now.getFullYear() + 1;
    const june1 = new Date(year, 5, 1); // month is 0-indexed
    const msPerDay = 1000 * 60 * 60 * 24;
    const days = Math.ceil((june1 - now) / msPerDay);
    if (days > 0) {
      counter.textContent = days + (days === 1 ? " day" : " days") + " until June " + year;
    } else {
      counter.textContent = "It's June — enjoy Cascais.";
    }
  }
})();
