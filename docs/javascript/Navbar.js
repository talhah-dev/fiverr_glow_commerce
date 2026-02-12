const navbar = document.getElementById("navbar");

navbar.innerHTML = `
  <header id="siteHeader" class="fixed inset-x-0 top-0 z-50">
    <div id="navContainer" class="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300">
      <div id="navBar" class="relative mt-3 flex items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-300">
        <a href="index.html" class="inline-flex items-center gap-3 shrink-0">
         <img src="/docs/assets/logo.png" class="md:h-12 h-10" alt="logo">
        </a>

        <nav class="hidden md:block">
          <ul class="flex items-center justify-center gap-4 lg:gap-6 text-sm font-semibold">
            <li><a class="navLink transition" href="index.html">Home</a></li>
            <li><a class="navLink transition" href="about.html">About</a></li>

            <li class="relative group">
              <a class="navLink transition" href="services.html" aria-haspopup="true">
                <span class="inline-flex items-center gap-1">
                  Services
                  <i class="fa-solid fa-chevron-down text-[10px] opacity-70"></i>
                </span>
              </a>

              <div class="absolute left-0 top-full hidden pt-3 group-hover:block group-focus-within:block">
                <div class="w-80 rounded-2xl bg-white/95 backdrop-blur ring-1 ring-[#545454]/10 shadow-xl shadow-[#545454]/10 p-2">
                  <a class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#545454] hover:bg-[#f7f9fb] transition" href="services.html">
                    <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#55c624]/10 text-[#55c624]">
                      <i class="fa-solid fa-briefcase"></i>
                    </span>
                    All Services
                  </a>

                  <a class="mt-1 flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#545454] hover:bg-[#f7f9fb] transition" href="amazon-global-selling.html">
                    <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#55c624]/10 text-[#55c624]">
                      <i class="fa-brands fa-amazon"></i>
                    </span>
                    Amazon Global Selling
                  </a>

                  <a class="mt-1 flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#545454] hover:bg-[#f7f9fb] transition" href="walmart-marketplace.html">
                    <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#55c624]/10 text-[#55c624]">
                      <i class="fa-solid fa-store"></i>
                    </span>
                    Walmart Marketplace
                  </a>

                  <a class="mt-1 flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#545454] hover:bg-[#f7f9fb] transition" href="ebay-joom-expansion.html">
                    <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#55c624]/10 text-[#55c624]">
                      <i class="fa-brands fa-ebay"></i>
                    </span>
                    eBay & Joom Expansion
                  </a>
                </div>
              </div>
            </li>

            <li><a class="navLink transition" href="case-studies.html">Case Studies</a></li>
            <li><a class="navLink transition" href="testimonials.html">Testimonials</a></li>
            <li><a class="navLink transition" href="blog.html">Blog</a></li>
            <li><a class="navLink transition" href="contact.html">Contact</a></li>
          </ul>
        </nav>

        <div class="hidden md:flex items-center gap-2 sm:gap-3 shrink-0">
          <a href="contact.html" class="flex items-center gap-2 rounded-2xl pr-4 pl-1.5 py-1.5 text-sm font-semibold transition hover:-translate-y-0.5 active:translate-y-0" id="ctaBtn">
            <span class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ring-1">
              <i class="fa-solid fa-calendar-check"></i>
            </span>
            <span class="hidden sm:inline">Book Free Call</span>
          </a>
        </div>

        <button
          id="menuBtn"
          type="button"
          aria-label="Open menu"
          aria-expanded="false"
          class="group inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#55c624]/10 text-[#55c624] ring-1 ring-[#55c624]/20 transition hover:bg-[#55c624]/15 active:scale-[0.98] md:hidden"
        >
          <i class="fa-solid fa-bars text-base"></i>
        </button>
      </div>
    </div>
  </header>

  <div id="menuOverlay" class="fixed inset-0 z-[60] hidden bg-[#545454]/35 backdrop-blur-sm opacity-0 transition-opacity duration-300"></div>

  <aside
    id="menuPanel"
    class="fixed left-0 top-0 z-[70] h-full w-[86%] max-w-sm -translate-x-full bg-white shadow-2xl shadow-[#545454]/15 ring-1 ring-[#545454]/10 transition-transform duration-300 ease-out overflow-y-auto"
    aria-hidden="true"
  >
    <div class="flex items-center justify-between px-5 py-5">
      <a href="index.html" class="inline-flex items-center gap-3">
        <img src="/docs/assets/logo.png" class="md:h-14 h-10" alt="logo">
      </a>

      <button
        id="closeBtn"
        type="button"
        aria-label="Close menu"
        class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f7f9fb] text-[#545454] ring-1 ring-[#545454]/10 transition hover:bg-[#55c624]/10 active:scale-[0.98]"
      >
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>
    </div>

    <div class="px-5">
      <nav class="mt-6">
        <ul class="space-y-2">
          <li><a class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#545454] ring-1 ring-[#545454]/10 hover:bg-[#f7f9fb] transition" href="index.html">
            <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#55c624]/10 text-[#55c624]"><i class="fa-solid fa-house"></i></span>
            Home
          </a></li>

          <li><a class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#545454] ring-1 ring-[#545454]/10 hover:bg-[#f7f9fb] transition" href="about.html">
            <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#55c624]/10 text-[#55c624]"><i class="fa-solid fa-circle-info"></i></span>
            About
          </a></li>

          <li><a class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#545454] ring-1 ring-[#545454]/10 hover:bg-[#f7f9fb] transition" href="services.html">
            <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#55c624]/10 text-[#55c624]"><i class="fa-solid fa-briefcase"></i></span>
            Services
          </a></li>

          <li><a class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#545454] ring-1 ring-[#545454]/10 hover:bg-[#f7f9fb] transition" href="amazon-global-selling.html">
            <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#55c624]/10 text-[#55c624]"><i class="fa-brands fa-amazon"></i></span>
            Amazon Global Selling
          </a></li>

          <li><a class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#545454] ring-1 ring-[#545454]/10 hover:bg-[#f7f9fb] transition" href="walmart-marketplace.html">
            <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#55c624]/10 text-[#55c624]"><i class="fa-solid fa-store"></i></span>
            Walmart Marketplace
          </a></li>

          <li><a class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#545454] ring-1 ring-[#545454]/10 hover:bg-[#f7f9fb] transition" href="ebay-joom-expansion.html">
            <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#55c624]/10 text-[#55c624]"><i class="fa-brands fa-ebay"></i></span>
            eBay & Joom Expansion
          </a></li>

          <li><a class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#545454] ring-1 ring-[#545454]/10 hover:bg-[#f7f9fb] transition" href="case-studies.html">
            <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#55c624]/10 text-[#55c624]"><i class="fa-solid fa-trophy"></i></span>
            Case Studies
          </a></li>

          <li><a class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#545454] ring-1 ring-[#545454]/10 hover:bg-[#f7f9fb] transition" href="testimonials.html">
            <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#55c624]/10 text-[#55c624]"><i class="fa-solid fa-star"></i></span>
            Testimonials
          </a></li>

          <li><a class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#545454] ring-1 ring-[#545454]/10 hover:bg-[#f7f9fb] transition" href="blog.html">
            <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#55c624]/10 text-[#55c624]"><i class="fa-solid fa-newspaper"></i></span>
            Blog
          </a></li>

          <li><a class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#545454] ring-1 ring-[#545454]/10 hover:bg-[#f7f9fb] transition" href="contact.html">
            <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#55c624]/10 text-[#55c624]"><i class="fa-solid fa-envelope"></i></span>
            Contact
          </a></li>
        </ul>
      </nav>

      <div class="mt-6 grid gap-2">
        <a href="contact.html" class="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#55c624] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#55c624]/20 transition hover:brightness-95">
          <i class="fa-solid fa-calendar-check"></i>
          Book Free Call
        </a>

        <a href="mailto:hello@growcommerce.com" class="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-[#545454] ring-1 ring-[#545454]/10 transition hover:bg-[#f7f9fb]">
          <i class="fa-solid fa-envelope text-[#55c624]"></i>
          hello@growcommerce.com
        </a>
      </div>

      <div class="h-8"></div>
    </div>
  </aside>
`;

