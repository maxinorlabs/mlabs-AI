const complianceLaws = [
  'Information Technology Act, 2000',
  'IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011',
  'Digital Personal Data Protection Act, 2023 (DPDP Act)',
  'Other applicable Indian privacy laws',
];

const personalInformation = [
  'Contact details: name, email address, phone number, company name',
  'Professional information: job title, company size, industry, revenue range',
  'Communication data: messages, feedback, support requests',
  'Business information: company details, business challenges, and goals',
];

const sensitiveInformation = [
  'Financial information: revenue figures and funding details, with explicit consent',
  'Business strategy: confidential business plans and strategies',
  'Performance data: business metrics and KPIs',
];

const technicalInformation = [
  'Website usage: IP address, browser type, and device information',
  'Cookies and tracking technologies as described in our Cookie Policy',
  'Log data such as access times, pages viewed, and referring URLs',
];

const directCollection = [
  'Contact forms and service inquiries',
  'Consultation meetings and calls',
  'Email correspondence',
  'Service delivery processes',
];

const automaticCollection = [
  'Website cookies and analytics',
  'Server logs and access data',
  'Third-party integrations, with consent where required',
];

const serviceDelivery = [
  'Providing consulting and venture building services',
  'Conducting business assessments and analysis',
  'Developing customized solutions and strategies',
  'Communicating regarding services',
];

const businessOperations = [
  'Client relationship management',
  'Invoice generation and payment processing',
  'Performance monitoring and improvement',
  'Legal compliance and record keeping',
];

const marketingUses = [
  'Sending newsletters and updates, with consent',
  'Sharing relevant industry insights',
  'Sending event invitations and announcements',
  'Developing case studies, with explicit consent',
];

const legalBases = [
  'Consent for sensitive data and marketing communications',
  'Contract performance for data necessary to deliver services',
  'Legitimate interest for business operations and improvement',
  'Legal compliance for regulatory and tax obligations',
];

const thirdPartyProviders = [
  'IT service providers and hosting companies',
  'Payment processors and financial institutions',
  'Analytics and marketing platforms',
  'Professional advisors, including legal and accounting advisors',
];

const legalRequirements = [
  'Government agencies and regulatory bodies',
  'Law enforcement when legally required',
  'Court orders and legal proceedings',
  'Tax authorities and compliance requirements',
];

const businessTransfers = [
  'Mergers, acquisitions, or asset sales, with notice',
  'Corporate restructuring or ownership changes',
];

const technicalSafeguards = [
  'Encryption of sensitive data in transit and at rest',
  'Regular security assessments and updates',
  'Access controls and user authentication',
  'Network security and firewall protection',
];

const organizationalMeasures = [
  'Employee training on data protection',
  'Confidentiality agreements with staff',
  'Regular privacy policy reviews',
  'Incident response procedures',
];

const retentionRules = [
  'Service data: retained for the duration of engagement plus 7 years',
  'Marketing data: retained until consent is withdrawn',
  'Legal records: retained as required by applicable law',
  'Website analytics: retained for 26 months from collection',
  'Communication records: retained for 5 years for business purposes',
];

const accessRights = [
  'Right to know what personal data we process',
  'Right to obtain copies of your data',
  'Right to information about processing purposes',
];

const correctionRights = [
  'Right to correct inaccurate personal data',
  'Right to complete incomplete data',
  'Right to update outdated information',
];

const erasureRights = [
  'Right to erasure, including the right to be forgotten',
  'Right to data portability',
  'Right to restrict processing',
];

const consentRights = [
  'Right to withdraw consent at any time',
  'Right to object to processing',
  'Right to opt out of marketing communications',
];

const grievanceSteps = [
  'Submit a written complaint via email',
  'We will acknowledge receipt within 72 hours',
  'We will investigate and aim to resolve the matter within 30 days',
  'An appeal process is available if you are not satisfied',
];

const crossBorderTransfers = [
  'Data may be transferred to trusted international service providers',
  'Adequate safeguards are implemented for international transfers',
  'Transfers comply with applicable data transfer restrictions',
  'User consent is obtained where required',
];

const cookieUses = [
  'Essential website functionality',
  'Analytics and performance monitoring',
  'Marketing and advertising, with consent',
  'User preference management',
];

const childrenPrivacy = [
  'Our services are not intended for individuals under 18',
  'We do not knowingly collect data from minors',
  "Parents or guardians can request deletion of a minor's data",
  'Enhanced protections apply to any minor data collected',
];

const breachNotification = [
  'Users are notified within 72 hours of high-risk breaches',
  'Regulatory authorities are notified as required by law',
  'Our breach response plan is activated immediately',
  'Remedial measures are communicated transparently',
];

const policyUpdates = [
  'This policy is reviewed annually or as needed',
  'Material changes are communicated via email',
  'Continued use implies acceptance of changes',
  'Previous versions are archived for reference',
];

