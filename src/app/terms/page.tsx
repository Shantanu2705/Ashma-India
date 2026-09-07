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
      
      <section className="py-24 bg-white dark:bg-[#050505] min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
            <h2 className="text-2xl font-bold text-ashma-text dark:text-white mb-4">1. Agreement to Terms</h2>
            <p className="mb-6">
              By accessing or using our website, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-bold text-ashma-text dark:text-white mb-4">2. Intellectual Property Rights</h2>
            <p className="mb-6">
              Other than the content you own, under these Terms, Ashma India and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted a limited license only for purposes of viewing the material contained on this Website.
            </p>

            <h2 className="text-2xl font-bold text-ashma-text dark:text-white mb-4">3. Restrictions</h2>
            <p className="mb-6">
              You are specifically restricted from all of the following:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Publishing any Website material in any other media.</li>
              <li>Selling, sublicensing and/or otherwise commercializing any Website material.</li>
              <li>Publicly performing and/or showing any Website material.</li>
              <li>Using this Website in any way that is or may be damaging to this Website.</li>
              <li>Using this Website in any way that impacts user access to this Website.</li>
            </ul>

            <h2 className="text-2xl font-bold text-ashma-text dark:text-white mb-4">4. Limitation of Liability</h2>
            <p className="mb-6">
              In no event shall Ashma India, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Ashma India, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
            </p>

            <h2 className="text-2xl font-bold text-ashma-text dark:text-white mb-4">5. Governing Law & Jurisdiction</h2>
            <p className="mb-6">
              These Terms will be governed by and interpreted in accordance with the laws of India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in India for the resolution of any disputes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
