import React from 'react'

const Navbar = () => {
  return (
    <>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><h1>Construction</h1>Just another wordpress site</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">ThemeInfo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">PageExample</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Style Guide</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
<div>
<div>


<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
  
    <div class="carousel-item active">
    <div className="carousel-overlay">
                <h3>Use our trusted service <br/> to build your dream home</h3>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
                <h6>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h6>
    </div>
      
      
       
      <div className="contact-form-card">
      <div className="background-image"></div>
      <div className="form-overlay">
        <h2>Get Free Quote</h2>
        <h6>As soon as you contact our expert team,this<br/>will be the only form you have to fill in!</h6>
        <form>
          <div className="form-group">
            
            <input type="text" id="name" name="name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            
            <input type="email" id="email" name="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
           
            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" />
          </div>
          <div className="form-group">
            
            <textarea id="message" name="message" placeholder="Add your message"></textarea>
          </div>
          <button type="submit" className="request-callback-button">Request a Callback</button>
          <h6>100% privacy guaranteed</h6>
        </form>
      </div>
    </div>

    </div>

    <img src="./construction23.jpg" class="d-block w-100" alt="..."/>

    </div>
    <div class="about construction center-content"><br></br><br></br>
    <h4>About Construction</h4>
    <div className="text-center center-content">
    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6>
    </div>
    </div>

    <div className="row mt-5">
          <div className="col-md-4">
            <div className="square-box-card">
              <img src="construction4.jpg" alt="Image 1" className="small-rectangle-image" />
              {/* Other content for the first square box card */}
            </div>
          </div>
          <div className="col-md-4">
            <div className="square-box-card" >
              <img src="construction5.jpg" alt="Image 2" className="small-rectangle-image" />
              {/* Other content for the second square box card */}
            </div>
          </div>
          <div className="col-md-4">
            <div className="square-box-card">
              <img src="construction7.jpg" alt="Image 3" className="small-rectangle-image"/>
              {/* Other content for the third square box card */}
            </div>
          </div>
        </div>

</div>
</div>
</div>



    </>
  )
}

export default Navbar
