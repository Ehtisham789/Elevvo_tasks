import { useState, useMemo, useEffect } from "react";
import { posts } from "./data";
import Header from "./components/Header";
import BlogCard from "./components/BlogCard";
import FilterBar from "./components/FilterBar";
import Pagination from "./components/Pagination";

const POSTS_PER_PAGE = 6;

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" ||
        post.category === selectedCategory;

      const matchesSearch = post.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);

  return (
    <div>
      <Header />

      <div className="container">
        <FilterBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <div className="grid">
          {paginatedPosts.length > 0 ? (
            paginatedPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))
          ) : (
            <p>No posts found.</p>
          )}
        </div>

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
}

export default App;
