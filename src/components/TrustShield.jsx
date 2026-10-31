import { ShieldCheck, Award, Clock, DollarSign, CheckCircle2, HeartHandshake, Wrench, Home } from 'lucide-react';

export default function TrustShield({ onOpenCallModal }) {
  const pillars = [
    {
      icon: Award,
      title: 'Carrier Factory Authorized',
      badge: 'FACTORY CERTIFIED',
      desc: 'Factory-trained technicians installing top-tier Carrier heat pumps, ACs, and geothermal systems backed by manufacturer warranties.',
      highlight: '100% Satisfaction Guarantee',
    },
    {
      icon: HeartHandshake,
      title: 'Family Owned & Operated',
      badge: 'ROY & KENDRA PIERCE',
      desc: 'Based locally in Macon, NC. You work directly with an accountable, family-owned team with genuine Lake Gaston community pride.',
      highlight: 'Serving NC & Southern VA',
    },
    {
      icon: Clock,
      title: '24/7 Emergency Dispatch',
      badge: 'DAY OR NIGHT',
      desc: 'Immediate emergency routing when your heating quits in freezing weather or vacation rental AC fails on busy summer weekends.',
      highlight: 'Rapid Response Times',
    },
    {
      icon: DollarSign,
      title: 'Upfront Flat-Rate Pricing',
      badge: 'ZERO SURPRISES',
      desc: 'Clear diagnostics and guaranteed quotes upfront before any work begins. No hidden overtime fees or unexpected travel charges.',
      highlight: 'Transparent Written Quotes',
    },
  ];

  return (
    <section className="bg-slate-900 text-white py-12 sm:py-16 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-warmOrange-500/20 text-warmOrange-400 text-xs font-bold uppercase tracking-wider mb-3 border border-warmOrange-500/30">
            <ShieldCheck className="w-4 h-4" />
            The Southern Comfort Standard of Excellence
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Why Lake Gaston Homeowners &amp; Businesses Trust Us First
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Engineered comfort, master-level craftsmanship, and family values on every service call.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-warmOrange-500/50 hover:bg-slate-800 transition-all duration-200 flex flex-col justify-between group shadow-sm hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-warmOrange-500/20 text-warmOrange-400 border border-warmOrange-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-700 text-slate-300">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-warmOrange-400 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700 flex items-center gap-2 text-xs font-semibold text-warmOrange-400">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{pillar.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-comfortNavy-950 to-slate-900 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-warmOrange-500/20 text-warmOrange-400 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Emergency Dispatchers Standing By 24/7/365</div>
              <div className="text-xs text-slate-400">Direct phone line: 115 Shearin Road, Macon, NC 27551</div>
            </div>
          </div>

          <a
            href="tel:2525862468"
            className="px-6 py-2.5 rounded-full bg-warmOrange-600 hover:bg-warmOrange-500 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 whitespace-nowrap btn-emergency-glow"
          >
            Call (252) 586-2468 Now
          </a>
        </div>

      </div>
    </section>
  );
}
