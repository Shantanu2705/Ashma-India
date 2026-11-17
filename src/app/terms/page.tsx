import PageHeader from "@/components/layout/PageHeader";

export const metadata = {
  title: "Terms of Service | Ashma India",
  description: "Read the terms and conditions for using Ashma India's website and services.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageHeader 
        title="Terms of Service" 
        description="These terms and conditions govern your use of our website and services."
      />
      
      <section className="py-24 lg:py-32 bg-[#FFFAF7] text-[#1D1510] min-h-screen border-b border-[#DBD7D4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-8">
            
            <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#DBD7D4] shadow-sm">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#FF6300] block mb-2">01. Terms</span>
              <h2 className="text-2xl font-black uppercase tracking-tight text-[#1D1510] mb-4">Agreement to Terms</h2>
              <p className="text-[#716B67] text-base leading-relaxed">
                By accessing or using our website, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#DBD7D4] shadow-sm">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#FF6300] block mb-2">02. Ownership</span>
              <h2 className="text-2xl font-black uppercase tracking-tight text-[#1D1510] mb-4">Intellectual Property Rights</h2>
              <p className="text-[#716B67] text-base leading-relaxed">
                Other than the content you own, under these Terms, Ashma India and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted a limited license only for purposes of viewing the material contained on this Website.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#DBD7D4] shadow-sm">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#FF6300] block mb-2">03. Guidelines</span>
              <h2 className="text-2xl font-black uppercase tracking-tight text-[#1D1510] mb-4">Restrictions</h2>
              <p className="text-[#716B67] text-base leading-relaxed mb-4">
                You are specifically restricted from all of the following:
              </p>
              <ul className="space-y-3 text-sm text-[#716B67]">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6300] mt-2 shrink-0" />
                  <span>Publishing any Website material in any other media without prior consent.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6300] mt-2 shrink-0" />
                  <span>Selling, sublicensing and/or otherwise commercializing any Website material.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6300] mt-2 shrink-0" />
                  <span>Publicly performing and/or showing any Website material.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6300] mt-2 shrink-0" />
                  <span>Using this Website in any way that is or may be damaging to this Website.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6300] mt-2 shrink-0" />
                  <span>Using this Website in any way that impacts user access to this Website.</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#DBD7D4] shadow-sm">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#FF6300] block mb-2">04. Liability</span>
              <h2 className="text-2xl font-black uppercase tracking-tight text-[#1D1510] mb-4">Limitation of Liability</h2>
              <p className="text-[#716B67] text-base leading-relaxed">
                In no event shall Ashma India, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Ashma India, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#DBD7D4] shadow-sm">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#FF6300] block mb-2">05. Legal</span>
              <h2 className="text-2xl font-black uppercase tracking-tight text-[#1D1510] mb-4">Governing Law & Jurisdiction</h2>
              <p className="text-[#716B67] text-base leading-relaxed">
                These Terms will be governed by and interpreted in accordance with the laws of India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in India for the resolution of any disputes.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
