import docker from '../../assets/img/docker.png';
import nestjs from '../../assets/img/nestjs.png';
import typescript from '../../assets/img/typescript.png';
import nodejs from '../../assets/img/nodejs.png';
import javascript from '../../assets/img/javascript.webp';
import github from '../../assets/img/github.png';
import './Skill.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
const Skill = () => {
	const nestjsParcent = 85;
	const nodejsPercent = 75;
	const TypescriptPercent = 80;
	const javascriptPercent = 70;
	const githubPercent = 95;
	const dockerPercent = 70;
	
	return (

		<div className="skill" id='skills-section'>



			<section class="ftco-section" id="services-section">
				<div class="container">
					<div class="row justify-content-center py-2">
						<div class="col-md-12 heading-section text-center ftco-animate py-2">
						<h2 class="mb-4 pt-5 h2 text-center"><p>Skills</p></h2>
							<p> Here’s an overview of some essential technologies I use to foster my learning and my growth in Web Development.</p>
						</div>
					</div>

					<div class="row gap-5 justify-content-center">
						<div class="col-lg-3 col-md-6 text-center d-flex ftco-animate shadow services">
							<a href="#" class="services-1 w-100">
								<span class="icon ">
									<img src={nestjs} alt="" class="img-fluid m-auto pt-3" style={{ width: "60%"}} />
								</span>
								<div class="desc pb-3 py-2">
									<h3>Leveraging NestJS to build structured and maintainable server-side applications with a modular architecture while applying SOLID principles to write clean and reusable code.</h3>
									{/* <ProgressBar  variant='success' now={nestjsParcent} label={`${nestjsParcent}%`} className='progress'/> */}
								</div>
							</a>
						</div>
						<div class="col-lg-3 col-md-6 text-center d-flex ftco-animate shadow services">
							<a href="#" class="services-1 w-100">
								<span class="icon">
									<img src={nodejs} alt="" class="img-fluid m-auto pt-3" style={{ width: "60%"}} />
								</span>
								<div class="desc pb-3 py-2">
									<h3> Extensive experience with Node.js for building scalable network applications and real-time services.</h3>
									{/* <ProgressBar  variant='success' now={nodejsPercent} label={`${nodejsPercent}%`} className='progress'/> */}
								</div>
							</a>
						</div>
						<div class="col-lg-3 col-md-6 text-center d-flex ftco-animate shadow services">
							<a href="#" class="services-1 w-100">
								<span class="icon">
									<img src={typescript} alt="" class="img-fluid m-auto pt-3"style={{ width: "40%"}} />
								</span>
								<div class="desc pb-3 py-2">
									<h3>Utilizing TypeScript for its static typing and advanced features to write cleaner, more reliable code.</h3>
									{/* <ProgressBar  variant='success' now={TypescriptPercent} label={`${TypescriptPercent}%`} className='progress'/> */}
								</div>
							</a>
						</div>
						<div class="col-lg-3 col-md-6 text-center d-flex ftco-animate shadow services">
							<a href="#" class="services-1 w-100">
								<span class="icon">
									<img src={javascript} alt="" class="img-fluid m-auto pt-3" style={{ width: "40%"}} />
								</span>
								<div class="desc pb-3 py-2">
									<h3> Proficient in JavaScript, enabling the development of dynamic and interactive web applications.</h3>
									{/* <ProgressBar  variant='success' now={javascriptPercent} label={`${javascriptPercent}%`} className='progress'/> */}
								</div>
							</a>
						</div>
						
						<div class="col-lg-3 col-md-6 text-center d-flex ftco-animate shadow docker">
							<a href="#" class="services-1 w-100">
								<span class="icon">
									<img src={github} alt="" class="img-fluid m-auto pt-3" style={{ width: "30%" }}/>
								</span>
								<div class="desc pb-3 py-2">
									<h3>Skilled in using GitHub for version control, collaboration, and managing code repositories.</h3>
									
									{/* <ProgressBar  variant='success' now={githubPercent} label={`${githubPercent}%`} className='progress'/> */}
									
								</div>
							</a>
						</div>
						<div class="col-lg-3 col-md-6 text-center d-flex ftco-animate shadow docker">
							<a href="#" class="services-1 w-100">
								<span class="icon">
									<img src={docker} alt="" class="img-fluid m-auto pt-3" style={{ width: "30%" }}/>
								</span>
								<div class="desc pb-3 py-2">
									<h3>Proficient in Docker for containerization, ensuring consistent environments across development, testing, and production.</h3>
									
									{/* <ProgressBar  variant='success' now={dockerPercent} label={`${dockerPercent}%`} className='progress'/> */}
									
								</div>
							</a>
						</div>
					</div>
				</div>
			</section>


		</div>
	);
}

export default Skill;