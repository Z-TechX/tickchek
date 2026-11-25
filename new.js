document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  const navLinks = document.querySelectorAll(".main-nav a:not(.nav-cta)");
  const allInternalLinks = document.querySelectorAll('a[href^="#"]');

  const routeToSection = {
    "/": "#home",
    "/events": "#events",
    "/about": "#about",
    "/contact": "#contact"
  };

  const sectionToRoute = {
    "#home": "/",
    "#events": "/events",
    "#about": "/about",
    "#contact": "/contact"
  };

  const setActiveNav = (selector) => {
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === selector);
    });
  };

  const scrollToSection = (selector, updateUrl = true) => {
    const el = selector ? document.querySelector(selector) : null;
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth" });
    setActiveNav(selector);

    const route = sectionToRoute[selector];
    if (updateUrl && route && window.location.protocol !== "file:") {
      history.pushState({ section: selector }, "", route);
    }
  };

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  allInternalLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        scrollToSection(href, true);
      }

      if (nav && toggle) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  window.addEventListener("popstate", (event) => {
    const stateSelector = event.state && event.state.section;
    const pathSelector = routeToSection[window.location.pathname];
    const selector = stateSelector || pathSelector || "#home";
    scrollToSection(selector, false);
  });

  const initialPath = window.location.pathname.replace(/\/+$/, "") || "/";
  if (routeToSection[initialPath]) {
    scrollToSection(routeToSection[initialPath], false);
  }

//   const contactForm = document.getElementById("contactForm");
//   const formNote = document.getElementById("formNote");

//   if (contactForm) {
//     contactForm.addEventListener("submit", (e) => {
//       e.preventDefault();

//       const data = new FormData(contactForm);
//       const name = (data.get("name") || "").toString().trim();
//       const email = (data.get("email") || "").toString().trim();
//       const eventType = (data.get("eventType") || "").toString().trim();
//       const message = (data.get("message") || "").toString().trim();

//       if (!name || !email || !eventType) {
//         if (formNote) {
//           formNote.textContent = "Please complete your name, email address, and event type.";
//         }
//         return;
//       }

//       const subject = encodeURIComponent(`TickChik Event Enquiry — ${eventType}`);
//       const body = encodeURIComponent(
//         `Name: ${name}\nEmail: ${email}\nEvent Type: ${eventType}\n\nDetails:\n${message}`
//       );

//       window.location.href = `mailto:info@z-techx.com?subject=${subject}&body=${body}`;

//       if (formNote) {
//         formNote.textContent = "Opening your email client with the enquiry details for info@z-techx.com.";
//       }
//     });
//   }
});