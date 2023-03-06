import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const BlogPostTwo = () => {
  return (
    <Fragment>
      <div className="blog-details-top">
        <div className="blog-details-img">
          <img
            alt=""
            src={process.env.PUBLIC_URL + "/assets/img/blog/izobrazhenie.webp"}
          />
        </div>
        <div className="blog-details-content">
          <div className="blog-meta-2">
            <ul>
              <li>07 февраля, 2023</li>
              <li>
                <Link to={process.env.PUBLIC_URL + "#"}>
                  4 <i className="fa fa-comments-o" />
                </Link>
              </li>
            </ul>
          </div>
          <h3>МОДНЫЕ ТЕНДЕНЦИИ, СТИЛЬНЫЕ СОВЕТЫ</h3>
          <p>
            В этом году вся модная публика возрадовалась, потому что после прошлогодней отмены, Бал Института Костюма вновь возобновился. Тема бала была заявлена как «В Америке: модный лексикон», а в приглашениях указывалась более подробная детализация «Американская независимость».

          </p>
          <p>Приятно, что приглашенные звезды не стали эксплуатировать эту тему прямо в лоб, заворачиваясь в звездно-полосатый флаг. Самым близким к идее флага оказался наряд Дебби Харри, которая объединила красно-белую полоску с денимом. {" "}
          </p>
          <blockquote>
            Более читаемыми и узнаваемыми показались образы в духе классического Голливуда. Тот самый голливудский (а следовательно, американский) шик, который, по большому счету стал мировым брендом.
          </blockquote>
          <p>
            Маргарет Куэлли в Chanel продолжает эксплутировать образ хиппи, так удачно положенный на ее внешность еще костюмерами фильма «Однажды в Голливуде». Хиппи-движение с характерным стилем — тоже одно из американских модных явлений, завоевавших мир и нашедших последователей на всех уголках планеты.
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
              <a href="https://istanbul-expert.com/products/63341e7b29e57a2834c2c6a2">
                <img
                  alt=""
                  src={
                    process.env.PUBLIC_URL + "/assets/img/blog/istanbul_exp_2.webp"
                  }
                />
              </a>
            </div>
          </div>
        </div>
        <p>
          Американская национальная идея трансформировалась во времени от «плавильного котла наций», в котором все национальности смешиваются в единый американский народ, до «салатницы», в которой каждый ингредиент, то есть нация, подчеркивает свою самобытность, культуру и традиции. И в этом плане в тематику вечера интересно вписались наряды, которые скорее похожи на отсылку к традиционным национальным костюмам разных народов.
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
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard-one"}>
          {" "}
          <i className="fa fa-angle-left" /> Предыдуший пост
        </Link>
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard-three"}>
          Следующий пост <i className="fa fa-angle-right" />
        </Link>
      </div>
    </Fragment>
  );
};

export default BlogPostTwo;
