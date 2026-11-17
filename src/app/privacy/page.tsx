import PageHeader from "@/components/layout/PageHeader";

export const metadata = {
  title: "Privacy Policy | Ashma India",
  description: "Read our privacy policy to understand how Ashma India collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader 
        title="Privacy Policy" 
        description="Your privacy is important to us. Learn how we handle your data."
      />
      
      <section className="py-24 lg:py-32 bg-[#FFFAF7] text-[#1D1510] min-h-screen border-b border-[#DBD7D4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-8">
            
            <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#DBD7D4] shadow-sm">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#FF6300] block mb-2">01. Overview</span>
              <h2 className="text-2xl font-black uppercase tracking-tight text-[#1D1510] mb-4">Introduction</h2>
              <p className="text-[#716B67] text-base leading-relaxed">
                Welcome to Ashma India. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#DBD7D4] shadow-sm">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#FF6300] block mb-2">02. Information</span>
              <h2 className="text-2xl font-black uppercase tracking-tight text-[#1D1510] mb-4">The Data We Collect About You</h2>
              <p className="text-[#716B67] text-base leading-relaxed mb-4">
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="space-y-3 text-sm text-[#716B67]">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6300] mt-2 shrink-0" />
                  <span><strong className="text-[#1D1510] uppercase text-xs tracking-wider">Identity Data:</strong> includes first name, last name, username or similar identifier.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6300] mt-2 shrink-0" />
                  <span><strong className="text-[#1D1510] uppercase text-xs tracking-wider">Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6300] mt-2 shrink-0" />
                  <span><strong className="text-[#1D1510] uppercase text-xs tracking-wider">Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting, and device technology.</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#DBD7D4] shadow-sm">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#FF6300] block mb-2">03. Usage</span>
              <h2 className="text-2xl font-black uppercase tracking-tight text-[#1D1510] mb-4">How We Use Your Personal Data</h2>
              <p className="text-[#716B67] text-base leading-relaxed mb-4">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="space-y-3 text-sm text-[#716B67]">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6300] mt-2 shrink-0" />
                  <span>Where we need to perform the service contract we are about to enter into or have entered into with you.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6300] mt-2 shrink-0" />
                  <span>Where it is necessary for our legitimate interests and your fundamental rights do not override those interests.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6300] mt-2 shrink-0" />
                  <span>Where we need to comply with a legal or regulatory obligation.</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#DBD7D4] shadow-sm">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#FF6300] block mb-2">04. Safeguards</span>
              <h2 className="text-2xl font-black uppercase tracking-tight text-[#1D1510] mb-4">Data Security</h2>
              <p className="text-[#716B67] text-base leading-relaxed">
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#DBD7D4] shadow-sm">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#FF6300] block mb-2">05. Support</span>
              <h2 className="text-2xl font-black uppercase tracking-tight text-[#1D1510] mb-4">Contact Us</h2>
              <p className="text-[#716B67] text-base leading-relaxed">
                If you have any questions about this privacy policy or our privacy practices, please contact us at: <br />
                <span className="text-[#1D1510] font-semibold">Email: swagataenterprise08@gmail.com</span> <br />
                <span className="text-[#1D1510] font-semibold">Phone: +91 8101663132 / 7001934185</span>
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
