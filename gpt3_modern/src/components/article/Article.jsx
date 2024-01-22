import "./article.css";

const Article = ({ imgUrl, date, text }) => (
  <div className="container_article">
    <div className="container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
);

export default Article;
