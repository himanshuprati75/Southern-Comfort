import { useState } from 'react';
import { HelpCircle, ChevronDown, Phone, ShieldCheck } from 'lucide-react';

export default function FAQ({ onOpenCallModal }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'How quickly can you dispatch an emergency technician to Lake Gaston?',
      a: 'We provide 24/7/365 emergency dispatch with mobile service vans stocked with factory parts. For urgent calls involving no-heat freeze warnings or dead air conditioning during humid summer heatwaves, our technicians typically arrive on-site within 30 to 60 minutes across Lake Gaston, Macon, Littleton, and Warrenton.',
    },
    {
      q: 'What makes a Carrier Factory Authorized Dealer different from other contractors?',
      a: 'To earn and maintain Carrier Factory Authorized Dealer status, Southern Comfort technicians complete extensive factory training on high-efficiency multi-stage heat pumps, variable-speed inverters, and geothermal systems. Furthermore, our installations are backed by Carrier’s 100% Satisfaction Guarantee and official manufacturer warranties.',
    },
    {
      q: 'Are geothermal systems practical and cost-effective for Lake Gaston properties?',
      a: 'Geothermal heating and cooling is one of the smartest investments for Lake Gaston residences. Utilizing ground-source or lake water-source loops, geothermal systems achieve up to 400% efficiency, cutting monthly heating and cooling utility costs by up to 60% while qualifying for generous 30% Federal Clean Energy tax credits.',
    },
    {
      q: 'How do you handle emergency HVAC breakdowns for Lake Gaston vacation rentals (Airbnb / VRBO)?',
      a: 'We understand that broken AC during a 95°F summer weekend means angry guests, refund demands, and ruined ratings. We operate a dedicated vacation rental triage process. Simply call (252) 586-2468, inform our dispatcher it is an active rental, and we will prioritize dispatch and send direct diagnostic and completion updates to you.',
    },
    {
      q: 'Can you install smart thermostats so I can monitor temperature and freeze warnings remotely?',
      a: 'Yes! We install and configure smart Wi-Fi thermostats from Aprilaire, Ecobee, and Nest. You can monitor and control your lakehouse temperatures, receive automated high-humidity or low-temp freeze alerts, and adjust comfort before leaving your primary residence.',
    },
    {
      q: 'What is included in the Southern Comfort "Comfort Club" maintenance plan?',
      a: 'Our Comfort Club includes comprehensive bi-annual tune-ups (full 24-point spring AC check and fall heating inspection), 15% discount on all repair parts and labor, front-of-the-line VIP priority scheduling, and zero overtime surcharges on emergency weekend calls.',
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-warmOrange-50 text-warmOrange-700 text-xs font-bold uppercase tracking-wider mb-3 border border-warmOrange-200">
            <HelpCircle className="w-4 h-4 text-warmOrange-600" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-comfortNavy-950 tracking-tight">
            Clear Answers to Your HVAC Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Everything you need to know about our local service, Carrier equipment, and emergency response.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-comfortNavy-950">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-warmOrange-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Help Callout */}
        <div className="mt-12 text-center p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
          <h4 className="text-base font-bold text-comfortNavy-950">Have a specific equipment or emergency question?</h4>
          <p className="text-xs text-slate-500 mt-1">Roy and Kendra’s dispatch team in Macon, NC is ready to help 24/7.</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:2525862468"
              className="px-6 py-2.5 rounded-full bg-warmOrange-600 hover:bg-warmOrange-500 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors"
            >
              Call (252) 586-2468
            </a>
            <a
              href="mailto:southerncomfort.heatandcool@gmail.com"
              className="px-6 py-2.5 rounded-full border border-slate-300 hover:border-slate-400 text-slate-700 font-bold text-xs transition-colors"
            >
              Email Us Directly
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
