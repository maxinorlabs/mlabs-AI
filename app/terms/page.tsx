const serviceDescriptions = [
  'Venture Sprint (30-day transformation programs)',
  'Venture Partner (embedded execution services)',
  'Venture CXO (fractional leadership services)',
];

const eligibilityRequirements = [
  'Business founders and entrepreneurs',
  'Companies with annual revenue of Rs. 2 crores or more',
  'Organizations seeking operational scaling support',
  'Users who are 18 years or older and legally capable of entering contracts',
];

const paymentTerms = [
  'Payment is due within 15 days of the invoice date',
  'Late payments may incur a 2% monthly service charge',
  'All fees exclude applicable GST and taxes',
  'No refunds are available after service commencement except as legally required',
];

const intellectualPropertyTerms = [
  'Clients retain ownership of pre-existing intellectual property',
  'Maxinor retains rights to methodologies, frameworks, and proprietary processes',
  'Jointly developed work products will be specified in individual agreements',
  'Confidential information remains the property of the disclosing party',
];

const userResponsibilities = [
  'Provide accurate and complete information',
  'Respond promptly to reasonable requests for information',
  'Maintain confidentiality of proprietary methodologies',
  'Comply with all applicable laws and regulations',
  'Use services only for lawful business purposes',
];

const prohibitedUses = [
  'Violating applicable laws or regulations',
  'Transmitting harmful, threatening, or offensive content',
  'Attempting to gain unauthorized access to our systems',
  "Interfering with other users' use of services",
  'Engaging in fraudulent activities',
];

const privacyTerms = [
  'We collect and process personal data in accordance with our Privacy Policy',
  'Data processing complies with applicable Indian privacy laws',
  'Sensitive business information is protected under confidentiality provisions',
  'Users have rights regarding their personal data as described in the Privacy Policy',
];

const availabilityDisclaimers = [
  'Services are provided on an "as is" and "as available" basis',
  'We do not guarantee uninterrupted service availability',
  'Maintenance and updates may cause temporary service interruptions',
];

const businessResultsDisclaimers = [
  'We cannot guarantee specific business outcomes or revenue improvements',
  'Results depend on multiple factors, including client implementation',
  'Case studies and success stories are not guarantees of future performance',
];

const liabilityTerms = [
  'Our total liability will not exceed the fees paid for the services in question',
  'We are not liable for indirect, consequential, or punitive damages',
  'Liability limitations do not apply to gross negligence or willful misconduct',
  'Some jurisdictions do not allow limitation of implied warranties',
];

const indemnificationTerms = [
  'Your use or misuse of services',
  'Violation of these terms',
  'Violation of third-party rights',
  'Any content or information you provide',
];

const clientTerminationTerms = [
  'You may terminate services with 30 days written notice',
  'Fees for completed work remain due',
  'Confidentiality obligations survive termination',
];

const maxinorTerminationTerms = [
  'We may terminate for breach of terms with 15 days notice',
  'We may terminate immediately for material breach or illegal activity',
  'Refunds, if any, follow the applicable individual service agreement',
];

const disputeResolutionSteps = [
  'Good faith negotiation',
  'Mediation in Delhi, India',
  'Arbitration under the Indian Arbitration and Conciliation Act, 2015',
  'Courts in Delhi, India as a last resort',
];

const modificationTerms = [
  'We reserve the right to modify these terms at any time',
  'Modifications will be posted on our website',
  'Continued use after modifications constitutes acceptance',
  'Material changes will be notified via email',
];

