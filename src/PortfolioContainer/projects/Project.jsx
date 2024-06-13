import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 
import html from '../../assets/img/html-css.png';
import emailTemplate from '../../assets/img/email-template.png';
import agricPro from '../../assets/img/agric-pro.jpg';
import './Project.css'
const Project = () => {
  return (
    <div id="project-section">

      <div class="content col-md-6 mt-5 m-auto text-center">
        <div class="shadow px-3 about bg-primary text-white certificate">
          <h3 className="py-3"><b>Projects</b></h3>
          <Carousel>
          <div>
            <img src={agricPro} style={{ width: "20%", height:"5%"}} className='m-auto'/>
            {/* <h1 className="legend text-bold-500">Web Design Skills</h1> */}
            <p>This is was an Hackathon project that took place in Lagos, Nigeria. I wrote all Backend functionalities for all endpoints and send the API key to the mobile developer to consume 
              {/* <h1 className="legend text-bold-500">Graphic Design</h1> */}
            </p>
          </div>
          <div>
            <img src={emailTemplate} style={{ width: "20%", height:"5%" }} className='m-auto' />
            {/* <h1 className="legend">Software Development</h1> */}
            <p>I was a contributor in this project, I worked on the backend codebase where I implemeted feature to send email to all auth endpoints using Nestjs framework and nodemailer dependency</p>
          </div>
          <div>
            <img src={html} style={{ width: "30%" }} className='m-auto' />
            {/* <h1 className="legend font-bold">Entrepreneurship </h1> */}
            <p>This project was a challenge to  built using HTML, CSS and BOOSTRAP thereby making it responsive to all devices</p>
          </div>
          </Carousel>
        </div>
      </div>

    </div>

  );
}

export default Project;