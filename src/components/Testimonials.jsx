import { Star, CheckCircle2, MapPin, Quote, ShieldCheck } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Mark & Brenda T.',
      location: 'Lake Gaston (Littleton, NC)',
      service: 'Emergency Vacation Rental AC Restore',
      date: 'Summer Peak Season',
      rating: 5,
      text: 'Our waterfront vacation rental’s AC died on a sweltering 96°F Friday afternoon with 8 guests checking in within 3 hours. Roy and his technician were on-site in 40 minutes, replaced a blown dual capacitor, and had freezing air blowing before the guests pulled into the driveway. Total lifesavers!',
    },
    {
      name: 'Carl W.',
      location: 'Macon, NC',
      service: 'Carrier High-Efficiency Heat Pump Install',
      date: 'Verified Homeowner',
      rating: 5,
      text: 'Southern Comfort replaced our 15-year-old clunker with a new Carrier heat pump system. Our electric bills dropped by nearly $130 a month right away. The installation was textbook clean, completed in one day with upfront written pricing. Best HVAC company in the region.',
    },
    {
      name: 'Jennifer S.',
      location: 'Henrico, NC',
      service: 'Aprilaire Central Lakeside Dehumidifier',
      date: 'Lakefront Resident',
      rating: 5,
      text: 'Living right on Lake Gaston, summer humidity was causing musty smells and hardwood cupping. Southern Comfort installed an Aprilaire central dehumidification unit with smart controls. The air feels crisp and fresh, and we can run the AC at 74°F and feel colder than 68°F before.',
    },
    {
      name: 'Robert D.',
      location: 'South Hill, VA',
      service: 'Emergency Sunday Heating Repair',
      date: 'Sub-Zero Freeze',
      rating: 5,
      text: 'Our furnace refused to fire up on a Sunday morning during a nasty ice storm. A real live dispatcher answered immediately, and a technician arrived with the right factory ignition assembly right on his truck. You can’t beat Roy & Kendra’s family-owned dedication.',
    },
  ];

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-200">
            <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            Verified Customer Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-comfortNavy-950 tracking-tight">
            Trusted by Hundreds of Local Families &amp; Rental Hosts
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Read real, unfiltered experiences from homeowners across Lake Gaston, North Carolina, and Southern Virginia.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {rev.date}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-comfortNavy-950">{rev.name}</h4>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500">
                    <MapPin className="w-3 h-3 text-warmOrange-500" />
                    <span>{rev.location}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    VERIFIED SERVICE
                  </span>
                  <div className="text-[10px] text-slate-400 mt-0.5">{rev.service}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregated Rating Strip */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber-400" />
              ))}
            </div>
            <div>
              <div className="text-sm font-black text-comfortNavy-950">4.9 / 5.0 Average Customer Rating</div>
              <div className="text-xs text-slate-500">Serving Macon, Littleton, Warrenton, Lake Gaston &amp; Southern VA</div>
            </div>
          </div>

          <a
            href="tel:2525862468"
            className="text-xs font-bold text-warmOrange-600 hover:text-warmOrange-700 hover:underline flex items-center gap-1"
          >
            <span>Have a question? Speak with Roy &amp; Kendra directly &rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}
