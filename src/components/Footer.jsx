import { Phone, Mail, MapPin, Clock, ShieldCheck, Award, HeartHandshake } from 'lucide-react';

export default function Footer({ onOpenCallModal }) {
  return (
    <footer className="bg-comfortNavy-950 text-slate-300 pt-16 pb-28 sm:pb-16 border-t border-comfortNavy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-comfortNavy-800">
          
          {/* Col 1: Brand & NAP (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <img 
              src="/images/logo.png" 
              alt="Southern Comfort Heating & Cooling" 
              className="h-14 w-auto object-contain brightness-110"
            />
            
            <p className="text-xs text-slate-400 leading-relaxed">
              Southern Comfort Heating &amp; Cooling is a family-owned HVAC contractor operated by <strong className="text-white">Roy &amp; Kendra Pierce</strong>. We deliver 24/7 emergency air conditioning, heat pump, geothermal, and furnace services across Lake Gaston, Northern North Carolina, and Southern Virginia.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-warmOrange-500 shrink-0 mt-0.5" />
                <span>115 Shearin Road, Macon, NC 27551</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-warmOrange-500 shrink-0" />
                <a href="tel:2525862468" className="text-white font-bold hover:text-warmOrange-400 transition-colors">
                  (252) 586-2468
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-warmOrange-500 shrink-0" />
                <a href="mailto:southerncomfort.heatandcool@gmail.com" className="hover:text-white transition-colors">
                  southerncomfort.heatandcool@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Services Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Heat Pumps &amp; Geothermal Systems
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Central AC &amp; Ductless Mini-Splits
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Gas Furnaces &amp; Dual Fuel Heating
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Lake Gaston Vacation Rental Priority
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Aprilaire Lakeside Dehumidification
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Comfort Club Maintenance Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Areas (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Regional Coverage
            </h4>
            <div className="text-xs text-slate-400 space-y-1.5">
              <div>• Lake Gaston (North &amp; South Shores)</div>
              <div>• Macon &amp; Littleton, NC</div>
              <div>• Warrenton &amp; Norlina, NC</div>
              <div>• Henrico &amp; Roanoke Rapids, NC</div>
              <div>• South Hill &amp; Bracey, VA</div>
              <div>• Lawrenceville &amp; Emporia, VA</div>
              <div className="pt-2">
                <a href="#service-areas" className="text-warmOrange-400 font-bold hover:underline">
                  View Full Coverage Matrix &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Dispatch Hours & Certifications (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Emergency Hours
            </h4>
            <div className="p-3 rounded-xl bg-comfortNavy-900 border border-comfortNavy-800 text-[11px] space-y-1.5">
              <div className="font-bold text-warmOrange-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                24/7/365 On-Call
              </div>
              <p className="text-slate-400">Regular: Mon-Fri 8am - 5pm</p>
              <p className="text-slate-400">Emergency: 24h Day &amp; Night</p>
            </div>

            <div className="pt-1 flex flex-col gap-1.5 text-[11px]">
              <span className="inline-flex items-center gap-1 text-slate-300">
                <Award className="w-3.5 h-3.5 text-amberGold-400" />
                Carrier Factory Authorized
              </span>
              <span className="inline-flex items-center gap-1 text-slate-300">
                <HeartHandshake className="w-3.5 h-3.5 text-warmOrange-400" />
                Family Owned &amp; Operated
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Southern Comfort Heating &amp; Cooling, LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:2525862468" className="hover:text-slate-300 transition-colors">
              Phone: (252) 586-2468
            </a>
            <span>•</span>
            <a href="mailto:southerncomfort.heatandcool@gmail.com" className="hover:text-slate-300 transition-colors">
              southerncomfort.heatandcool@gmail.com
            </a>
            <span>•</span>
            <span>115 Shearin Rd, Macon, NC 27551</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
