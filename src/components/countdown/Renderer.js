import PropTypes from "prop-types";
import React from "react";

const Renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="timer timer-style">
      <div>
        <span className="cdown day">
          {days} <p>Дней</p>
        </span>
        <span className="cdown hour">
          {hours} <p>Часов</p>
        </span>
        <span className="cdown minutes">
          {minutes} <p>Минут</p>
        </span>
        <span>
          {seconds} <p>Секунд</p>
        </span>
      </div>
    </div>
  );
};

Renderer.propTypes = {
  days: PropTypes.number,
  hours: PropTypes.number,
  minutes: PropTypes.number,
  seconds: PropTypes.number
};

export default Renderer;
