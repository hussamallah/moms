import Image from "next/image";

// Smaller SVG icons for cards
const GlobeIcon = () => (
  <svg className="w-10 h-10 text-primary-blue bg-[#e7effb] rounded-full mx-auto mb-2 p-1.5 shadow-lg" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" /></svg>
)
const ShieldIcon = () => (
  <svg className="w-10 h-10 text-primary-blue bg-[#e7effb] rounded-full mx-auto mb-2 p-1.5 shadow-lg" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M12 3l8 4v5c0 5-3.8 9.2-8 11-4.2-1.8-8-6-8-11V7l8-4z" /></svg>
)
const BriefcaseIcon = () => (
  <svg className="w-10 h-10 text-primary-blue bg-[#e7effb] rounded-full mx-auto mb-2 p-1.5 shadow-lg" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M16 3v4M8 3v4M3 13h18" /></svg>
)
const DocumentIcon = () => (
  <svg className="w-14 h-14 text-primary-blue bg-[#e7effb] rounded-full mx-auto mb-3 p-2 shadow-lg" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="18" rx="2"/><path d="M8 2v4M16 2v4"/></svg>
)
const IdIcon = () => (
  <svg className="w-14 h-14 text-primary-blue bg-[#e7effb] rounded-full mx-auto mb-3 p-2 shadow-lg" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><circle cx="8.5" cy="14" r="2.5"/><path d="M17 11h2v2h-2z"/></svg>
)
const BarChartIcon = () => (
  <svg className="w-14 h-14 text-primary-blue bg-[#e7effb] rounded-full mx-auto mb-3 p-2 shadow-lg" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="4" y="10" width="4" height="8" rx="1.5"/><rect x="10" y="6" width="4" height="12" rx="1.5"/><rect x="16" y="13" width="4" height="5" rx="1.5"/></svg>
)

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-light-gray-bg text-text-dark font-inter">
      {/* HEADER - force bg-navy via both tailwind and hex fallback */}
      <header className="bg-navy bg-[#0D1B2A] h-[80px] flex items-center w-full">
        <div className="container max-w-[1100px] mx-auto flex items-center justify-between px-6 md:px-5">
          <span className="font-semibold text-lg text-white whitespace-nowrap">Complete International Tax & Accounting Advisory</span>
          <nav className="flex gap-8">
            <a href="#" className="text-white font-medium hover:opacity-80 transition text-base">Home</a>
            <a href="#services" className="text-white font-medium hover:opacity-80 transition text-base">Services</a>
            <a href="#about" className="text-white font-medium hover:opacity-80 transition text-base">About</a>
            <a href="#contact" className="text-white font-medium hover:opacity-80 transition text-base">Contact</a>
          </nav>
        </div>
      </header>
      {/* HERO SECTION - now lighter blue (#245b93), 25% smaller overall */}
      <section className="bg-[#245b93] w-full min-h-[390px] flex items-center">
        <div className="container max-w-[1100px] mx-auto flex flex-col justify-center px-6 md:px-5 py-[24px]">
          <h1 className="text-white drop-shadow-xl font-extrabold tracking-tight w-full text-left text-3xl sm:text-4xl md:text-[45px] lg:text-[54px] leading-[1.1]">
            <span className="text-primary-blue font-black">Tax</span> and Accounting Services for <span className="text-primary-blue font-black">International Individuals</span> <span className="text-primary-blue font-black">& Businesses</span>
          </h1>
          {/* CTA Buttons centered below headline */}
          <div className="flex gap-4 mt-6 justify-center mx-auto">
            <a href="#services" className="bg-[#C4C4C4] text-white rounded-[4px] px-[22px] py-[12px] text-[15px] font-semibold hover:bg-[#A8A8A8] shadow-lg transition inline-block cursor-pointer">View Services</a>
            <button className="bg-[#D4AF37] text-white rounded-[4px] px-[22px] py-[12px] text-[15px] font-semibold hover:bg-[#B8941F] shadow-lg transition">Contact Us</button>
          </div>
          {/* Who We Serve, now with centered heading and more margin below buttons */}
          <section className="bg-transparent w-full pt-[28px] pb-[18px] px-0">
            <h2 className="text-[28px] font-extrabold text-white mb-[22px] text-center">Who We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              {/* Card 1 */}
              <div className="w-full md:w-[255px] p-[27px] bg-gradient-to-br from-light-gray-bg via-white to-card-white border border-border-gray rounded-[8px] shadow-2xl relative flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:border-primary-blue group">
                <GlobeIcon />
                <div className="h-1 w-8 bg-primary-blue rounded mb-1.5"></div>
                <span className="text-[19px] font-extrabold mb-[6px] text-navy text-center"><span className="text-primary-blue font-extrabold">Non-Resident</span> Individuals</span>
                <div className="text-[14px] text-navy text-center font-medium mb-2">F-1 / H-1B / J Visa</div>
                <div className="text-[13px] text-text-dark text-center mb-2">Global citizens, expats, and foreign founders.</div>
                <a href="#" className="text-primary-blue text-[13px] font-bold mt-2 underline">Learn More</a>
              </div>
              {/* Card 2 */}
              <div className="w-full md:w-[255px] p-[27px] bg-gradient-to-br from-light-gray-bg via-white to-card-white border border-border-gray rounded-[8px] shadow-2xl relative flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:border-primary-blue group">
                <ShieldIcon />
                <div className="h-1 w-8 bg-primary-blue rounded mb-1.5"></div>
                <span className="text-[19px] font-extrabold mb-[6px] text-navy text-center">U.S. <span className="text-primary-blue font-extrabold">Expats</span> & Military</span>
                <div className="text-[14px] text-navy text-center font-medium mb-2">Overseas Americans & Military</div>
                <div className="text-[13px] text-text-dark text-center mb-2">Cross-border tax, filings, and compliance.</div>
                <a href="#" className="text-primary-blue text-[13px] font-bold mt-2 underline">Learn More</a>
              </div>
              {/* Card 3 */}
              <div className="w-full md:w-[255px] p-[27px] bg-gradient-to-br from-light-gray-bg via-white to-card-white border border-border-gray rounded-[8px] shadow-2xl relative flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:border-primary-blue group">
                <BriefcaseIcon />
                <div className="h-1 w-8 bg-primary-blue rounded mb-1.5"></div>
                <span className="text-[19px] font-extrabold mb-[6px] text-navy text-center"><span className="text-primary-blue font-extrabold">Foreign</span> Business Owners</span>
                <div className="text-[14px] text-navy text-center font-medium mb-2">Running or starting U.S. companies abroad</div>
                <div className="text-[13px] text-text-dark text-center mb-2">Company formation, U.S. entity filings, international compliance.</div>
                <a href="#" className="text-primary-blue text-[13px] font-bold mt-2 underline">Learn More</a>
              </div>
            </div>
          </section>
        </div>
      </section>
      {/* SERVICE PILLARS */}
      <section id="services" className="bg-white pt-[100px] pb-[100px] px-2 relative">
        {/* Subtle background accent for visual separation */}
        <div className="absolute inset-0 bg-gradient-to-b from-light-gray-bg to-white opacity-50"></div>
        <div className="container max-w-[1100px] mx-auto px-6 md:px-5 relative z-10">
          <h2 className="text-[48px] font-black text-navy mb-[60px] text-center tracking-tight">
            <span className="text-primary-blue">Core International</span> Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
            {/* Service Card 1 */}
            <div className="min-h-[320px] p-[32px] bg-white border-2 border-primary-blue/20 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] flex flex-col items-center overflow-hidden transition-all duration-300 hover:shadow-[0_15px_50px_rgba(11,94,215,0.3)] hover:border-primary-blue hover:-translate-y-2 group">
              <DocumentIcon />
              <div className="h-1.5 w-16 bg-primary-blue rounded-full mb-4"></div>
              <span className="text-[26px] font-black mb-[8px] text-navy text-center break-words">Individual <span className="text-primary-blue font-black">Filing</span></span>
              <span className="text-[19px] text-navy font-semibold mt-2 mb-4 text-center leading-relaxed break-words">1040-NR, FEIE, FBAR, expat tax solutions</span>
              <a href="#" className="text-primary-blue text-[18px] font-black mt-auto underline decoration-2">Learn More</a>
            </div>
            {/* Service Card 2 */}
            <div className="min-h-[320px] p-[32px] bg-white border-2 border-primary-blue/20 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] flex flex-col items-center overflow-hidden transition-all duration-300 hover:shadow-[0_15px_50px_rgba(11,94,215,0.3)] hover:border-primary-blue hover:-translate-y-2 group">
              <IdIcon />
              <div className="h-1.5 w-16 bg-primary-blue rounded-full mb-4"></div>
              <span className="text-[26px] font-black mb-[8px] text-navy text-center break-words"><span className="text-primary-blue font-black">ITIN</span> Services</span>
              <span className="text-[19px] text-navy font-semibold mt-2 mb-4 text-center leading-relaxed break-words">Application, renewal, acceptance agent</span>
              <a href="#" className="text-primary-blue text-[18px] font-black mt-auto underline decoration-2">Learn More</a>
            </div>
            {/* Service Card 3 */}
            <div className="min-h-[320px] p-[32px] bg-white border-2 border-primary-blue/20 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] flex flex-col items-center overflow-hidden transition-all duration-300 hover:shadow-[0_15px_50px_rgba(11,94,215,0.3)] hover:border-primary-blue hover:-translate-y-2 group">
              <BriefcaseIcon />
              <div className="h-1.5 w-16 bg-primary-blue rounded-full mb-4"></div>
              <span className="text-[26px] font-black mb-[8px] text-navy text-center break-words">U.S. Company <span className="text-primary-blue font-black">Formation</span></span>
              <span className="text-[19px] text-navy font-semibold mt-2 mb-4 text-center leading-relaxed break-words">LLC, C-Corp, EIN, registered agent, banking</span>
              <a href="#" className="text-primary-blue text-[18px] font-black mt-auto underline decoration-2">Learn More</a>
            </div>
            {/* Service Card 4 */}
            <div className="min-h-[320px] p-[32px] bg-white border-2 border-primary-blue/20 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] flex flex-col items-center overflow-hidden transition-all duration-300 hover:shadow-[0_15px_50px_rgba(11,94,215,0.3)] hover:border-primary-blue hover:-translate-y-2 group">
              <BarChartIcon />
              <div className="h-1.5 w-16 bg-primary-blue rounded-full mb-4"></div>
              <span className="text-[26px] font-black mb-[8px] text-navy text-center break-words">Global <span className="text-primary-blue font-black">Bookkeeping</span></span>
              <span className="text-[19px] text-navy font-semibold mt-2 mb-4 text-center leading-relaxed break-words">Multi-currency, payroll, GAAP, statements</span>
              <a href="#" className="text-primary-blue text-[18px] font-black mt-auto underline decoration-2">Learn More</a>
            </div>
            {/* Service Card 5 */}
            <div className="min-h-[320px] p-[32px] bg-white border-2 border-primary-blue/20 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] flex flex-col items-center overflow-hidden transition-all duration-300 hover:shadow-[0_15px_50px_rgba(11,94,215,0.3)] hover:border-primary-blue hover:-translate-y-2 group">
              <ShieldIcon />
              <div className="h-1.5 w-16 bg-primary-blue rounded-full mb-4"></div>
              <span className="text-[26px] font-black mb-[8px] text-navy text-center break-words">International Business <span className="text-primary-blue font-black">Compliance</span></span>
              <span className="text-[19px] text-navy font-semibold mt-2 mb-4 text-center leading-relaxed break-words">Annual reports, tax filing, BOI reporting</span>
              <a href="#" className="text-primary-blue text-[18px] font-black mt-auto underline decoration-2">Learn More</a>
            </div>
          </div>
        </div>
      </section>
      {/* TRUST BLOCK */}
      <section className="bg-card-white py-[80px] px-2">
        <div className="container max-w-[1100px] mx-auto flex flex-col items-center px-6 md:px-5">
          <h2 className="text-[38px] font-extrabold text-navy mb-12 text-center">Trusted by Clients Worldwide</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 w-full justify-items-center">
            {/* Stat 1: Globe/stat icon */}
            <div className="flex flex-col items-center">
              <GlobeIcon />
              <span className="text-[20px] font-semibold text-navy text-center">10+ <span className="text-primary-blue font-bold">Years Experience</span></span>
            </div>
            <div className="flex flex-col items-center">
              <ShieldIcon />
              <span className="text-[20px] font-semibold text-navy text-center">IRS <span className="text-primary-blue font-bold">Registered</span></span>
            </div>
            <div className="flex flex-col items-center">
              <GlobeIcon />
              <span className="text-[20px] font-semibold text-navy text-center">Clients in <span className="text-primary-blue font-bold">40+ countries</span></span>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-12 h-12 text-primary-blue mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M12 20v-6"/><circle cx="12" cy="10" r="7"/></svg>
              <span className="text-[20px] font-semibold text-navy text-center">24-Hour <span className="text-primary-blue font-bold">Response</span></span>
            </div>
          </div>
        </div>
      </section>
      {/* CTA BLOCK */}
      <section className="flex flex-col items-center py-[80px] bg-card-white px-2">
        <h2 className="text-[32px] font-semibold text-navy">Ready to Get Started?</h2>
        <p className="text-[18px] max-w-[520px] text-center mt-4">Book a consult with our team of U.S. international tax and business experts—no obligation, no jargon, just straight answers for your situation.</p>
        <button className="bg-[#0B5ED7] text-white rounded-[4px] px-[30px] py-[16px] text-[17px] font-medium mt-6 hover:bg-[#0948A7] transition shadow-lg" style={{ backgroundColor: '#0B5ED7' }}>Book a Consultation</button>
      </section>
      {/* CONTACT FORM SECTION */}
      <section id="contact" className="bg-card-white py-[80px] px-2">
        <div className="container max-w-[1100px] mx-auto flex flex-col items-center px-6 md:px-5">
          <h2 className="text-[32px] font-semibold text-navy mb-8">Contact Us</h2>
          <form className="bg-white border border-border-gray shadow-card rounded-[6px] p-[28px] max-w-[600px] w-full flex flex-col gap-4">
            <label className="text-[16px] font-semibold text-navy">Name
              <input type="text" required className="w-full h-[48px] border border-[#C4CCD7] rounded-[4px] px-4 mt-1" />
            </label>
            <label className="text-[16px] font-semibold text-navy">Email
              <input type="email" required className="w-full h-[48px] border border-[#C4CCD7] rounded-[4px] px-4 mt-1" />
            </label>
            <label className="text-[16px] font-semibold text-navy">Country
              <input type="text" required className="w-full h-[48px] border border-[#C4CCD7] rounded-[4px] px-4 mt-1" />
            </label>
            <label className="text-[16px] font-semibold text-navy">Service
              <select required className="w-full h-[48px] border border-[#C4CCD7] rounded-[4px] px-3 mt-1">
                <option value="">Select service</option>
                <option>Individual Non-Resident & Expat Filing</option>
                <option>ITIN Services</option>
                <option>U.S. Company Formation</option>
                <option>Global Bookkeeping</option>
                <option>International Business Compliance</option>
              </select>
            </label>
            <label className="text-[16px] font-semibold text-navy">Message
              <textarea required className="w-full min-h-[140px] border border-[#C4CCD7] rounded-[4px] px-4 py-2 mt-1"></textarea>
            </label>
            <button
              type="submit"
              className="!bg-primary-blue text-white w-full h-[52px] rounded-[4px] text-[17px] font-medium mt-1 hover:bg-[#0948A7] transition"
              style={{ backgroundColor: '#0B5ED7' }}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      {/* FOOTER - match header navy and text-white, use fallback color */}
      <footer className="h-[120px] bg-navy bg-[#0D1B2A] flex items-center justify-center w-full text-white">
        <span className="text-[15px]">© {new Date().getFullYear()} Complete International Tax & Accounting Advisory. All rights reserved.</span>
      </footer>
    </div>
  );
}
