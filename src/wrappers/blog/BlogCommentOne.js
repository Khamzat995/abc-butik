import React, { Fragment } from "react";

const BlogCommentOne = () => {
  return (
    <Fragment>
      <div className="blog-comment-wrapper mt-55">
        <h4 className="blog-dec-title">комментарии : 02</h4>
        <div className="single-comment-wrapper mt-35">
          <div className="blog-comment-img">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/blog/pic-2.webp"}
              alt=""
            />
          </div>
          <div className="blog-comment-content">
            <h4>Лилия</h4>
            <span>Февраль 07, 2023 </span>
            <p>
              С одной стороны, кажется, что эти длинные волосы мешают
              воспринимать полноценно идею платья. С другой стороны, я не уверена,
              что полностью собранные в гладкую прическу волосы были бы хороши тут.,{" "}
            </p>
          </div>
        </div>
        <div className="single-comment-wrapper mt-50 ml-120">
          <div className="blog-comment-img">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/blog/pic-4.webp"}
              alt=""
            />
          </div>
          <div className="blog-comment-content">
            <h4>Светичка</h4>
            <span>Февраль 07, 2023 </span>
            <p>
              Конечно, к такому платью отлично подходит короткая стрижка, но стричься под платье — это, согласитесь, уже слишком,{" "}
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

export default BlogCommentOne;
