"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, CheckCircle2, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function ContactSnippet() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceLabels: Record<string, string> = {
      installation: "New RO / Appliance Installation",
      repair: "Purifier / Chimney Repair & Breakdown",
      amc: "Annual Maintenance Contract (AMC)",
      filter: "Filter & Membrane Replacement",
      commercial: "Commercial / Industrial RO Plant Inquiry",
    };

    const serviceText = serviceLabels[service] || service || "General Service";

    const text = `Hello Ashma India,

I would like to request a service callback:
• Name: ${name}
• Phone: ${phone}
• Service Required: ${serviceText}

Please connect with me regarding this request.`;

    const url = `https://wa.me/917001934185?text=${encodeURIComponent(text)}`;
    setWhatsappUrl(url);
    setSubmitted(true);

    if (typeof window !== "undefined") {
      window.open(url, "_blank");
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-[#FFFAF7] relative overflow-hidden border-b border-[#DBD7D4]">
      {/* Background warm flare */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6300]/8 blur-[180px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-2xl bg-[#F5F0ED] border border-[#DBD7D4] p-8 md:p-14 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center shadow-sm">
          
          <div className="lg:col-span-7 text-[#1D1510]">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#FF6300] block mb-4">
              Connect With Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#1D1510] tracking-tight mb-6 leading-tight">
              Need Expert Assistance?
            </h2>
            <p className="text-[#716B67] text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              Whether you need a new installation, emergency repairs, or an Annual Maintenance Contract, our expert technicians are just a message away on WhatsApp.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://wa.me/917001934185?text=Hello%20Ashma%20India,%20I%20would%20like%20to%20book%20a%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-xs md:text-sm transition-all shadow-[0_4px_16px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_22px_rgba(37,211,102,0.4)]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <a 
                href="tel:+918101663132" 
                className="inline-flex items-center gap-2 bg-[#FFFFFF] border-2 border-[#1D1510] hover:bg-[#1D1510] hover:text-white text-[#1D1510] px-8 py-4 rounded-full font-bold uppercase tracking-wider text-xs md:text-sm transition-all"
              >
                <PhoneCall className="w-4 h-4 text-[#FF6300]" />
                <span>Call +91 8101663132</span>
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5 w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full bg-[#FFFFFF] rounded-2xl p-8 border border-[#DBD7D4] shadow-md"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#DBD7D4]">
                <div>
                  <h3 className="text-sm uppercase font-bold tracking-[0.15em] text-[#1D1510]">
                    Request a Callback
                  </h3>
                  <span className="text-[11px] text-[#716B67]">Direct WhatsApp Submission</span>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#E8F8EE] text-[#25D366] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold uppercase text-[#1D1510]">WhatsApp Opened</h4>
                    <p className="text-xs text-[#716B67] mt-1">
                      Your service request has been prepared in WhatsApp. Please send the message to initiate immediate assistance.
                    </p>
                  </div>
                  {whatsappUrl && (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full mt-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold uppercase tracking-wider py-3.5 rounded-full text-xs transition-colors shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Re-open WhatsApp</span>
                    </a>
                  )}
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setPhone("");
                      setService("");
                    }}
                    className="text-[11px] uppercase tracking-wider font-bold text-[#716B67] hover:text-[#1D1510] underline pt-2 block mx-auto cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#716B67] mb-1.5">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter full name" 
                      className="w-full px-4 py-3 rounded-lg bg-[#F5F0ED] border border-[#DBD7D4] text-[#1D1510] placeholder-[#716B67] text-sm focus:outline-none focus:border-[#FF6300] transition-colors" 
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#716B67] mb-1.5">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 Phone number" 
                      className="w-full px-4 py-3 rounded-lg bg-[#F5F0ED] border border-[#DBD7D4] text-[#1D1510] placeholder-[#716B67] text-sm focus:outline-none focus:border-[#FF6300] transition-colors" 
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#716B67] mb-1.5">
                      Service Required
                    </label>
                    <select 
                      required 
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-[#F5F0ED] border border-[#DBD7D4] text-[#1D1510] text-sm focus:outline-none focus:border-[#FF6300] transition-colors cursor-pointer"
                    >
                      <option value="">Select Service Type</option>
                      <option value="installation">New RO / Appliance Installation</option>
                      <option value="repair">Purifier / Chimney Repair & Breakdown</option>
                      <option value="amc">Annual Maintenance Contract (AMC)</option>
                      <option value="filter">Filter & Membrane Replacement</option>
                      <option value="commercial">Commercial / Industrial RO Plant</option>
                    </select>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full mt-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold uppercase tracking-wider py-4 rounded-full text-xs transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Submit Request via WhatsApp</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
