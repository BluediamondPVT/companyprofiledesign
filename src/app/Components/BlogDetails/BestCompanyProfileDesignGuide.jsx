import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BlogLayout from './BlogLayout';
import BlogCommentForm from './BlogCommentForm';

const BestCompanyProfileDesignGuide = () => {
    return (
        <BlogLayout>
            {/* Featured Banner */}
            <div className=" mb-4" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                <Image 
                    src="/assets/images/blog/Brochure-Designing-Services-Riyadh-Company-Brochure-Services-Saudi-Arabia-Company-Brochure-Services-36wa5b3w3w7txmxs0fh4i2-400x250-1.jpg" 
                    alt="Best Company Profile Design Guide 2025" 
                    width={846} 
                    height={476} 
                    style={{ width: '100%', height: '550px', objectFit: 'cover', borderRadius: '12px' }}
                />
                <div className="meta-blog mt-3 d-flex gap-3 text-muted fs-6">
                    <span><i className="bi bi-calendar2-check text-primary me-1"></i> 12 Aug, 2025</span>
                    <span><i className="bi bi-folder text-primary me-1"></i> Company Profile Design</span>
                    <span><i className="bi bi-person text-primary me-1"></i> By Blue Diamond Infotech</span>
                </div>
            </div>

            {/* Main Article Content */}
            <div className="blog-content2">
                <h1 className="blog-title2 mb-4" style={{ fontSize: '32px', fontWeight: '700', color: 'var(--secondary-color)', lineHeight: '1.3' }}>
                    Best Company Profile Design Guide 2025
                </h1>

                <p className="mb-4 text-muted" style={{ fontSize: '17px', lineHeight: '1.8' }}>
                    A strong company profile design isn't just a document, it's a powerful branding tool that communicates your business identity, values, services, and strengths. In 2025, the competition is higher than ever, which means your company profile must be visually appealing, professionally structured, and strategically written to win clients and build credibility.
                </p>
                <p className="mb-4 text-muted" style={{ fontSize: '17px', lineHeight: '1.8' }}>
                    This guide breaks down everything you need to design a compelling company profile from structure and layout to examples, tips, and templates.
                </p>

                <div className="p-4 bg-light rounded-3 mb-5 border-start border-4" style={{ borderColor: 'var(--primary-color)' }}>
                    <h3 className="fw-bold mb-3" style={{ color: 'var(--secondary-color)' }}>What Is a Company Profile?</h3>
                    <p className="mb-3 text-muted">A <Link href="https://www.companyprofiledesign.in/" target="_blank" className="text-primary text-decoration-none fw-bold">company profile design</Link> is a formal introduction to your business. It highlights who you are, what you do, and why your company matters. Think of it as a business resume it should clearly showcase your brand story and value.</p>
                    <p className="fw-bold text-dark mb-2">A well-designed company profile helps you:</p>
                    <ul className="list-unstyled mb-0 text-muted">
                        <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i> Impress potential clients</li>
                        <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i> Build brand trust</li>
                        <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i> Communicate professionalism</li>
                        <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i> Attract investors</li>
                        <li><i className="bi bi-check-circle-fill text-primary me-2"></i> Maintain consistency in corporate communication</li>
                    </ul>
                </div>

                <h3 className="fw-bold mb-3 mt-5" style={{ color: 'var(--secondary-color)' }}>1. Why Company Profile Design Matters in 2025</h3>
                <p className="text-muted mb-3">The design of your company profile affects how your brand is perceived. In 2025, design trends lean towards:</p>
                <div className="row g-3 mb-4">
                    <div className="col-md-6"><div className="p-3 bg-light rounded"><i className="bi bi-palette-fill text-primary me-2"></i> Minimalistic and clean layouts</div></div>
                    <div className="col-md-6"><div className="p-3 bg-light rounded"><i className="bi bi-type text-primary me-2"></i> Bold typography</div></div>
                    <div className="col-md-6"><div className="p-3 bg-light rounded"><i className="bi bi-image text-primary me-2"></i> High-quality visuals + icons</div></div>
                    <div className="col-md-6"><div className="p-3 bg-light rounded"><i className="bi bi-pie-chart-fill text-primary me-2"></i> Infographics instead of long paragraphs</div></div>
                    <div className="col-md-6"><div className="p-3 bg-light rounded"><i className="bi bi-book-half text-primary me-2"></i> Story-driven messaging</div></div>
                    <div className="col-md-6"><div className="p-3 bg-light rounded"><i className="bi bi-phone-fill text-primary me-2"></i> Mobile-optimized designs</div></div>
                </div>
                <p className="text-muted mb-5">A visually appealing profile ensures your audience understands your message quickly and remembers your brand easily.</p>

                <h3 className="fw-bold mb-4 mt-5" style={{ color: 'var(--secondary-color)' }}>2. Key Elements of a Professional Company Profile</h3>
                <p className="text-muted mb-4">To create a powerful company profile, include these essential sections:</p>
                <div className="row g-4 mb-5">
                    <div className="col-md-6">
                        <div className="card h-100 shadow-sm border-0 bg-light p-3">
                            <h5 className="fw-bold text-dark">1. Cover Page</h5>
                            <p className="text-muted small mb-0">Company logo, Tagline, Professional background image, Year (optional)</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card h-100 shadow-sm border-0 bg-light p-3">
                            <h5 className="fw-bold text-dark">2. Company Overview</h5>
                            <p className="text-muted small mb-0">Explains: Who you are, What you do, Your unique selling point (USP)</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card h-100 shadow-sm border-0 bg-light p-3">
                            <h5 className="fw-bold text-dark">3. Vision & Mission</h5>
                            <p className="text-muted small mb-0">Show your purpose and long-term goals.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card h-100 shadow-sm border-0 bg-light p-3">
                            <h5 className="fw-bold text-dark">4. Company Values</h5>
                            <p className="text-muted small mb-0">Highlight 4 – 6 values that guide your business operations.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card h-100 shadow-sm border-0 bg-light p-3">
                            <h5 className="fw-bold text-dark">5. Services or Products</h5>
                            <p className="text-muted small mb-0">Clear descriptions, Icons or images, Benefits to the customer</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card h-100 shadow-sm border-0 bg-light p-3">
                            <h5 className="fw-bold text-dark">6. Company History</h5>
                            <p className="text-muted small mb-0">A visual timeline works best here.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card h-100 shadow-sm border-0 bg-light p-3">
                            <h5 className="fw-bold text-dark">7. Our Team</h5>
                            <p className="text-muted small mb-0">Add photos, titles, and core responsibilities.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card h-100 shadow-sm border-0 bg-light p-3">
                            <h5 className="fw-bold text-dark">8. Why Choose Us</h5>
                            <p className="text-muted small mb-0">Showcase your competitive advantage using bullet points.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card h-100 shadow-sm border-0 bg-light p-3">
                            <h5 className="fw-bold text-dark">9. Testimonials</h5>
                            <p className="text-muted small mb-0">Social proof builds credibility immediately.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card h-100 shadow-sm border-0 bg-light p-3">
                            <h5 className="fw-bold text-dark">10. Contact Info</h5>
                            <p className="text-muted small mb-0">Email, Phone, Website, Location, QR code (2025 trend)</p>
                        </div>
                    </div>
                </div>

                <h3 className="fw-bold mb-4 mt-5" style={{ color: 'var(--secondary-color)' }}>3. Company Profile Design Layout Ideas (2025 Trends)</h3>
                <ul className="list-group mb-5">
                    <li className="list-group-item p-4 border-0 shadow-sm mb-3 rounded">
                        <h5 className="fw-bold text-dark"><i className="bi bi-layout-wtf text-primary me-2"></i> Modern Minimalist Layout</h5>
                        <p className="text-muted mb-0">Clean lines, plenty of white space, and simple color schemes.</p>
                    </li>
                    <li className="list-group-item p-4 border-0 shadow-sm mb-3 rounded">
                        <h5 className="fw-bold text-dark"><i className="bi bi-briefcase-fill text-primary me-2"></i> Corporate Blue Theme</h5>
                        <p className="text-muted mb-0">Blue improves trust ideal for the corporate, finance, and IT sectors.</p>
                    </li>
                    <li className="list-group-item p-4 border-0 shadow-sm mb-3 rounded">
                        <h5 className="fw-bold text-dark"><i className="bi bi-type-h1 text-primary me-2"></i> Bold Typography Layout</h5>
                        <p className="text-muted mb-0">Uses strong titles and large fonts to guide the reader’s eyes.</p>
                    </li>
                    <li className="list-group-item p-4 border-0 shadow-sm rounded">
                        <h5 className="fw-bold text-dark"><i className="bi bi-bar-chart-fill text-primary me-2"></i> Infographic-Driven Profile</h5>
                        <p className="text-muted mb-0">Explains your processes and services visually.</p>
                    </li>
                </ul>

                <h3 className="fw-bold mb-4 mt-5" style={{ color: 'var(--secondary-color)' }}>4. Step-By-Step Guide: How to Design a Company Profile</h3>
                <div className="bg-light p-4 rounded-3 mb-5">
                    <div className="mb-3">
                        <h6 className="fw-bold text-dark">Step 1: Identify Your Audience</h6>
                        <p className="text-muted small">Are they customers, investors, partners, or suppliers?</p>
                    </div>
                    <div className="mb-3">
                        <h6 className="fw-bold text-dark">Step 2: Build the Content Structure</h6>
                        <p className="text-muted small">Use the section list provided above.</p>
                    </div>
                    <div className="mb-3">
                        <h6 className="fw-bold text-dark">Step 3: Choose Your Design Style</h6>
                        <p className="text-muted small">Pick a consistent color palette and font family.</p>
                    </div>
                    <div className="mb-3">
                        <h6 className="fw-bold text-dark">Step 4: Use Professional Tools</h6>
                        <p className="text-muted small">Recommended tools: Canva, Adobe InDesign, PowerPoint, Figma.</p>
                    </div>
                    <div className="mb-3">
                        <h6 className="fw-bold text-dark">Step 5: Add High-Quality Images & Icons</h6>
                        <p className="text-muted small">Avoid low-resolution images they reduce credibility.</p>
                    </div>
                    <div className="mb-3">
                        <h6 className="fw-bold text-dark">Step 6: Use Consistent Branding</h6>
                        <p className="text-muted small">Keep fonts, colors, spacing, and icon style uniform.</p>
                    </div>
                    <div>
                        <h6 className="fw-bold text-dark">Step 7: Export in Multiple Formats</h6>
                        <p className="text-muted small mb-0">PDF, digital flipbook, PPT, and website version.</p>
                    </div>
                </div>

                <h3 className="fw-bold mb-4 mt-5" style={{ color: 'var(--secondary-color)' }}>5. Best Practices for an Effective Company Profile</h3>
                <ul className="list-unstyled mb-5">
                    <li className="mb-3"><i className="bi bi-star-fill text-warning me-2"></i> <strong>Keep It Short and Clear:</strong> Avoid overloading with text, use bullets and visuals.</li>
                    <li className="mb-3"><i className="bi bi-star-fill text-warning me-2"></i> <strong>Focus on Benefits, Not Just Features:</strong> Explain how your services help clients.</li>
                    <li className="mb-3"><i className="bi bi-star-fill text-warning me-2"></i> <strong>Use Real Data and Achievements:</strong> Awards, milestones, client numbers, revenue growth.</li>
                    <li><i className="bi bi-star-fill text-warning me-2"></i> <strong>Maintain brand consistency:</strong> Should match your website, brochures, and social media branding.</li>
                </ul>

                <h3 className="fw-bold mb-4 mt-5" style={{ color: 'var(--secondary-color)' }}>6. Common Mistakes to Avoid</h3>
                <div className="alert alert-danger border-0 p-4 mb-5">
                    <ul className="list-unstyled mb-0">
                        <li className="mb-2">❌ Too much text</li>
                        <li className="mb-2">❌ Poor-quality images</li>
                        <li className="mb-2">❌ Inconsistent formatting</li>
                        <li className="mb-2">❌ Lack of clear call-to-action</li>
                        <li>❌ Outdated information or design styles</li>
                    </ul>
                </div>

                <h3 className="fw-bold mb-4 mt-5" style={{ color: 'var(--secondary-color)' }}>7. Who Needs a Company Profile?</h3>
                <p className="text-muted mb-3">Any business looking to establish credibility, including:</p>
                <div className="d-flex flex-wrap gap-2 mb-5">
                    <span className="badge bg-secondary p-2">New businesses</span>
                    <span className="badge bg-secondary p-2">Corporate companies</span>
                    <span className="badge bg-secondary p-2">Agencies</span>
                    <span className="badge bg-secondary p-2">Manufacturers</span>
                    <span className="badge bg-secondary p-2">Construction firms</span>
                    <span className="badge bg-secondary p-2">IT companies</span>
                    <span className="badge bg-secondary p-2">Startups seeking investors</span>
                    <span className="badge bg-secondary p-2">Freelancers and consultants</span>
                </div>

                <h3 className="fw-bold mb-4 mt-5" style={{ color: 'var(--secondary-color)' }}>8. Sample Company Profile Structure (Copy & Use)</h3>
                <p className="text-muted mb-3">You can use this as a template for your design:</p>
                <ol className="text-muted mb-5">
                    <li>Cover Page</li>
                    <li>About Us</li>
                    <li>Vision, Mission & Core Values</li>
                    <li>Products / Services</li>
                    <li>Our Process</li>
                    <li>Company Milestones</li>
                    <li>Our Team</li>
                    <li>Certifications</li>
                    <li>Testimonials</li>
                    <li>Contact Us</li>
                </ol>

                <h3 className="fw-bold mb-4 mt-5" style={{ color: 'var(--secondary-color)' }}>9. FAQs (Optimised for Google Snippets)</h3>
                <div className="accordion mb-5" id="faqAccordion">
                    <div className="accordion-item mb-3 border rounded-3 overflow-hidden">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button bg-light fw-bold text-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Q1. What is the purpose of a company profile?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                            <div className="accordion-body text-muted">
                                It introduces your business professionally and helps potential clients understand who you are.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item mb-3 border rounded-3 overflow-hidden">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed bg-light fw-bold text-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Q2. How many pages should a company profile be?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                            <div className="accordion-body text-muted">
                                Ideally 8–20 pages, depending on the industry.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item mb-3 border rounded-3 overflow-hidden">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed bg-light fw-bold text-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Q3. What format is best?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                            <div className="accordion-body text-muted">
                                PDF is the most common, but digital flipbooks are trending in 2025.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item mb-3 border rounded-3 overflow-hidden">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed bg-light fw-bold text-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Q4. Can a company profile help in marketing?
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                            <div className="accordion-body text-muted">
                                Yes. It enhances branding and makes your business look more credible.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 9 & 10 CTA */}
                <div className="p-4 p-md-5 my-5 text-white rounded-3 shadow-lg" style={{ background: 'linear-gradient(135deg, var(--secondary-color) 0%, #001f42 100%)' }}>
                    <h3 className="text-white fw-bold mb-3">Get a Professional Company Profile Designed Today</h3>
                    <p className="text-white-50 mb-4 fs-6">
                        Stand out in the competitive market with a custom, high-converting company profile designed by India's leading design experts. Contact our team today for a free consultation and quote!
                    </p>
                    <Link href="/contact-us" className="btn px-4 py-3 fw-bold rounded-pill text-white" style={{ background: 'var(--primary-color)' }}>
                        Request Free Quote <i className="bi bi-arrow-right ms-2"></i>
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

export default BestCompanyProfileDesignGuide;
