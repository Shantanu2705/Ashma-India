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
                  123 Industrial Area, Phase 1,<br />
                  New Delhi, India 110020
                </p>
              </div>
              
              <div className="glass-card p-8 rounded-3xl">
                <div className="w-12 h-12 bg-ashma-light dark:bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <Phone className="w-6 h-6 text-ashma-blue" />
                </div>
                <h4 className="text-xl font-heading font-bold mb-2">Call Us</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-1">Sales: +91 98765 43210</p>
                <p className="text-gray-600 dark:text-gray-400">Support: +91 98765 43211</p>
              </div>

              <div className="glass-card p-8 rounded-3xl">
                <div className="w-12 h-12 bg-ashma-light dark:bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <Mail className="w-6 h-6 text-ashma-blue" />
                </div>
                <h4 className="text-xl font-heading font-bold mb-2">Email Us</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-1">info@ashmaindia.com</p>
                <p className="text-gray-600 dark:text-gray-400">support@ashmaindia.com</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="lg:col-span-2 glass-card rounded-3xl overflow-hidden min-h-[400px] relative group">
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-ashma-blue mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">Interactive Google Map Integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSnippet />
    </>
  );
}
