import React from "react";

const MedicalContact = () => {
  return (
    <div
      className="medical-contact-area bg-img"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/img/slider/valentine_4.webp"
          })`
      }}
    >
      <div className="container">
        <div className="row align-items-center" id="medical-call">
          <div className="col-lg-6 col-md-5">
            <div className="medical-contact-text">
              <h3>Звоните в удобное </h3>
              <h2>для Вас время</h2>
            </div>
          </div>
          <div className="wave-a"><a href="tel:+905013308850"><span class="wave-1">☎</span></a></div>
          <div className="col-lg-6 col-md-7">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-2">
                <div className="medical-shape-img">
                </div>
              </div>
              <div className="col-lg-9 col-md-10">
                <div className="medical-contact-number-wrap">
                  <div className="medical-contact-img">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/icon-img/medical-contact.png"
                      }
                      alt=""
                    />
                  </div>
                  <div className="medical-contact-number">
                    <h2><a href="tel:+905013308850">+90 535 254 54 12</a></h2>
                    <h2><a href="tel:+905013308855">+90 531 755 54 55</a></h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalContact;
