import React, { Fragment } from "react";
import { Link } from "react-router-dom";


const BlogPostFive = () => {
  return (
    <Fragment>
      <div className="blog-details-top">
        <div className="blog-details-img">
          <img
            alt=""
            src={process.env.PUBLIC_URL + "/assets/img/blog/izobrazhenie-5.webp"}
          />
        </div>
        <div className="blog-details-content">
          <div className="blog-meta-2">
            <ul>
              <li>14 января, 2023</li>
              <li>
                <Link to={process.env.PUBLIC_URL + "#"}>
                  521 <i className="fa fa-comments-o" />
                </Link>
              </li>
            </ul>
          </div>
          <h3>КАК ХОДИТЬ НА ШОПИНГ?</h3>
          <p>
            Пошли мы с подругой на шопинг. Хорошее начала для анекдота, но нет, история будет смешная.В ходе шопинга понравилось мне одно платье.
          </p>
          <p>На вешалке оно смотрелось очень интересно. Но не на мне. Примерка показала, что в этом платье я похожа на кадушку для засолки огурцов, и цвет лица мой неуловимо напоминает половую тряпку, многократно бывшую в употреблении. Спасти это платье могло только одно – незамедлительное возвращение его на вешалку, где у него был шанс дождаться кого-то, кому оно подошло бы больше. Что я и сделала, ни минуты не раздумывая. {" "}
          </p>
          <blockquote>
            А после мы с подругой пили кофе, и она сказала:<br />
            — Как легко ты это платье забраковала! Не подходит – и все. Сняла и
            забыла про него. Я бы еще полчаса страдала,
            что ЭТО СО МНОЙ ЧТО-ТО НЕ ТАК!
          </blockquote>
          <p>
            Вы тоже переживаете, когда вам не подходят вещи в магазинах? <br />
            Думаете, что это с вами что-то не так? Что вам нужно срочно похудеть, подкачаться, еще бог знает что с собой сделать, и только тогда… Только тогда вам будут подходить любые вещи!
          </p>
        </div>
      </div>
      <div className="dec-img-wrapper">
        <div className="row">
          <div className="col-md-6">
            <div className="dec-img mb-50">
              <a href="https://istanbul-expert.com/">
                <img
                  alt=""
                  src={
                    process.env.PUBLIC_URL + "/assets/img/blog/istanbul_exp_1.webp"
                  }
                />
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="dec-img mb-50">
              <a href="https://istanbul-expert.com/products/62caf47b8e57e02670780f72">
                <video autoPlay={true} loop={true} playsInline={true} muted >
                  <source src={process.env.PUBLIC_URL + "/assets/video/2_Kandilli.mp4"} type="video/mp4" />
                </video>
                <h4> ☎ +90 552 286 8989, +90 552 592 9191</h4>
              </a>
            </div>
          </div>
        </div>
        <p>
          Я вас расстрою. Не будут и тогда! Если вы не работаете моделью, если у вас стандартный размер, например, M и стандартный рост около 165 см, то из всего многообразия вещей, представленных на рынке, вам может подойти не более 10-15%. Готова обосновать арифметически.
          Плохие вещи не подходят никому! Не менее 30% всех вещей, висящих в магазинах, не подходят вообще никому. Они скроены и сшиты настолько плохо, дизайн и расцветки у них настолько неудачные, что с магазинного рейла их можно отправлять прямиком в переработку.
        </p>
      </div>
      <div className="tag-share">
        <div className="dec-tag">
          <ul>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                Стиль ,
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                красота ,
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                мода
              </Link>
            </li>
          </ul>
        </div>
        <div className="blog-share">
          <span>поделиться :</span>
          <div className="share-social">
            <ul>
              <li>
                <a className="facebook" href="//facebook.com">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a className="twitter" href="//twitter.com">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a className="instagram" href="//instagram.com">
                  <i className="fa fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="next-previous-post">
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard-four"}>
          {" "}
          <i className="fa fa-angle-left" /> Предыдуший пост
        </Link>
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard-six"}>
          Следующий пост <i className="fa fa-angle-right" />
        </Link>
      </div>
    </Fragment>
  );
};

export default BlogPostFive;
