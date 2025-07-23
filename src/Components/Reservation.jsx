import React, { useState } from 'react';

function Reservation() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    state: '',
    guestNumber: '',
    date: '',
    subject: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:8080/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Reservation successful!");
        console.log(data);
      } else {
        alert(data.message || "Reservation failed");
      }
    } catch (err) {
      alert("Error occurred. See console.");
      console.error(err);
    }
  };

  return (
    <section id="reservation" className="description_content">
      <div className="featured background_content">
        <h1>Reserve a Table!</h1>
      </div>
      <div className="text-content container">
        <div className="inner contact">
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-md-6 col-xs-12">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-xs-6">
                        <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required className="form" />
                        <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} className="form" />
                        <input type="text" name="state" placeholder="State" onChange={handleChange} className="form" />
                        <input type="date" name="date" placeholder="Reservation Date" onChange={handleChange} required className="form" />
                      </div>
                      <div className="col-lg-6 col-md-6 col-xs-6">
                        <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required className="form" />
                        <input type="text" name="guestNumber" placeholder="Guest Number" onChange={handleChange} className="form" />
                        <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="form" />
                        <input type="text" name="subject" placeholder="Subject" onChange={handleChange} className="form" />
                      </div>
                      <div className="col-xs-6 ">
                        <button type="submit" className="form-btn">Reserve</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-xs-12">
                    <div className="right-text">
                      <h2>Hours</h2>
                      <hr />
                      <p>Monday to Friday: 7:30 AM - 11:30 AM</p>
                      <p>Saturday &amp; Sunday: 8:00 AM - 9:00 AM</p>
                      <p>Monday to Friday: 12:00 PM - 5:00 PM</p>
                      <p>Monday to Saturday: 6:00 PM - 1:00 AM</p>
                      <p>Sunday to Monday: 5:30 PM - 12:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reservation;