const navBar = document.getElementById("navBar");
const navContainer = document.getElementById("navContainer");
const ctaBtn = document.getElementById("ctaBtn");
const brandText = document.getElementById("brandText");
const navLinks = Array.from(document.querySelectorAll(".navLink"));
const menuBtn = document.getElementById("menuBtn");

const setTopStyle = () => {
  if (navContainer) navContainer.className = "mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300";
  if (navBar) navBar.className = "relative mt-3 flex items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-300 bg-transparent";
  if (brandText) brandText.className = "hidden text-base font-bold tracking-tight text-[#545454] sm:inline";
  navLinks.forEach((a) => (a.className = "navLink inline-flex items-center gap-1 text-[#545454] hover:text-[#55c624] transition"));
  if (ctaBtn) {
    ctaBtn.className = "inline-flex items-center gap-2 rounded-2xl bg-[#55c624] pr-4 pl-1.5 py-1.5 text-sm font-semibold text-white shadow-lg shadow-[#55c624]/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#55c624]/25 active:translate-y-0";
    const ctaIconWrap = ctaBtn.querySelector("span");
    if (ctaIconWrap) ctaIconWrap.className = "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20";
  }
  if (menuBtn) menuBtn.className = "group inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#55c624]/10 text-[#55c624] ring-1 ring-[#55c624]/20 transition hover:bg-[#55c624]/15 active:scale-[0.98] md:hidden";
};

