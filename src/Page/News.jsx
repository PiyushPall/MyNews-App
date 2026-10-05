import { useEffect } from "react";
import Wrapper from "../Components/Wrapper";
import { useNewscontext } from "../Context/NewsContext";
import Loader from "../Components/Loader";
import { ArrowUpRight } from "lucide-react";

const News = () => {
  const { news, setNews, fetchNews, loading } = useNewscontext();

  useEffect(() => {
    (async () => {
      const data = await fetchNews();
      setNews(data.articles);
    })();
  }, [fetchNews, setNews]);

  if (loading) {
    return (
      <div className="flex min-h-[420px] items-center justify-center px-4">
        <Loader className="w-fit" />
      </div>
    );
  }

  const validNews = news?.filter((details) => details?.urlToImage);

  return (
    <Wrapper>
      <section className="news-section">
        {/* Hero */}
        <div className="news-hero">
          <div className="hero-badge">Live Brief</div>

          <div className="hero-copy-wrap">
            <div>
              <p className="section-kicker">Morning Edition</p>

              <h1 className="hero-heading">
                News for the way you think.
              </h1>
            </div>

            <p className="hero-copy">
              Curated updates, sharp analysis, and the moments shaping
              culture, business, and the world today.
            </p>
          </div>

          <div className="hero-actions">
            <button
              type="button"
              className="hero-button primary"
              onClick={() =>
                document
                  .getElementById("latest-stories")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore stories
            </button>

            <button
              type="button"
              className="hero-button secondary"
            >
              Saved feeds
            </button>
          </div>
        </div>

        {/* Section Header */}
        <div id="latest-stories" className="section-header">
          <div className="min-w-0">
            <p className="section-kicker">Latest Stories</p>

            <h2 className="section-title">
              Today&apos;s News
            </h2>
          </div>

          <span className="story-count shrink-0">
            {validNews?.length || 0} stories
          </span>
        </div>

        {/* News Grid */}
        <div className="news-grid">
          {validNews?.map((details, index) => (
            <NewsCard
              details={details}
              key={details.url}
              index={index}
            />
          ))}
        </div>

        {/* Empty State */}
        {!loading && validNews?.length === 0 && (
          <div className="empty-state">
            <p>No news found.</p>
          </div>
        )}
      </section>
    </Wrapper>
  );
};

const NewsCard = ({ details, index = 0 }) => {
  const openArticle = () => {
    window.open(details.url, "_blank", "noopener,noreferrer");
  };

  return (
    <article
      className="news-card group"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="news-visual">
        <img
          src={details?.urlToImage}
          alt={details?.title || "News"}
          className="news-image"
        />

        <div className="news-overlay" />
      </div>

      <div className="news-content">
        {details?.source?.name && (
          <p className="story-source">
            {details.source.name}
          </p>
        )}

        <h3 className="story-title">
          {details?.title}
        </h3>

        <p className="story-description">
          {details?.description ||
            "Read the full story for more details."}
        </p>

        <div className="story-action">
          <button
            type="button"
            onClick={openArticle}
            className="story-link"
          >
            Read More

            <ArrowUpRight
              size={16}
              strokeWidth={2}
              className="story-link-icon"
            />
          </button>
        </div>
      </div>
    </article>
  );
};

export default News;