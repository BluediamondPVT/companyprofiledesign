import Link from 'next/link';
import data from '../../Data/blog.json';
import Image from 'next/image';

const BlogSidebar = () => {
    return (
        <div className="blogs-section py-5">
		<div className="container">
			<div className="row">
				<div className="col-lg-8">
					<div className="row blogs-pr">
                    {data.map((item, i) => (
						<div key={i} className="col-lg-6 col-md-6 mb-4">
							<div className="single-blog-box h-100 d-flex flex-column">
								<div className="blog-thumb">
								<Image src={item.img} alt={item.title} width={411} height={304} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
								</div>
								<div className="blog-content d-flex flex-column flex-grow-1 justify-content-between p-4">
									<div>
										<h2 className="blog-title" style={{ fontSize: '20px', lineHeight: '1.4' }}>
											<Link href={item.link || "/our-blog"}>{item.title}</Link>
										</h2>
										<p className="blog-desc mt-2">{item.desc}</p>
									</div>
									<div className="blog-btn mt-3">
                                    	<Link href={item.link || "/our-blog"}>Read More</Link>
									</div>
								</div>
							</div>
						</div>
                        ))}
					</div>
				</div>
				<div className="col-lg-4 responsive">
					<div className="widget_search upper mb-4">
						<form action="#" method="get">
							<input type="text" name="s" defaultValue="" placeholder="Search Here" title="Search for:" />
							<button type="submit" className="icons">
                            <i className="bi bi-search"></i>
							</button>
						</form>
					</div>
					<div className="widget-sidebar-box mb-4">
						<h4 className="sidebar-title mb-4"> Recent Posts </h4>
						{data.slice(0, 4).map((post, idx) => (
							<div key={idx} className="widget-recent-post d-flex mb-3 align-items-center">
								<div className="rpost-thumb me-3 flex-shrink-0" style={{ width: '80px', height: '65px', overflow: 'hidden', borderRadius: '8px' }}>
									<Link href={post.link || '/our-blog'}>
										<Image 
											src={post.img} 
											alt={post.title} 
											width={80} 
											height={65} 
											style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
										/>
									</Link>
								</div>
								<div className="rpost-content">
									<div className="rpost-title">
										<h5 style={{ fontSize: '14px', lineHeight: '1.4', margin: 0, fontWeight: '600' }}>
											<Link href={post.link || '/our-blog'} style={{ color: 'var(--secondary-color)', textDecoration: 'none' }}>
												{post.title}
											</Link>
										</h5>
										<span style={{ fontSize: '12px', color: '#777' }}>12 Aug, 2025</span>
									</div>
								</div>
							</div>
						))}
					</div>
					<div className="widget-sidebar-box mb-4">
						<h4 className="sidebar-title upp mb-3">Categories</h4>
						<ul className="sidebar-menu list-unstyled">
							<li className="py-2"><Link href="/our-blog" className="text-decoration-none text-dark"><i className="bi bi-chevron-double-right text-primary me-2"></i> Company Profile Design</Link></li>
							<li className="py-2"><Link href="/brochure-design-company" className="text-decoration-none text-dark"><i className="bi bi-chevron-double-right text-primary me-2"></i> Brochure Design</Link></li>
							<li className="py-2"><Link href="/catalogue-design-company" className="text-decoration-none text-dark"><i className="bi bi-chevron-double-right text-primary me-2"></i> Corporate Branding</Link></li>
							<li className="py-2"><Link href="/company-profile-writing" className="text-decoration-none text-dark"><i className="bi bi-chevron-double-right text-primary me-2"></i> Content Writing</Link></li>
							<li className="py-2"><Link href="/graphic-design-company-in-india" className="text-decoration-none text-dark"><i className="bi bi-chevron-double-right text-primary me-2"></i> Graphic Design</Link></li>
						</ul>
					</div>
					<div className="widget-sidebar-box">
						<h4 className="sidebar-title mb-3">Popular Tags</h4>
						<div className="tag-item">
							<ul className="d-flex flex-wrap gap-2 list-unstyled">
								<li><Link href="/our-blog" className="badge bg-light text-dark p-2 text-decoration-none">#CompanyProfile</Link></li>
								<li><Link href="/brochure-design-company" className="badge bg-light text-dark p-2 text-decoration-none">#BrochureDesign</Link></li>
								<li><Link href="/our-blog" className="badge bg-light text-dark p-2 text-decoration-none">#BrandingIndia</Link></li>
								<li><Link href="/our-blog" className="badge bg-light text-dark p-2 text-decoration-none">#BusinessGrowth</Link></li>
								<li><Link href="/graphic-design-company-in-india" className="badge bg-light text-dark p-2 text-decoration-none">#GraphicDesign</Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
};

export default BlogSidebar;