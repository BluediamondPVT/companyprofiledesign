import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BlogLayout from './BlogLayout';
import BlogCommentForm from './BlogCommentForm';
import { 
    CheckCircle2, 
    HelpCircle, 
    FileText, 
    Target, 
    BookOpen, 
    Award, 
    Users, 
    Layers, 
    Sparkles, 
    ArrowRight 
} from 'lucide-react';

const HowToWriteCompanyProfile = () => {
    return (
        <BlogLayout>
            {/* Featured Post Banner Image */}
            <div className="mb-4" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                <Image 
                    src="/assets/images/blog/How-to-write-a-company-profile-1200x675.jpg" 
                    alt="How to write a Company Profile" 
                    width={1200} 
                    height={675} 
                    style={{ width: '100%', height: 'auto', maxHeight: '520px', objectFit: 'cover', borderRadius: '12px' }}
                    priority
                />
                <div className="meta-blog mt-3 d-flex gap-3 text-muted fs-6">
                    <span><i className="bi bi-calendar2-check text-primary me-1"></i> 15 Aug, 2025</span>
                    <span><i className="bi bi-folder text-primary me-1"></i> Content Writing & Profile Design</span>
                    <span><i className="bi bi-person text-primary me-1"></i> By Blue Diamond Infotech</span>
                </div>
            </div>

            {/* Main Article Content */}
            <div className="blog-content2">
                <h2 className="blog-title2 mb-4" style={{ fontSize: '32px', fontWeight: '700', color: 'var(--secondary-color)', lineHeight: '1.3' }}>
                    How to Write a Company Profile? Step-by-Step Guide for Businesses
                </h2>

                <p className="lead fs-5 mb-4 text-muted" style={{ lineHeight: '1.8' }}>
                    Writing an effective company profile is one of the most critical steps in establishing your business identity. A well-written company profile acts as your brand’s official introduction, clearly articulating who you are, what values you stand for, what services or products you offer, and why clients should choose you over competitors.
                </p>

                <p className="mb-4 text-muted" style={{ fontSize: '17px', lineHeight: '1.8' }}>
                    Whether you are an early-stage startup pitching to investors, an SME bidding for government tenders, or an established corporate enterprise seeking international partners, following a structured writing approach ensures your company profile delivers maximum impact.
                </p>

                {/* Section 1 */}
                <div className="p-4 bg-light rounded-3 mb-5 border-start border-4" style={{ borderColor: 'var(--primary-color)' }}>
                    <h3 className="fw-bold mb-3" style={{ color: 'var(--secondary-color)' }}>What Is a Company Profile and Why Is It Crucial?</h3>
                    <p className="mb-3 text-muted">
                        A company profile is a professional summary that introduces your organization to prospective clients, investors, stakeholders, and job candidates. It goes beyond a simple brochure by highlighting your company’s story, core mission, vision, operational strengths, and proven track record.
                    </p>
                    <p className="fw-bold text-dark mb-2">Key business benefits of an impactful company profile:</p>
                    <ul className="list-unstyled mb-0 text-muted">
                        <li className="mb-2"><CheckCircle2 size={18} className="text-primary me-2 d-inline-block" /> <strong>Builds Immediate Credibility:</strong> Sets a professional tone from the first client interaction.</li>
                        <li className="mb-2"><CheckCircle2 size={18} className="text-primary me-2 d-inline-block" /> <strong>Essential for Tenders & Bids:</strong> A prerequisite document for corporate supplier onboarding and government tenders.</li>
                        <li className="mb-2"><CheckCircle2 size={18} className="text-primary me-2 d-inline-block" /> <strong>Strengthens Brand Positioning:</strong> Clearly communicates your Unique Selling Proposition (USP).</li>
                        <li className="mb-2"><CheckCircle2 size={18} className="text-primary me-2 d-inline-block" /> <strong>Facilitates Sales Conversions:</strong> Equips your sales team with an authoritative marketing asset.</li>
                    </ul>
                </div>

                {/* Section 2 */}
                <h3 className="fw-bold mb-4 mt-5" style={{ color: 'var(--secondary-color)' }}>
                    7 Step-by-Step Guide: How to Write a Winning Company Profile
                </h3>

                {/* Step 1 */}
                <div className="card mb-4 border-0 shadow-sm p-4 bg-light">
                    <h4 className="fw-bold text-dark mb-2">Step 1: Identify the Target Purpose and Audience</h4>
                    <p className="text-muted mb-0">
                        Before typing a single word, define who will be reading your profile. A company profile written for B2B procurement heads requires detailed technical specifications, certifications, and compliance details, whereas a profile designed for angel investors should focus on market scalability, growth metrics, and leadership backgrounds.
                    </p>
                </div>

                {/* Step 2 */}
                <div className="card mb-4 border-0 shadow-sm p-4 bg-light">
                    <h4 className="fw-bold text-dark mb-2">Step 2: Craft an Engaging Cover Page & Introduction</h4>
                    <p className="text-muted mb-0">
                        Your cover page should feature your company logo, a powerful brand tagline, and your primary industry categorization. Follow this with an executive summary or “About Us” section that outlines when the company was founded, the core philosophy, and what problem your business solves in the market.
                    </p>
                </div>

                {/* Step 3 */}
                <div className="card mb-4 border-0 shadow-sm p-4 bg-light">
                    <h4 className="fw-bold text-dark mb-2">Step 3: Define Clear Mission, Vision & Core Values</h4>
                    <p className="text-muted mb-0">
                        Keep your vision statement ambitious yet realistic. Your mission statement must clearly state how you deliver value to clients every day. List 4 to 6 core corporate values (e.g., Integrity, Innovation, Customer Centricity, Sustainable Quality) that govern your day-to-day operations.
                    </p>
                </div>

                {/* Step 4 */}
                <div className="card mb-4 border-0 shadow-sm p-4 bg-light">
                    <h4 className="fw-bold text-dark mb-2">Step 4: Detail Your Products, Services & Solutions</h4>
                    <p className="text-muted mb-0">
                        Organize your offerings into clean categories. Focus on customer benefits rather than just listing technical features. Explain how your solutions save costs, enhance efficiency, or solve specific industry pain points for your clients.
                    </p>
                </div>

                {/* Step 5 */}
                <div className="card mb-4 border-0 shadow-sm p-4 bg-light">
                    <h4 className="fw-bold text-dark mb-2">Step 5: Showcase Achievements, Certifications & Milestones</h4>
                    <p className="text-muted mb-0">
                        Include tangible proof of your success. ISO certifications, industry awards, years of market presence, number of completed projects, and notable brand partnerships immediately validate your company’s capability and reliability.
                    </p>
                </div>

                {/* Step 6 */}
                <div className="card mb-4 border-0 shadow-sm p-4 bg-light">
                    <h4 className="fw-bold text-dark mb-2">Step 6: Introduce Key Leadership & Team Expertise</h4>
                    <p className="text-muted mb-0">
                        People do business with people. Briefly introduce your founders, board members, and core department leads with professional headshots, concise bios, and their cumulative years of domain experience.
                    </p>
                </div>

                {/* Step 7 */}
                <div className="card mb-4 border-0 shadow-sm p-4 bg-light">
                    <h4 className="fw-bold text-dark mb-2">Step 7: Provide Clear Contact Information & Next Steps (CTA)</h4>
                    <p className="text-muted mb-0">
                        Conclude with verified corporate contact details: registered office address, direct telephone numbers, official business email addresses, website URL, and direct QR codes linking to your digital portfolio or inquiry forms.
                    </p>
                </div>

                {/* Section 3 */}
                <h3 className="fw-bold mb-4 mt-5" style={{ color: 'var(--secondary-color)' }}>
                    Essential Checklist: Standard Company Profile Structure
                </h3>
                <div className="row g-3 mb-5">
                    <div className="col-md-6">
                        <ul className="list-group shadow-sm">
                            <li className="list-group-item py-3"><i className="bi bi-check2-square text-success me-2"></i> 1. Professional Cover Page</li>
                            <li className="list-group-item py-3"><i className="bi bi-check2-square text-success me-2"></i> 2. Executive Summary / About Us</li>
                            <li className="list-group-item py-3"><i className="bi bi-check2-square text-success me-2"></i> 3. Mission, Vision & Core Values</li>
                            <li className="list-group-item py-3"><i className="bi bi-check2-square text-success me-2"></i> 4. Organizational History / Timeline</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="list-group shadow-sm">
                            <li className="list-group-item py-3"><i className="bi bi-check2-square text-success me-2"></i> 5. Detailed Products & Services</li>
                            <li className="list-group-item py-3"><i className="bi bi-check2-square text-success me-2"></i> 6. Client Testimonials & Case Studies</li>
                            <li className="list-group-item py-3"><i className="bi bi-check2-square text-success me-2"></i> 7. Leadership & Technical Team</li>
                            <li className="list-group-item py-3"><i className="bi bi-check2-square text-success me-2"></i> 8. Full Contact Details & Call to Action</li>
                        </ul>
                    </div>
                </div>

                {/* Section 4 */}
                <h3 className="fw-bold mb-4 mt-5" style={{ color: 'var(--secondary-color)' }}>
                    Common Mistakes to Avoid When Writing a Company Profile
                </h3>
                <div className="alert alert-danger border-0 p-4 mb-5">
                    <ul className="list-unstyled mb-0">
                        <li className="mb-2">❌ <strong>Using Overly Complex Jargon:</strong> Keep language concise, accessible, and reader-friendly.</li>
                        <li className="mb-2">❌ <strong>Neglecting Visual Design:</strong> Even the best written copy fails without clean layout hierarchy and balanced white space.</li>
                        <li className="mb-2">❌ <strong>Outdated Business Information:</strong> Ensure revenue numbers, client lists, and contact numbers are up to date.</li>
                        <li className="mb-2">❌ <strong>Lack of Clear Differentiation:</strong> Explicitly state why your business is superior to industry competitors.</li>
                        <li>❌ <strong>Grammatical or Spelling Errors:</strong> Always perform multi-stage proofreading before final PDF export.</li>
                    </ul>
                </div>

                {/* Section 5: FAQs */}
                <h3 className="fw-bold mb-4 mt-5" style={{ color: 'var(--secondary-color)' }}>
                    Frequently Asked Questions (FAQs)
                </h3>
                <div className="accordion mb-5" id="faqAccordionWrite">
                    <div className="accordion-item mb-3 border rounded-3 overflow-hidden">
                        <h4 className="accordion-header" id="headingWriteOne">
                            <button className="accordion-button bg-light fw-bold text-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWriteOne" aria-expanded="true" aria-controls="collapseWriteOne">
                                Q1. How long should a company profile be?
                            </button>
                        </h4>
                        <div id="collapseWriteOne" className="accordion-collapse collapse show" aria-labelledby="headingWriteOne" data-bs-parent="#faqAccordionWrite">
                            <div className="accordion-body text-muted">
                                Standard company profiles range from 8 to 20 pages depending on your industry and product line depth. A concise 8-12 page profile is ideal for general marketing, while comprehensive 16-24 page documents work best for enterprise bids and tenders.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item mb-3 border rounded-3 overflow-hidden">
                        <h4 className="accordion-header" id="headingWriteTwo">
                            <button className="accordion-button collapsed bg-light fw-bold text-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWriteTwo" aria-expanded="false" aria-controls="collapseWriteTwo">
                                Q2. What is the difference between a company profile and a brochure?
                            </button>
                        </h4>
                        <div id="collapseWriteTwo" className="accordion-collapse collapse" aria-labelledby="headingWriteTwo" data-bs-parent="#faqAccordionWrite">
                            <div className="accordion-body text-muted">
                                A company profile represents your entire organization (history, values, capabilities, team, infrastructure), whereas a brochure is typically focused on specific products, promotional offers, or temporary marketing campaigns.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item mb-3 border rounded-3 overflow-hidden">
                        <h4 className="accordion-header" id="headingWriteThree">
                            <button className="accordion-button collapsed bg-light fw-bold text-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWriteThree" aria-expanded="false" aria-controls="collapseWriteThree">
                                Q3. Should I hire professional writers for my company profile?
                            </button>
                        </h4>
                        <div id="collapseWriteThree" className="accordion-collapse collapse" aria-labelledby="headingWriteThree" data-bs-parent="#faqAccordionWrite">
                            <div className="accordion-body text-muted">
                                Yes. Professional corporate content writers understand how to structure your brand narrative with persuasive copy, industry-specific terminology, and SEO/marketing best practices that convert readers into paying clients.
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Box */}
                <div className="p-4 p-md-5 my-5 text-white rounded-3 shadow-lg" style={{ background: 'linear-gradient(135deg, var(--secondary-color) 0%, #001f42 100%)' }}>
                    <h3 className="text-white fw-bold mb-3">Need Professional Content Writing & Profile Design?</h3>
                    <p className="text-white-50 mb-4 fs-6">
                        Let India’s top company profile writers and designers craft a bespoke, high-impact profile tailored to your domain. Starting at just ₹2500 with unlimited revisions until 100% satisfaction!
                    </p>
                    <Link href="/contact-us" className="btn px-4 py-3 fw-bold rounded-pill text-white" style={{ background: 'var(--primary-color)' }}>
                        Get Started Today <ArrowRight size={16} className="ms-2 d-inline-block" />
                    </Link>
                </div>

                {/* Social Share */}
                <div className="blogs-social-share d-flex align-items-center gap-3 my-4">
                    <span className="social-text fw-bold">Social Share:</span>
                    <ul className="social-share list-unstyled d-flex gap-2 mb-0">
                        <li><Link href="#" className="btn btn-outline-secondary btn-sm rounded-circle"><i className="bi bi-facebook"></i></Link></li>
                        <li><Link href="#" className="btn btn-outline-secondary btn-sm rounded-circle"><i className="bi bi-twitter"></i></Link></li>
                        <li><Link href="#" className="btn btn-outline-secondary btn-sm rounded-circle"><i className="bi bi-linkedin"></i></Link></li>
                        <li><Link href="#" className="btn btn-outline-secondary btn-sm rounded-circle"><i className="bi bi-whatsapp"></i></Link></li>
                    </ul>
                </div>

                <BlogCommentForm />
            </div>
        </BlogLayout>
    );
};

export default HowToWriteCompanyProfile;
