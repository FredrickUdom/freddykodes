import'./Contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'; 
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_f5coniy', 'template_qz5r5dn', form.current, {
          publicKey: 'f_WQeaENkGAtfue8o',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };


    // 
    return ( 

		<div class="container contact mt-3 mb-5 mt-5 row px-0 mx-auto">
    <div class="content col-md-6">
        <div class="shadow px-3 about">
            <p>I write server-side logic with NestJS using SQL and NoSQL databases. I am passionate about learning new things and improving my skills as a Backend Developer. I am a seasoned developer with 2 years of experience in ExpressJs/NestJs and HTML, CSS, Bootstrap.</p>
        </div>
    </div>
    <div class="col-md-6">
        <form ref={form} onSubmit={sendEmail} class="shadow p-4 p-md-5 contact-form bg-light">
            <h5 class='text-center pb-3'>Let's Connect Via Mail</h5>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Your Name" name='user_name'/>
            </div>
            <div class="form-group pt-3">
                <input type="email" class="form-control" placeholder="Your Email" name='user_email'/>
            </div>
            {/* <div class="form-group pt-3">
                <input type="text" class="form-control" placeholder="Subject"/>
            </div> */}
            <div class="form-group pt-3">
                <textarea name="message" id="" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
            </div>
            <div class="form-group pt-3">
                <input type="submit" value="Send Message" class="btn btn-primary py-3 px-5 contact-btn"/>
            </div>
        </form>
    </div>
</div>


     );
}
 
export default Contact;
{/* <div class="img" style="background-image: url(images/about.jpg);"></div> */}