import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import ContactSnippet from "@/components/home/ContactSnippet";
import { MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | AshmaIndia",
  description: "Get in touch with AshmaIndia for RO installation, AMC services, chimney repairs, and industrial water solutions.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Contact Us" 
        description="We are here to help. Reach out for any inquiries, service requests, or partnership opportunities."
      />
      
      <section className="py-24 lg:py-32 bg-[#FFFAF7] text-[#1D1510] border-b border-[#DBD7D4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            {/* Contact Info Cards */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#DBD7D4] hover:border-[#FF6300] transition-colors shadow-sm">
                <div className="w-12 h-12 bg-[#FFF0E6] border border-[#FF6300]/20 rounded-xl flex items-center justify-center mb-6 text-[#FF6300]">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wider text-[#1D1510] mb-2">Our Office</h3>
                <p className="text-[#716B67] text-sm leading-relaxed mb-4">
                  Sweet Home Building, 26, Bankim Chandra Road,<br />
                  Near shani Mandir, Hakimpara, Siliguri-734001
                </p>
                <div className="pt-4 border-t border-[#F5F0ED] flex items-center gap-2 text-xs font-bold text-[#FF6300] uppercase tracking-wider">
                  <Clock className="w-4 h-4" /> Open Mon - Sat: 9:30 AM - 7:30 PM
                </div>
              </div>
              
              <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#DBD7D4] hover:border-[#FF6300] transition-colors shadow-sm">
                <div className="w-12 h-12 bg-[#FFF0E6] border border-[#FF6300]/20 rounded-xl flex items-center justify-center mb-6 text-[#FF6300]">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wider text-[#1D1510] mb-2">Call & WhatsApp</h3>
                <div className="space-y-2 text-sm text-[#716B67]">
                  <p className="flex items-center justify-between">
                    <span>Direct Call:</span>
                    <a href="tel:+918101663132" className="text-[#1D1510] hover:text-[#FF6300] transition-colors font-bold">+91 8101663132</a>
                  </p>
                  <p className="flex items-center justify-between">
                    <span>WhatsApp Support:</span>
                    <a href="https://wa.me/917001934185" target="_blank" rel="noopener noreferrer" className="text-[#1D1510] hover:text-[#FF6300] transition-colors font-bold">+91 7001934185</a>
                  </p>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#DBD7D4] hover:border-[#FF6300] transition-colors shadow-sm">
                <div className="w-12 h-12 bg-[#FFF0E6] border border-[#FF6300]/20 rounded-xl flex items-center justify-center mb-6 text-[#FF6300]">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wider text-[#1D1510] mb-2">Email Inquiries</h3>
                <p className="text-[#716B67] text-sm">
                  <a href="mailto:swagataenterprise08@gmail.com" className="text-[#1D1510] hover:text-[#FF6300] transition-colors font-semibold">
                    swagataenterprise08@gmail.com
                  </a>
                </p>
                <div className="mt-3 text-xs text-[#716B67]">
                  Responses guaranteed within 24 business hours.
                </div>
              </div>

            </div>

            {/* Interactive Map */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden min-h-[460px] relative border border-[#DBD7D4] bg-[#FFFFFF] shadow-sm flex flex-col">
              <div className="p-4 bg-[#FFFFFF] border-b border-[#DBD7D4] flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1D1510]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF6300] animate-pulse" />
                  Siliguri Service Center & Showroom
                </div>
                <span className="text-xs text-[#716B67] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FF6300]" /> Authorized Hub
                </span>
              </div>
              <iframe 
                src="https://maps.google.com/maps?q=Sweet+Home+Building,+26,+Bankim+Chandra+Road,+Hakimpara,+Siliguri-734001&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '460px' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full flex-1"
              />
            </div>
          </div>

        </div>
      </section>

      <ContactSnippet />
    </>
  );
}
