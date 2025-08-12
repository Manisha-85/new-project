import React from "react";


const blogData = [
  {
    id: 1,
    img: "/images/pro1.png",
    author: "Jessica Alford",
    date: "22",
    month: "Oct",
    title: "How To Own Web Design Agency For Free",
  },
  {
    id: 2,
    img: "/images/pro2.png",
    author: "Jessica Alford",
    date: "22",
    month: "Oct",
    title: "5 Difficult Things About Web Design Agency",
  },
  {
    id: 3,
    img: "/images/pro3.png",
    author: "Jessica Alford",
    date: "22",
    month: "Oct",
    title: "Web Design Agency Is So Famous, But Why?",
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section">
      <div className="container">
        <p className="section-subtitle">Our Blog</p>
        <h2 className="section-title">Latest News From Our Blog</h2>

        <div className="blog-grid">
          {blogData.map((blog) => (
            <div key={blog.id} className="blog-card">
              <div className="blog-img-container">
                <img src={blog.img} alt={blog.title} className="blog-img" />
                <div className="blog-date">
                  <span>{blog.month}</span>
                  <h4>{blog.date}</h4>
                </div>
              </div>
              <div className="blog-content">
                <p className="blog-author">{blog.author}</p>
                <h4 className="blog-title">{blog.title}</h4>
                <a href="/" className="blog-link">→</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