const setScrolledStyle = () => {
  if (navContainer) navContainer.className = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 transition-all duration-300";
  if (navBar) navBar.className = "relative mt-3 flex items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-300 bg-white/75 ring-1 ring-[#545454]/10 shadow-lg shadow-[#545454]/5 backdrop-blur";
  if (brandText) brandText.className = "hidden text-base font-bold tracking-tight text-[#545454] sm:inline";
  navLinks.forEach((a) => (a.className = "navLink inline-flex items-center gap-1 text-[#545454] hover:text-[#55c624] transition"));
  if (ctaBtn) {
    ctaBtn.className = "inline-flex items-center gap-2 rounded-2xl bg-[#55c624] pr-4 pl-1.5 py-1.5 text-sm font-semibold text-white shadow-lg shadow-[#55c624]/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#55c624]/25 active:translate-y-0";
    const ctaIconWrap = ctaBtn.querySelector("span");
    if (ctaIconWrap) ctaIconWrap.className = "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20";
  }
  if (menuBtn) menuBtn.className = "group inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#55c624]/10 text-[#55c624] ring-1 ring-[#55c624]/20 transition hover:bg-[#55c624]/15 active:scale-[0.98] md:hidden";
};

const menuBtnEl = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("menuOverlay");
const panel = document.getElementById("menuPanel");

const lockScroll = () => {
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
};

const unlockScroll = () => {
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
};

const setMenuClosed = (immediate = false) => {
  if (!overlay || !panel) return;
  if (immediate) {
    overlay.style.transition = "none";
    panel.style.transition = "none";
  }
  overlay.classList.add("hidden");
  overlay.classList.add("opacity-0");
  overlay.classList.remove("opacity-100");
  panel.classList.add("-translate-x-full");
  panel.classList.remove("translate-x-0");
  panel.style.transform = "translateX(-100%)";
  panel.setAttribute("aria-hidden", "true");
  if (menuBtnEl) menuBtnEl.setAttribute("aria-expanded", "false");
  unlockScroll();
  if (immediate) {
    overlay.offsetHeight;
    panel.offsetHeight;
    overlay.style.transition = "";
    panel.style.transition = "";
  }
};

const openMenu = () => {
  if (!overlay || !panel) return;
  overlay.classList.remove("hidden");
  lockScroll();
  panel.setAttribute("aria-hidden", "false");
  if (menuBtnEl) menuBtnEl.setAttribute("aria-expanded", "true");
  requestAnimationFrame(() => {
    overlay.classList.remove("opacity-0");
    overlay.classList.add("opacity-100");
    panel.classList.remove("-translate-x-full");
    panel.classList.add("translate-x-0");
    panel.style.transform = "translateX(0)";
  });
};

const closeMenu = () => {
  if (!overlay || !panel) return;
  overlay.classList.add("opacity-0");
  overlay.classList.remove("opacity-100");
  panel.classList.add("-translate-x-full");
  panel.classList.remove("translate-x-0");
  panel.style.transform = "translateX(-100%)";
  panel.setAttribute("aria-hidden", "true");
  if (menuBtnEl) menuBtnEl.setAttribute("aria-expanded", "false");
  unlockScroll();
  setTimeout(() => {
    overlay.classList.add("hidden");
  }, 300);
};

if (menuBtnEl) menuBtnEl.addEventListener("click", openMenu);
if (closeBtn) closeBtn.addEventListener("click", closeMenu);
if (overlay) overlay.addEventListener("click", closeMenu);
window.addEventListener("keydown", (e) => e.key === "Escape" && closeMenu());

const applyNavState = () => {
  const atTop = window.scrollY <= 8;
  if (atTop) setTopStyle();
  else setScrolledStyle();
};

let ticking = false;
const onScroll = () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    applyNavState();
    ticking = false;
  });
};

window.addEventListener("scroll", onScroll, { passive: true });
applyNavState();
setMenuClosed(true);
