import'./Contact.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

// import dotenv from 'dotenv';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import { Carousel } from 'react-responsive-carousel'; 
import laptopSystem from '../../assets/img/system.jpg';

import docker from '../../assets/img/docker.png';
import nestjs from '../../assets/img/nestjs.png';
import typescript from '../../assets/img/typescript_node.png';
import ProgressBar from 'react-bootstrap/ProgressBar';




// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCards } from "./ProjectCard";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import project1 from "../assets/img/project-airline.png";
// import project2 from "../assets/img/project-dashboard.PNG";
// import project3 from "../assets/img/movie-app.PNG";
// import project4 from "../assets/img/project-tindog.PNG";
// import project5 from "../assets/img/project-trurealtors.PNG";
// import project6 from "../assets/img/project-extension.PNG";
// import project7 from "../assets/img/Capture.JPG";
// import "animate.css";
// import TrackVisibility from "react-on-screen";
// import { useState } from "react";

const Contact = () => {
  // dotenv.config()
  const now = 70;
    const form = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isEmailSent, setIsEmailSent] = useState(false);
    const sendEmail = (e) => {
      e.preventDefault();

      // const templateParams = {
      //   from_name: name,
      //   from_email: email,
      //   to_name: "Freddy",
      //   message: message,
      // };

      const service_id = import.meta.env.VITE_service_id; 
      const template_id = import.meta.env.VITE_template_id;
      const public_key = import.meta.env.VITE_public_key;
  
      emailjs
        .sendForm(service_id, template_id , form.current, {
          publicKey: public_key,
        })
        .then(
          () => {
            console.log('SUCCESS!');
           
            alert('Message successfully sent!')
            setSentMessage(true)
          },
          (error) => {
            console.log('FAILED...', error.text);
            
              alert('failed to send')
            
          },
        );
        e.target.reset()
    };

    // starting 

    // const [isProjectExpanded, projectExpanded] = useState(false);
    // const fullskilltext =
  
    //   "I have a proven track record of contributing to highly productive and scalable projects. I specialize in creating visually appealing websites and captivating digital experiences that leave a lasting impression.  Throughout my career, I've played a pivotal role in driving growth for organizations by implementing strategic initiatives and optimizing workflows. By leveraging my expertise in web development, I've helped enhance operational efficiency and expand market reach, resulting in measurable results and increased brand visibility. With a collaborative approach and a passion for continuous learning, I'm committed to delivering exceptional outcomes and exceeding expectations.";
    // const toggleProjectExpand = () => {
    //   projectExpanded(!isProjectExpanded);
    // };
  
    // const projects = [
    //   {
    //     title: "Airline Website",
    //     description: "Design & Development",
    //     imgUrl: project1,
    //     linkUrl: "https://airline-reservation-cpe412.vercel.app/",
    //     category: ["web", "design"],
    //   },
  
    //   {
    //     title: "Startup Dashboard",
    //     description: "Design & Development",
    //     imgUrl: project2,
    //     linkUrl: "https://dashboard-react-app-five.vercel.app/",
    //     category: ["web", "design"],
    //   },
    //   {
    //     title: "Movie App",
    //     description: "Design & Development",
    //     imgUrl: project3,
    //     linkUrl: "https://hng-movie-app-li8t.onrender.com/",
    //     category: "web",
    //   },
    //   {
    //     title: "Tindog Website",
    //     description: "Design & Development",
    //     imgUrl: project4,
    //     linkUrl: "https://tindog-app-pi.vercel.app/",
    //     category: "web",
    //   },
    //   {
    //     title: "Realtor Website",
    //     description: "Design & Development",
    //     imgUrl: project5,
    //     linkUrl: "https://tru-realtor-app.vercel.app/",
    //     category: "web",
    //   },
    //   {
    //     title: "Chrome Extension",
    //     description: "Design & Development",
    //     imgUrl: project6,
    //     linkUrl: "https://drag-and-drop-gallery-app.vercel.app/",
    //     category: ["web", "design"],
    //   },
  
    //   {
    //     title: "Award Design",
    //     description: "Graphic Design",
    //     imgUrl: project7,
    //     linkUrl:
    //       "https://drive.google.com/file/d/1jxTGuibsdju7sxkEWNI_mE519PUniZpT/view?usp=drive_link",
    //     category: "design",
    //   },
    // ];


    // ending
    return ( 

		<div class="container contact mb-5 mt-5 row px-0 mx-auto">
    <div class="content col-md-6 col-lg-6 d-flex">


    {/* <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility offset={500}>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <div className="toggleProjects">
                    {isProjectExpanded ? (
                      <div>{fullskilltext}</div>
                    ) : (
                      <div>
                        {fullskilltext.slice(0, 290)}{" "}
                       
                        {fullskilltext.length > 290 && "..."}{" "}
                       
                        <button
                          onClick={toggleProjectExpand}
                          className="project-button flex"
                        >
                          {isProjectExpanded ? "See less" : "See more"}
                        </button>
                      </div>
                    )}

                    <p>
                      View my <b>Github Repositories</b>{" "}
                      <u>
                        <a href="https://github.com/okonpatrick/">
                          {" "}
                          Here.&nbsp;
                        </a>
                      </u>
                    </p>
                  </div>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center alig-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Web</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Design</Nav.Link>
                </Nav.Item>
              </Nav>
              <TrackVisibility offset={1000} partialVisibility>
                {({ isVisible }) => (
                  <Tab.Content
                    id="slideInUp"
                    className={
                      isVisible ? "animate__animated animate__slideInUp" : ""
                    }
                  >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projects.map((project, index) => {
                          return <ProjectCards key={index} {...project} />;
                        })}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      {" "}
                      <Row>
                        {projects
                          .filter((project) => project.category === "web")
                          .map((project, index) => (
                            <ProjectCards key={index} {...project} />
                          ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      {" "}
                      <Row>
                        {projects
                          .filter((project) =>
                            project.category.includes("design")
                          )
                          .map((project, index) => (
                            <ProjectCards key={index} {...project} />
                          ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                )}
              </TrackVisibility>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} alt="Image" className="background-img-right" />
    </section> */}



{/* ................................................................................................ */}





        <div class="shadow px-3 about bg-primary text-white certificate">
        <section class="ftco-section" id="services-section">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-md-12 heading-section text-center ftco-animate">
						<h2 class="mb-4 h2 text-center"><p>Certificate</p></h2>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
						</div>
					</div>

					<div class="row gap-5 justify-content-center">
						<div class="col-lg-5 col-md-6 text-center d-flex ftco-animate shadow services">
							<a href="#" class="services-1 w-100">
								<span class="icon ">
									<img src={nestjs} alt="" class="img-fluid m-auto " style={{width: "100%", height:"90%"}} />
								</span>
								<div class="desc pb-3">
									<h3>I write Nestjs for building scalable server-side APIs</h3>
								</div>
							</a>
						</div>
						<div class="col-lg-5 col-md-6 text-center d-flex ftco-animate shadow services">
							<a href="#" class="services-1 w-100">
								<span class="icon">
									<img src={nestjs} alt="" class="img-fluid m-auto" style={{ width: "100%", height:"90%"}} />
								</span>
								<div class="desc pb-3">
									<h3>I write Nestjs for building scalable server-side APIs</h3>
								</div>
							</a>
						</div>
						
            <div class="col-lg-5 col-md-6 text-center d-flex ftco-animate shadow services">
							<a href="#" class="services-1 w-100">
								<span class="icon ">
									<img src={nestjs} alt="" class="img-fluid m-auto " style={{width: "100%", height:"90%"}} />
								</span>
								<div class="desc pb-3">
									<h3>I write Nestjs for building scalable server-side APIs</h3>
								</div>
							</a>
						</div>
						<div class="col-lg-5 col-md-6 text-center d-flex ftco-animate shadow services">
							<a href="#" class="services-1 w-100">
								<span class="icon">
									<img src={nestjs} alt="" class="img-fluid m-auto" style={{ width: "100%", height:"90%"}} />
								</span>
								<div class="desc pb-3">
									<h3>I write Nestjs for building scalable server-side APIs</h3>
								</div>
							</a>
						</div>
						
						
						
						
					</div>
				</div>
			</section>


        </div>
    </div>
    <div class="col-md-6">
        <form ref={form} onSubmit={sendEmail} class="shadow p-4 p-md-5 contact-form bg-light">
            <h5 class='text-center pb-3'>Let's Connect Via Mail</h5>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Your Name" name='user_name' required/>
            </div>
            <div class="form-group pt-3">
                <input type="email" class="form-control" placeholder="Your Email" name='user_email' required/>
            </div>
            <div class="form-group pt-3">
                <input type="number" class="form-control" placeholder="WhatsApp Number" name='whatsapp' required/>
            </div>
            <div class="form-group pt-3">
                <textarea name="message" id="" cols="30" rows="7" class="form-control" placeholder="Message" required></textarea>
            </div>
            <div class="form-group pt-3">
                <input type="submit" value="Send Message" class="btn text-center btn-primary py-3 px-5 contact-btn"/>
            </div>
        </form>
    </div>

    <div className="push-btn ">
      <a href="#" ><i class="fa fa-arrow-up bg-primary text-white mt-3" aria-hidden="true"></i></a>
    </div>

</div>

     );
}
 
export default Contact;
{/* <div class="img" style="background-image: url(images/about.jpg);"></div> */}