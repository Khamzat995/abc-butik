import React from "react";
import { Link } from "react-router-dom";

const BlogSidebar = () => {
  return (
    <div className="sidebar-style">
      <div className="sidebar-widget">
        <h4 className="pro-sidebar-title">Поиск </h4>
        <div className="pro-sidebar-search mb-55 mt-25">
          <form className="pro-sidebar-search-form" action="#">
            <input type="text" placeholder="Найти здесь..." />
            <button>
              <i className="pe-7s-search" />
            </button>
          </form>
        </div>
      </div>
      <div className="sidebar-widget">
        <h4 className="pro-sidebar-title">Свежие проекты </h4>
        <div className="sidebar-project-wrap mt-30">
          <div className="single-sidebar-blog">
            <div className="sidebar-blog-img">
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-two"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/blog/style_1.webp"
                  }
                  alt=""
                />
              </Link>
            </div>
            <div className="sidebar-blog-content">
              <span>Стиль</span>
              <h4>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard-two"}>
                  Модные тенденции
                </Link>
              </h4>
            </div>
          </div>
          <div className="single-sidebar-blog">
            <div className="sidebar-blog-img">
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-three"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/blog/style_2.webp"
                  }
                  alt=""
                />
              </Link>
            </div>
            <div className="sidebar-blog-content">
              <span>Бренды</span>
              <h4>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard-three"}>
                  Brunello Cucinelli
                </Link>
              </h4>
            </div>
          </div>
          <div className="single-sidebar-blog">
            <div className="sidebar-blog-img">
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-one"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/blog/style_3.webp"
                  }
                  alt=""
                />
              </Link>
            </div>
            <div className="sidebar-blog-content">
              <span>Красота</span>
              <h4>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard-one"}>
                  Golden Globe 2023
                </Link>
              </h4>
            </div>
          </div>
          <div className="single-sidebar-blog">
            <div className="sidebar-blog-img">
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-four"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/blog/style_4.webp"
                  }
                  alt=""
                />
              </Link>
            </div>
            <div className="sidebar-blog-content">
              <span>Тренды</span>
              <h4>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard-four"}>
                  Низкая посадка
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar-widget mt-35">
        <h4 className="pro-sidebar-title">Категории</h4>
        <div className="sidebar-widget-list sidebar-widget-list--blog mt-20">
          <ul>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" defaultValue />{" "}
                <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                  Женская <span>14</span>{" "}
                </Link>
                <span className="checkmark" />
              </div>
            </li>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" defaultValue />{" "}
                <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                  Мужская <span>9</span>{" "}
                </Link>
                <span className="checkmark" />
              </div>
            </li>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" defaultValue />{" "}
                <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                  Детская <span>12</span>{" "}
                </Link>
                <span className="checkmark" />
              </div>
            </li>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" defaultValue />{" "}
                <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                  Эксклюзивная <span>7</span>{" "}
                </Link>
                <span className="checkmark" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar-widget mt-50">
        <h4 className="pro-sidebar-title">Теги </h4>
        <div className="sidebar-widget-tag mt-25">
          <ul>
            <li>
              <Link to={process.env.PUBLIC_URL + "/shop-grid-two-column"}>
                Каталог
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/product/1"}>
                Спортивные костюмы
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/product/8"}>
                Рубашки
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/product/6"}>Платья</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/product/7"}>
                Куртки
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
