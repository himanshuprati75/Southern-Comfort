import { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck, DollarSign, Clock, Zap, CheckCircle2, AlertCircle, Sparkles, Flame, Snowflake, Wind, Home, Wrench } from 'lucide-react';

export default function CostCalculator({ selectedIssue, onSelectIssue, onLockInQuote }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedService, setSelectedService] = useState('ac-repair');
  const [homeSize, setHomeSize] = useState('medium');
  const [urgency, setUrgency] = useState('standard');

  const categories = [
    { id: 'all', label: 'All Services (6)' },
    { id: 'ac', label: 'Air Conditioning' },
    { id: 'heatpumps', label: 'Heat Pumps & Geothermal' },
    { id: 'heating', label: 'Heating & Furnaces' },
    { id: 'rental', label: 'Lake Rental Emergency' },
  ];

  const servicesData = {
    'ac-repair': {
      category: 'ac',
      title: 'AC Diagnostic & Emergency Repair',
      desc: 'Comprehensive refrigerant leak check, capacitor, contactor, and motor restoration.',
      baseRange: { standard: '$149 - $320', emergency: '$189 - $395' },
      eta: '45 - 90 mins',
      savings: 'Restores 100% cooling capacity immediately',
      icon: Snowflake,
    },
    'heatpump-issue': {
      category: 'heatpumps',
      title: 'Heat Pump Defrost & Reversing Valve Repair',
      desc: 'Full diagnostic on frozen outdoor coils, auxiliary heat strips, and refrigerant charge.',
      baseRange: { standard: '$180 - $440', emergency: '$240 - $550' },
      eta: '60 - 90 mins',
      savings: 'Cuts auxiliary electric strip overload by up to 40%',
      icon: Wind,
    },
    'furnace-emergency': {
      category: 'heating',
      title: 'Furnace & Gas Heating Diagnostic',
      desc: 'Heat exchanger safety inspection, flame sensor, ignitor, and gas valve repair.',
      baseRange: { standard: '$149 - $340', emergency: '$195 - $420' },
      eta: '45 - 75 mins',
      savings: 'Ensures carbon monoxide safety & restores warm air',
      icon: Flame,
    },
    'lake-rental': {
      category: 'rental',
      title: 'Lake Gaston Rental Priority Dispatch',
      desc: 'Rapid Airbnb/VRBO emergency triage to prevent tenant cancellations and bad reviews.',
      baseRange: { standard: '$195 - $450', emergency: '$245 - $580' },
      eta: '30 - 60 mins Priority',
      savings: 'Protects thousands in summer vacation rental revenue',
      icon: Home,
    },
    'geothermal': {
      category: 'heatpumps',
      title: 'Geothermal Loop & Heat Pump Service',
      desc: 'Specialized check on closed-loop pressure, ground heat exchange, and circulating pumps.',
      baseRange: { standard: '$220 - $520', emergency: '$280 - $650' },
      eta: 'Same-day booking',
      savings: 'Ultra-low operating costs, saving up to 60% vs electric heat',
      icon: Sparkles,
    },
    'new-installation': {
      category: 'all',
      title: 'New Carrier High-Efficiency System Install',
      desc: 'Complete turnkey installation of ultra-quiet Carrier heat pump or dual-fuel system.',
      baseRange: { standard: '$6,800 - $12,500', emergency: 'Free On-Site Estimate' },
      eta: '1-2 day turnaround',
      savings: 'Up to 35% reduction on monthly electric bills + tax credits',
      icon: Wrench,
    },
  };

  const currentService = servicesData[selectedService] || servicesData['ac-repair'];

  const filteredServices = Object.entries(servicesData).filter(([key, val]) => {
    if (activeCategory === 'all') return true;
    return val.category === activeCategory;
  });

  const handleServiceSelect = (key) => {
    setSelectedService(key);
    onSelectIssue(key);
  };

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-warmOrange-50 border border-warmOrange-200 text-warmOrange-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-4 h-4 text-warmOrange-600" />
            Transparent Pricing Engine
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-comfortNavy-950 tracking-tight">
            Instant HVAC Cost &amp; Response Estimator
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            See realistic Lake Gaston &amp; Southern VA service pricing before you share any contact information.
          </p>
        </div>

        {/* 5 Separated Category Tabs (User Navigation Mandate) */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-full bg-slate-200/90 border border-slate-300/80 shadow-inner overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-comfortNavy-900 text-white shadow-sm'
                    : 'text-slate-700 hover:text-comfortNavy-900 hover:bg-white/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Service Selector & Options (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Service Selection Cards */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  Step 1: Choose Your HVAC Need
                </span>
                <span className="text-xs font-bold text-warmOrange-600">
                  {filteredServices.length} options available
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredServices.map(([key, item]) => {
                  const Icon = item.icon;
                  const isSelected = selectedService === key;
                  return (
                    <button
                      key={key}
                      onClick={() => handleServiceSelect(key)}
                      className={`p-3.5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between group ${
                        isSelected
                          ? 'bg-warmOrange-50/70 border-warmOrange-500 ring-2 ring-warmOrange-500/20 shadow-sm'
                          : 'bg-slate-50/70 border-slate-200 hover:border-slate-300 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        <div className={`p-2 rounded-xl transition-colors shrink-0 ${
                          isSelected 
                            ? 'bg-warmOrange-500 text-white' 
                            : 'bg-white text-slate-700 group-hover:text-warmOrange-600 border border-slate-200'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <h4 className={`text-xs font-bold leading-snug ${isSelected ? 'text-warmOrange-950' : 'text-slate-900'}`}>
                            {item.title}
                          </h4>
                          <p className="text-[11px] text-slate-500 line-clamp-2 mt-1">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                      
                      <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
                        <span className="text-slate-500 font-medium">Est. Range:</span>
                        <span className="font-extrabold text-comfortNavy-900">
                          {item.baseRange.standard}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Home Size & Urgency Configuration */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Home Size */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  Step 2: Home / Facility Size
                </span>
                <div className="space-y-2">
                  {[
                    { id: 'small', label: 'Under 1,500 sq ft', desc: 'Single-zone cottage / lake cabin' },
                    { id: 'medium', label: '1,500 - 2,800 sq ft', desc: 'Standard family residence' },
                    { id: 'large', label: '2,800+ sq ft / Commercial', desc: 'Multi-zone lakefront or commercial' },
                  ].map((size) => (
                    <button
                      key={size.id}
                      onClick={() => setHomeSize(size.id)}
                      className={`w-full p-2.5 rounded-xl border text-left text-xs transition-colors flex items-center justify-between ${
                        homeSize === size.id
                          ? 'bg-comfortNavy-50 border-comfortNavy-600 font-bold text-comfortNavy-950'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-white'
                      }`}
                    >
                      <span>{size.label}</span>
                      <span className="text-[10px] text-slate-400">{size.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Urgency Level */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  Step 3: Response Urgency
                </span>
                <div className="space-y-2">
                  {[
                    { id: 'standard', label: 'Standard Appointment', badge: 'NEXT AVAILABLE' },
                    { id: 'emergency', label: '24/7 Immediate Emergency', badge: 'PRIORITY TRUCK' },
                  ].map((u) => (
                    <button
                      key={u.id}
                      onClick={() => setUrgency(u.id)}
                      className={`w-full p-2.5 rounded-xl border text-left text-xs transition-colors flex items-center justify-between ${
                        urgency === u.id
                          ? 'bg-warmOrange-50 border-warmOrange-500 font-bold text-warmOrange-950'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-white'
                      }`}
                    >
                      <span>{u.label}</span>
                      <span className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded ${
                        urgency === u.id ? 'bg-warmOrange-600 text-white' : 'bg-slate-200 text-slate-600'
                      }`}>
                        {u.badge}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Output Card & Reciprocity Lock-in (5 cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-comfortNavy-950 rounded-3xl p-6 sm:p-8 text-white border-2 border-comfortNavy-800 shadow-2xl relative overflow-hidden">
              
              {/* Decorative Accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-warmOrange-600/30 via-coolCyan-500/20 to-transparent blur-2xl pointer-events-none"></div>

              <div className="relative z-10 space-y-6">
                
                <div className="flex items-center justify-between pb-4 border-b border-comfortNavy-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-warmOrange-500 animate-pulse"></span>
                    <span className="text-xs font-bold uppercase tracking-wider text-warmOrange-400">
                      Live Estimate Output
                    </span>
                  </div>
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                    NO STRINGS ATTACHED
                  </span>
                </div>

                {/* Selected Service Title */}
                <div>
                  <h3 className="text-xl font-black text-white leading-tight">
                    {currentService.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    {currentService.desc}
                  </p>
                </div>

                {/* Price Display */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-xs text-slate-400 font-medium">Estimated Pricing Window:</div>
                  <div className="text-3xl sm:text-4xl font-black text-warmOrange-400 mt-1">
                    {urgency === 'emergency' ? currentService.baseRange.emergency : currentService.baseRange.standard}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-warmOrange-400 shrink-0" />
                    Includes on-site diagnostic &amp; upfront written price guarantee
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-warmOrange-400" />
                      Arrival Window:
                    </div>
                    <div className="font-bold text-white mt-1">
                      {currentService.eta}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-slate-400 flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-coolCyan-400" />
                      Efficiency Gain:
                    </div>
                    <div className="font-bold text-white mt-1 truncate">
                      Peak Performance
                    </div>
                  </div>
                </div>

                {/* Web Voucher Courtesy Callout */}
                <div className="p-3.5 rounded-xl bg-warmOrange-500/20 border border-warmOrange-500/40 text-xs text-slate-200">
                  <div className="font-bold text-warmOrange-300 flex items-center gap-1.5 mb-1">
                    <Sparkles className="w-4 h-4 text-warmOrange-400" />
                    Web Courtesy Credit Applied: -$50.00 OFF
                  </div>
                  <div className="text-[11px] text-slate-300">
                    Claim voucher code <strong className="text-white">SOUTHERN50-COMFORT</strong> on the dispatch ticket below.
                  </div>
                </div>

                {/* Lock In Button (Reciprocity Transition) */}
                <button
                  onClick={() => onLockInQuote(selectedService)}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-warmOrange-600 to-warmOrange-500 hover:from-warmOrange-500 hover:to-warmOrange-600 text-white font-extrabold text-sm shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center gap-2 btn-emergency-glow"
                >
                  <span>Lock In $50 Voucher &amp; Dispatch Tech</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[10px] text-center text-slate-400">
                  Or call directly for immediate emergency dispatch: <a href="tel:2525862468" className="text-warmOrange-400 font-bold hover:underline">(252) 586-2468</a>
                </p>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
