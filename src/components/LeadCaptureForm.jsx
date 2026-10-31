import { useState, useEffect } from 'react';
import { Phone, CheckCircle2, ShieldCheck, Clock, Ticket, AlertTriangle, Send, Sparkles, Home, Wind, Snowflake, Flame, Wrench } from 'lucide-react';

export default function LeadCaptureForm({ selectedIssue, onOpenCallModal }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: 'Lake Gaston / Macon',
    serviceType: selectedIssue || 'ac-repair',
    urgency: 'emergency',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedIssue) {
      setFormData((prev) => ({ ...prev, serviceType: selectedIssue }));
    }
  }, [selectedIssue]);

  const serviceOptions = [
    { id: 'ac-repair', label: 'AC Blowing Warm / Not Cooling' },
    { id: 'heatpump-issue', label: 'Heat Pump Freezing / Low Heat' },
    { id: 'furnace-emergency', label: 'Furnace Out / No Heat Emergency' },
    { id: 'lake-rental', label: 'Lake Gaston Rental Priority (Airbnb/VRBO)' },
    { id: 'geothermal', label: 'Geothermal Loop & System Service' },
    { id: 'new-installation', label: 'New Carrier High-Efficiency Quote' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      setTicketId(`SC-NC-${randomNum}`);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="dispatch-form" className="py-16 sm:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Psychological Value & Reassurance (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-warmOrange-50 text-warmOrange-700 text-xs font-bold uppercase tracking-wider border border-warmOrange-200">
              <Ticket className="w-4 h-4 text-warmOrange-600" />
              Priority Dispatch Dispatcher Queue
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-comfortNavy-950 tracking-tight leading-tight">
              Book Your Service &amp; Apply Your{' '}
              <span className="text-warmOrange-600">$50 Voucher</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              When you submit your ticket, our Macon, NC dispatchers receive an instant priority alert. We verify technician proximity across the Lake Gaston and Southern VA area and respond within <strong className="text-comfortNavy-900 font-bold">15 minutes</strong>.
            </p>

            {/* Voucher Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-warmOrange-50 to-amber-50 border-2 border-dashed border-warmOrange-300 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-warmOrange-700">Web Courtesy Voucher</span>
                  <div className="text-2xl font-black text-warmOrange-900 mt-0.5">$50.00 OFF</div>
                  <div className="text-xs text-warmOrange-800 font-semibold">Immediate Service &amp; Diagnostics</div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase bg-white px-2 py-1 rounded border border-warmOrange-300 font-bold text-warmOrange-900">
                    CODE: SOUTHERN50-COMFORT
                  </span>
                  <div className="text-[10px] text-warmOrange-700 mt-1 font-medium">Auto-applied upon submission</div>
                </div>
              </div>
            </div>

            {/* Direct Contact Inquiries */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
              <div className="font-bold text-comfortNavy-950 flex items-center gap-2">
                <Clock className="w-4 h-4 text-warmOrange-600" />
                Live Dispatch Center:
              </div>
              <div>Direct Phone: <a href="tel:2525862468" className="text-warmOrange-600 font-bold hover:underline">(252) 586-2468</a></div>
              <div>Direct Email: <a href="mailto:southerncomfort.heatandcool@gmail.com" className="text-comfortNavy-900 font-semibold hover:underline">southerncomfort.heatandcool@gmail.com</a></div>
              <div>Headquarters: 115 Shearin Road, Macon, NC 27551</div>
            </div>

            <div className="space-y-2.5 pt-2">
              {[
                '15-Minute Dispatcher Callback Window',
                'Zero Obligation Written Diagnostic Estimate',
                'Factory Authorized Carrier Replacement Experts',
                'Family Owned by Roy & Kendra Pierce'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-warmOrange-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Lead Form or Confirmation Ticket (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-slate-200 shadow-xl relative">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div>
                      <h3 className="text-lg font-black text-comfortNavy-950">
                        Dispatch Request Form
                      </h3>
                      <p className="text-xs text-slate-500">Fast 24/7 routing across NC &amp; VA</p>
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-warmOrange-100 text-warmOrange-700">
                      VOUCHER ACTIVE
                    </span>
                  </div>

                  {/* Service Need (State-Synchronized) */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Service Requirement
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-warmOrange-500/20 focus:border-warmOrange-500"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt.id} value={opt.id}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. David Miller"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-warmOrange-500/20 focus:border-warmOrange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number (For 15-min SMS/Call) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(252) 555-0199"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-warmOrange-500/20 focus:border-warmOrange-500"
                      />
                    </div>
                  </div>

                  {/* Address and City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Street Address / Subdivision
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 244 Waterfront Dr"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-warmOrange-500/20 focus:border-warmOrange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        City / Community Area
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-warmOrange-500/20 focus:border-warmOrange-500"
                      >
                        <option value="Lake Gaston / Macon">Lake Gaston / Macon, NC</option>
                        <option value="Littleton">Littleton, NC</option>
                        <option value="Warrenton">Warrenton, NC</option>
                        <option value="Norlina">Norlina, NC</option>
                        <option value="Henderson">Henderson, NC</option>
                        <option value="Roanoke Rapids">Roanoke Rapids, NC</option>
                        <option value="Henrico / Gaston">Henrico / Gaston, NC</option>
                        <option value="South Hill VA">South Hill, VA</option>
                        <option value="Lawrenceville VA">Lawrenceville, VA</option>
                        <option value="Bracey / Lake Gaston VA">Bracey / Lake Gaston, VA</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Issue Details */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Issue Symptoms (Optional)
                    </label>
                    <textarea
                      rows="2"
                      placeholder="e.g. AC running continuously but air feels lukewarm, outdoor unit making buzzing noise..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-warmOrange-500/20 focus:border-warmOrange-500 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-warmOrange-600 to-warmOrange-500 hover:from-warmOrange-500 hover:to-warmOrange-600 text-white font-extrabold text-sm shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center gap-2 btn-emergency-glow"
                  >
                    {isSubmitting ? (
                      <span>Queueing Priority Dispatch...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Dispatch Ticket &amp; Claim $50 OFF</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    🔒 Your information is confidential. We do not sell data or spam.
                  </p>
                </form>
              ) : (
                /* Ticket Confirmation Card */
                <div className="space-y-6 text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-600">
                      Ticket Successfully Queued
                    </span>
                    <h3 className="text-2xl font-black text-comfortNavy-950 mt-1">
                      Dispatch ID: {ticketId}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Priority ticket sent to Southern Comfort Heating &amp; Cooling dispatch team.
                    </p>
                  </div>

                  {/* Confirmation Details Pill Grid */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2">
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-500">Customer:</span>
                      <span className="font-bold text-slate-900">{formData.name}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-500">Phone:</span>
                      <span className="font-bold text-slate-900">{formData.phone}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-500">Area:</span>
                      <span className="font-bold text-slate-900">{formData.city}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-500">Voucher Credit:</span>
                      <span className="font-bold text-warmOrange-600">-$50.00 APPLIED</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-500">Response SLA:</span>
                      <span className="font-bold text-emerald-600">Within 15 Minutes</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-warmOrange-50 border border-warmOrange-200">
                    <div className="text-xs font-bold text-warmOrange-900">
                      Need immediate action right now?
                    </div>
                    <p className="text-[11px] text-warmOrange-700 mt-0.5 mb-3">
                      Call our on-duty dispatcher directly with your Ticket ID:
                    </p>
                    <a
                      href="tel:2525862468"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-warmOrange-600 hover:bg-warmOrange-700 text-white font-extrabold text-xs shadow-md"
                    >
                      <Phone className="w-4 h-4" />
                      <span>CALL NOW: (252) 586-2468</span>
                    </a>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-slate-400 hover:text-slate-600 underline font-medium"
                  >
                    Submit another ticket or change details
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
