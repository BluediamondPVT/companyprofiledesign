import Image from "next/image";
import Link from "next/link";
import blogData from "../../Data/blog.json";

const CompanyProfileDesignGuide = () => {
  return (
    <div className="blogs-section py-5">
      <div className="container">
        <div className="row">
          {/* Left Sidebar */}
          <div className="col-lg-4 responsive">
            <div className="widget_search upper mb-4">
              <form action="#" method="get">
                <input
                  type="text"
                  name="s"
                  defaultValue=""
                  placeholder="Search Here"
                  title="Search for:"
                />
                <button type="submit" className="icons">
                  <i className="bi bi-search"></i>
                </button>
              </form>
            </div>

            {/* Recent Posts */}
            <div className="widget-sidebar-box mb-4">
              <h4 className="sidebar-title mb-4"> Recent Posts </h4>
              {blogData.slice(0, 4).map((post, idx) => (
                <div
                  key={idx}
                  className="widget-recent-post d-flex mb-3 align-items-center"
                >
                  <div
                    className="rpost-thumb me-3 flex-shrink-0"
                    style={{
                      width: "80px",
                      height: "65px",
                      overflow: "hidden",
                      borderRadius: "8px",
                    }}
                  >
                    <Link href={post.link || "/blog-details"}>
                      <Image
                        src={post.img}
                        alt={post.title}
                        width={80}
                        height={65}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Link>
                  </div>
                  <div className="rpost-content">
                    <div className="rpost-title">
                      <h5
                        style={{
                          fontSize: "14px",
                          lineHeight: "1.4",
                          margin: 0,
                          fontWeight: "600",
                        }}
                      >
                        <Link
                          href={post.link || "/blog-details"}
                          style={{
                            color: "var(--secondary-color)",
                            textDecoration: "none",
                          }}
                        >
                          {post.title}
                        </Link>
                      </h5>
                      <span style={{ fontSize: "12px", color: "#777" }}>
                        12 Aug, 2025
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Categories */}
            <div className="widget-sidebar-box mb-4">
              <h4 className="sidebar-title upp mb-3">Categories</h4>
              <ul className="sidebar-menu list-unstyled">
                <li className="py-2">
                  <Link href="#" className="text-decoration-none text-dark">
                    <i className="bi bi-chevron-double-right text-primary me-2"></i>{" "}
                    Company Profile Design
                  </Link>
                </li>
                <li className="py-2">
                  <Link href="#" className="text-decoration-none text-dark">
                    <i className="bi bi-chevron-double-right text-primary me-2"></i>{" "}
                    Brochure Design
                  </Link>
                </li>
                <li className="py-2">
                  <Link href="#" className="text-decoration-none text-dark">
                    <i className="bi bi-chevron-double-right text-primary me-2"></i>{" "}
                    Corporate Branding
                  </Link>
                </li>
                <li className="py-2">
                  <Link href="#" className="text-decoration-none text-dark">
                    <i className="bi bi-chevron-double-right text-primary me-2"></i>{" "}
                    Content Writing
                  </Link>
                </li>
                <li className="py-2">
                  <Link href="#" className="text-decoration-none text-dark">
                    <i className="bi bi-chevron-double-right text-primary me-2"></i>{" "}
                    Graphic Design
                  </Link>
                </li>
              </ul>
            </div>

            {/* Tags */}
            <div className="widget-sidebar-box">
              <h4 className="sidebar-title mb-3">Popular Tags</h4>
              <div className="tag-item">
                <ul className="d-flex flex-wrap gap-2 list-unstyled">
                  <li>
                    <Link
                      href="#"
                      className="badge bg-light text-dark p-2 text-decoration-none"
                    >
                      #CompanyProfile
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="badge bg-light text-dark p-2 text-decoration-none"
                    >
                      #BrochureDesign
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="badge bg-light text-dark p-2 text-decoration-none"
                    >
                      #BrandingIndia
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="badge bg-light text-dark p-2 text-decoration-none"
                    >
                      #BusinessGrowth
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="badge bg-light text-dark p-2 text-decoration-none"
                    >
                      #GraphicDesign
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="col-lg-8">
            <div className="single-blog-dtls-box">
              {/* Featured Banner */}
              <div
                className="mb-4"
                style={{ borderRadius: "12px", overflow: "hidden" }}
              >
                <Image
                  src="/assets/images/blog/company-profile-design-complete-guide.jpg"
                  alt="Company Profile Design in India: Complete Guide for Businesses"
                  width={1200}
                  height={675}
                  style={{
                    width: "100%",
                    height: "550px",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />
                <div className="meta-blog mt-3 d-flex gap-3 text-muted fs-6">
                  <span>
                    <i className="bi bi-calendar2-check text-primary me-1"></i>{" "}
                    12 Aug, 2025
                  </span>
                  <span>
                    <i className="bi bi-folder text-primary me-1"></i> Company
                    Profile Design
                  </span>
                  <span>
                    <i className="bi bi-person text-primary me-1"></i> By Blue
                    Diamond Infotech
                  </span>
                </div>
              </div>

              {/* Main Article Content */}
              <div className="blog-content2">
                <h2
                  className="blog-title2 mb-4"
                  style={{
                    fontSize: "32px",
                    fontWeight: "700",
                    color: "var(--secondary-color)",
                    lineHeight: "1.3",
                  }}
                >
                  Company Profile Design in India: Complete Guide for Businesses
                </h2>

                <p
                  className="lead fs-5 mb-3"
                  style={{ color: "#4a5568", lineHeight: "1.8" }}
                >
                  In today’s competitive market, company profile design plays a
                  crucial role in how businesses present themselves to clients,
                  investors, and partners. A professionally designed company
                  profile helps establish credibility, communicates your brand
                  story, and increases trust especially in a fast-growing market
                  like India.
                </p>

                <p style={{ lineHeight: "1.8", color: "#4a5568" }}>
                  Whether you are a startup, SME, or established enterprise,
                  investing in a professional company profile design in India
                  can significantly improve your brand image and sales
                  conversions. This guide explains everything you need to know
                  about company profile design, its benefits, and why working
                  with a design agency can make a real difference.
                </p>

                <hr className="my-4" />

                {/* Section: What Is Company Profile Design? */}
                <h3
                  className="mt-4 mb-3"
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "var(--secondary-color)",
                  }}
                >
                  What Is Company Profile Design?
                </h3>

                <p style={{ lineHeight: "1.8", color: "#4a5568" }}>
                  Company profile design is the process of creating a
                  structured, visually appealing document that presents
                  essential information about a business. It includes your brand
                  story, services, achievements, values, and contact details,
                  designed in a way that reflects your brand identity.
                </p>

                <p className="fw-semibold text-dark mb-2">
                  A well-designed company profile is not just informative; it is
                  a powerful marketing tool that helps businesses:
                </p>

                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded-3 d-flex align-items-center border-start border-3 border-primary">
                      <i className="bi bi-shield-check text-primary fs-4 me-3"></i>
                      <span
                        className="fw-bold"
                        style={{ color: "var(--secondary-color)" }}
                      >
                        Build Trust & Credibility
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded-3 d-flex align-items-center border-start border-3 border-primary">
                      <i className="bi bi-trophy text-primary fs-4 me-3"></i>
                      <span
                        className="fw-bold"
                        style={{ color: "var(--secondary-color)" }}
                      >
                        Win High-Value Clients
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded-3 d-flex align-items-center border-start border-3 border-primary">
                      <i className="bi bi-graph-up-arrow text-primary fs-4 me-3"></i>
                      <span
                        className="fw-bold"
                        style={{ color: "var(--secondary-color)" }}
                      >
                        Attract Investors & Partners
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded-3 d-flex align-items-center border-start border-3 border-primary">
                      <i className="bi bi-award text-primary fs-4 me-3"></i>
                      <span
                        className="fw-bold"
                        style={{ color: "var(--secondary-color)" }}
                      >
                        Strengthen Brand Positioning
                      </span>
                    </div>
                  </div>
                </div>

                {/* Section: Why Important */}
                <h3
                  className="mt-5 mb-3"
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "var(--secondary-color)",
                  }}
                >
                  Why Company Profile Design Is Important for Indian Businesses
                </h3>

                <p style={{ lineHeight: "1.8", color: "#4a5568" }}>
                  In India’s highly competitive business environment, first
                  impressions matter. A professional company profile design
                  helps your business stand out and creates a strong impact.
                </p>

                <div className="p-4 border rounded-3 bg-white shadow-sm mb-4">
                  <h5
                    className="fw-bold mb-3"
                    style={{ color: "var(--secondary-color)" }}
                  >
                    Key Benefits:
                  </h5>
                  <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                    <li className="d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-primary me-2"></i>
                      <span>
                        <strong>Builds brand credibility and trust:</strong>{" "}
                        Instills confidence in prospective clients and
                        stakeholders.
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-primary me-2"></i>
                      <span>
                        <strong>
                          Improves sales and marketing presentations:
                        </strong>{" "}
                        Gives your team an authoritative asset during pitches.
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-primary me-2"></i>
                      <span>
                        <strong>Helps convert prospects into clients:</strong>{" "}
                        Clearly communicates why your business is the ideal
                        choice.
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-primary me-2"></i>
                      <span>
                        <strong>
                          Supports investor and partnership proposals:
                        </strong>{" "}
                        Meets high corporate presentation standards.
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-primary me-2"></i>
                      <span>
                        <strong>Strengthens corporate identity:</strong> Unifies
                        your brand image across offline and online channels.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-light p-4 rounded-3 border-start border-4 border-primary my-4">
                  <p
                    style={{ lineHeight: "1.8", color: "#4a5568", margin: 0 }}
                    className="fst-italic"
                  >
                    Businesses with professionally designed company profiles are
                    perceived as more reliable and established compared to those
                    using generic templates.
                  </p>
                </div>

                {/* Section: Key Elements */}
                <h3
                  className="mt-5 mb-3"
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "var(--secondary-color)",
                  }}
                >
                  Key Elements of a Professional Company Profile Design
                </h3>

                <p style={{ lineHeight: "1.8", color: "#4a5568" }}>
                  A successful company profile design in India should include
                  the following essential elements:
                </p>

                <div className="d-flex flex-column gap-3 my-4">
                  {/* Element 1 */}
                  <div className="p-4 border rounded-3 bg-white shadow-sm border-start border-4 border-primary">
                    <h5
                      className="fw-bold mb-2"
                      style={{ color: "var(--secondary-color)" }}
                    >
                      1. Company Overview
                    </h5>
                    <p
                      style={{ lineHeight: "1.8", color: "#4a5568", margin: 0 }}
                    >
                      A clear and concise introduction to your business,
                      including your background, founding story, leadership, and
                      core expertise.
                    </p>
                  </div>

                  {/* Element 2 */}
                  <div className="p-4 border rounded-3 bg-white shadow-sm border-start border-4 border-primary">
                    <h5
                      className="fw-bold mb-2"
                      style={{ color: "var(--secondary-color)" }}
                    >
                      2. Vision, Mission & Values
                    </h5>
                    <p
                      style={{ lineHeight: "1.8", color: "#4a5568", margin: 0 }}
                    >
                      Communicate what drives your company forward, your
                      long-term goals, and the fundamental principles by which
                      you deliver value to clients.
                    </p>
                  </div>

                  {/* Element 3 */}
                  <div className="p-4 border rounded-3 bg-white shadow-sm border-start border-4 border-primary">
                    <h5
                      className="fw-bold mb-2"
                      style={{ color: "var(--secondary-color)" }}
                    >
                      3. Services or Products
                    </h5>
                    <p
                      style={{ lineHeight: "1.8", color: "#4a5568", margin: 0 }}
                    >
                      Present your offerings in a structured and
                      easy-to-understand format, focusing on solving client pain
                      points and highlighting direct benefits.
                    </p>
                  </div>

                  {/* Element 4 */}
                  <div className="p-4 border rounded-3 bg-white shadow-sm border-start border-4 border-primary">
                    <h5
                      className="fw-bold mb-2"
                      style={{ color: "var(--secondary-color)" }}
                    >
                      4. Brand Identity
                    </h5>
                    <p
                      style={{ lineHeight: "1.8", color: "#4a5568", margin: 0 }}
                    >
                      Consistent use of brand colors, typography, layout
                      geometry, and visual style to build an unmistakable
                      corporate presence.
                    </p>
                  </div>

                  {/* Element 5 */}
                  <div className="p-4 border rounded-3 bg-white shadow-sm border-start border-4 border-primary">
                    <h5
                      className="fw-bold mb-2"
                      style={{ color: "var(--secondary-color)" }}
                    >
                      5. Visual Storytelling
                    </h5>
                    <p
                      style={{ lineHeight: "1.8", color: "#4a5568", margin: 0 }}
                    >
                      High-quality graphics, bespoke icons, infographics, and
                      dynamic layouts that make your profile visually
                      captivating and highly memorable.
                    </p>
                  </div>

                  {/* Element 6 */}
                  <div className="p-4 border rounded-3 bg-white shadow-sm border-start border-4 border-primary">
                    <h5
                      className="fw-bold mb-2"
                      style={{ color: "var(--secondary-color)" }}
                    >
                      6. Contact Information
                    </h5>
                    <p
                      style={{ lineHeight: "1.8", color: "#4a5568", margin: 0 }}
                    >
                      Clear, prominent, and accessible contact details (address,
                      email, phone numbers, website URL, social links) to
                      encourage immediate inquiries.
                    </p>
                  </div>
                </div>

                {/* Section: Design Tips */}
                <h3
                  className="mt-5 mb-3"
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "var(--secondary-color)",
                  }}
                >
                  Company Profile Design Tips to Improve Results
                </h3>

                <p style={{ lineHeight: "1.8", color: "#4a5568" }}>
                  If your goal is to rank on Google, impress stakeholders, and
                  attract clients, your company profile must be both strategic
                  and visually appealing.
                </p>

                <div className="p-4 border rounded-3 bg-white shadow-sm mb-4">
                  <h5
                    className="fw-bold mb-3"
                    style={{ color: "var(--secondary-color)" }}
                  >
                    Best Practices:
                  </h5>
                  <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                    <li className="d-flex align-items-center">
                      <i className="bi bi-arrow-right-circle text-primary me-2"></i>
                      <span>
                        <strong>Keep content concise and impactful:</strong>{" "}
                        Respect the reader's time with crisp, engaging copy.
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-arrow-right-circle text-primary me-2"></i>
                      <span>
                        <strong>Focus on benefits, not just features:</strong>{" "}
                        Explain how your services solve client challenges.
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-arrow-right-circle text-primary me-2"></i>
                      <span>
                        <strong>
                          Use professional typography and layouts:
                        </strong>{" "}
                        Ensure readability across varied screen sizes and print
                        formats.
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-arrow-right-circle text-primary me-2"></i>
                      <span>
                        <strong>
                          Maintain consistent branding throughout:
                        </strong>{" "}
                        Harmonize colors, fonts, and tone of voice.
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-arrow-right-circle text-primary me-2"></i>
                      <span>
                        <strong>
                          Optimize for both print and digital formats:
                        </strong>{" "}
                        Export high-res CMYK for print and lightweight
                        interactive RGB for digital.
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-arrow-right-circle text-primary me-2"></i>
                      <span>
                        <strong>
                          Avoid clutter and unnecessary information:
                        </strong>{" "}
                        Use ample whitespace to keep the layout breathable.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Section: Print vs Digital */}
                <h3
                  className="mt-5 mb-3"
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "var(--secondary-color)",
                  }}
                >
                  Print vs Digital Company Profile Design
                </h3>

                <p style={{ lineHeight: "1.8", color: "#4a5568" }}>
                  Businesses today need company profiles that work seamlessly
                  across multiple platforms.
                </p>

                <div className="row g-4 my-2">
                  <div className="col-md-6">
                    <div className="p-4 border rounded-3 bg-white shadow-sm h-100 border-top border-4 border-primary">
                      <h5
                        className="fw-bold mb-3"
                        style={{ color: "var(--secondary-color)" }}
                      >
                        <i className="bi bi-printer me-2 text-primary"></i>{" "}
                        Print Company Profiles
                      </h5>
                      <ul className="list-unstyled mb-0 d-flex flex-column gap-2 text-muted">
                        <li>
                          <i className="bi bi-dot text-primary fs-5"></i> Ideal
                          for physical meetings, exhibitions, and corporate
                          presentations
                        </li>
                        <li>
                          <i className="bi bi-dot text-primary fs-5"></i>{" "}
                          Requires high-resolution bleed, margins, and
                          print-ready CMYK formatting
                        </li>
                        <li>
                          <i className="bi bi-dot text-primary fs-5"></i>{" "}
                          Tactile paper finishes and bindings create premium
                          tangible impressions
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-4 border rounded-3 bg-white shadow-sm h-100 border-top border-4 border-secondary">
                      <h5
                        className="fw-bold mb-3"
                        style={{ color: "var(--secondary-color)" }}
                      >
                        <i className="bi bi-laptop me-2 text-primary"></i>{" "}
                        Digital Company Profiles (PDF / Online)
                      </h5>
                      <ul className="list-unstyled mb-0 d-flex flex-column gap-2 text-muted">
                        <li>
                          <i className="bi bi-dot text-primary fs-5"></i>{" "}
                          Effortless to share instantly via email, WhatsApp, and
                          website download
                        </li>
                        <li>
                          <i className="bi bi-dot text-primary fs-5"></i>{" "}
                          Supports clickable links, interactive buttons, and
                          media embedding
                        </li>
                        <li>
                          <i className="bi bi-dot text-primary fs-5"></i>{" "}
                          Maximizes global reach, convenience, and accessibility
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p
                  className="mt-3"
                  style={{ lineHeight: "1.8", color: "#4a5568" }}
                >
                  A professional design agency ensures your profile is optimized
                  for both print and digital use with pixel-perfect precision.
                </p>

                {/* Section: Why Choose Agency */}
                <h3
                  className="mt-5 mb-3"
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "var(--secondary-color)",
                  }}
                >
                  Why Choose a Professional Company Profile Design Agency in
                  India?
                </h3>

                <p style={{ lineHeight: "1.8", color: "#4a5568" }}>
                  While templates may seem cost-effective initially, they often
                  fail to communicate your brand effectively and look generic. A
                  professional company profile design agency in India offers:
                </p>

                <div className="p-4 border rounded-3 bg-white shadow-sm mb-4">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-check2-square text-primary fs-4 me-2"></i>
                        <span>
                          <strong>Strategic Brand Understanding:</strong>{" "}
                          Uncovering your unique market differentiator.
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-check2-square text-primary fs-4 me-2"></i>
                        <span>
                          <strong>Custom Content & Layout:</strong> 100% bespoke
                          copy and visual themes tailored to your audience.
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-check2-square text-primary fs-4 me-2"></i>
                        <span>
                          <strong>Industry-Specific Expertise:</strong>{" "}
                          Designing according to B2B and sector expectations.
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-check2-square text-primary fs-4 me-2"></i>
                        <span>
                          <strong>Consistent Brand Representation:</strong>{" "}
                          Alignment across all brand touchpoints.
                        </span>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-check2-square text-primary fs-4 me-2"></i>
                        <span>
                          <strong>Higher Conversion & ROI:</strong> Profiles
                          engineered to close deals and attract investment.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p
                  className="fw-semibold text-primary"
                  style={{ lineHeight: "1.8" }}
                >
                  Working with a design agency ensures your company profile
                  aligns seamlessly with your overarching business goals and
                  marketing strategy.
                </p>

                {/* Section: Cost */}
                <h3
                  className="mt-5 mb-3"
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "var(--secondary-color)",
                  }}
                >
                  Company Profile Design Cost in India
                </h3>

                <p style={{ lineHeight: "1.8", color: "#4a5568" }}>
                  The cost of company profile design in India depends on key
                  factors including:
                </p>

                <ul
                  className="mb-4 d-flex flex-column gap-2"
                  style={{ color: "#4a5568", lineHeight: "1.8" }}
                >
                  <li>
                    <strong>Number of pages:</strong> Brief summaries (4–8
                    pages) vs. comprehensive enterprise profiles (12–24+ pages).
                  </li>
                  <li>
                    <strong>Content writing requirements:</strong> Custom
                    copywriting from scratch vs. editing existing text.
                  </li>
                  <li>
                    <strong>Level of customization:</strong> Custom graphic
                    illustrations, infographics, and 3D mockups.
                  </li>
                  <li>
                    <strong>Print and digital formats:</strong> Interactive PDF
                    setup, flipbook conversion, and print-ready prepress files.
                  </li>
                </ul>

                <div className="bg-light p-4 rounded-3 border-start border-4 border-primary my-4">
                  <p
                    style={{ lineHeight: "1.8", color: "#4a5568", margin: 0 }}
                    className="fw-bold"
                  >
                    A professionally designed company profile is an investment,
                    not an expense—delivering long-term branding and marketing
                    value.
                  </p>
                </div>

                {/* Section: FAQs */}
                <h3
                  className="mt-5 mb-3"
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "var(--secondary-color)",
                  }}
                >
                  FAQs About Company Profile Design
                </h3>

                <div className="d-flex flex-column gap-3 mb-5">
                  <div className="p-4 border rounded-3 bg-white shadow-sm">
                    <h5
                      className="fw-bold mb-2"
                      style={{ color: "var(--secondary-color)" }}
                    >
                      Q1: How many pages should a company profile have?
                    </h5>
                    <p
                      style={{ lineHeight: "1.8", color: "#4a5568", margin: 0 }}
                    >
                      Most professional company profiles range between{" "}
                      <strong>8 to 20 pages</strong>, depending on business
                      size, service diversity, and specific presentation
                      requirements.
                    </p>
                  </div>

                  <div className="p-4 border rounded-3 bg-white shadow-sm">
                    <h5
                      className="fw-bold mb-2"
                      style={{ color: "var(--secondary-color)" }}
                    >
                      Q2: What format is best for a company profile?
                    </h5>
                    <p
                      style={{ lineHeight: "1.8", color: "#4a5568", margin: 0 }}
                    >
                      <strong>PDF</strong> is the most widely used and
                      recommended format, suitable for seamless digital sharing
                      over email and cloud storage as well as high-definition
                      physical printing.
                    </p>
                  </div>

                  <div className="p-4 border rounded-3 bg-white shadow-sm">
                    <h5
                      className="fw-bold mb-2"
                      style={{ color: "var(--secondary-color)" }}
                    >
                      Q3: How long does company profile design take?
                    </h5>
                    <p
                      style={{ lineHeight: "1.8", color: "#4a5568", margin: 0 }}
                    >
                      Typically, <strong>7–14 working days</strong>, depending
                      on content finalization, design complexity, page count,
                      and client feedback cycles.
                    </p>
                  </div>
                </div>

                {/* Section: Professional Services */}
                <h3
                  className="mt-5 mb-3"
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "var(--secondary-color)",
                  }}
                >
                  Professional Company Profile Design Services in India
                </h3>

                <p style={{ lineHeight: "1.8", color: "#4a5568" }}>
                  If you’re looking for company profile design services in
                  India, our design agency specializes in creating custom,
                  high-impact profiles tailored to your brand and business
                  goals.
                </p>

                <p style={{ lineHeight: "1.8", color: "#4a5568" }}>
                  We combine strategic content, creative design, and branding
                  expertise to deliver company profiles that help businesses
                  grow and convert leads.
                </p>

                <div className="p-4 border rounded-3 bg-white shadow-sm mb-4">
                  <h5
                    className="fw-bold mb-3"
                    style={{ color: "var(--secondary-color)" }}
                  >
                    Why Choose Us?
                  </h5>
                  <div className="row g-2">
                    <div className="col-md-6 d-flex align-items-center">
                      <i className="bi bi-star-fill text-warning me-2"></i>
                      <span>Experienced design professionals</span>
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                      <i className="bi bi-star-fill text-warning me-2"></i>
                      <span>Industry-focused approach</span>
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                      <i className="bi bi-star-fill text-warning me-2"></i>
                      <span>Custom, non-template designs</span>
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                      <i className="bi bi-star-fill text-warning me-2"></i>
                      <span>On-time delivery</span>
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                      <i className="bi bi-star-fill text-warning me-2"></i>
                      <span>Competitive pricing</span>
                    </div>
                  </div>
                </div>

                {/* Call To Action Banner */}
                <div
                  className="p-4 p-md-5 my-5 text-white rounded-3 shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--secondary-color) 0%, #001f42 100%)",
                  }}
                >
                  <h3 className="text-white fw-bold mb-3">
                    Get a Professional Company Profile Designed Today
                  </h3>
                  <p className="text-white-50 mb-4 fs-6">
                    A strong company profile can transform how your business is
                    perceived. If you want a professional company profile design
                    that helps your business rank, convert, and grow, our team
                    is ready to help. Contact us today for a free consultation
                    on company profile design in India.
                  </p>
                  <Link
                    href="/contact-us"
                    className="btn px-4 py-3 fw-bold rounded-pill text-white"
                    style={{ background: "var(--primary-color)" }}
                  >
                    Request Free Quote{" "}
                    <i className="bi bi-arrow-right ms-2"></i>
                  </Link>
                </div>

                {/* Social Share */}
                <div className="blogs-social-share d-flex align-items-center gap-3 my-4">
                  <span className="social-text fw-bold">Social Share:</span>
                  <ul className="social-share list-unstyled d-flex gap-2 mb-0">
                    <li>
                      <Link
                        href="#"
                        className="btn btn-outline-secondary btn-sm rounded-circle"
                      >
                        <i className="bi bi-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="btn btn-outline-secondary btn-sm rounded-circle"
                      >
                        <i className="bi bi-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="btn btn-outline-secondary btn-sm rounded-circle"
                      >
                        <i className="bi bi-linkedin"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="btn btn-outline-secondary btn-sm rounded-circle"
                      >
                        <i className="bi bi-whatsapp"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfileDesignGuide;
