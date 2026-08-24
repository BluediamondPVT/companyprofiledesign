import Link from 'next/link';
import data from '../../Data/blog.json';
import Image from "next/image";

const BlogGrid = ({ title, subTitle, description, limit }) => {
    const displayData = limit ? data.slice(0, limit) : data;

    return (
        <div className="blogs-section">
		<div className="container">
            {(title || subTitle || description) && (
                <div className="row">
                    <div className="col-lg-12">
                        <div className="company-profile-design-section-title text-center padding-lg mb-5">
                            {subTitle && <h4>{subTitle}</h4>}
                            {title && <h2>{title}</h2>}
                            {description && (
                                <p className="mx-auto mt-3" style={{ maxWidth: '900px', width: '100%' }}>
                                    {description}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            )}
			<div className="row g-4 d-flex flex-wrap">
            {displayData.map((item, i) => (
				<div key={i} className="col-lg-4 col-md-6 d-flex">
					<div className="single-blog-box w-100 d-flex flex-column mb-0">
						<div className="blog-thumb">
							<Image src={item.img} alt={item.title} width={416} height={234} style={{ width: '100%', height: '234px', objectFit: 'cover' }} />
						</div>
						<div className="blog-content d-flex flex-column flex-grow-1 justify-content-between">
							<div>
								<h2 className="blog-title"><Link href={item.link}>{item.title}</Link></h2>
								<p className="blog-desc">{item.desc}</p>
							</div>
							<div className="blog-btn mt-auto pt-3">
								<Link href={item.link} aria-label={`Read complete article: ${item.title}`}>
									Read Full Article &rarr;
								</Link>
							</div>
						</div>
					</div>
				</div>
                ))}

			</div>
		</div>
	</div>
    );
};

export default BlogGrid;