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
                  src="/assets/images/blog/Construction-Company-Profile-1-1200x675.jpg"
                  alt="Importance of Construction Company Profile"
                  width={846}
                  height={476}
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
                    <i className="bi bi-folder text-primary me-1"></i>{" "}
                    Importance of Construction Company Profile
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
                  Importance of Construction Company Profile
                </h1>

                <p
                  className="lead fs-5 mb-4"
                  style={{ color: "#4a5568", lineHeight: "1.8" }}
                >
                  Professional Company Profile plays a vital role when you want
                  to convey the details of your company to your customer. A
                  company profile is a necessary document for every company,
                  especially for the company which develops huge projects that
                  benefits people. Companies that are in Construction Domain and
                  Fabrication Domain need Professional Company Profiles
                  mandatorily to showcase their work and forthcoming projects.
                </p>

                <p style={{ lineHeight: "1.8", color: "#4a5568" }}>
                  Being a leading Professional Company Profile design company,
                  we have designed numerous Construction Company Profile and
                  service sector company profiles. We have listed a few
                  important parameters which make Company Profile the most
                  mandatory documents for the construction companies.
                </p>

                <hr className="my-4" />

                {/* Parameters Cards */}
                <div className="d-flex flex-column gap-4 my-4">
                  {/* Point 1 */}
                  <div className="p-4 border rounded-3 bg-white shadow-sm border-start border-4 border-primary">
                    <h4
                      className="fw-bold mb-3"
                      style={{ color: "var(--secondary-color)" }}
                    >
                      1. Project Showcase
                    </h4>
                    <p
                      style={{ lineHeight: "1.8", color: "#4a5568", margin: 0 }}
                    >
                      Every construction company develops great projects for its
                      individual customers or government authorities. Now the
                      question is how will you tell your new customers that you
                      did that project? The answer is Construction Profile. It
                      will have everything from your prestigious projects,
                      landmark projects, and your awards. Now why these are
                      necessary? These are necessary to build the trust of your
                      customers on you. For instance, You had built a great
                      residential complex, and when you write that project in
                      your company profile content, the new customer
                      automatically gets the trust factor attached to you for
                      the next project.
                    </p>
                  </div>

                  {/* Point 2 */}
                  <div className="p-4 border rounded-3 bg-white shadow-sm border-start border-4 border-primary">
                    <h4
                      className="fw-bold mb-3"
                      style={{ color: "var(--secondary-color)" }}
                    >
                      2. Your Company Details
                    </h4>
                    <p
                      style={{ lineHeight: "1.8", color: "#4a5568", margin: 0 }}
                    >
                      Every customer is very keen to know when a particular
                      company got started, who founded it, and how it reached
                      this position. Hence it crucial for every construction
                      company to create good content for its introduction to the
                      customer. Every construction company should take an effort
                      in creating good welcoming content for its customers so
                      that their customers can know them very well.
                    </p>
                  </div>

                  {/* Point 3 */}
                  <div className="p-4 border rounded-3 bg-white shadow-sm border-start border-4 border-primary">
                    <h4
                      className="fw-bold mb-3"
                      style={{ color: "var(--secondary-color)" }}
                    >
                      3. Your goals for Customers
                    </h4>
                    <p
                      style={{ lineHeight: "1.8", color: "#4a5568", margin: 0 }}
                    >
                      Why the customer is engaging or should engage with your
                      company and invest his hard-earned money in your project?
                      How will you convince them to do so? The perfect answer to
                      this question is via Company Profile. Yes! you can create
                      and list down your goals in such a way that every customer
                      will feel that this is the company I am looking for to
                      invest my life savings.
                    </p>
                  </div>
                </div>

                {/* Conclusion Section */}
                <div className="bg-light p-4 rounded-3 my-4">
                  <p
                    style={{ lineHeight: "1.8", color: "#4a5568" }}
                    className="mb-3"
                  >
                    The above parameters are important for a Construction
                    Company for creating their professional company profile. Now
                    when creating a company profile content for the construction
                    company main thing to keep in mind is the customer-centric
                    approach. Because unlike other products in the world,
                    investment in construction-related services is huge. For Eg.
                    House, House or utility services.
                  </p>
                  <p
                    style={{ lineHeight: "1.8", color: "#4a5568", margin: 0 }}
                    className="fw-semibold text-primary"
                  >
                    Being a leading Professional Company Profile designers we
                    understand the importance of Construction Company Profile.
                    We know how to showcase projects and goals of construction
                    companies in unique and creative ways. To date, we have
                    created many Construction Company Profile with the best of
                    the content and design.
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

export default CompanyProfileDesignGuide;
