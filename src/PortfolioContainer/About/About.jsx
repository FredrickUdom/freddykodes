import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pix2 from '../../assets/Home/pix2.jpg'
import "./About.css";

function About() {
	return (
		// <section class="ftco-about img ftco-section ftco-no-pb pt-5 my-5" id="about-section">
		<div class="container">
			<div class="row content">
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
								<p>I write server-side logic with NestJS using SQL and NoSQL databases. I am passionate about learning new things and improving my skills as a Backend Developer. I am a seasoned developer with 2 years of experience in ExpressJs/NestJs and HTML, CSS, Bootstrap.</p>
								<p class="pt-3">I am a seasoned web developer with 3 years of backend web developer experience. My expertise in back-end web development enables me to create dynamic and user-friendly web applications APIs. With my experience, I guide aspiring developers who are eager to dive into the world of tech through web development, fostering their growth and problem-solving skills.</p>
							</div>
						</div>
					</div>
					<div class="counter-wrap ftco-animate d-flex mt-md-3">
						<div class="text">
							<p><a href="./resume/myResume.pdf" target="_blank" class="btn btn-primary py-3 px-3">Download Resume</a></p>
						</div>
					</div>
				</div>
			</div>
		</div>

		// </section>
	);
}

export default About;