import { useState } from "react";
import Wrapper from "./Wrapper";
import { useNewscontext } from "../Context/NewsContext";

const Category = ({ className = "" }) => {
  const { setNews, fetchNews } = useNewscontext();
  const [activeCategory, setActiveCategory] = useState("general");

  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const handleClick = async (e) => {
    const category = e.currentTarget.value;

    setActiveCategory(category);

    const data = await fetchNews(`/everything?q=${category}`);
    setNews(data.articles);
  };

  return (
    <div className={`category-strip ${className}`}>
      <Wrapper>
        <div className="flex w-full justify-center py-3 sm:py-4">
          <div className="category-scroller w-full">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                value={category}
                onClick={handleClick}
                aria-pressed={activeCategory === category}
                className={`news-chip shrink-0 ${
                  activeCategory === category ? "is-active" : ""
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;