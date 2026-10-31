import { useState } from 'react';
import { Wind, Snowflake, Flame, Home, Sparkles, Wrench, ChevronRight, CheckCircle2, ShieldCheck, Phone } from 'lucide-react';

export default function ServicesGrid({ onSelectService, onOpenCallModal }) {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Capabilities (6)' },
    { id: 'heatpumps', label: 'Heat Pumps & Geothermal' },
    { id: 'ac', label: 'Air Conditioning' },
    { id: 'heating', label: 'Heating & Furnaces' },
    { id: 'rental', label: 'Lake Rental Priority' },
    { id: 'iaq', label: 'Air Quality & Club' },
  ];

  const services = [
    {
      id: 'heatpumps',
      serviceId: 'heatpump-issue',
      title: 'Heat Pumps & Geothermal Systems',
      tag: 'CARRIER GREENSPEED EXPERTS',
      desc: 'High-performance heat pumps and specialized ground/water-source geothermal systems designed for optimal Lake Gaston efficiency.',
      features: [
        'Carrier Factory Authorized Dealer installations',
        'Geothermal loop pressure testing & circulator repairs',
        'Dual-fuel hybrid heating optimization',
        'Sub-zero winter heat pump defrost diagnosis',
      ],
      image: '/images/geothermal.jpg',
      icon: Wind,
    },
    {
      id: 'ac',
      serviceId: 'ac-repair',
      title: 'Central Air Conditioning & Mini-Splits',
      desc: 'Rapid summer cooling diagnostics, coil replacement, and multi-zone ductless mini-splits for lakefront additions and sunrooms.',
      features: [
        'Same-day refrigerant leak detection & repair',
        'Ultra-quiet Carrier 18+ SEER2 cooling units',
        'Multi-zone mini-splits for bedrooms & docks',
        'Compressor, capacitor & contactor replacement',
      ],
      image: '/images/mini_splits.jpg',
      icon: Snowflake,
    },
    {
      id: 'heating',
      serviceId: 'furnace-emergency',
      title: 'Heating Systems & Gas Furnaces',
      desc: 'Reliable furnace installations and safety diagnostics to keep your home warm and secure during freezing winter temperature drops.',
      features: [
        'Electronic ignition & flame sensor restoration',
        'Heat exchanger cracked safety inspections',
        'Propane and natural gas heating conversions',
        'Emergency heating dispatch 24 hours a day',
      ],
      image: '/images/furnace_install.jpg',
      icon: Flame,
    },
    {
      id: 'rental',
      serviceId: 'lake-rental',
      title: 'Lake Gaston Vacation & Rental Emergency',
      desc: 'Dedicated rapid-response service for waterfront homeowners, Airbnb hosts, and VRBO managers across the Lake Gaston basin.',
      features: [
        'Priority same-day dispatch before guest check-in',
        'Remote smart Wi-Fi thermostat setup (Nest/Ecobee)',
        'Winterization freeze-prevention inspections',
        'Direct text updates to property owners',
      ],
      image: '/images/hero_tech.jpg',
      icon: Home,
    },
    {
      id: 'iaq',
      serviceId: 'ac-repair',
      title: 'Indoor Air Quality & Lakeside Dehumidifiers',
      desc: 'Whole-home moisture defense and medical-grade air filtration to prevent humidity, mold, and allergens in lakeside properties.',
      features: [
        'Whole-home Aprilaire central dehumidification',
        'UV germicidal purification & odor scrubbers',
        'High-MERV media filtration upgrades',
        'Crawlspace & duct moisture balance testing',
      ],
      image: '/images/iaq_air_cleaner.jpg',
      icon: Sparkles,
    },
    {
      id: 'iaq',
      serviceId: 'new-installation',
      title: 'Comfort Club Preventive Maintenance',
      desc: 'Bi-annual precision tune-ups that extend system lifespan, protect manufacturer warranties, and lower electric utility bills.',
      features: [
        'Comprehensive 24-point spring & fall tune-up',
        '15% discount on all parts and labor repairs',
        'Zero emergency overtime rate surcharge',
        'Front-of-the-line priority scheduling',
      ],
      image: '/images/heatpump_install.jpg',
      icon: Wrench,
    },
  ];

  const filteredServices = services.filter((s) => {
    if (activeTab === 'all') return true;
    return s.id === activeTab;
  });

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-comfortNavy-50 border border-comfortNavy-200 text-comfortNavy-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-comfortNavy-600" />
            Complete Lake Gaston &amp; Regional Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-comfortNavy-950 tracking-tight">
            Full-Spectrum HVAC &amp; Geothermal Services
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Installed and serviced by factory-certified technicians with 100% upfront pricing.
          </p>
        </div>

        {/* 6 Separated Category Tabs (User Navigation Standard) */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-full bg-slate-100 border border-slate-200 shadow-inner overflow-x-auto max-w-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-comfortNavy-900 text-white shadow-sm'
                    : 'text-slate-700 hover:text-comfortNavy-900 hover:bg-white/80'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 bg-slate-50/70 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-warmOrange-300"
              >
                <div>
                  {/* Image Header with Badge */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-comfortNavy-950/80 via-transparent to-transparent"></div>
                    
                    <span className="absolute top-3 left-3 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-comfortNavy-950/90 text-warmOrange-400 border border-white/10 backdrop-blur-sm">
                      {service.tag}
                    </span>

                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-white/95 text-comfortNavy-900 flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5 text-warmOrange-600" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-black text-comfortNavy-950 group-hover:text-warmOrange-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {service.desc}
                    </p>

                    {/* Features List */}
                    <div className="mt-4 space-y-2 pt-4 border-t border-slate-200/80">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-warmOrange-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectService(service.serviceId)}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-comfortNavy-900 hover:bg-warmOrange-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                    >
                      <span>Get Estimate</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href="tel:2525862468"
                      className="p-2.5 rounded-xl border border-slate-300 hover:border-warmOrange-500 bg-white text-slate-700 hover:text-warmOrange-600 transition-colors"
                      title="Call (252) 586-2468"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
