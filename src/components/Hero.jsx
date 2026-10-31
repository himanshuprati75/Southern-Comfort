import { Phone, ArrowRight, ShieldCheck, Clock, Award, CheckCircle2, Flame, Snowflake, Wind, Home, Wrench, Sparkles } from 'lucide-react';

export default function Hero({ onSelectIssue, onOpenCallModal }) {
  const commonIssues = [
    { id: 'ac-repair', label: 'AC Blowing Warm / Not Cooling', icon: Snowflake, tag: 'HIGH URGENCY' },
    { id: 'heatpump-issue', label: 'Heat Pump Freezing / Low Heat', icon: Wind, tag: 'POPULAR' },
    { id: 'furnace-emergency', label: 'Furnace Out / No Heat', icon: Flame, tag: 'SAFETY DISPATCH' },
    { id: 'lake-rental', label: 'Lake Gaston Rental Emergency', icon: Home, tag: 'VACATION PRIORITY' },
    { id: 'geothermal', label: 'Geothermal Loop / System Check', icon: Sparkles, tag: 'SPECIALTY' },
    { id: 'new-installation', label: 'New Carrier High-Efficiency Quote', icon: Wrench, tag: 'BEST PRICING' },
  ];

  return (
    <section className="relative bg-gradient-to-b from-comfortNavy-950 via-comfortNavy-900 to-comfortNavy-950 text-white pt-8 pb-16 sm:pb-24 overflow-hidden border-b border-comfortNavy-800">
      
      {/* Background Ambient Glows & Subtle Grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-warmOrange-600/20 via-coolCyan-500/15 to-transparent blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Status Capsule */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-slate-200 mb-6">
          <span className="w-2 h-2 rounded-full bg-warmOrange-500 animate-ping"></span>
          <span className="font-semibold text-warmOrange-300">Live Dispatch On-Call:</span>
          <span>Lake Gaston, Macon, Littleton, Warrenton & Southern VA</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Psychological Headline & Immediate Funnel (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
              Lake Gaston &amp; Southern VA’s Most Trusted{' '}
              <span className="bg-gradient-to-r from-warmOrange-400 via-warmOrange-500 to-amberGold-400 bg-clip-text text-transparent">
                HVAC Specialists.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              When humid 95°F summer heatwaves hit Lake Gaston or sub-freezing Carolina winter storms knock out your heating, downtime is unbearable. Family-owned by <strong className="text-white font-semibold">Roy &amp; Kendra Pierce</strong> in Macon, NC, Southern Comfort Heating &amp; Cooling deploys certified pros with <strong className="text-warmOrange-400 font-semibold">24/7 emergency dispatch</strong> and upfront, transparent pricing.
            </p>

            {/* Quick Issue Selector (CRO Hook: Force active engagement in <3 seconds) */}
            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-warmOrange-400"></span>
                Select your system issue for instant estimate &amp; response:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {commonIssues.map((issue) => {
                  const Icon = issue.icon;
                  return (
                    <button
                      key={issue.id}
                      onClick={() => onSelectIssue(issue.id)}
                      className="group flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-warmOrange-400/60 transition-all duration-200 text-left shadow-sm hover:shadow-md"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="p-1.5 rounded-lg bg-warmOrange-500/20 text-warmOrange-400 group-hover:bg-warmOrange-500 group-hover:text-white transition-colors shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-semibold text-slate-200 group-hover:text-white truncate">
                          {issue.label}
                        </span>
                      </div>
                      <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-white/10 text-slate-300 group-hover:bg-warmOrange-500 group-hover:text-white transition-colors shrink-0">
                        {issue.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="tel:2525862468"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-warmOrange-600 to-warmOrange-500 hover:from-warmOrange-500 hover:to-warmOrange-600 text-white font-extrabold text-base shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center gap-3 btn-emergency-glow"
              >
                <Phone className="w-5 h-5 text-white animate-bounce" />
                <span>CALL 24/7: (252) 586-2468</span>
              </a>

              <a
                href="#calculator"
                className="px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 hover:border-white/40"
              >
                <span>Calculate Repair Cost</span>
                <ArrowRight className="w-4 h-4 text-warmOrange-400" />
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-warmOrange-400 shrink-0" />
                Carrier Factory Authorized
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-warmOrange-400 shrink-0" />
                Family Owned &amp; Operated
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-warmOrange-400 shrink-0" />
                Upfront Flat-Rate Pricing
              </span>
            </div>

          </div>

          {/* Right Column: Visual Trust Hero Graphic with Badges (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Photo Card */}
              <div className="rounded-3xl overflow-hidden border-2 border-white/15 shadow-2xl bg-comfortNavy-800/80 backdrop-blur-sm relative group">
                <img 
                  src="/images/hero_tech.jpg" 
                  alt="Southern Comfort HVAC Technicians" 
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-comfortNavy-950 via-comfortNavy-950/30 to-transparent"></div>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-comfortNavy-950/90 backdrop-blur-md border border-white/15">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-bold text-warmOrange-400 uppercase tracking-wider">Macon, NC Headquarters</div>
                      <div className="text-sm font-extrabold text-white">Roy &amp; Kendra Pierce, Owners</div>
                      <div className="text-xs text-slate-300">115 Shearin Road • Lake Gaston Service Hub</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-warmOrange-500/20 border border-warmOrange-400/30 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-warmOrange-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Family Owned Badge (Top Left) */}
              <div className="absolute -top-6 -left-4 sm:-left-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full shadow-2xl animate-pulse-subtle">
                <img 
                  src="/images/badge_family.png" 
                  alt="Roy & Kendra Pierce Family Owned" 
                  className="w-full h-full object-contain filter drop-shadow-xl"
                />
              </div>

              {/* Floating Badge 2: Carrier & Geothermal Quality (Bottom Right) */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full shadow-2xl">
                <img 
                  src="/images/badge_carrier.png" 
                  alt="Carrier Factory Authorized Dealer" 
                  className="w-full h-full object-contain filter drop-shadow-xl"
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