function PolicyList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-navy/80 text-lg leading-relaxed list-disc pl-6 marker:text-brand">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function PolicySection({
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

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-32 px-6 bg-warm-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase mb-6">
            Privacy <span className="text-brand">Policy</span>
          </h1>
          <div className="rounded-[2rem] border border-navy/10 bg-white p-8 md:p-10 shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-brand font-medium mb-3">
              Last Updated: October 2, 2025
            </p>
            <p className="text-lg text-navy/80 leading-relaxed">
              Maxinor (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;) is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
              visit <a href="https://mlabs.co.in" className="text-brand hover:underline">mlabs.co.in</a> or engage
              our services.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          <PolicySection number="1" title="Introduction">
            <p className="text-lg text-navy/80 leading-relaxed">
              This policy is designed to comply with the following frameworks:
            </p>
            <PolicyList items={complianceLaws} />
          </PolicySection>

          <PolicySection number="2" title="Information We Collect">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-navy">2.1 Personal Information</h3>
              <PolicyList items={personalInformation} />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-navy">2.2 Sensitive Personal Data</h3>
              <PolicyList items={sensitiveInformation} />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-navy">2.3 Technical Information</h3>
              <PolicyList items={technicalInformation} />
            </div>
          </PolicySection>

          <PolicySection number="3" title="How We Collect Information">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-navy">3.1 Direct Collection</h3>
              <PolicyList items={directCollection} />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-navy">3.2 Automatic Collection</h3>
              <PolicyList items={automaticCollection} />
            </div>
          </PolicySection>

          <PolicySection number="4" title="Purpose of Data Processing">
            <p className="text-lg text-navy/80 leading-relaxed">We process your data for the following purposes:</p>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-navy">4.1 Service Delivery</h3>
              <PolicyList items={serviceDelivery} />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-navy">4.2 Business Operations</h3>
              <PolicyList items={businessOperations} />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-navy">4.3 Marketing and Communications</h3>
              <PolicyList items={marketingUses} />
            </div>
          </PolicySection>

          <PolicySection number="5" title="Legal Basis for Processing">
            <PolicyList items={legalBases} />
          </PolicySection>

          <PolicySection number="6" title="Data Sharing and Disclosure">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-navy">6.1 Third-Party Service Providers</h3>
              <PolicyList items={thirdPartyProviders} />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-navy">6.2 Legal Requirements</h3>
              <PolicyList items={legalRequirements} />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-navy">6.3 Business Transfers</h3>
              <PolicyList items={businessTransfers} />
            </div>
          </PolicySection>

          <PolicySection number="7" title="Data Security">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-navy">7.1 Technical Safeguards</h3>
              <PolicyList items={technicalSafeguards} />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-navy">7.2 Organizational Measures</h3>
              <PolicyList items={organizationalMeasures} />
            </div>
          </PolicySection>

          <PolicySection number="8" title="Data Retention">
            <PolicyList items={retentionRules} />
          </PolicySection>

          <PolicySection number="9" title="Your Rights (Under DPDP Act 2023)">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-navy">9.1 Access and Transparency</h3>
              <PolicyList items={accessRights} />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-navy">9.2 Correction and Completion</h3>
              <PolicyList items={correctionRights} />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-navy">9.3 Erasure and Portability</h3>
              <PolicyList items={erasureRights} />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-navy">9.4 Consent Management</h3>
              <PolicyList items={consentRights} />
            </div>
          </PolicySection>

          <PolicySection number="10" title="Grievance Redressal">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-navy">10.1 Data Protection Officer</h3>
              <div className="text-lg text-navy/80 leading-relaxed space-y-1">
                <p>
                  Contact:{' '}
                  <a href="mailto:privacy@mlabs.co.in" className="text-brand hover:underline">
                    privacy@mlabs.co.in
                  </a>
                </p>
                <p>Response time: within 30 days of complaint</p>
                <p>Escalation: Data Protection Board of India, when established</p>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-navy">10.2 Complaint Process</h3>
              <ol className="space-y-3 text-navy/80 text-lg leading-relaxed list-decimal pl-6 marker:text-brand">
                {grievanceSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
          </PolicySection>

          <PolicySection number="11" title="Cross-Border Data Transfers">
            <PolicyList items={crossBorderTransfers} />
          </PolicySection>

          <PolicySection number="12" title="Cookies and Tracking Technologies">
            <p className="text-lg text-navy/80 leading-relaxed">We use cookies for the following purposes:</p>
            <PolicyList items={cookieUses} />
            <p className="text-lg text-navy/80 leading-relaxed">
              Detailed information is available in our Cookie Policy.
            </p>
          </PolicySection>

          <PolicySection number="13" title="Children's Privacy">
            <PolicyList items={childrenPrivacy} />
          </PolicySection>

          <PolicySection number="14" title="Data Breach Notification">
            <PolicyList items={breachNotification} />
          </PolicySection>

          <PolicySection number="15" title="Updates to Privacy Policy">
            <PolicyList items={policyUpdates} />
          </PolicySection>

          <PolicySection number="16" title="Contact Information">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[1.5rem] border border-navy/10 bg-white p-6">
                <h3 className="text-xl font-semibold text-navy mb-3">Data Protection Queries</h3>
                <div className="text-lg text-navy/80 leading-relaxed space-y-1">
                  <p>
                    Email:{' '}
                    <a href="mailto:privacy@mlabs.co.in" className="text-brand hover:underline">
                      privacy@mlabs.co.in
                    </a>
                  </p>
                  <p>Subject: Privacy Policy Inquiry</p>
                  <p>Response time: 72 hours</p>
                </div>
              </div>
              <div className="rounded-[1.5rem] border border-navy/10 bg-white p-6">
                <h3 className="text-xl font-semibold text-navy mb-3">General Contact</h3>
                <div className="text-lg text-navy/80 leading-relaxed space-y-1">
                  <p>
                    Email:{' '}
                    <a href="mailto:contact@mlabs.co.in" className="text-brand hover:underline">
                      contact@mlabs.co.in
                    </a>
                  </p>
                  <p>Phone: +91 98119 96965</p>
                </div>
              </div>
            </div>
            <p className="text-base text-navy/60 italic">
              This Privacy Policy is effective as of October 2, 2025 and supersedes all previous versions.
            </p>
          </PolicySection>
        </div>
      </div>
    </div>
  );
}
