import Navigation from './components/Navigation';
import ContactForm from './components/ContactForm';

// Icon components with accessibility attributes
const GlobeIcon = ({ className = "w-10 h-10", ariaLabel = "Globe icon" }: { className?: string; ariaLabel?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-label={ariaLabel} role="img">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" />
  </svg>
);

const ShieldIcon = ({ className = "w-10 h-10", ariaLabel = "Shield icon" }: { className?: string; ariaLabel?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-label={ariaLabel} role="img">
    <path d="M12 3l8 4v5c0 5-3.8 9.2-8 11-4.2-1.8-8-6-8-11V7l8-4z" />
  </svg>
);

const BriefcaseIcon = ({ className = "w-10 h-10", ariaLabel = "Briefcase icon" }: { className?: string; ariaLabel?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-label={ariaLabel} role="img">
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M16 3v4M8 3v4M3 13h18" />
  </svg>
);

const DocumentIcon = ({ className = "w-14 h-14", ariaLabel = "Document icon" }: { className?: string; ariaLabel?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-label={ariaLabel} role="img">
    <rect x="4" y="4" width="16" height="18" rx="2"/>
    <path d="M8 2v4M16 2v4"/>
  </svg>
);

const IdIcon = ({ className = "w-14 h-14", ariaLabel = "ID icon" }: { className?: string; ariaLabel?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-label={ariaLabel} role="img">
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <circle cx="8.5" cy="14" r="2.5"/>
    <path d="M17 11h2v2h-2z"/>
  </svg>
);

const BarChartIcon = ({ className = "w-14 h-14", ariaLabel = "Chart icon" }: { className?: string; ariaLabel?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-label={ariaLabel} role="img">
    <rect x="4" y="10" width="4" height="8" rx="1.5"/>
    <rect x="10" y="6" width="4" height="12" rx="1.5"/>
    <rect x="16" y="13" width="4" height="5" rx="1.5"/>
  </svg>
);

const ClockIcon = ({ className = "w-12 h-12", ariaLabel = "Clock icon" }: { className?: string; ariaLabel?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-label={ariaLabel} role="img">
    <path d="M12 20v-6"/>
    <circle cx="12" cy="10" r="7"/>
  </svg>
);

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Complete International Tax & Accounting Advisory",
    "description": "Professional U.S. tax and accounting services for non-resident individuals, U.S. expats, and foreign business owners",
    "url": "https://moms-tan.vercel.app",
    "serviceType": "Tax and Accounting Services",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "International Tax Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Individual Non-Resident & Expat Filing",
            "description": "1040-NR filing, FEIE, FBAR, expat tax solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "ITIN Services",
            "description": "ITIN application, renewal, acceptance agent services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "U.S. Company Formation",
            "description": "LLC, C-Corp, EIN, registered agent, banking"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Global Bookkeeping",
            "description": "Multi-currency, payroll, GAAP, statements"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "International Business Compliance",
            "description": "Annual reports, tax filing, BOI reporting"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-light-gray-bg text-text-dark font-inter">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navigation />
      
      <main id="main-content">
        {/* HERO SECTION */}
        <section id="home" className="bg-[#245b93] w-full min-h-[390px] flex items-center">
          <div className="container max-w-[1100px] mx-auto flex flex-col justify-center px-6 md:px-5 py-[24px]">
            <h1 className="text-white drop-shadow-xl font-extrabold tracking-tight w-full text-left text-[48px] sm:text-4xl md:text-[48px] lg:text-[48px] leading-[1.2]">
              <span className="text-primary-blue font-black">Tax</span> and Accounting Services for <span className="text-primary-blue font-black">International Individuals</span> <span className="text-primary-blue font-black">& Businesses</span>
            </h1>
            {/* CTA Buttons with consistent styling */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center mx-auto">
              <a 
                href="#services" 
                className="bg-primary-blue text-white rounded-[4px] px-[22px] py-[12px] text-[17px] font-medium hover:bg-[#0948A7] shadow-lg transition inline-block cursor-pointer text-center focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
              >
                View Services
              </a>
              <a 
                href="#contact" 
                className="bg-white text-primary-blue rounded-[4px] px-[22px] py-[12px] text-[17px] font-medium hover:bg-light-gray-bg shadow-lg transition inline-block cursor-pointer text-center border-2 border-primary-blue focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
              >
                Contact Us
              </a>
            </div>
            <p className="text-white text-[15px] mt-4 text-center max-w-[600px] mx-auto">
              Fill out a brief form and we'll respond within 24 hours. No obligation, no jargon—just straight answers for your situation.
            </p>
            
            {/* Who We Serve - Simplified cards with clean white background */}
            <section className="bg-transparent w-full pt-[28px] pb-[18px] px-0">
              <h2 className="text-[32px] font-extrabold text-white mb-[22px] text-center">Who We Serve</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                {/* Card 1 */}
                <article className="w-full md:w-[255px] p-[27px] bg-white border border-border-gray rounded-[8px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] relative flex flex-col items-center transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:border-primary-blue group">
                  <div className="text-primary-blue bg-[#e7effb] rounded-full mx-auto mb-2 p-1.5 shadow-lg">
                    <GlobeIcon ariaLabel="Non-resident individuals icon" />
                  </div>
                  <div className="h-1 w-8 bg-primary-blue rounded mb-1.5"></div>
                  <h3 className="text-[22px] font-extrabold mb-[6px] text-navy text-center">
                    <span className="text-primary-blue font-extrabold">Non-Resident</span> Individuals
                  </h3>
                  <p className="text-[14px] text-navy text-center font-medium mb-2">F-1 / H-1B / J Visa</p>
                  <p className="text-[18px] text-text-dark text-center mb-4 leading-relaxed">
                    We help non-resident individuals navigate U.S. tax obligations, including visa-specific requirements and foreign income exclusions. Our services ensure compliance while maximizing available deductions and credits.
                  </p>
                  <ul className="text-[15px] text-text-dark text-left mb-4 space-y-1 list-disc list-inside">
                    <li>1040-NR filing for non-residents</li>
                    <li>Foreign Earned Income Exclusion (FEIE)</li>
                    <li>Tax treaty benefits</li>
                  </ul>
                  <a href="#services" className="text-primary-blue text-[15px] font-bold mt-2 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded">
                    Learn More
                  </a>
                </article>
                
                {/* Card 2 */}
                <article className="w-full md:w-[255px] p-[27px] bg-white border border-border-gray rounded-[8px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] relative flex flex-col items-center transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:border-primary-blue group">
                  <div className="text-primary-blue bg-[#e7effb] rounded-full mx-auto mb-2 p-1.5 shadow-lg">
                    <ShieldIcon ariaLabel="U.S. expats icon" />
                  </div>
                  <div className="h-1 w-8 bg-primary-blue rounded mb-1.5"></div>
                  <h3 className="text-[22px] font-extrabold mb-[6px] text-navy text-center">
                    U.S. <span className="text-primary-blue font-extrabold">Expats</span> & Military
                  </h3>
                  <p className="text-[14px] text-navy text-center font-medium mb-2">Overseas Americans & Military</p>
                  <p className="text-[18px] text-text-dark text-center mb-4 leading-relaxed">
                    Comprehensive tax services for U.S. citizens living abroad and military personnel. We handle complex cross-border tax situations, Foreign Bank Account Reporting (FBAR), and ensure you meet all filing requirements.
                  </p>
                  <ul className="text-[15px] text-text-dark text-left mb-4 space-y-1 list-disc list-inside">
                    <li>FBAR (Foreign Bank Account Report) filing</li>
                    <li>Expat tax planning and compliance</li>
                    <li>Military-specific tax benefits</li>
                  </ul>
                  <a href="#services" className="text-primary-blue text-[15px] font-bold mt-2 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded">
                    Learn More
                  </a>
                </article>
                
                {/* Card 3 */}
                <article className="w-full md:w-[255px] p-[27px] bg-white border border-border-gray rounded-[8px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] relative flex flex-col items-center transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:border-primary-blue group">
                  <div className="text-primary-blue bg-[#e7effb] rounded-full mx-auto mb-2 p-1.5 shadow-lg">
                    <BriefcaseIcon ariaLabel="Foreign business owners icon" />
                  </div>
                  <div className="h-1 w-8 bg-primary-blue rounded mb-1.5"></div>
                  <h3 className="text-[22px] font-extrabold mb-[6px] text-navy text-center">
                    <span className="text-primary-blue font-extrabold">Foreign</span> Business Owners
                  </h3>
                  <p className="text-[14px] text-navy text-center font-medium mb-2">Running or starting U.S. companies abroad</p>
                  <p className="text-[18px] text-text-dark text-center mb-4 leading-relaxed">
                    End-to-end support for foreign entrepreneurs establishing or operating U.S. businesses. From entity formation to ongoing compliance, we handle all aspects of your U.S. business operations.
                  </p>
                  <ul className="text-[15px] text-text-dark text-left mb-4 space-y-1 list-disc list-inside">
                    <li>LLC and corporation formation</li>
                    <li>EIN (Employer Identification Number) application</li>
                    <li>Annual compliance and reporting</li>
                  </ul>
                  <a href="#services" className="text-primary-blue text-[15px] font-bold mt-2 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded">
                    Learn More
                  </a>
                </article>
              </div>
            </section>
          </div>
        </section>
        
        {/* SERVICE PILLARS - Simplified cards */}
        <section id="services" className="bg-white pt-[100px] pb-[100px] px-2 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-light-gray-bg to-white opacity-50"></div>
          <div className="container max-w-[1100px] mx-auto px-6 md:px-5 relative z-10">
            <h2 className="text-[48px] font-black text-navy mb-[60px] text-center tracking-tight">
              <span className="text-primary-blue">Core International</span> Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
              {/* Service Card 1 */}
              <article className="min-h-[380px] p-[32px] bg-white border border-border-gray rounded-3xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex flex-col items-center overflow-hidden transition-all duration-300 hover:shadow-[0_8px_24px_rgba(11,94,215,0.2)] hover:border-primary-blue hover:-translate-y-2 group">
                <div className="text-primary-blue bg-[#e7effb] rounded-full mb-3 p-2 shadow-lg">
                  <DocumentIcon ariaLabel="Individual filing service icon" />
                </div>
                <div className="h-1.5 w-16 bg-primary-blue rounded-full mb-4"></div>
                <h3 className="text-[22px] font-black mb-[8px] text-navy text-center break-words">
                  Individual <span className="text-primary-blue font-black">Filing</span>
                </h3>
                <p className="text-[18px] text-navy font-semibold mt-2 mb-4 text-center leading-relaxed break-words">
                  1040-NR, FEIE, FBAR, expat tax solutions
                </p>
                <p className="text-[18px] text-text-dark text-center mb-4 leading-relaxed">
                  Comprehensive tax filing for non-residents and expats. We handle 1040-NR forms, Foreign Earned Income Exclusion (FEIE) claims, and Foreign Bank Account Reporting (FBAR) requirements.
                </p>
                <a href="#contact" className="text-primary-blue text-[18px] font-black mt-auto underline decoration-2 hover:no-underline focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded">
                  Learn More
                </a>
              </article>
              
              {/* Service Card 2 */}
              <article className="min-h-[380px] p-[32px] bg-white border border-border-gray rounded-3xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex flex-col items-center overflow-hidden transition-all duration-300 hover:shadow-[0_8px_24px_rgba(11,94,215,0.2)] hover:border-primary-blue hover:-translate-y-2 group">
                <div className="text-primary-blue bg-[#e7effb] rounded-full mb-3 p-2 shadow-lg">
                  <IdIcon ariaLabel="ITIN services icon" />
                </div>
                <div className="h-1.5 w-16 bg-primary-blue rounded-full mb-4"></div>
                <h3 className="text-[22px] font-black mb-[8px] text-navy text-center break-words">
                  <span className="text-primary-blue font-black">ITIN</span> Services
                </h3>
                <p className="text-[18px] text-navy font-semibold mt-2 mb-4 text-center leading-relaxed break-words">
                  Application, renewal, acceptance agent
                </p>
                <p className="text-[18px] text-text-dark text-center mb-4 leading-relaxed">
                  ITIN (Individual Taxpayer Identification Number) services including new applications, renewals, and acceptance agent services. We streamline the process and ensure timely processing.
                </p>
                <a href="#contact" className="text-primary-blue text-[18px] font-black mt-auto underline decoration-2 hover:no-underline focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded">
                  Learn More
                </a>
              </article>
              
              {/* Service Card 3 */}
              <article className="min-h-[380px] p-[32px] bg-white border border-border-gray rounded-3xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex flex-col items-center overflow-hidden transition-all duration-300 hover:shadow-[0_8px_24px_rgba(11,94,215,0.2)] hover:border-primary-blue hover:-translate-y-2 group">
                <div className="text-primary-blue bg-[#e7effb] rounded-full mb-3 p-2 shadow-lg">
                  <BriefcaseIcon className="w-14 h-14" ariaLabel="Company formation service icon" />
                </div>
                <div className="h-1.5 w-16 bg-primary-blue rounded-full mb-4"></div>
                <h3 className="text-[22px] font-black mb-[8px] text-navy text-center break-words">
                  U.S. Company <span className="text-primary-blue font-black">Formation</span>
                </h3>
                <p className="text-[18px] text-navy font-semibold mt-2 mb-4 text-center leading-relaxed break-words">
                  LLC, C-Corp, EIN, registered agent, banking
                </p>
                <p className="text-[18px] text-text-dark text-center mb-4 leading-relaxed">
                  Complete U.S. business formation services. We help you choose the right entity type (LLC or C-Corp), obtain your EIN, set up registered agent services, and assist with banking requirements.
                </p>
                <a href="#contact" className="text-primary-blue text-[18px] font-black mt-auto underline decoration-2 hover:no-underline focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded">
                  Learn More
                </a>
              </article>
              
              {/* Service Card 4 */}
              <article className="min-h-[380px] p-[32px] bg-white border border-border-gray rounded-3xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex flex-col items-center overflow-hidden transition-all duration-300 hover:shadow-[0_8px_24px_rgba(11,94,215,0.2)] hover:border-primary-blue hover:-translate-y-2 group">
                <div className="text-primary-blue bg-[#e7effb] rounded-full mb-3 p-2 shadow-lg">
                  <BarChartIcon ariaLabel="Bookkeeping service icon" />
                </div>
                <div className="h-1.5 w-16 bg-primary-blue rounded-full mb-4"></div>
                <h3 className="text-[22px] font-black mb-[8px] text-navy text-center break-words">
                  Global <span className="text-primary-blue font-black">Bookkeeping</span>
                </h3>
                <p className="text-[18px] text-navy font-semibold mt-2 mb-4 text-center leading-relaxed break-words">
                  Multi-currency, payroll, GAAP, statements
                </p>
                <p className="text-[18px] text-text-dark text-center mb-4 leading-relaxed">
                  Professional bookkeeping services for international businesses. We handle multi-currency transactions, payroll processing, GAAP-compliant financial statements, and comprehensive reporting.
                </p>
                <a href="#contact" className="text-primary-blue text-[18px] font-black mt-auto underline decoration-2 hover:no-underline focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded">
                  Learn More
                </a>
              </article>
              
              {/* Service Card 5 */}
              <article className="min-h-[380px] p-[32px] bg-white border border-border-gray rounded-3xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex flex-col items-center overflow-hidden transition-all duration-300 hover:shadow-[0_8px_24px_rgba(11,94,215,0.2)] hover:border-primary-blue hover:-translate-y-2 group">
                <div className="text-primary-blue bg-[#e7effb] rounded-full mb-3 p-2 shadow-lg">
                  <ShieldIcon className="w-14 h-14" ariaLabel="Compliance service icon" />
                </div>
                <div className="h-1.5 w-16 bg-primary-blue rounded-full mb-4"></div>
                <h3 className="text-[22px] font-black mb-[8px] text-navy text-center break-words">
                  International Business <span className="text-primary-blue font-black">Compliance</span>
                </h3>
                <p className="text-[18px] text-navy font-semibold mt-2 mb-4 text-center leading-relaxed break-words">
                  Annual reports, tax filing, BOI reporting
                </p>
                <p className="text-[18px] text-text-dark text-center mb-4 leading-relaxed">
                  Ongoing compliance services to keep your U.S. business in good standing. We handle annual reports, tax filings, Beneficial Ownership Information (BOI) reporting, and all regulatory requirements.
                </p>
                <a href="#contact" className="text-primary-blue text-[18px] font-black mt-auto underline decoration-2 hover:no-underline focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded">
                  Learn More
                </a>
              </article>
            </div>
          </div>
        </section>
        
        {/* ABOUT SECTION */}
        <section id="about" className="bg-card-white py-[80px] px-2">
          <div className="container max-w-[1100px] mx-auto px-6 md:px-5">
            <h2 className="text-[32px] font-extrabold text-navy mb-8 text-center">About Us</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-[18px] text-text-dark leading-relaxed mb-6">
                Complete International Tax & Accounting Advisory is a specialized firm dedicated to serving non-resident individuals, U.S. expats, and foreign business owners. With over 10 years of experience, we understand the unique challenges of international tax and business compliance.
              </p>
              <p className="text-[18px] text-text-dark leading-relaxed mb-6">
                Our team is IRS-registered and certified as acceptance agents, allowing us to provide ITIN services directly. We've helped clients in over 40 countries navigate complex U.S. tax obligations and establish successful U.S. businesses.
              </p>
              <p className="text-[18px] text-text-dark leading-relaxed">
                We pride ourselves on clear communication, timely responses (within 24 hours), and a commitment to making international tax and business services accessible to everyone, regardless of location.
              </p>
            </div>
          </div>
        </section>
        
        {/* TRUST BLOCK */}
        <section className="bg-card-white py-[80px] px-2">
          <div className="container max-w-[1100px] mx-auto flex flex-col items-center px-6 md:px-5">
            <h2 className="text-[32px] font-extrabold text-navy mb-12 text-center">Trusted by Clients Worldwide</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-16 w-full justify-items-center">
              <div className="flex flex-col items-center">
                <div className="text-primary-blue bg-[#e7effb] rounded-full mb-4 p-2 shadow-lg">
                  <GlobeIcon ariaLabel="Years of experience" />
                </div>
                <span className="text-[20px] font-semibold text-navy text-center">
                  10+ <span className="text-primary-blue font-bold">Years Experience</span>
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-primary-blue bg-[#e7effb] rounded-full mb-4 p-2 shadow-lg">
                  <ShieldIcon ariaLabel="IRS registered" />
                </div>
                <span className="text-[20px] font-semibold text-navy text-center">
                  IRS <span className="text-primary-blue font-bold">Registered</span>
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-primary-blue bg-[#e7effb] rounded-full mb-4 p-2 shadow-lg">
                  <GlobeIcon ariaLabel="Global clients" />
                </div>
                <span className="text-[20px] font-semibold text-navy text-center">
                  Clients in <span className="text-primary-blue font-bold">40+ countries</span>
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-primary-blue bg-[#e7effb] rounded-full mb-4 p-2 shadow-lg">
                  <ClockIcon ariaLabel="Fast response time" />
                </div>
                <span className="text-[20px] font-semibold text-navy text-center">
                  24-Hour <span className="text-primary-blue font-bold">Response</span>
                </span>
              </div>
            </div>
          </div>
        </section>
        
        {/* TESTIMONIALS SECTION */}
        <section className="bg-light-gray-bg py-[80px] px-2">
          <div className="container max-w-[1100px] mx-auto px-6 md:px-5">
            <h2 className="text-[32px] font-extrabold text-navy mb-12 text-center">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="bg-white p-6 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                <p className="text-[18px] text-text-dark mb-4 italic">
                  "The team made filing my 1040-NR so much easier. They explained everything clearly and responded to all my questions within hours."
                </p>
                <p className="text-[16px] font-semibold text-navy">— Sarah M., Non-Resident</p>
              </article>
              <article className="bg-white p-6 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                <p className="text-[18px] text-text-dark mb-4 italic">
                  "As a U.S. expat, I needed help with FBAR filing. They handled everything professionally and kept me informed throughout the process."
                </p>
                <p className="text-[16px] font-semibold text-navy">— James K., U.S. Expat</p>
              </article>
              <article className="bg-white p-6 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                <p className="text-[18px] text-text-dark mb-4 italic">
                  "They helped me form my LLC and get my EIN quickly. The process was smooth, and they answered all my questions about U.S. business compliance."
                </p>
                <p className="text-[16px] font-semibold text-navy">— Maria L., Business Owner</p>
              </article>
            </div>
          </div>
        </section>
        
        {/* CTA BLOCK */}
        <section className="flex flex-col items-center py-[80px] bg-card-white px-2">
          <h2 className="text-[32px] font-semibold text-navy">Ready to Get Started?</h2>
          <p className="text-[18px] max-w-[520px] text-center mt-4">
            Book a consult with our team of U.S. international tax and business experts—no obligation, no jargon, just straight answers for your situation.
          </p>
          <a
            href="#contact"
            className="bg-primary-blue text-white rounded-[4px] px-[30px] py-[16px] text-[17px] font-medium mt-6 hover:bg-[#0948A7] transition shadow-lg inline-block focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
            style={{ backgroundColor: '#0B5ED7' }}
          >
            Book a Consultation
          </a>
        </section>
        
        {/* CONTACT FORM SECTION */}
        <section id="contact" className="bg-card-white py-[80px] px-2">
          <div className="container max-w-[1100px] mx-auto flex flex-col items-center px-6 md:px-5">
            <h2 className="text-[32px] font-semibold text-navy mb-8">Contact Us</h2>
            <ContactForm />
          </div>
        </section>
      </main>
      
      {/* FOOTER */}
      <footer className="h-[120px] bg-navy bg-[#0D1B2A] flex items-center justify-center w-full text-white">
        <p className="text-[15px]">
          © {new Date().getFullYear()} Complete International Tax & Accounting Advisory. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
