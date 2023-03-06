import React, { Fragment } from "react";

const BlogCommentFive = () => {
  return (
    <Fragment>
      <div className="blog-comment-wrapper mt-55">
        <h4 className="blog-dec-title">комментарии : 02</h4>
        <div className="single-comment-wrapper mt-35">
          <div className="blog-comment-img">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/blog/pic-31.webp"}
              alt=""
            />
          </div>
          <div className="blog-comment-content">
            <h4>Наташа </h4>
            <span>Январь 14, 2023 </span>
            <p>
              Если приталенное платье натянулось на груди, как на барабане, а на спине образовало живописный горб – скорее всего, это платье немецкого бренда. Они часто рассчитаны на высокий рост, широкую спину и небольшую грудь. {" "}
            </p>
          </div>
        </div>
        <div className="single-comment-wrapper mt-50 ml-120">
          <div className="blog-comment-img">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/blog/pic-32.webp"}
              alt=""
            />
          </div>
          <div className="blog-comment-content">
            <h4>Катя Огонёк </h4>
            <span>Январь 14, 2023 </span>
            <p>
              А испанские и французские бренды, наоборот, часто ориентируются на узкоспинных и тонкокостных, поэтому платье вашего размера запросто может оказаться тесным в пройме и узким в рукавах. И с вами все в порядке, и с платьем, просто вы не созданы друг для друга. {" "}
            </p>
          </div>
        </div>
      </div>
      <div className="blog-reply-wrapper mt-50">
        <h4 className="blog-dec-title">оставить комментарий</h4>
        <form className="blog-form">
          <div className="row">
            <div className="col-md-6">
              <div className="leave-form">
                <input type="text" placeholder="Имя" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="leave-form">
                <input type="email" placeholder="Электронная почта " />
              </div>
            </div>
            <div className="col-md-12">
              <div className="text-leave">
                <textarea placeholder="Сообщение" defaultValue={""} />
                <input type="submit" defaultValue="SEND MESSAGE" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default BlogCommentFive;
