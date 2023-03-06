import React, { Fragment } from "react";
import { Link } from "react-router-dom";


const BlogPostFour = () => {
  return (
    <Fragment>
      <div className="blog-details-top">
        <div className="blog-details-img">
          <img
            alt=""
            src={process.env.PUBLIC_URL + "/assets/img/blog/izobrazhenie-4.webp"}
          />
        </div>
        <div className="blog-details-content">
          <div className="blog-meta-2">
            <ul>
              <li>20 января, 2023</li>
              <li>
                <Link to={process.env.PUBLIC_URL + "#"}>
                  4 <i className="fa fa-comments-o" />
                </Link>
              </li>
            </ul>
          </div>
          <h3>ОПАСНЫЙ ТРЕНД: В МОДЕ СНОВА НИЗКАЯ ПОСАДКА</h3>
          <p>
            Всегда люблю рассматривать лукбуки этого бренда. Потому что с одной стороны образы в них выглядят актуальными и свежими. А с другой стороны, в них отсутствуют спорные остромодные тренды. То есть стилисты бренда используют только долгоиграющие тенденции, что не сделает ваш образ выглядящим so last season уже через полгода.
          </p>
          <p>Хорошая шпаргалка для тех, кто больше склоняется к определенной консервативности в одежде и не склонен менять гардероб и подход к нему каждый сезон. {" "}
          </p>
          <blockquote>
            На что стоит обратить внимание в этот раз:

            <br /> - как хорошо сочетаются вместе близкие оттенки одного цвета, и какие сложные образы получаются.
            <br /> - стилизация в образе вещей, связанных крючком или спицами.
            <br /> - сочетание разных фактур в одном образе, от самых плотных и объемных до самых тонких и невесомых
          </blockquote>
          <p>
            Обратите внимание на обувь. Очень мало комплектов с черной обувью. Много замши сложных оттенков. Черная обувь «убила» бы большинство сочетаний.
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
          Помню, еще какое-то время назад в массы транслировался стереотип, что мол отказ от каблуков, особенно у взрослых женщин, — это значит сдаться, признать себя возрастной женщиной, для которой удобство важнее стиля и привлекательности и все такое прочее. То есть в ходу была идея: слезла с каблуков — махнула на себя рукой.
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
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard-three"}>
          {" "}
          <i className="fa fa-angle-left" /> Предыдуший пост
        </Link>
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard-five"}>
          Следующий пост <i className="fa fa-angle-right" />
        </Link>
      </div>
    </Fragment>
  );
};

export default BlogPostFour;
