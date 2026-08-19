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
                  src="/assets/images/blog/Company-Profile-Design-1200x675.jpg"
                  alt="What Should A Company Profile Content Include"
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
                    <i className="bi bi-folder text-primary me-1"></i> Company
                    Profile Content
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
                  What Should A Company Profile Content
                </h1>

                <p
                  className="lead fs-5 mb-4"
                  style={{ color: "#4a5568", lineHeight: "1.8" }}
                >
                  Company Profile is the most important piece of document that
                  represents one’s company to its customers, in short, you can
                  say that Company Profile will imprint your company’s detail
                  meticulously in your customer’s mind more than any medium. The
                  company profile content plays the most important role along
                  with its design, therefore Company profile content should
                  always be prepared with a professional writer, who is expert
                  in conveying your details effectively to your customers
                  through his mesmerizing writing skills.
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
                  Now while designing and creating a company profile content
                  following points should be kept in mind
                </h3>

                {/* 4 Key Points Cards */}
                <div className="d-flex flex-column gap-4 my-4">
                  {/* Point 1 */}
                  <div className="p-4 border rounded-3 bg-white shadow-sm border-start border-4 border-primary">
                    <h4
                      className="fw-bold mb-2"
                      style={{ color: "var(--secondary-color)" }}
                    >
                      1) Uniqueness
                    </h4>
                    <p
                      style={{ lineHeight: "1.8", color: "#4a5568" }}
                      className="mb-2"
                    >
                      Your company profile should represent your unique
                      representation to your valuable customer. It should not
                      look like an everyday newspaper full of information, which
                      will not attract your customers. Rather care should be
                      taken in finding a unique way to represent your company
                      via printed company profile content.
                    </p>
                    <p className="small fw-semibold text-primary mb-0">
                      Being one of the leading Company Profile designers, we
                      understand the customer requirement and hence we create a
                      unique company profile content and design every time. We
                      avoid repetitions in our work by delivering unique designs
                      every time.
                    </p>
                  </div>

                  {/* Point 2 */}
                  <div className="p-4 border rounded-3 bg-white shadow-sm border-start border-4 border-primary">
                    <h4
                      className="fw-bold mb-2"
                      style={{ color: "var(--secondary-color)" }}
                    >
                      2) Informative
                    </h4>
                    <p
                      style={{ lineHeight: "1.8", color: "#4a5568" }}
                      className="mb-2"
                    >
                      Now, Informative here doesn’t mean to just copy-paste
                      everything, it will add no value if you do so. It will
                      rather just be thrown for recycling. So be smart and
                      choose the content you want your customer should read. It
                      may be your vision, mission, values, achievement or
                      comprehensive list of your services. Whatever you print
                      draft it through a professional company profile content
                      writer in a concise, crisp and clear manner.
                    </p>
                    <p className="small fw-semibold text-primary mb-0">
                      As the best Company Profile designers in the industry, we
                      have a team of professional content writers who can draft
                      the best content for you which will attract and target
                      your customers very well.
                    </p>
                  </div>

                  {/* Point 3 */}
                  <div className="p-4 border rounded-3 bg-white shadow-sm border-start border-4 border-primary">
                    <h4
                      className="fw-bold mb-2"
                      style={{ color: "var(--secondary-color)" }}
                    >
                      3) Pictorial
                    </h4>
                    <p
                      style={{ lineHeight: "1.8", color: "#4a5568" }}
                      className="mb-2"
                    >
                      This is the main part of the company profile – Amazing
                      Pictures. As we all know, “Pictures speak a thousand times
                      louder than words”, we have to use this basic phenomenon
                      in our company profile too. We have to strategically place
                      pictures and graphics in our company profile that it
                      creates a positive image in our customers’ mind.
                    </p>
                    <p className="small fw-semibold text-primary mb-0">
                      Our creative team of content writers and graphic designers
                      synergize to create the best company profile content which
                      is praised by everyone.
                    </p>
                  </div>

                  {/* Point 4 */}
                  <div className="p-4 border rounded-3 bg-white shadow-sm border-start border-4 border-primary">
                    <h4
                      className="fw-bold mb-2"
                      style={{ color: "var(--secondary-color)" }}
                    >
                      4) High-Quality Resolution
                    </h4>
                    <p
                      style={{ lineHeight: "1.8", color: "#4a5568" }}
                      className="mb-2"
                    >
                      Who likes the blurry content? Make sure to use good
                      quality images and premium Softwares when you are
                      designing your company profile. The premium contents
                      attract your customers most, the premium content creates a
                      trustworthy brand reorganization among your customers.
                    </p>
                    <p className="small fw-semibold text-primary mb-0">
                      We have a professional team of writers and content
                      creators who are armed with all the renowned premium
                      Softwares that help to create eye-popping and crisp
                      company profile content.
                    </p>
                    <p className="small fw-semibold text-primary mb-0">
                      The above points may look easy when you read these key
                      points, but when you get in the process you will
                      definitely need the help of professional and experienced
                      company profile content writers and creators. It is not
                      just a regular leaflet or flyer, it is your existence on
                      premium paper which can be shared with your customers.
                    </p>
                  </div>
                </div>

                <div className="bg-light p-4 rounded-3 my-4">
                  <p
                    style={{ lineHeight: "1.8", color: "#4a5568", margin: 0 }}
                    className="fst-italic"
                  >
                    The above points may look easy when you read these key
                    points, but when you get into the execution process, you
                    will definitely need the help of professional and
                    experienced company profile content writers and creators. It
                    is not just a regular leaflet or flyer—it is your existence
                    on premium paper which can be shared with your customers.
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
