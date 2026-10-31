# Southern Comfort Heating & Cooling, LLC — Codebase & UX Architecture Audit

## 1. GLOBAL STYLING & COLOR PSYCHOLOGY
- **Brand & Target Market**:
  - Business Name: **Southern Comfort Heating & Cooling, LLC**
  - Website Domain: `https://www.southerncomforthac.com/`
  - Physical Headquarters / NAP: **115 Shearin Road, Macon, NC 27551**
  - 24/7 Live Emergency Line: **(252) 586-2468**
  - Direct Business Email: **southerncomfort.heatandcool@gmail.com**
  - Ownership: **Roy & Kendra Pierce, Owners** (Family-Owned & Locally Operated)
  - Primary Service Region: Lake Gaston (North & South Shores), Macon, Littleton, Warrenton, Norlina, Henderson, Roanoke Rapids, Gaston, Henrico, Weldon, and Southern Virginia communities (South Hill, Lawrenceville, Emporia, Bracey, Ebony).
  - Industry Credentials: **Carrier Factory Authorized Dealer**, Geothermal Specialists, Aprilaire Indoor Air Quality Certified.
- **Curated Color Palette**:
  - `comfortNavy-900` / `comfortNavy-950` (`#0f2942` / `#091b2c`): Deep lake navy blue establishing local authority, cooling trust, and architectural contrast.
  - `warmOrange-600` / `warmOrange-500` (`#ea580c` / `#f97316`): Southern heat emergency orange representing immediate 24/7 heating dispatch and conversion energy.
  - `coolCyan-600` / `coolCyan-400` (`#0284c7` / `#38bdf8`): Coastal air conditioning chill and geothermal eco-efficiency.
  - `carrierBlue` (`#0054a6`): Authentic Carrier Factory Authorized Dealer certification.
  - `amberGold-500` (`#f59e0b`): 5-star customer review ratings and community craftsmanship accents.

---

## 2. PROFESSIONAL 4-TO-5 SEPARATED TABS ARCHITECTURE (Core Standard)
- **Strict Navigation Rule**:
  - Top navigation bars must never feature cluttered or wrapped text links. They are strictly limited to **4 to 5 clean, distinct, separated tabs** inside an elevated capsule pill container.
- **Header Separated Pill Tab System (`Header.jsx`)**:
  - **Container**: Elevated capsule pill container (`bg-slate-100/90 backdrop-blur-md p-1.5 rounded-full border border-slate-200/90 shadow-inner flex items-center`).
  - **Tabs (Strictly 5)**:
    1. **Services** (with interactive dropdown containing 6 core commercial capabilities: Heat Pumps & Geothermal, Central AC & Mini-Splits, Furnaces & Heating Systems, Lake Gaston Rental Priority, Indoor Air Quality & Dehumidifiers, Comfort Club Maintenance).
    2. **Pricing** (with subtle `LIVE` pill badge, linking to `#calculator`).
    3. **Real Work** (linking to `#craftsmanship`).
    4. **About Us** (linking to `#about`).
    5. **Reviews** (linking to `#reviews`).
  - **Separation & Spacing**:
    - Each tab is rendered as an individually padded rounded pill with discrete vertical dividers (`w-px h-4 bg-slate-300/80`).
    - Every tab enforces `whitespace-nowrap` to guarantee zero text wrapping on all desktop viewports.
    - Emergency dispatch phone number `(252) 586-2468` is locked to a single line with generous breathing room and click-to-call modal trigger.
- **Services Section Separated Tabs (`ServicesGrid.jsx`)**:
  - Interactive 6-tab filter bar: `[All Capabilities (6)]` `[Heat Pumps & Geothermal]` `[Air Conditioning]` `[Heating & Furnaces]` `[Lake Rental Priority]` `[Air Quality & Club]`.
- **Cost Calculator Category Filter Tabs (`CostCalculator.jsx`)**:
  - Segmented category tabs: `[All Services (6)]` `[Air Conditioning]` `[Heat Pumps & Geothermal]` `[Heating & Furnaces]` `[Lake Rental Emergency]`.

---

## 3. MOBILE-FIRST ARCHITECTURE (Crucial)
- **Mobile Menu Drawer**:
  - Replaces messy text lists with **6 separated card buttons** with category icons, live status badges, and direct emergency dispatch links.
- **Sticky Bottom Lifeline CTA (`MobileStickyCTA.jsx`)**:
  - Fixed to viewport bottom on screens `< 768px` (`fixed bottom-0 left-0 right-0 z-40`).
  - Implements safe-area inset padding (`pb-[max(0.75rem,env(safe-area-inset-bottom))]`) for bezel-less devices.
  - Features a prominent 1-tap `CALL (252) 586-2468` button with emergency pulse animation alongside a direct `$50 OFF` dispatch credit button linking directly to the synchronized lead form.

---

## 4. HIGH-CONVERTING RECIPROCITY SEQUENCE
- **Step 1 — Immediate Calming & Problem Identification (`Hero.jsx`)**:
  - 3-second hook delivering instant trust: *"Lake Gaston & Southern VA's Most Trusted HVAC Specialists. Fast 24/7 Emergency AC & Heating."*
  - Quick-dispatch issue selector allowing homeowners and vacation rental hosts to select their specific equipment failure.
- **Step 2 — 4-Pillar Authority Shield (`TrustShield.jsx`)**:
  - Carrier Factory Authorized Dealer, Family-Owned by Roy & Kendra Pierce, 24/7/365 Emergency Dispatch, Upfront Flat-Rate Pricing.
- **Step 3 — Value-First Reciprocity Engine (`CostCalculator.jsx`)**:
  - Homeowners see transparent repair and installation ranges, estimated arrival times, and typical seasonal savings before entering contact information.
- **Step 4 — State-Synchronized Lead Capture (`LeadCaptureForm.jsx`)**:
  - Pre-populates selected mechanical priority from Hero or Cost Calculator.
  - Automatically activates web courtesy discount: `-$50.00 OFF Instant Dispatch Voucher` (`CODE: SOUTHERN50-COMFORT`).
  - Directs inquiries to explicit email: `southerncomfort.heatandcool@gmail.com`.
  - Realistic dispatch confirmation ticket generator (`SC-NC-XXXX`) with 15-minute response window and 1-tap emergency line.

---

## 5. BUILD & VERIFICATION STATUS
- **Production Build**: `npm run build` completed with exit code `0`.
- **Distribution Artifacts**:
  - `dist/index.html` (3.41 kB)
  - `dist/assets/index-ggLRgAM0.css` (41.50 kB)
  - `dist/assets/index-BFNOTVmN.js` (248.68 kB)
- **Live Local Verification**: Running on `http://localhost:3005/` across desktop (1440x900) and mobile (375x667) viewports with browser subagent visual capture.
