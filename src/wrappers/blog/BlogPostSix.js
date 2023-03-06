import React, { Fragment } from "react";
import { Link } from "react-router-dom";


const BlogPostSix = () => {
  return (
    <Fragment>
      <div className="blog-details-top">
        <div className="blog-details-img">
          <img
            alt=""
            src={process.env.PUBLIC_URL + "/assets/img/blog/izobrazhenie-6.webp"}
          />
        </div>
        <div className="blog-details-content">
          <div className="blog-meta-2">
            <ul>
              <li>12 января, 2023</li>
              <li>
                <Link to={process.env.PUBLIC_URL + "#"}>
                  358 <i className="fa fa-comments-o" />
                </Link>
              </li>
            </ul>
          </div>
          <h3>ЗАЧЕМ МЫ ХУДЕЕМ?</h3>
          <p>
            Если избытком любимой еды мы пытаемся заглушить обиду и залечить душевные раны, то вот вопрос: а чего мы на самом деле хотим добиться, когда пытаемся похудеть? Действительно ли нам самим так нужна тонкая талия и размер XS или с помощью «идеальной фигуры» мы пытаемся решить какие-то другие задачи? Получить одобрение общества, повысить самооценку, найти партнера или получить желаемую работу? {" "}
          </p>
          <blockquote>
            Под давлением СМИ и рекламы легко убедить себя, что именно лишний вес и только он в ответе за все: за неудачи в личной жизни и пробуксовки в карьере. Стоит только похудеть, и все проблемы решатся сами собой, одиночество останется в прошлом, найдется работа мечты и… На деле запросто может оказаться, что лишний вес исчез, а проблемы остались.
          </blockquote>
          <p>
            Вот что думает об этом Катерина Мартовицкая: «Конечно же, не всегда и не всем нужно худеть. Люди же худеют зачем? Распространённый ответ — чтобы быть красивыми. Связка «красота=худоба» навязывается СМИ, модой. Если смотреть объективно и по-взрослому на себя и проблему очертаний тела, то важней всего чувствовать себя комфортно. И это ощущение идёт изнутри, оно субъективно, оно не может быть внешним».
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
          Екатерина рекомендует разобраться с причинами: «Если человеку неудобно в его теле, у него есть хронические болезни, проблемы с кожей — без диетотерапии тут никак, она очень нужна. Но когда есть проблемы в отношениях, неудовлетворенность жизнью — то решение этих вопросов с помощью похудения вряд ли возможно. Похудел человек, измождён диетой, а проблемы остались. Неудовлетворенность растёт, еда в супермаркете ждёт, и далее по кругу. Самые сложные пациенты — с большим опытом похудения и повторного набора веса, без психотерапии тут не обойтись».
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
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard-five"}>
          {" "}
          <i className="fa fa-angle-left" /> Предыдуший пост
        </Link>
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard-one"}>
          Следующий пост <i className="fa fa-angle-right" />
        </Link>
      </div>
    </Fragment>
  );
};

export default BlogPostSix;
