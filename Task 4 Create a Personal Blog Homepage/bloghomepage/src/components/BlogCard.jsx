function BlogCard({ post }) {
  return (
    <div className="card">
      <img src={post.image} alt={post.title} />
      <div className="card-content">
        <h3>{post.title}</h3>
        <p className="date">{post.date}</p>
        <p>{post.description}</p>
      </div>
    </div>
  );
}

export default BlogCard;
