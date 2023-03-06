import React, { Fragment } from "react";

const BlogCommentSix = () => {
  return (
    <Fragment>
      <div className="blog-comment-wrapper mt-55">
        <h4 className="blog-dec-title">комментарии : 02</h4>
        <div className="single-comment-wrapper mt-35">
          <div className="blog-comment-img">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/blog/pic-12.webp"}
              alt=""
            />
          </div>
          <div className="blog-comment-content">
            <h4>Лисичка Кума </h4>
            <span>Январь 12, 2023 </span>
            <p>
              По моему личному мнению, к формам тела человека стоит относиться примерно
              также как к его одежде и макияжу: воспринимать это как модный лук.
              Ибо через свои формы человек самовыражается. Он видит себя субтильным
              или более статным. Он делает себя таким, каким он себя видит». {" "}
            </p>
          </div>
        </div>
        <div className="single-comment-wrapper mt-50 ml-120">
          <div className="blog-comment-img">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/blog/pic-2.webp"}
              alt=""
            />
          </div>
          <div className="blog-comment-content">
            <h4>Светлана Морозова </h4>
            <span>Январь 12, 2023 </span>
            <p>
              Неважно, насколько насыщенный день мне предстоит, я начинаю его всегда с
              тренировки. Меня часто спрашивают, как себя заставить? А я себя не заставляю,
              наоборот, я получаю это этого удовольствие. Тренировка дает мне сумасшедший
              заряд энергии, я могу горы свернуть. Плюс – спорт повышает иммунитет, я
              теперь практически не болею. {" "}
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

export default BlogCommentSix;
