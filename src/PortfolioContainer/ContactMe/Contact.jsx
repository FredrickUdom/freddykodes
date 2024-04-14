import'./Contact.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import { Carousel } from 'react-responsive-carousel'; 
import laptopSystem from '../../assets/img/system.jpg';

import docker from '../../assets/img/docker.png';
import nestjs from '../../assets/img/nestjs.png';
import typescript from '../../assets/img/typescript_node.png';
import ProgressBar from 'react-bootstrap/ProgressBar';
const Contact = () => {
  const now = 70;
    const form = useRef();
    const [sentMassage, setSentMessage] = useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_f5coniy', 'template_qz5r5dn', form.current, {
          publicKey: 'f_WQeaENkGAtfue8o',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setSentMessage(true)
          },
          (error) => {
            console.log('FAILED...', error.text);
            
              alert('failed to send')
            
          },
        );
        e.target.reset()
    };


    // 
    return ( 

		<div class="container contact mb-5 mt-5 row px-0 mx-auto">
    <div class="content col-md-6 col-lg-6 d-flex">
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