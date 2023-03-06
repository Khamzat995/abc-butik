import PropTypes from "prop-types";
import React from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

const ProductDescriptionTab = ({ spaceBottomClass, productFullDesc }) => {
  return (
    <div className={`description-review-area ${spaceBottomClass}`}>
      <div className="container">
        <div className="description-review-wrapper">
          <Tab.Container defaultActiveKey="productDescription">
            <Nav variant="pills" className="description-review-topbar">
              <Nav.Item>
                <Nav.Link eventKey="additionalInfo">
                  Дополнительная информация
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productDescription">Описание</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productReviews">Отзывы(2)</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="description-review-bottom">
              <Tab.Pane eventKey="additionalInfo">
                <div className="product-anotherinfo-wrapper">
                  <ul>
                    <li>
                      <span>Вес</span> 400 g
                    </li>
                    <li>
                      <span>Размер</span>10 x 10 x 15 cm{" "}
                    </li>
                    <li>
                      <span>Материалы</span> 60% cotton, 40% polyester
                    </li>
                    <li>
                      <span>Другая информация</span> В <b>Бутик - Istanbul</b>, интернет-магазине брендовой одежды и обуви, вы найдете широкий выбор одежды признанных международных производителей: <b>Levi´s, Hugo Boss, Lacoste, Pepe Jeans, Quicksilver, Roxy, Desigual, Superdry, Wrangler, Balenciaga, Gucci, Prada, Louis Vuitton, Moncler, Dior, Fendi, Versace, Bottega Veneta, Valentino, Burberry, NIKE, Alexander McQueen, Balmain, Miu Miu</b> и др. Откройте для себя очень эксклюзивные модели, а с помощью горячих предложений и распродаж вы можете получить обувь или брендовую одежду с гарантией самой низкой цены.
                    </li>
                  </ul>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="productDescription">
                {productFullDesc}
              </Tab.Pane>
              <Tab.Pane eventKey="productReviews">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="review-wrapper">
                      <div className="single-review">
                        <div className="review-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/testimonial/lico-7.webp"
                            }
                            alt=""
                          />
                        </div>
                        <div className="review-content">
                          <div className="review-top-wrap">
                            <div className="review-left">
                              <div className="review-name">
                                <h4>Жакося</h4>
                              </div>
                              <div className="review-rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div>
                            </div>
                            <div className="review-left">
                              <button>Ответить</button>
                            </div>
                          </div>
                          <div className="review-bottom">
                            <p>
                              Здравствуйте, дорогие читатели! Совсем недавно
                              мне посчастливилось оказаться на сайте Бутик-Istanbul интернет - магазине
                              брендовой одежды.Привела меня сюда необходимость в приобретении выходного
                              платья. Здесь оказался очень хороший выбор.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="single-review child-review">
                        <div className="review-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/testimonial/lico-6.webp"
                            }
                            alt=""
                          />
                        </div>
                        <div className="review-content">
                          <div className="review-top-wrap">
                            <div className="review-left">
                              <div className="review-name">
                                <h4>White Timoha</h4>
                              </div>
                              <div className="review-rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div>
                            </div>
                            <div className="review-left">
                              <button>Ответить</button>
                            </div>
                          </div>
                          <div className="review-bottom">
                            <p>
                              Хочу поделиться радостью от покупки новой рубашки от GLANCE.
                              На этот раз выбор пал на праздничный вариант. Фото не передает
                              всей красочности изделия. Рубашка очень яркая, цветы переливаются,
                              играют всеми огнями - самое то для меня!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="ratting-form-wrapper pl-50">
                      <h3>Добавить отзыв</h3>
                      <div className="ratting-form">
                        <form action="#">
                          <div className="star-box">
                            <span>Ваш рейтинг:</span>
                            <div className="ratting-star">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="rating-form-style mb-10">
                                <input placeholder="Имя" type="text" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="rating-form-style mb-10">
                                <input placeholder="Email" type="email" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="rating-form-style form-submit">
                                <textarea
                                  name="Your Review"
                                  placeholder="Сообщение"
                                  defaultValue={""}
                                />
                                <input type="submit" defaultValue="Submit" />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

ProductDescriptionTab.propTypes = {
  productFullDesc: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default ProductDescriptionTab;
