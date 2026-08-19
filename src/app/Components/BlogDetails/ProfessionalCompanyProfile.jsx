import Image from "next/image";
import Link from "next/link";
import blogData from "../../Data/blog.json";

const ProfessionalCompanyProfile = () => {
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
                  src="/assets/images/blog/Professional-Company-Profile-1200x675.jpg"
                  alt="How can you make a professional company profile?"
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
                <h1
                  className="blog-title2 mb-4"
                  style={{
                    fontSize: "32px",
                    fontWeight: "700",
                    color: "var(--secondary-color)",
                    lineHeight: "1.3",
                  }}
                >
                  How can you make a professional company profile?
                </h1>

                <p
                  className="lead fs-5 mb-4"
                  style={{ color: "#4a5568", lineHeight: "1.8" }}
                >
                  When it comes to the company profile, every business and company owner should take deliberate efforts to make it fully professional. Company Profile reflects your company and gives insights to your customers about your company. There are many unique designs if you look in the market, but the basic points that are covered in them are more or less the same. These points are defining factors of your company.
                </p>

                <hr className="my-4" />

                <h3
                  className="mt-4 mb-3"
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "var(--secondary-color)",
                  }}
                >
                  Key Points Which Are Soul for Any Corporate Company Profile
                </h3>

                <p style={{ lineHeight: "1.8", color: "#4a5568" }}>
                  Being a leading professional company profile design company, we have jotted down some key points which are soul for any Corporate company profile.
                </p>

                {/* Key Points Cards */}
                <div className="d-flex flex-column gap-4 my-4">
                  {/* Point 1 */}
                  <div className="p-4 border rounded-3 bg-white shadow-sm border-start border-4 border-primary">
                    <h4
                      className="fw-bold mb-2"
                      style={{ color: "var(--secondary-color)" }}
                    >
                      1. The "About Us" Section
                    </h4>
                    <p style={{ lineHeight: "1.8", color: "#4a5568", margin: 0 }}>
                      Primarily, you should include the “About Us” paragraph, where you describe concisely about who you are? When you started it? And why you started it. It is the 1st paragraph that every person reads when you browse through your professional company profile. Every content on your company profile should be grammatically correct and concise in size. You don’t want your customers to get bore when they start going through your company profile.
                    </p>
                  </div>

                  {/* Point 2 */}
                  <div className="p-4 border rounded-3 bg-white shadow-sm border-start border-4 border-primary">
                    <h4
                      className="fw-bold mb-2"
                      style={{ color: "var(--secondary-color)" }}
                    >
                      2. Vision and Mission Statements
                    </h4>
                    <p style={{ lineHeight: "1.8", color: "#4a5568", margin: 0 }}>
                      After, that you must include Vision and mission statements. Now, what are vision statements? Vision statements are your company’s dream statements like where do you see yourself in the future or what position you want to achieve. Now vision statements can generally be devised by the company owners with the help of professional content writers. Right after your vision statements, you should place Mission statements. Mission statements are the motivational statements for your company what you are working for like you your mission can be expanding your company throughout the country and many such statements. These statements give insights about your existence to your customers like why are you in the market.
                    </p>
                  </div>

                  {/* Point 3 */}
                  <div className="p-4 border rounded-3 bg-white shadow-sm border-start border-4 border-primary">
                    <h4
                      className="fw-bold mb-2"
                      style={{ color: "var(--secondary-color)" }}
                    >
                      3. Value Statements
                    </h4>
                    <p style={{ lineHeight: "1.8", color: "#4a5568", margin: 0 }}>
                      Following Vision and Mission Statements write down your Value statements. Value statements are those statements that are the pillar of your company. It means like what ideology your company supports for your customers, employees, country, environment, and domain. It reflects your company’s ideology to everyone. You should always you Adjectives to write down your values and then 1 or 2 lines to explain it. It need not be too long, you can use the maximum of 5-6 strong values that support you and your company. These statements are the heart of your professional company profile.
                    </p>
                  </div>

                  {/* Point 4 */}
                  <div className="p-4 border rounded-3 bg-white shadow-sm border-start border-4 border-primary">
                    <h4
                      className="fw-bold mb-2"
                      style={{ color: "var(--secondary-color)" }}
                    >
                      4. Concise and Attractive Services
                    </h4>
                    <p style={{ lineHeight: "1.8", color: "#4a5568", margin: 0 }}>
                      At last, you can add your services in a concise and attractive manner. It is not recommended to describe your services briefly as it is not a product or service brochure, it is your professional company profile and it should maintain its length and content. You should take an expert help when you design your company profile.
                    </p>
                  </div>

                  {/* Point 5 */}
                  <div className="p-4 border rounded-3 bg-white shadow-sm border-start border-4 border-primary">
                    <h4
                      className="fw-bold mb-2"
                      style={{ color: "var(--secondary-color)" }}
                    >
                      5. Leadership Message & Testimonials
                    </h4>
                    <p style={{ lineHeight: "1.8", color: "#4a5568", margin: 0 }}>
                      There are a few more elements that you can add in your corporate company profile like Director or CEO’s message and Famous client testimonials.
                    </p>
                  </div>
                </div>

                <div className="bg-light p-4 rounded-3 border-start border-4 border-primary my-4">
                  <p style={{ lineHeight: "1.8", color: "#4a5568", margin: 0 }}>
                    We believe that it is not a regular task, it should be done with deliberate efforts as it will create a long-lasting effect on your customers’ minds. So be wise and choose a leading Corporate Company Profile expert designers to create your own professional company profile.
                  </p>
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
                    Stand out in the competitive market with a custom,
                    high-converting company profile designed by India's leading
                    design experts. Contact our team today for a free
                    consultation and quote!
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

export default ProfessionalCompanyProfile;
