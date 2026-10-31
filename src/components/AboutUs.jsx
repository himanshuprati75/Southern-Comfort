import { Award, ShieldCheck, HeartHandshake, CheckCircle2, Wrench, Users, PhoneCall, Building2, MapPin, Clock } from 'lucide-react';

export default function AboutUs({ onOpenCallModal }) {
  return (
    <section id="about" className="bg-white py-16 sm:py-24 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Story & Badges (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl group">
              <img 
                src="/images/team_crew.jpg" 
                alt="Southern Comfort Heating & Cooling Service Team" 
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-comfortNavy-950 via-comfortNavy-950/30 to-transparent"></div>

              {/* Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-comfortNavy-950/90 backdrop-blur-md border border-white/10 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-warmOrange-400">Founded on Family Trust</span>
                    <h4 className="text-sm font-extrabold text-white">Roy &amp; Kendra Pierce, Owners</h4>
                    <p className="text-[11px] text-slate-300">115 Shearin Road, Macon, NC 27551</p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-warmOrange-500/20 text-warmOrange-400 flex items-center justify-center">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Micro Pillars */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="text-xl font-black text-warmOrange-600">100%</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase mt-0.5">Satisfaction</div>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="text-xl font-black text-comfortNavy-950">24/7</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase mt-0.5">Emergency</div>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="text-xl font-black text-warmOrange-600">Carrier</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase mt-0.5">Authorized</div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-warmOrange-50 text-warmOrange-700 text-xs font-bold uppercase tracking-wider border border-warmOrange-200">
              <ShieldCheck className="w-4 h-4 text-warmOrange-600" />
              Our Story &amp; Community Commitment
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-comfortNavy-950 tracking-tight leading-tight">
              Genuine Southern Hospitality Meets Precision Mechanical Engineering
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                Founded and operated by <strong className="text-comfortNavy-950 font-bold">Roy &amp; Kendra Pierce</strong>, Southern Comfort Heating &amp; Cooling was built on a simple conviction: when homeowners and business operators in the Lake Gaston region call for heating or air conditioning service, they deserve honest answers, master-level craftsmanship, and upfront pricing.
              </p>
              <p>
                From waterfront vacation homes facing heavy lakeside humidity in Littleton and Henrico, to historic family residences in Macon and Warrenton, our certified technicians understand the distinct climate demands of Northern North Carolina and Southern Virginia.
              </p>
              <p>
                As a recognized <strong className="text-comfortNavy-950 font-bold">Carrier Factory Authorized Dealer</strong>, our technicians undergo rigorous ongoing factory training on high-SEER2 inverter heat pumps, geothermal ground-source loops, dual-fuel furnaces, and whole-home Aprilaire indoor air quality systems.
              </p>
            </div>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <Award className="w-5 h-5 text-warmOrange-600 mb-1.5" />
                <h4 className="text-xs font-bold text-comfortNavy-950 uppercase">Carrier Factory Certified</h4>
                <p className="text-[11px] text-slate-500 mt-1">Backed by full manufacturer warranties and 100% satisfaction guarantees.</p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <HeartHandshake className="w-5 h-5 text-warmOrange-600 mb-1.5" />
                <h4 className="text-xs font-bold text-comfortNavy-950 uppercase">Local Accountability</h4>
                <p className="text-[11px] text-slate-500 mt-1">Zero corporate franchise runarounds. You deal directly with our local team.</p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <Clock className="w-5 h-5 text-warmOrange-600 mb-1.5" />
                <h4 className="text-xs font-bold text-comfortNavy-950 uppercase">24/7/365 On-Call</h4>
                <p className="text-[11px] text-slate-500 mt-1">Live dispatchers standing by day and night for emergency heating and AC failures.</p>
              </div>
            </div>

            {/* Direct Contact Bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="tel:2525862468"
                className="px-6 py-3 rounded-full bg-warmOrange-600 hover:bg-warmOrange-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Roy &amp; Kendra’s Team: (252) 586-2468</span>
              </a>

              <a
                href="mailto:southerncomfort.heatandcool@gmail.com"
                className="text-xs font-bold text-slate-700 hover:text-warmOrange-600 underline flex items-center gap-1.5"
              >
                <span>southerncomfort.heatandcool@gmail.com</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
