const footer = document.getElementById("footer");
footer.innerHTML = `
<footer class="bg-white border-t border-[#545454]/10">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="py-12 sm:py-14">
      <div class="grid gap-10 lg:grid-cols-12">
        <div class="lg:col-span-4">
          <div class="flex items-center gap-3">
            <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#55c624]/10 text-[#55c624]">
              <i class="fa-solid fa-globe"></i>
            </span>
            <div>
              <p class="text-lg font-bold text-[#545454]">Grow Commerce</p>
              <p class="text-sm text-[#545454]/70">Empowering Indian Brands to Go Global</p>
            </div>
          </div>

          <p class="mt-4 text-sm leading-relaxed text-[#545454]/80">
            Grow Commerce is a global e-commerce consulting and marketplace expansion agency helping Indian brands, manufacturers, and sellers launch and scale internationally.
          </p>

          <div class="mt-5 flex flex-wrap gap-2">
            <span class="rounded-xl bg-[#55c624]/10 px-3 py-2 text-xs font-semibold text-[#545454]">Amazon</span>
            <span class="rounded-xl bg-[#55c624]/10 px-3 py-2 text-xs font-semibold text-[#545454]">Walmart</span>
            <span class="rounded-xl bg-[#55c624]/10 px-3 py-2 text-xs font-semibold text-[#545454]">eBay</span>
            <span class="rounded-xl bg-[#55c624]/10 px-3 py-2 text-xs font-semibold text-[#545454]">Joom</span>
          </div>

          <div class="mt-6 flex items-center gap-3">
            <a
              href="#"
              class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#545454]/10 bg-white text-[#545454] shadow-sm transition hover:bg-[#f7f9fb]"
              aria-label="LinkedIn"
            >
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="#"
              class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#545454]/10 bg-white text-[#545454] shadow-sm transition hover:bg-[#f7f9fb]"
              aria-label="Instagram"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a
              href="#"
              class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#545454]/10 bg-white text-[#545454] shadow-sm transition hover:bg-[#f7f9fb]"
              aria-label="Facebook"
            >
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="#"
              class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#545454]/10 bg-white text-[#545454] shadow-sm transition hover:bg-[#f7f9fb]"
              aria-label="YouTube"
            >
              <i class="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>

        <div class="lg:col-span-8">
          <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p class="text-sm font-bold text-[#545454]">Company</p>
              <ul class="mt-4 space-y-3 text-sm">
                <li><a class="text-[#545454]/80 transition hover:text-[#55c624]" href="about.html">About Us</a></li>
                <li><a class="text-[#545454]/80 transition hover:text-[#55c624]" href="case-studies.html">Case Studies</a></li>
                <li><a class="text-[#545454]/80 transition hover:text-[#55c624]" href="testimonials.html">Testimonials</a></li>
                <li><a class="text-[#545454]/80 transition hover:text-[#55c624]" href="blog.html">Blog</a></li>
                <li><a class="text-[#545454]/80 transition hover:text-[#55c624]" href="contact.html">Contact</a></li>
              </ul>
            </div>

            <div>
              <p class="text-sm font-bold text-[#545454]">Marketplaces</p>
              <ul class="mt-4 space-y-3 text-sm">
                <li><a class="text-[#545454]/80 transition hover:text-[#55c624]" href="amazon-global-selling.html">Amazon Global Selling</a></li>
                <li><a class="text-[#545454]/80 transition hover:text-[#55c624]" href="walmart-marketplace.html">Walmart Marketplace</a></li>
                <li><a class="text-[#545454]/80 transition hover:text-[#55c624]" href="ebay-joom-expansion.html">eBay & Joom Expansion</a></li>
                <li><a class="text-[#545454]/80 transition hover:text-[#55c624]" href="services.html">All Services</a></li>
              </ul>
            </div>

            <div>
              <p class="text-sm font-bold text-[#545454]">Resources</p>
              <ul class="mt-4 space-y-3 text-sm">
                <li><a class="text-[#545454]/80 transition hover:text-[#55c624]" href="blog.html">Insights</a></li>
                <li><a class="text-[#545454]/80 transition hover:text-[#55c624]" href="contact.html">Book Consultation</a></li>
                <li><a class="text-[#545454]/80 transition hover:text-[#55c624]" href="services.html">Process & Support</a></li>
              </ul>
            </div>

            <div>
              <p class="text-sm font-bold text-[#545454]">Get in touch</p>
              <ul class="mt-4 space-y-3 text-sm text-[#545454]/80">
                <li class="flex items-start gap-3">
                  <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#55c624]/10 text-[#55c624]">
                    <i class="fa-solid fa-phone"></i>
                  </span>
                  <a class="mt-2 inline-block transition hover:text-[#55c624]" href="tel:+910000000000">+91 00000 00000</a>
                </li>
                <li class="flex items-start gap-3">
                  <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#55c624]/10 text-[#55c624]">
                    <i class="fa-solid fa-envelope"></i>
                  </span>
                  <a class="mt-2 inline-block transition hover:text-[#55c624]" href="mailto:support@growcommerce.in">support@growcommerce.in</a>
                </li>
                <li class="flex items-start gap-3">
                  <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#55c624]/10 text-[#55c624]">
                    <i class="fa-solid fa-location-dot"></i>
                  </span>
                  <span class="mt-2 inline-block">India</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-10 rounded-2xl border border-[#55c624]/20 bg-[#55c624]/10 p-5">
            <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div class="flex items-center gap-3">
                <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#55c624] ring-1 ring-[#545454]/10">
                  <i class="fa-solid fa-calendar-check"></i>
                </span>
                <div>
                  <p class="text-sm font-bold text-[#545454]">Book a free 30-minute strategy call</p>
                  <p class="mt-1 text-sm text-[#545454]/80">Get a marketplace roadmap tailored to your products and goals.</p>
                </div>
              </div>
              <a
                href="contact.html"
                class="inline-flex items-center justify-center gap-2 rounded-xl bg-[#55c624] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
              >
                Book Consultation
                <i class="fa-solid fa-arrow-right text-xs"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-[#545454]/10 py-6">
      <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p class="text-sm text-[#545454]/80">
          © <span id="yearNow"></span> Grow Commerce. All rights reserved.
        </p>

        <div class="flex flex-wrap items-center gap-4 text-sm">
          <a class="text-[#545454]/80 transition hover:text-[#55c624]" href="#">Privacy Policy</a>
          <a class="text-[#545454]/80 transition hover:text-[#55c624]" href="#">Terms</a>
          <a class="text-[#545454]/80 transition hover:text-[#55c624]" href="#">Refund Policy</a>
        </div>
      </div>
    </div>
  </div>

  <script>
    (function () {
      const y = document.getElementById("yearNow");
      if (y) y.textContent = String(new Date().getFullYear());
    })();
  </script>
</footer>
`;
