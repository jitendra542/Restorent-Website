import React from 'react'
import Footer from '../Components/Footer'
import Contact from '../Components/Contact'
import Social from '../Components/Social'
import Reservation from '../Components/Reservation'
import Navbar from '../Components/Navbar'
import AuthCard from '../Components/AuthCard'
import Pricing from '../Components/Pricing'


function MainIndex() {
  return (
    
     
    <>

    {/* ============ Navbar ============= */}
  <Navbar/>
  <div id="top" className="starter_container bg">
    <div className="follow_container">
      <div className="col-md-6 col-md-offset-3">
        <h2 className="top-title"> Restaurant</h2>
        <h2 className="white second-title">" Best in the city "</h2>
        <hr />
      </div>
    </div>
  </div>
  {/* ============ About Us ============= */}
  <section id="story" className="description_content">
    <div className="text-content container">
      <div className="col-md-6">
        <h1>About us</h1>
        <div className="fa fa-cutlery fa-2x" />
        <p className="desc-text">
          Restaurant is a place for simplicity. Good food, good beer, and good
          service. Simple is the name of the game, and we’re good at finding it
          in all the right places, even in your dining experience. We’re a small
          group from Denver, Colorado who make simple food possible. Come join
          us and see what simplicity tastes like.
        </p>
      </div>
      <div className="col-md-6">
        <div className="img-section">
          <img src="images/kabob.jpg" width={250} height={220} />
          <img src="images/limes.jpg" width={250} height={220} />
          <div className="img-section-space" />
          <img src="images/radish.jpg" width={250} height={220} />
          <img src="images/corn.jpg" width={250} height={220} />
        </div>
      </div>
    </div>
  </section>
  <Pricing/>
  {/* ============ Our Beer  ============= */}
  <section id="beer" className="description_content">
    <div className="beer background_content">
      <h1>
        Great <span>Place</span> to enjoy
      </h1>
    </div>
    <div className="text-content container">
      <div className="col-md-5">
        <div className="img-section">
          <img src="images/beer_spec.jpg" width="100%" />
        </div>
      </div>
      <br />
      <div className="col-md-6 col-md-offset-1">
        <h1>OUR BEER</h1>
        <div className="icon-beer fa-2x" />
        <p className="desc-text">
          Here at Restaurant we’re all about the love of beer. New and bold
          flavors enter our doors every week, and we can’t help but show them
          off. While we enjoy the classics, we’re always passionate about
          discovering something new, so stop by and experience our craft at its
          best.
        </p>
      </div>
    </div>
  </section>
  {/* ============ Our Bread  ============= */}
  <section id="bread" className=" description_content">
    <div className="bread background_content">
      <h1>
        Our Breakfast <span>Menu</span>
      </h1>
    </div>
    <div className="text-content container">
      <div className="col-md-6">
        <h1>OUR BREAD</h1>
        <div className="icon-bread fa-2x" />
        <p className="desc-text">
          We love the smell of fresh baked bread. Each loaf is handmade at the
          crack of dawn, using only the simplest of ingredients to bring out
          smells and flavors that beckon the whole block. Stop by anytime and
          experience simplicity at its finest.
        </p>
      </div>
      <div className="col-md-6">
        <img src="images/bread1.jpg" width={260} alt="Bread" />
        <img src="images/bread1.jpg" width={260} alt="Bread" />
      </div>
    </div>
  </section>
  {/* ============ Featured Dish  ============= */}
  <section id="featured" className="description_content">
    <div className="featured background_content">
      <h1>
        Our Featured Dishes <span>Menu</span>
      </h1>
    </div>
    <div className="text-content container">
      <div className="col-md-6">
        <h1>Have a look to our dishes!</h1>
        <div className="icon-hotdog fa-2x" />
        <p className="desc-text">
          Each food is handmade at the crack of dawn, using only the simplest of
          ingredients to bring out smells and flavors that beckon the whole
          block. Stop by anytime and experience simplicity at its finest.
        </p>
      </div>
      <div className="col-md-6">
        <ul className="image_box_story2">
          <div
            id="carousel-example-generic"
            className="carousel slide"
            data-ride="carousel"
          >
            {/* Indicators */}
            <ol className="carousel-indicators">
              <li
                data-target="#carousel-example-generic"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#carousel-example-generic" data-slide-to={1} />
              <li data-target="#carousel-example-generic" data-slide-to={2} />
            </ol>
            {/* Wrapper for slides */}
            <div className="carousel-inner">
              <div className="item active">
                <img src="images/slider1.jpg" alt="..." />
                <div className="carousel-caption"></div>
              </div>
              <div className="item">
                <img src="images/slider2.jpg" alt="..." />
                <div className="carousel-caption"></div>
              </div>
              <div className="item">
                <img src="images/slider3.JPG" alt="..." />
                <div className="carousel-caption"></div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </section>
  {/* ============ Reservation  ============= */}
  <Reservation/>
  {/* ============ Social Section  ============= */}
  <Social/>
  {/* ============ Contact Section  ============= */}
  <Contact/>
  {/* ============ Login and SignUp  ============= */}
  {/* <AuthCard/> */}
  
  
  {/* ============ Footer Section  ============= */}
  <Footer/>

</>


    
  )
}

export default MainIndex