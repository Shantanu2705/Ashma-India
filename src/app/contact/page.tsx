import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import ContactSnippet from "@/components/home/ContactSnippet";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

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
      
      <section className="py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              <div className="glass-card p-8 rounded-3xl">
                <div className="w-12 h-12 bg-ashma-light dark:bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6 text-ashma-blue" />
                </div>
                <h4 className="text-xl font-heading font-bold mb-2">Our Office</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Sweet Home Building, 26, Bankim Chandra Road,<br />
                  Near shani Mandir, Hakimpara, Siliguri-734001
                </p>
              </div>
              
              <div className="glass-card p-8 rounded-3xl">
                <div className="w-12 h-12 bg-ashma-light dark:bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <Phone className="w-6 h-6 text-ashma-blue" />
                </div>
                <h4 className="text-xl font-heading font-bold mb-2">Call Us</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-1">Mobile: +91 8101663132</p>
                <p className="text-gray-600 dark:text-gray-400">WhatsApp: +91 7001934185</p>
              </div>

              <div className="glass-card p-8 rounded-3xl">
                <div className="w-12 h-12 bg-ashma-light dark:bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <Mail className="w-6 h-6 text-ashma-blue" />
                </div>
                <h4 className="text-xl font-heading font-bold mb-2">Email Us</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-1">swagataenterprise08@gmail.com</p>
              </div>
            </div>

            {/* Map */}
            <div className="lg:col-span-2 glass-card rounded-3xl overflow-hidden min-h-[400px] relative group border border-gray-100 dark:border-white/10 shadow-lg">
              <iframe 
                src="https://maps.google.com/maps?q=Sweet+Home+Building,+26,+Bankim+Chandra+Road,+Hakimpara,+Siliguri-734001&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '400px' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      <ContactSnippet />
    </>
  );
}
