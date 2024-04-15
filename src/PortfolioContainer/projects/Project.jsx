import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 
import laptopSystem from '../../assets/img/system.jpg';
import './Project.css'
const Project = () => {
  return (
    <div id="project-section">

      <div class="content col-md-6 mt-5 m-auto text-center">
        <div class="shadow px-3 about bg-primary text-white certificate">
          <h3 className="py-3"><b>Projects</b></h3>
          <Carousel>
          <div>
            <img src={laptopSystem} style={{ width: "30%"}} className='m-auto'/>
            <h1 className="legend text-bold-500">Web Design Skills</h1>
            <p>I create visually appealing web designs that suit your needs!
              <h1 className="legend text-bold-500">Graphic Design</h1>
            </p>
          </div>
          <div>
            <img src={laptopSystem} style={{ width: "30%" }} className='m-auto' />
            <h1 className="legend">Software Development</h1>
            <p>My digital skills enable me to create functional and visually appealing UI and applications. I deliver exceptional results and drive growth that meet the unique needs of my clients and employers</p>
          </div>
          <div>
            <img src={laptopSystem} style={{ width: "30%" }} className='m-auto' />
            <h1 className="legend font-bold">Entrepreneurship </h1>
            <p>I leverage my digital skills in a customer-centric and result-driven way!</p>
          </div>
          </Carousel>
        </div>
      </div>

    </div>

  );
}

export default Project;