import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const BlogPostOne = () => {
  return (
    <Fragment>
      <div className="blog-details-top">
        <div className="blog-details-img">
          <img
            alt=""
            src={process.env.PUBLIC_URL + "/assets/img/blog/globes_1.webp"}
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
          <h3>ПЛАТЬЯ НА ЦЕРЕМОНИИ GOLDEN GLOBE 2023</h3>
          <p>
            Давно в этом блоге не было модных обзоров. Моя жизнь сейчас круто
            развернулась, и красивые платья остались где-то за бортом. Но сегодня я
            поняла, что мне хочется написать о них. Я решила, что возрождение
            интереса к платьям, моде и стилю — это важно для меня сейчас. Поэтому,
            для вас небольшой обзор нарядов, которые понравились мне на церемонии
            «Золотой Глобус».</p>
          <p>Главной королевой вечера для меня однозначно стала Рианна в ее
            шикарнейшем наряде от Schiaparelli. Платье для настоящей дивы, и, что
            немаловажно, Рианна в этом платье именно как дива себя и несет. {" "}
          </p>
          <blockquote>
            Если Рианна ее черное платье — тот случай, когда образ стопроцентно
            попадает в характер, то этого совсем не скажешь про Джулию Гарнер.
            Ее платье само по себе нельзя назвать неудачным. Но вся эта нежность
            очень сильно контрастирует с достаточно резкими чертами лица девушки.
            Если бы оставить верх платья без изменений, а внизу вместо воланов
            сделать что-то прямое или даже бахрому в духе ревущих двадцатых —
            выглядело бы более органично.
          </blockquote>
          <p>
            А вот Дженна Ортега выбрала платье, с которым как раз ошибиться очень
            легко. Что у нее и получилось в итоге. Во-первых, кажется, для такого
            платья актрисе явно не хватает роста. По себе знаю, как велик соблазн,
            обладая достаточной худобой, брать вещи прямо с подиума. Но то, что
            классно смотрится на высоких моделях, не всегда без дополнительной
            адаптации\подгонки смотрится хорошо на миниатюрных девушках. Плюс
            макияж не очень удачный. Из своего выразительного лица актриса сделала
            просто образ безликой «милашки». Впрочем, кто знает, может именно
            такая задумка у нее и была.
          </p>
        </div>
      </div>
      <div className="dec-img-wrapper">
        <div className="row">
          <div className="col-md-6">
            <div className="dec-img mb-50">
              <a href="https://istanbul-expert.com/products/63356ea829e57a2834c2c6a5">
                <video autoPlay={true} loop={true} playsInline={true} muted >
                  <source src={process.env.PUBLIC_URL + "/assets/video/4_Yalova.mp4"} type="video/mp4" />
                </video>
                <h4> ☎ +90 552 286 8989, +90 552 592 9191</h4>
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="dec-img mb-50">
              <a href="https://istanbul-expert.com">
                <img
                  alt=""
                  src={
                    process.env.PUBLIC_URL + "/assets/img/blog/istanbul_exp_1.webp"
                  }
                />
              </a>
            </div>
          </div>
        </div>
        <p>
          Еще одно платье, которое мне понравилось, — наряд Виолы Дэвис от Jаson Wu.
          Скульптурная драпировка, которая делает из женщині греческую богиню.
          Вот только оттенок, материал и минималистичность платья не прощают
          огрехов. Многие звезды попали под дождь в этот день или намочили подолы
          своих платьев. Но только платье Виолы выглядит самым пострадавшим от
          этой неприятности.
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
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard-six"}>
          {" "}
          <i className="fa fa-angle-left" /> Предыдуший пост
        </Link>
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard-two"}>
          Следующий пост <i className="fa fa-angle-right" />
        </Link>
      </div>
    </Fragment>
  );
};

export default BlogPostOne;