function TermsList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-navy/80 text-lg leading-relaxed list-disc pl-6 marker:text-brand">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function TermsSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-5">
      <h2 className="text-2xl md:text-3xl font-display font-medium text-navy">
        {number}. {title}
      </h2>
      <div className="space-y-5">{children}</div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <div className="pt-32 pb-32 px-6 bg-warm-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase mb-6">
            Terms of <span className="text-brand">Service</span>
          </h1>
          <div className="rounded-[2rem] border border-navy/10 bg-white p-8 md:p-10 shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-brand font-medium mb-3">
              Last Updated: October 2, 2025
            </p>
            <p className="text-lg text-navy/80 leading-relaxed">
              By accessing and using the services provided by Maxinor (&quot;we,&quot; &quot;our,&quot;
              &quot;company&quot;), you (&quot;client,&quot; &quot;you&quot;) accept and agree to be bound by these
              Terms of Service. If you do not agree, do not use this service.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          <TermsSection number="1" title="Acceptance of Terms">
            <p className="text-lg text-navy/80 leading-relaxed">
              Access to and use of Maxinor services is subject to these terms and provisions.
            </p>
          </TermsSection>

          <TermsSection number="2" title="Company Information">
            <div className="rounded-[1.5rem] border border-navy/10 bg-white p-6 text-lg text-navy/80 leading-relaxed space-y-2">
              <p>Company name: Maxinor</p>
              <p>Business name: The Venture Builders</p>
              <p>
                Contact:{' '}
                <a href="mailto:contact@mlabs.co.in" className="text-brand hover:underline">
                  contact@mlabs.co.in
                </a>
              </p>
              <p>Registered address: To be updated with registered address</p>
              <p>Governing law: Republic of India</p>
            </div>
          </TermsSection>

          <TermsSection number="3" title="Services Description">
            <p className="text-lg text-navy/80 leading-relaxed">
              Maxinor provides venture building and business consulting services including:
            </p>
            <TermsList items={serviceDescriptions} />
          </TermsSection>

          <TermsSection number="4" title="User Eligibility">
            <p className="text-lg text-navy/80 leading-relaxed">Our services are intended for:</p>
            <TermsList items={eligibilityRequirements} />
          </TermsSection>

          <TermsSection number="5" title="Service Terms">
            <p className="text-lg text-navy/80 leading-relaxed">
              Deliverables will be as specified in individual service agreements.
            </p>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-navy">5.2 Payment Terms</h3>
              <TermsList items={paymentTerms} />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-navy">5.3 Intellectual Property</h3>
              <TermsList items={intellectualPropertyTerms} />
            </div>
          </TermsSection>

          <TermsSection number="6" title="User Responsibilities">
            <TermsList items={userResponsibilities} />
          </TermsSection>

          <TermsSection number="7" title="Prohibited Uses">
            <p className="text-lg text-navy/80 leading-relaxed">You may not use our services to:</p>
            <TermsList items={prohibitedUses} />
          </TermsSection>

          <TermsSection number="8" title="Privacy and Data Protection">
            <TermsList items={privacyTerms} />
          </TermsSection>

          <TermsSection number="9" title="Disclaimers">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-navy">9.1 Service Availability</h3>
              <TermsList items={availabilityDisclaimers} />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-navy">9.2 Business Results</h3>
              <TermsList items={businessResultsDisclaimers} />
            </div>
          </TermsSection>

          <TermsSection number="10" title="Limitation of Liability">
            <TermsList items={liabilityTerms} />
          </TermsSection>

          <TermsSection number="11" title="Indemnification">
            <p className="text-lg text-navy/80 leading-relaxed">
              You agree to indemnify and hold Maxinor harmless from claims, losses, damages, liabilities,
              and legal fees arising out of:
            </p>
            <TermsList items={indemnificationTerms} />
          </TermsSection>

          <TermsSection number="12" title="Termination">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-navy">12.1 By Client</h3>
              <TermsList items={clientTerminationTerms} />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-navy">12.2 By Maxinor</h3>
              <TermsList items={maxinorTerminationTerms} />
            </div>
          </TermsSection>

          <TermsSection number="13" title="Force Majeure">
            <p className="text-lg text-navy/80 leading-relaxed">
              Neither party is liable for delays or failures in performance resulting from circumstances
              beyond reasonable control, including natural disasters, government actions, or other
              unforeseeable events.
            </p>
          </TermsSection>

          <TermsSection number="14" title="Governing Law and Jurisdiction">
            <p className="text-lg text-navy/80 leading-relaxed">
              These terms are governed by the laws of India. Any disputes will be resolved through:
            </p>
            <ol className="space-y-3 text-navy/80 text-lg leading-relaxed list-decimal pl-6 marker:text-brand">
              {disputeResolutionSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </TermsSection>

          <TermsSection number="15" title="Modifications">
            <TermsList items={modificationTerms} />
          </TermsSection>

          <TermsSection number="16" title="Severability">
            <p className="text-lg text-navy/80 leading-relaxed">
              If any provision of these terms is found unenforceable, the remaining provisions will remain
              in full force and effect.
            </p>
          </TermsSection>

          <TermsSection number="17" title="Contact Information">
            <div className="rounded-[1.5rem] border border-navy/10 bg-white p-6 text-lg text-navy/80 leading-relaxed space-y-2">
              <p>
                Email:{' '}
                <a href="mailto:contact@mlabs.co.in" className="text-brand hover:underline">
                  contact@mlabs.co.in
                </a>
              </p>
              <p>Subject line: Terms of Service Inquiry</p>
            </div>
            <p className="text-base text-navy/60 italic">
              These terms constitute the entire agreement between the parties regarding use of services and
              supersede all prior agreements.
            </p>
          </TermsSection>
        </div>
      </div>
    </div>
  );
}
