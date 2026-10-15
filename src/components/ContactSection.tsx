import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Bulk Procurement & Institutional Supply',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="about" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Molsynth Biochem */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs uppercase tracking-wider font-semibold text-cyan-700 font-mono">
                About The Company
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
                Precision In Every Consumable. Reliability In Every Dispatch.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              <strong>Molsynth Biochem LLP</strong> is an Indian importer and distributor of high-quality products for analytical, pharmaceutical, clinical, and scientific research industries across India.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              We focus on delivering products that meet stringent international pharmacopeial standards (USP, EP, JP, ISO). Sourcing directly from reputable global and domestic manufacturers, our integrated operations encompass rigorous quality appraisal, systematic inventory holding, prompt logistics, and continuous technical customer support.
            </p>

            {/* Core Pillars */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 border border-slate-200 rounded-lg bg-slate-50">
                <span className="font-bold text-slate-900 block mb-1">Integrated Supply Chain</span>
                <span className="text-slate-600">
                  Procurement, inventory holding, and pan-India dispatch synchronized across Navi Mumbai and Dhule.
                </span>
              </div>

              <div className="p-3.5 border border-slate-200 rounded-lg bg-slate-50">
                <span className="font-bold text-slate-900 block mb-1">Quality &amp; Precision Fit</span>
                <span className="text-slate-600">
                  Autosampler vials engineered for tight tolerances; filtration membranes certified for low extractables.
                </span>
              </div>
            </div>

            {/* Office Locations */}
            <div className="pt-4 border-t border-slate-200 space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-900">
                Official Locations &amp; Direct Communication
              </h3>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Corporation Office (Navi Mumbai):</span>
                    <span>Aaramus Complex CHS, Flat No. 802-C, Plot No. 87, Sector-21, Ulwe, Navi Mumbai - 410206, Maharashtra, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Registered Office (Dhule):</span>
                    <span>Plot No. 2, Aadhar Nagar, Nakane Road, Dhule - 424002, Maharashtra, India</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-slate-900 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900">Phone: </span>
                    <a href="tel:+919867363202" className="text-cyan-700 hover:underline font-mono">+91 9867363202</a>
                    <span className="mx-1.5 text-slate-400">/</span>
                    <a href="tel:+919881191908" className="text-cyan-700 hover:underline font-mono">+91 9881191908</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-slate-900 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900">Email: </span>
                    <a href="mailto:info@molsynthbiochem.com" className="text-cyan-700 hover:underline font-mono">info@molsynthbiochem.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-slate-900 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900">Operating Hours: </span>
                    <span>Monday - Saturday: 9:00 AM - 6:30 PM IST</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Direct Inquiries Form */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8">
            <h3 className="text-base font-bold text-slate-900 mb-1">
              General Inquiries &amp; Manufacturer Representation
            </h3>
            <p className="text-xs text-slate-600 mb-6">
              Connect with our corporate team for bulk institutional agreements, custom sourcing, or technical product documentation.
            </p>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-slate-900">Inquiry Transmitted Successfully</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you for contacting Molsynth Biochem LLP. Our sales and technical desk will review your message and reply to <span className="font-mono font-semibold">{formData.email}</span> within 4 business hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      subject: 'Bulk Procurement & Institutional Supply',
                      message: '',
                    });
                  }}
                  className="mt-4 px-4 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+91..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Inquiry Nature
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  >
                    <option value="Bulk Procurement & Institutional Supply">Bulk Procurement &amp; Institutional Supply</option>
                    <option value="Autosampler Vial Custom Specifications">Autosampler Vial Custom Specifications</option>
                    <option value="Manufacturer Distribution Partnership">Manufacturer Distribution Partnership</option>
                    <option value="Technical Validation & Audit Documentation">Technical Validation &amp; Audit Documentation</option>
                    <option value="Tender / Annual Rate Contract">Tender / Annual Rate Contract</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Message Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your requirements, expected consumption volume, or specifications..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Send className="w-4 h-4 text-cyan-400" />
                  <span>Transmit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
