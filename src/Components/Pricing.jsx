import React from 'react'

function Pricing() {
  return (
    <div>
        {/* ============ Pricing  ============= */}
  <section id="pricing" className="description_content">
    <div className="pricing background_content">
      <h1>
        <span>Affordable</span> pricing
      </h1>
    </div>
    <div className="text-content container">
      <div className="container">
        <div className="row">
          <div id="w">
            <ul id="filter-list" className="clearfix">
              <li className="filter" data-filter="all">
                All
              </li>
              <li className="filter" data-filter="breakfast">
                Breakfast
              </li>
              <li className="filter" data-filter="special">
                Special
              </li>
              <li className="filter" data-filter="desert">
                Desert
              </li>
              <li className="filter" data-filter="dinner">
                Dinner
              </li>
            </ul>
            {/* @end #filter-list */}
            <ul id="portfolio">
              <li className="item breakfast">
                <img src="images/food_icon01.jpg" alt="Food" />
                <h2 className="white">$20</h2>
              </li>
              <li className="item dinner special">
                <img src="images/food_icon02.jpg" alt="Food" />
                <h2 className="white">$20</h2>
              </li>
              <li className="item dinner breakfast">
                <img src="images/food_icon03.jpg" alt="Food" />
                <h2 className="white">$18</h2>
              </li>
              <li className="item special">
                <img src="images/food_icon04.jpg" alt="Food" />
                <h2 className="white">$15</h2>
              </li>
              <li className="item dinner">
                <img src="images/food_icon05.jpg" alt="Food" />
                <h2 className="white">$20</h2>
              </li>
              <li className="item special">
                <img src="images/food_icon06.jpg" alt="Food" />
                <h2 className="white">$22</h2>
              </li>
              <li className="item desert">
                <img src="images/food_icon07.jpg" alt="Food" />
                <h2 className="white">$32</h2>
              </li>
              <li className="item desert breakfast">
                <img src="images/food_icon08.jpg" alt="Food" />
                <h2 className="white">$38</h2>
              </li>
            </ul>
            {/* @end #portfolio */}
          </div>
          {/* @end #w */}
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Pricing