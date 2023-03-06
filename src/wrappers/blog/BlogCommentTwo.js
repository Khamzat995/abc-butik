import React, { Fragment } from "react";

const BlogCommentTwo = () => {
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
            <h4>Фиалочка </h4>
            <span>Февраль 07, 2023 </span>
            <p>
              Если вы шьете или покупаете очень дорогой костюм классического кроя — обтянутые пуговицы будут выглядеть лучше любых других. К тому же пуговицы — тоже подвержены веяниям моды. И через сезон могут выглядеть уже устаревшими. {" "}
            </p>
          </div>
        </div>
        <div className="single-comment-wrapper mt-50 ml-120">
          <div className="blog-comment-img">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/blog/pic-22.webp"}
              alt=""
            />
          </div>
          <div className="blog-comment-content">
            <h4>Людмила Шик</h4>
            <span>Февраль 07, 2023 </span>
            <p>
              Сочетать формальность и женственность в одном наряде — в этом поможет костюмный принт. В данном случае серая клетка, которая отлично сочетается со стальным оттенком туфель. {" "}
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

export default BlogCommentTwo;
