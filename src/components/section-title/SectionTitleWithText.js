import PropTypes from "prop-types";
import React from "react";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`welcome-area ${spaceTopClass ? spaceTopClass : ""} ${spaceBottomClass ? spaceBottomClass : ""
        }`}
    >
      <div className="container">
        <div className="welcome-content text-center">
          <h5>Кто мы</h5>
          <h1>Добро пожаловать в Бутик-ISTANBUL</h1>
          <p>
            Бутик-ISTANBUL – это неотъ­ем­ле­мая часть боль­шого fashion-про­стран­ства в Интер­нет! Мы поста­ра­лись создать
            для Вас удобный Интер­нет-мага­зин, соче­та­ю­щий в себе разные веяния моды и
            тенденции!
            Осу­ществ­ляйте эффек­тив­ную on-line покупку и насла­ждай­тесь опе­ра­тив­ной достав­кой
            кра­си­вых вещей вместе с нами!{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SectionTitleWithText;
