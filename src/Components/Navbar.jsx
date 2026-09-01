import { useRef, useState } from "react";
import Wrapper from "./Wrapper";
import { useNewscontext } from "../Context/NewsContext";
import { Search, Bell, MoonStar, SunMedium, X } from "lucide-react";

const Navbar = ({ className = "", theme, setTheme }) => {
  const { setNews, fetchNews } = useNewscontext();
  const timer = useRef(null);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const searchNews = async (e) => {
    const searchvalue = e.target.value;

    clearTimeout(timer.current);

    if (!searchvalue.trim()) return;

    timer.current = setTimeout(async () => {
      const data = await fetchNews(`/everything?q=${searchvalue}`);
      setNews(data.articles);
    }, 1000);
  };

  return (
    <>
      <nav className={`glass-panel sticky top-0 z-50 w-full ${className}`}>
        <Wrapper>
          <div className="flex h-20 items-center justify-between gap-4">
            <div className="flex min-w-[150px] items-center">
              <a href="/" className="brand-mark">
                MN
              </a>
            </div>

            <div className="absolute left-1/2 hidden w-full max-w-[440px] -translate-x-1/2 px-4 md:block">
              <div className="group relative">
                <Search
                  size={17}
                  strokeWidth={2}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)] transition-colors group-focus-within:text-[var(--text)]"
                />

                <input
                  type="text"
                  placeholder="Search news"
                  onChange={searchNews}
                  className="search-input"
                />
              </div>
            </div>

            <div className="ml-auto flex items-center gap-2">
              <button
                type="button"
                className="icon-button md:hidden"
                aria-label="Search news"
                onClick={() => setShowMobileSearch((prev) => !prev)}
              >
                {showMobileSearch ? <X size={18} strokeWidth={2} /> : <Search size={18} strokeWidth={2} />}
              </button>

              <button type="button" className="icon-button relative" aria-label="Notifications">
                <Bell size={18} strokeWidth={2} />
                <span className="absolute right-[8px] top-[8px] h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
              </button>

              <button
                type="button"
                aria-label="Toggle theme"
                className="icon-button"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? <SunMedium size={18} strokeWidth={2} /> : <MoonStar size={18} strokeWidth={2} />}
              </button>

              <button type="button" className="profile-button" aria-label="Profile">
                P
              </button>
            </div>
          </div>
        </Wrapper>
      </nav>

      {showMobileSearch && (
        <div className="mobile-search-shell md:hidden">
          <Wrapper>
            <div className="mobile-search-input-wrap">
              <Search size={17} strokeWidth={2} className="mobile-search-icon" />
              <input
                type="text"
                placeholder="Search headlines"
                onChange={searchNews}
                className="mobile-search-input"
                autoFocus
              />
            </div>
          </Wrapper>
        </div>
      )}
    </>
  );
};

export default Navbar;