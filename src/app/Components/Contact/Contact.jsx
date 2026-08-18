import Image from "next/image";

const Contact = () => {
    return (
        <div className="contact-us">
		<div className="container">
			<div className="row">
				<div className="col-lg-6">
					<div className="contact-thumb">
						<iframe 
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241285.46813420462!2d72.96113506033983!3d19.103907366978277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf6c8191fea3%3A0xbd47b3b652d8e83a!2sBlue%20Diamond%20Infotech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1785409862572!5m2!1sen!2sin" 
							width="100%" 
							height="781" 
							style={{border: 0}} 
							allowFullScreen="" 
							loading="lazy" 
							referrerPolicy="strict-origin-when-cross-origin"
						></iframe>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="company-profile-design-section-title padding-lg1">
						<h1>Send Us a Message</h1>
						<p>Send Us Your Valuable Message & We will reply your Message soon!</p>
					</div>
					<div className="contact-form-box3">
						<form action="https://formspree.io/f/myyleorq" method="POST" id="dreamit-form">
							<div className="row">
								<div className="col-lg-12">
									<h6 className="form-title"> Name*</h6>
									<div className="form-box">
										<input type="text" placeholder="Enter Your Name" />
									</div>
								</div>
								<div className="col-lg-12"> 
									<h6 className="form-title"> Your E-Mail*</h6>
									<div className="form-box">
										<input type="text" placeholder="Enter E-Mail" />
									</div>
								</div>
								<div className="col-lg-6"> 
									<h6 className="form-title"> Your Phone Number*</h6>
									<div className="form-box">
										<input type="password" placeholder="Enter Phone Number" />
									</div>
								</div>
								<div className="col-lg-6"> 
									<h6 className="form-title"> Subject*</h6>
									<div className="form-box">
										<input type="text" placeholder="Subject" />
									</div>
								</div>
								<div className="col-lg-12">
									<div className="form-box">
										<h6 className="form-title"> Comment*</h6>
										<textarea name="massage" id="massage" cols="30" rows="10" placeholder="Write Comment"></textarea>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="contact-form style-two">
										<button type="submit">  Submit Now </button>
									</div>
								</div>
							</div>
						</form>
						<div id="status"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
};

export default Contact;