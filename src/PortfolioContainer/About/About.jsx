import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pix2 from '../../assets/Home/pix2.jpg'
import "./About.css";

function About() {
	return (
		// <section class="ftco-about img ftco-section ftco-no-pb pt-5 my-5" id="about-section">
		<div class="container">
			<div class="row content" id='about-section'>
				<h2 class="mb-4 pt-5 h2 text-center"><p>About Me</p></h2>
				<div class="col-sm-12 col-md-4 col-lg-4">
					<div class="img-about img ">
						<div class="overlay"></div>
						<div class="img pix2 ">
							<img src={pix2} alt="" class="img-fluid mb-4" />
						</div>
					</div>
				</div>
				<div class="col-sm-12 col-md-8 col-lg-8 pl-lg-8 pb-5 context">
					<div class="row justify-content-start pb-3">
						<div class="col-md-12 heading-section ftco-animate">
							<div class="shadow px-3 about">
								<p>I'm a Backend Developer with 2+ years of experience crafting server-side logic using NestJS and working with both SQL and NoSQL databases. I'm a passionate learner constantly seeking out new technologies to enhance my skills.  While proficient in Express.js/NestJS, HTML, CSS, and Bootstrap, my expertise lies in creating dynamic and user-friendly web application APIs. <br /> I also enjoy mentoring aspiring developers, fostering their growth and problem-solving skills in the world of web development. <br />
								My strong communication and collaboration skills allow me to effectively work with cross-functional teams to deliver high-quality and scalable backend solutions.
								</p>
								{/* <p class="pt-3">I am a seasoned web developer with 3 years of backend web developer experience. My expertise in back-end web development enables me to create dynamic and user-friendly web applications APIs. With my experience, I guide aspiring developers who are eager to dive into the world of tech through web development, fostering their growth and problem-solving skills.</p> */}
							</div>
						</div>
					</div>
					<div class="counter-wrap ftco-animate d-flex mt-md-1">
					<div class="form-group pt-3">
					{/* <a href="fredrickUdom.pdf" download=" Fredrick fredrickUdom.pdf"><button type="button" className='btn btn-primary py-3' style={{backgroundColor: '#111E6C '}}>Download Resume <i class="fa fa-cloud-download" aria-hidden="true"></i></button></a> */}

					<div className="download-resume">
					<a href="fredrickUdom.pdf" download=" Fredrick fredrickUdom.pdf"><button className="btn highlighted-btn get-resume">Download CV <i class="fa fa-download" aria-hidden="true"></i></button></a>
					</div>
            </div>
					</div>
				</div>
			</div>
		</div>

		// </section>
	);
}

export default About;