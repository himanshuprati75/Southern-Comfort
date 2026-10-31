import { useState } from 'react';
import { MapPin, Search, CheckCircle2, Navigation, Clock, Phone } from 'lucide-react';

export default function ServiceAreas({ onOpenCallModal }) {
  const [searchQuery, setSearchQuery] = useState('');

  const areas = [
    { name: 'Macon, NC', county: 'Warren County (HQ Hub)', zip: '27551', response: '15 - 30 mins', tag: 'PRIMARY HQ' },
    { name: 'Lake Gaston (All Shores)', county: 'Warren / Halifax / Northampton / Mecklenburg', zip: '27850', response: '20 - 40 mins', tag: 'WATERFRONT PRIORITY' },
    { name: 'Littleton, NC', county: 'Halifax & Warren County', zip: '27850', response: '20 - 35 mins', tag: 'RAPID DISPATCH' },
    { name: 'Warrenton, NC', county: 'Warren County Seat', zip: '27589', response: '25 - 45 mins', tag: 'SCHEDULED & 24/7' },
    { name: 'Henrico, NC', county: 'Northampton County (East Lake)', zip: '27842', response: '25 - 45 mins', tag: 'WATERFRONT HUB' },
    { name: 'Roanoke Rapids, NC', county: 'Halifax County', zip: '27870', response: '30 - 50 mins', tag: 'COMMERCIAL & RES' },
    { name: 'Gaston, NC', county: 'Northampton County', zip: '27832', response: '25 - 45 mins', tag: 'FULL COVERAGE' },
    { name: 'Norlina, NC', county: 'Warren County', zip: '27563', response: '20 - 35 mins', tag: 'FULL COVERAGE' },
    { name: 'Henderson, NC', county: 'Vance County', zip: '27536', response: '35 - 55 mins', tag: 'SERVICE ROUTE' },
    { name: 'South Hill, VA', county: 'Mecklenburg County, VA', zip: '23970', response: '30 - 50 mins', tag: 'SOUTHERN VA ROUTE' },
    { name: 'Bracey & Ebony, VA', county: 'Mecklenburg & Brunswick, VA', zip: '23919', response: '25 - 45 mins', tag: 'LAKE GASTON VA' },
    { name: 'Lawrenceville, VA', county: 'Brunswick County, VA', zip: '23868', response: '35 - 55 mins', tag: 'SOUTHERN VA ROUTE' },
    { name: 'Emporia, VA', county: 'Greensville County, VA', zip: '23847', response: '40 - 60 mins', tag: 'BORDER REGION' },
  ];

  const filteredAreas = areas.filter(
    (a) =>
      a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.county.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.zip.includes(searchQuery)
  );

  return (
    <section id="service-areas" className="py-16 sm:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-comfortNavy-50 border border-comfortNavy-200 text-comfortNavy-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Navigation className="w-4 h-4 text-comfortNavy-600" />
            Regional Coverage Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-comfortNavy-950 tracking-tight">
            Serving Lake Gaston, Northern NC &amp; Southern VA
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Technicians routed directly from our Macon, NC headquarters. Enter your town or zip code to verify response time:
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by city, county, or zip (e.g. 27551, Littleton, South Hill)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-full border border-slate-300 bg-slate-50 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-warmOrange-500/20 focus:border-warmOrange-500 shadow-sm"
            />
          </div>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAreas.map((area, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-warmOrange-300 hover:shadow-md transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-comfortNavy-50 text-comfortNavy-700 group-hover:bg-warmOrange-50 group-hover:text-warmOrange-600 flex items-center justify-center shrink-0 transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-comfortNavy-950 truncate">
                    {area.name}
                  </div>
                  <div className="text-[11px] text-slate-500 truncate">
                    {area.county} • {area.zip}
                  </div>
                </div>
              </div>

              <div className="text-right shrink-0 ml-3">
                <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-600 block">
                  {area.tag}
                </span>
                <span className="text-[10px] text-slate-500 font-medium flex items-center gap-1 mt-1 justify-end">
                  <Clock className="w-3 h-3 text-warmOrange-500" />
                  {area.response}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Proximity Reassurance Card */}
        <div className="mt-10 p-5 rounded-2xl bg-comfortNavy-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-white">Don’t see your specific community or subdivision listed?</h4>
            <p className="text-xs text-slate-300 mt-0.5">We service all surrounding areas across the Lake Gaston basin and border counties.</p>
          </div>
          <a
            href="tel:2525862468"
            className="px-6 py-2.5 rounded-full bg-warmOrange-600 hover:bg-warmOrange-500 text-white font-bold text-xs whitespace-nowrap shadow-md transition-colors"
          >
            Check Availability: (252) 586-2468
          </a>
        </div>

      </div>
    </section>
  );
}
