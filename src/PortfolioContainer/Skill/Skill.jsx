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
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
						</div>
					</div>

					<div class="row gap-5 justify-content-center">
						<div class="col-lg-3 col-md-6 text-center d-flex ftco-animate shadow services">
							<a href="#" class="services-1 w-100">
								<span class="icon ">
									<img src={nestjs} alt="" class="img-fluid m-auto pt-3" style={{ width: "60%"}} />
								</span>
								<div class="desc pb-3 py-2">
									<h3>I write Nestjs for building scalable server-side APIs</h3>
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
									<h3>I write Nestjs for building scalable server-side APIs</h3>
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
									<h3>I use Typescript and Nodejs with Nestjs I write Nestjs for building scalable server-side APIs</h3>
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
									<h3>I use Typescript and Nodejs with Nestjs I write Nestjs for building scalable server-side APIs</h3>
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
									<h3>Dockerize container for deployment I write Nestjs for building scalable server-side APIs</h3>
									
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
									<h3>Dockerize container for deployment I write Nestjs for building scalable server-side APIs</h3>
									
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