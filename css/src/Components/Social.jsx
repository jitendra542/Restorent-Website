import React from 'react'

function Social() {
  return (
    <div>
        <section className="social_connect">
    <div className="text-content container">
      <div className="col-md-6">
        <span className="social_heading">FOLLOW</span>
        <ul className="social_icons">
          <li>
            <a
              className="icon-twitter color_animation"
              href="#"
              target="_blank"
            />
          </li>
          <li>
            <a
              className="icon-github color_animation"
              href="#"
              target="_blank"
            />
          </li>
          <li>
            <a
              className="icon-linkedin color_animation"
              href="#"
              target="_blank"
            />
          </li>
          <li>
            <a className="icon-mail color_animation" href="#" />
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <span className="social_heading">OR DIAL</span>
        <span className="social_info">
          <a className="color_animation" href="tel:883-335-6524">
            (+91) 8094372369 
          </a>
          <h4 className="color_animation">Jitendra Kumar Sharma</h4>
        </span>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Social