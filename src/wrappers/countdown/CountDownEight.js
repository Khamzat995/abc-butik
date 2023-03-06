import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import Countdown from "react-countdown-now";
import Renderer from "../../components/countdown/Renderer";

const CountDownEight = ({
  backgroundImage,
  dateTime,
  spaceTopClass,
  spaceBottomClass
}) => {
  return (
    <div
      className={`funfact-area funfact-valentine bg-img ${spaceTopClass ? spaceTopClass : ""
        } ${spaceBottomClass ? spaceBottomClass : ""}`}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + backgroundImage})`
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 ml-auto mr-auto">
            <div className="funfact-content text-center">
              <h1>Максимальные скидки до 70%</h1>
              <div className="timer">
                <Countdown date={new Date(dateTime)} renderer={Renderer} />
              </div>
              <div className="funfact-btn btn-only-round funfact-btn-green btn-hover">
                <Link to={process.env.PUBLIC_URL + "/shop-grid-two-column"}>
                  Смотреть
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CountDownEight.propTypes = {
  backgroundImage: PropTypes.string,
  dateTime: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default CountDownEight;
