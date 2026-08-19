import Image from "next/image";
import Link from "next/link";
import blogData from "../../Data/blog.json";

const CompanyProfileSample = () => {
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
                  alt="Top 5 Inspiring Company Profile Samples for Business"
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
                  Top 5 Inspiring Company Profile Sample for Business
                </h1>

                <p
                  className="lead fs-5 mb-4"
                  style={{ color: "#4a5568", lineHeight: "1.8" }}
                >
                  First impression is the last impression. Similarly every
                  company has a profile which acts as the first impression for
                  all clients. Hence, it is an introduction to the company and
                  it’s services too. As it’s the first impression it’s important
                  to have it in a systematic way with the complete information.
                  A Company Profile Sample gives you an idea to choose your
                  Company Profile template according to your type of business.
                  Our company makes you choose the right one for you and also
                  provides an in-depth explanation about the company in Company
                  Profile PDF form.
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
                  What are the different sections we write Company Profile for?
                </h3>

                <p style={{ lineHeight: "1.8", color: "#4a5568" }}>
                  Company Profile sample writing is also an art and puts you in
                  the confusion about how to write company profile templates.
                  That’s really not a great issue as we are here for you to make
                  one that is going to be the best Company Profile. Here is the
                  small description about different sectors of Company Profile
                  Examples that we are expert in writing about:
                </p>

                {/* Sample Sectors */}
                <div className="d-flex flex-column gap-4 my-4">
                  {/* Sector 1 */}
                  <div className="p-4 border rounded-3 bg-white shadow-sm">
                    <h4
                      className="fw-bold mb-2"
                      style={{ color: "var(--secondary-color)" }}
                    >
                      1. Construction Company Profile Sample
                    </h4>
                    <p style={{ lineHeight: "1.8", color: "#4a5568" }}>
                      When it comes to how to write Company Profile Writing it’s
                      important to include the company’s bid documents,
                      websites, brochures and annual reports, company handles,
                      financial stabilities and resources. We are the one who is
                      going to add all these points which are going to be
                      highlighted in your examples with a perfect Profile
                      Company Template, you can also check our Company Profile
                      Examples.
                    </p>
                    <Link
                      href="#"
                      className="fw-bold text-decoration-none d-inline-flex align-items-center"
                      style={{ color: "var(--primary-color)" }}
                    >
                      Click Here to view the sample{" "}
                      <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  </div>

                  {/* Sector 2 */}
                  <div className="p-4 border rounded-3 bg-white shadow-sm">
                    <h4
                      className="fw-bold mb-2"
                      style={{ color: "var(--secondary-color)" }}
                    >
                      2. IT Company Profile Sample
                    </h4>
                    <p style={{ lineHeight: "1.8", color: "#4a5568" }}>
                      As for the concern with IT companies, it ensures the
                      storing and retrieving of data and also provides technical
                      support. So even we ensure that we never keep on a doubt
                      on how to write a Company Profile. We know the technical
                      words to be included while writing the Company Profile for
                      the IT company so that you can get the best one.
                    </p>
                    <Link
                      href="#"
                      className="fw-bold text-decoration-none d-inline-flex align-items-center"
                      style={{ color: "var(--primary-color)" }}
                    >
                      Click Here to view the sample{" "}
                      <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  </div>

                  {/* Sector 3 */}
                  <div className="p-4 border rounded-3 bg-white shadow-sm">
                    <h4
                      className="fw-bold mb-2"
                      style={{ color: "var(--secondary-color)" }}
                    >
                      3. Business Solution Company Profile Sample
                    </h4>
                    <p style={{ lineHeight: "1.8", color: "#4a5568" }}>
                      Business Solution companies are the ones that help in
                      solving issues regarding financial problems and
                      inefficient processes. We also write Company Profile
                      Templates in this too and we experts who have better ideas
                      about this, so you just put out your idea in front of us
                      and that’s it the perfect Company Profile will be yours.
                    </p>
                    <Link
                      href="#"
                      className="fw-bold text-decoration-none d-inline-flex align-items-center"
                      style={{ color: "var(--primary-color)" }}
                    >
                      Click Here to view the sample{" "}
                      <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  </div>

                  {/* Sector 4 */}
                  <div className="p-4 border rounded-3 bg-white shadow-sm">
                    <h4
                      className="fw-bold mb-2"
                      style={{ color: "var(--secondary-color)" }}
                    >
                      4. Safety World Company Profile Sample
                    </h4>
                    <p style={{ lineHeight: "1.8", color: "#4a5568" }}>
                      Nowadays even Safety World Companies are in a great demand
                      and if you are starting a company with this then it’s must
                      that you should be perfect about whatever you are going to
                      mention. You are just a step away, reach out to us and
                      will be writing the Best Company Profile with a whole
                      description in a pdf form.
                    </p>
                    <Link
                      href="#"
                      className="fw-bold text-decoration-none d-inline-flex align-items-center"
                      style={{ color: "var(--primary-color)" }}
                    >
                      Click Here to view the sample{" "}
                      <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  </div>

                  {/* Sector 5 */}
                  <div className="p-4 border rounded-3 bg-white shadow-sm">
                    <h4
                      className="fw-bold mb-2"
                      style={{ color: "var(--secondary-color)" }}
                    >
                      5. Manufacturing Industries Company Profile Sample
                    </h4>
                    <p style={{ lineHeight: "1.8", color: "#4a5568" }}>
                      Wondering about how to make a Company Profile Sample for
                      your Manufacturing Industries. Everyone has a
                      misconception that it’s not going to work. Well, not
                      really! Your Profile is the one people are going to
                      observe so make it best for you with a perfect Company
                      Profile Template and your company and we are going to do
                      it for you with all our dedication with a Company Profile
                      PDF too.
                    </p>
                    <Link
                      href="#"
                      className="fw-bold text-decoration-none d-inline-flex align-items-center"
                      style={{ color: "var(--primary-color)" }}
                    >
                      Click Here to view the sample{" "}
                      <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>

                <div className="bg-light p-4 rounded-3 border-start border-4 border-primary my-4">
                  <p style={{ lineHeight: "1.8", color: "#4a5568", margin: 0 }}>
                    Before writing a Company Profile, have enough knowledge
                    about what your company is going to provide to the target
                    audience and why you actually need one. The moment you have
                    it you can enlighten your Company Profile PDF in a unique
                    way that could actually differentiate it from others. Have a
                    better idea and take it to us and we will be providing you
                    with the best Company Profile that is going to make a right
                    reflection in the market.
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

export default CompanyProfileSample;
