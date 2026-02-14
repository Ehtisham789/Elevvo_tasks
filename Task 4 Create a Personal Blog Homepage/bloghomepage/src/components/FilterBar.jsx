function FilterBar({
  selectedCategory,
  setSelectedCategory,
  searchTerm,
  setSearchTerm,
}) {
  const categories = ["All", "Tech", "Travel", "Food"];

  return (
    <div className="filter-bar">
      <div className="categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default FilterBar;
