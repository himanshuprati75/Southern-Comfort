import { useState, useEffect } from 'react';
import { Phone, Clock, ShieldCheck, MapPin, Menu, X, ChevronRight, ChevronDown, Award, Flame, Snowflake, Wind, Home, Wrench, Sparkles } from 'lucide-react';

export default function Header({ onOpenCallModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceLinks = [
    { name: 'Heat Pumps & Geothermal', desc: 'Carrier ultra-efficient heating & cooling', href: '#services', icon: Wind },
    { name: 'Central AC & Mini-Splits', desc: 'Quiet, multi-zone Lake Gaston cooling', href: '#services', icon: Snowflake },
    { name: 'Furnaces & Heating Systems', desc: 'Gas, electric & dual-fuel comfort', href: '#services', icon: Flame },
    { name: 'Lake Gaston Rental Priority', desc: 'Same-day emergency response for vacation homes', href: '#services', icon: Home },
    { name: 'Indoor Air Quality & Filters', desc: 'Aprilaire dehumidifiers & whole-home filtration', href: '#services', icon: Sparkles },
    { name: 'Comfort Club Maintenance', desc: 'Pre-season inspections & 15% repair savings', href: '#services', icon: Wrench },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Banner: Emergency Dispatch & Lake Gaston Region */}
      <div className="bg-comfortNavy-950 text-white text-xs py-2 px-4 border-b border-comfortNavy-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
          <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-warmOrange-600/30 text-warmOrange-300 border border-warmOrange-500/40">
              <span className="w-1.5 h-1.5 rounded-full bg-warmOrange-400 animate-pulse"></span>
              24/7 EMERGENCY HVAC DISPATCH
            </span>
            <span className="text-slate-300 hidden md:inline">|</span>
            <span className="text-slate-300 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-coolCyan-400 shrink-0" />
              Serving Lake Gaston, Macon NC & Southern VA
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-300">
            <span className="hidden lg:inline flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-amberGold-400" />
              Family Owned by Roy & Kendra Pierce
            </span>
            <span className="flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-warmOrange-400" />
              Direct Emergency: <strong className="text-white font-bold ml-1">(252) 586-2468</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`bg-white/95 backdrop-blur-md border-b border-slate-200 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group shrink-0">
              <img 
                src="/images/logo.png" 
                alt="Southern Comfort Heating & Cooling" 
                className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </a>

            {/* STRICT 5 SEPARATED TABS CAPSULE CONTAINER */}
            <div className="hidden lg:flex items-center bg-slate-100/90 backdrop-blur-md p-1.5 rounded-full border border-slate-200/90 shadow-inner">
              
              {/* Tab 1: Services (with Dropdown) */}
              <div 
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${
                    servicesOpen 
                      ? 'bg-comfortNavy-900 text-white shadow-sm' 
                      : 'text-slate-700 hover:text-comfortNavy-900 hover:bg-white/80'
                  }`}
                  aria-expanded={servicesOpen}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-warmOrange-400' : 'text-slate-400'}`} />
                </button>

                {/* Dropdown Menu */}
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-3 py-2 border-b border-slate-100 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-warmOrange-600">Complete HVAC Solutions</span>
                      <p className="text-xs text-slate-500">Residential, Lakefront & Commercial</p>
                    </div>
                    <div className="space-y-1">
                      {serviceLinks.map((service, index) => {
                        const Icon = service.icon;
                        return (
                          <a
                            key={index}
                            href={service.href}
                            onClick={() => setServicesOpen(false)}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                          >
                            <div className="p-2 rounded-lg bg-comfortNavy-50 text-comfortNavy-700 group-hover:bg-warmOrange-50 group-hover:text-warmOrange-600 transition-colors shrink-0">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs font-bold text-slate-900 group-hover:text-warmOrange-600 transition-colors flex items-center justify-between">
                                <span>{service.name}</span>
                                <ChevronRight className="w-3 h-3 text-slate-300 group-hover:text-warmOrange-500 transition-transform group-hover:translate-x-0.5" />
                              </div>
                              <p className="text-[11px] text-slate-500 line-clamp-1">{service.desc}</p>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                    <div className="mt-2 pt-2 border-t border-slate-100 px-3 py-1 flex items-center justify-between text-[11px]">
                      <span className="text-slate-500">Need urgent dispatch?</span>
                      <a href="tel:2525862468" className="text-warmOrange-600 font-bold hover:underline">
                        Call (252) 586-2468
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Vertical Divider */}
              <div className="w-px h-4 bg-slate-300/80 mx-0.5"></div>

              {/* Tab 2: Pricing (with LIVE badge) */}
              <a
                href="#calculator"
                className="px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 text-slate-700 hover:text-comfortNavy-900 hover:bg-white/80 whitespace-nowrap flex items-center gap-1.5"
              >
                <span>Pricing</span>
                <span className="px-1.5 py-0.5 rounded-full text-[9px] font-extrabold bg-warmOrange-500 text-white tracking-widest shadow-xs">
                  LIVE
                </span>
              </a>

              {/* Vertical Divider */}
              <div className="w-px h-4 bg-slate-300/80 mx-0.5"></div>

              {/* Tab 3: Real Work (Gallery) */}
              <a
                href="#craftsmanship"
                className="px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 text-slate-700 hover:text-comfortNavy-900 hover:bg-white/80 whitespace-nowrap"
              >
                Real Work
              </a>

              {/* Vertical Divider */}
              <div className="w-px h-4 bg-slate-300/80 mx-0.5"></div>

              {/* Tab 4: About Us */}
              <a
                href="#about"
                className="px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 text-slate-700 hover:text-comfortNavy-900 hover:bg-white/80 whitespace-nowrap"
              >
                About Us
              </a>

              {/* Vertical Divider */}
              <div className="w-px h-4 bg-slate-300/80 mx-0.5"></div>

              {/* Tab 5: Reviews */}
              <a
                href="#reviews"
                className="px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 text-slate-700 hover:text-comfortNavy-900 hover:bg-white/80 whitespace-nowrap"
              >
                Reviews
              </a>
            </div>

            {/* Direct Emergency Phone & Dispatch Action */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="tel:2525862468"
                className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl hover:bg-slate-100/90 transition-all group"
                title="Call (252) 586-2468 immediately"
              >
                <div className="w-8 h-8 rounded-full bg-warmOrange-100 group-hover:bg-warmOrange-600 flex items-center justify-center transition-colors shadow-sm">
                  <Phone className="w-4 h-4 text-warmOrange-600 group-hover:text-white transition-colors" />
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-warmOrange-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-warmOrange-500 animate-ping"></span>
                    Book a Call Now
                  </span>
                  <span className="text-sm md:text-base font-extrabold text-comfortNavy-950 group-hover:text-warmOrange-600 transition-colors whitespace-nowrap">
                    (252) 586-2468
                  </span>
                </div>
              </a>

              <button
                onClick={onOpenCallModal}
                className="px-5 py-2.5 rounded-full text-xs font-bold tracking-wide text-white bg-gradient-to-r from-warmOrange-600 to-warmOrange-500 hover:from-warmOrange-500 hover:to-warmOrange-600 shadow-md hover:shadow-lg transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 btn-emergency-glow"
              >
                <span>Request Dispatch</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href="tel:2525862468"
                className="p-2 rounded-full bg-warmOrange-50 text-warmOrange-600 border border-warmOrange-200"
                aria-label="Call Emergency Line"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:text-comfortNavy-900 hover:bg-slate-100 transition-colors"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-lg px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="grid grid-cols-2 gap-2">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-comfortNavy-950 hover:bg-warmOrange-50 hover:border-warmOrange-200 transition-colors"
              >
                <Wind className="w-4 h-4 text-warmOrange-600" />
                <span>Services</span>
              </a>
              <a
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-comfortNavy-950 hover:bg-warmOrange-50 hover:border-warmOrange-200 transition-colors"
              >
                <span className="flex items-center gap-2.5">
                  <Flame className="w-4 h-4 text-warmOrange-600" />
                  <span>Pricing</span>
                </span>
                <span className="px-1.5 py-0.5 rounded-full text-[9px] font-extrabold bg-warmOrange-500 text-white">LIVE</span>
              </a>
              <a
                href="#craftsmanship"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-comfortNavy-950 hover:bg-warmOrange-50 hover:border-warmOrange-200 transition-colors"
              >
                <Award className="w-4 h-4 text-coolCyan-600" />
                <span>Real Work</span>
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-comfortNavy-950 hover:bg-warmOrange-50 hover:border-warmOrange-200 transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-amberGold-600" />
                <span>About Us</span>
              </a>
            </div>

            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-comfortNavy-950 hover:bg-slate-100 transition-colors"
            >
              <span>★ ★ ★ ★ ★ Verified Local Reviews</span>
            </a>

            {/* Direct Call Mobile Action */}
            <div className="pt-2">
              <a
                href="tel:2525862468"
                className="w-full py-3.5 px-4 rounded-xl bg-warmOrange-600 hover:bg-warmOrange-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg btn-emergency-glow"
              >
                <Phone className="w-4 h-4" />
                <span>CALL 24/7 EMERGENCY: (252) 586-2468</span>
              </a>
              <p className="text-[11px] text-center text-slate-500 mt-2">
                115 Shearin Road, Macon, NC 27551 • Roy & Kendra Pierce
              </p>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
