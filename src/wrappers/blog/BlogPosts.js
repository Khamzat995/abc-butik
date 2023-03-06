import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const BlogPosts = () => {
  return (
    <Fragment>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="blog-wrap-2 mb-30">
          <div className="blog-img-2">
            <Link to={process.env.PUBLIC_URL + "/blog-details-standard-one"}>
              <img
                /* src={process.env.PUBLIC_URL + "/assets/img/blog/blog-9.jpg"} */
                src={process.env.PUBLIC_URL + "/assets/img/blog/globes_2.webp"}
                alt=""
              />
            </Link>
          </div>
          <div className="blog-content-2">
            <div className="blog-meta-2">
              <ul>
                <li>07 Февраля, 2023</li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/blog-details-standard-one"}>
                    114 <i className="fa fa-comments-o" />
                  </Link>
                </li>
              </ul>
            </div>
            <h4>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-one"}>
                ПЛАТЬЯ НА ЦЕРЕМОНИИ GOLDEN GLOBE 2023
              </Link>
            </h4>
            <p>
              Давно в этом блоге не было модных обзоров. Моя жизнь сейчас круто
              развернулась, и красивые платья остались где-то за бортом.

            </p>
            <div className="blog-share-comment">
              <div className="blog-btn-2">
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard-one"}>
                  Читать далее
                </Link>
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
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="blog-wrap-2 mb-30">
          <div className="blog-img-2">
            <Link to={process.env.PUBLIC_URL + "/blog-details-standard-two"}>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/blog/izobrazhenie.webp"}
                alt=""
              />
            </Link>
          </div>
          <div className="blog-content-2">
            <div className="blog-meta-2">
              <ul>
                <li>02 Февраля, 2023</li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/blog-details-standard-two"}>
                    127 <i className="fa fa-comments-o" />
                  </Link>
                </li>
              </ul>
            </div>
            <h4>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-two"}>
                МОДНЫЕ ТЕНДЕНЦИИ, СТИЛЬНЫЕ СОВЕТЫ
              </Link>
            </h4>
            <p>
              Вообще прямых аллюзий было не так уж много. Например, мне показалось,
              что головной убор в этом образе отсылает нас к Статуе Свободы.
            </p>
            <div className="blog-share-comment">
              <div className="blog-btn-2">
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard-two"}>
                  Читать далее
                </Link>
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
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="blog-wrap-2 mb-30">
          <div className="blog-img-2">
            <Link to={process.env.PUBLIC_URL + "/blog-details-standard-three"}>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/blog/izobrazhenie-3.webp"}
                alt=""
              />
            </Link>
          </div>
          <div className="blog-content-2">
            <div className="blog-meta-2">
              <ul>
                <li>24 Января, 2023</li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/blog-details-standard-three"}>
                    224 <i className="fa fa-comments-o" />
                  </Link>
                </li>
              </ul>
            </div>
            <h4>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-three"}>
                BRUNELLO CUCINELLI ЗИМА-ВЕСНА 2023
              </Link>
            </h4>
            <p>
              Всегда люблю рассматривать лукбуки этого бренда.
              Потому что с одной стороны образы в них выглядят актуальными и свежими.
            </p>
            <div className="blog-share-comment">
              <div className="blog-btn-2">
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard-three"}>
                  Читать далее
                </Link>
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
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="blog-wrap-2 mb-30">
          <div className="blog-img-2">
            <Link to={process.env.PUBLIC_URL + "/blog-details-standard-four"}>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/blog/izobrazhenie-41.webp"}
                alt=""
              />
            </Link>
          </div>
          <div className="blog-content-2">
            <div className="blog-meta-2">
              <ul>
                <li>20 января, 2023</li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/blog-details-standard-four"}>
                    4 <i className="fa fa-comments-o" />
                  </Link>
                </li>
              </ul>
            </div>
            <h4>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-four"}>
                ОПАСНЫЙ ТРЕНД: В МОДЕ СНОВА НИЗКАЯ ПОСАДКА
              </Link>
            </h4>
            <p>
              Кто-то радуется этому факту, кто-то восклицает «о, ужас, это снова
              с нами», но низкая посадка снова возвращается в моду.
            </p>
            <div className="blog-share-comment">
              <div className="blog-btn-2">
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard-four"}>
                  читать далее
                </Link>
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
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="blog-wrap-2 mb-30">
          <div className="blog-img-2">
            <Link to={process.env.PUBLIC_URL + "/blog-details-standard-five"}>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/blog/izobrazhenie-51.webp"}
                alt=""
              />
            </Link>
          </div>
          <div className="blog-content-2">
            <div className="blog-meta-2">
              <ul>
                <li>14 Января, 2023</li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/blog-details-standard-five"}>
                    521 <i className="fa fa-comments-o" />
                  </Link>
                </li>
              </ul>
            </div>
            <h4>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-five"}>
                КАК ХОДИТЬ НА ШОПИНГ?
              </Link>
            </h4>
            <p>
              Пошли мы с подругой на шопинг. Хорошее начала для анекдота,
              но нет, история будет смешная. В ходе шопинга понравилось мне одно платье.
            </p>
            <div className="blog-share-comment">
              <div className="blog-btn-2">
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard-five"}>
                  Читать далее
                </Link>
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
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="blog-wrap-2 mb-30">
          <div className="blog-img-2">
            <Link to={process.env.PUBLIC_URL + "/blog-details-standard-six"}>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/blog/izobrazhenie-61.webp"}
                alt=""
              />
            </Link>
          </div>
          <div className="blog-content-2">
            <div className="blog-meta-2">
              <ul>
                <li>12 Января, 2023</li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/blog-details-standard-six"}>
                    358 <i className="fa fa-comments-o" />
                  </Link>
                </li>
              </ul>
            </div>
            <h4>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-six"}>
                ЗАЧЕМ МЫ ХУДЕЕМ?
              </Link>
            </h4>
            <p>
              Если избытком любимой еды мы пытаемся заглушить обиду и залечить
              душевные раны, то вот вопрос: а чего мы на самом деле хотим...

            </p>
            <div className="blog-share-comment">
              <div className="blog-btn-2">
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard-six"}>
                  Читать далее
                </Link>
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
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogPosts;
