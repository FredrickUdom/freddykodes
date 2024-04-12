const Project = () => {
    return ( 
        <section class="ftco-section" id="services-section">
  <div class="container">
    <div class="row justify-content-center py-5 mt-5">
      <div class="col-md-12 heading-section text-center ftco-animate">
        <h2 class="big big-2"><p>PROJECTS</p></h2>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-4 col-md-6 text-center d-flex ftco-animate shadow">
        <a href="#" class="project-1 w-100">
          <span class="icon">
            <img src={nestjs} alt="" class="img-fluid"/>
          </span>
          <div class="desc">
            <h3>I write Nestjs for building scalable server-side APIs</h3>
          </div>
        </a>
      </div>
      <div class="col-lg-4 col-md-6 text-center d-flex ftco-animate shadow">
        <a href="#" class="project-1 w-100">
          <span class="icon">
            <img src={typescript} alt="" class="img-fluid"/>
          </span>
          <div class="desc">
            <h3>I use Typescript and Nodejs with Nestjs</h3>
          </div>
        </a>
      </div>
      <div class="col-lg-4 col-md-6 text-center d-flex ftco-animate shadow">
        <a href="#" class="project-1 w-100">
          <span class="icon">
            <img src={docker} alt="" class="img-fluid"/>
          </span>
          <div class="desc">
            <h3>Using Docker for containerization</h3>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>

     );
}
 
export default Project;