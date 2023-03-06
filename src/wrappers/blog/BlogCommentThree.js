import React, { Fragment } from "react";

const BlogCommentThree = () => {
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
            <h4>Лариса Барвиха</h4>
            <span>Февраль 01, 2023 </span>
            <p>
              Сегодня же я точно могу сказать, что как раз именно наличие каблуков в повседневности это чаще всего будет как маркер возрастной женщины. {" "}
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
            <h4>Света Цветочек</h4>
            <span>Февраль 02, 2023 </span>
            <p>
              Нет, дело не в каблуках, а в общей картинке. Когда прическа, устаревшая на 10 лет, макияж, «я так всегда красилась», и совершенно неактуальная одежда. Причем, не потому что одежда вышла из моды. {" "}
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

export default BlogCommentThree;
