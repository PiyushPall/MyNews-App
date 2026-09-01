import { createContext, useContext, useState, useCallback } from "react";
import api from "../Config/Axios";

const Newscontext = createContext();

const fallbackImages = [
  "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1504711331083-9c895941bf81?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
];

const fallbackTitles = {
  general: [
    "Global markets steady as investors watch policy signals",
    "New climate forecast highlights uneven recovery across major cities",
    "A new generation of creators is rewriting the rules of digital media",
    "Urban transit projects gain momentum amid rising commuter demand",
  ],
  business: [
    "Investors rotate toward resilient sectors as earnings season intensifies",
    "Startups focus on practical AI tools that improve productivity",
    "Retail leaders rethink supply chains to reduce disruption",
    "Leadership teams prioritize long-term planning over short-term noise",
  ],
  entertainment: [
    "Streaming platforms race to build more personal viewing experiences",
    "Live events return with new formats designed for broader audiences",
    "Creators are reshaping entertainment with faster, sharper storytelling",
    "Music and film culture remain deeply connected to community identity",
  ],
  health: [
    "Wellness brands expand around preventative care and daily routines",
    "Medical teams lean on data-driven programs to improve outcomes",
    "Public health organizations push more practical community guidance",
    "Healthy habits remain a central focus across modern work culture",
  ],
  science: [
    "Researchers explore faster, safer ways to model climate patterns",
    "New lab studies reveal promising advances in clean-energy materials",
    "Scientists refine how we track biodiversity across fragile ecosystems",
    "Breakthrough experiments continue to reshape what is possible in data analysis",
  ],
  sports: [
    "Teams adapt training strategy to balance performance with recovery",
    "New competition formats are creating a fresh wave of fan excitement",
    "Athletes continue to push the boundaries of endurance and discipline",
    "Modern sports culture is combining analytics, storytelling, and fan access",
  ],
  technology: [
    "Developers are prioritizing AI features that feel practical, not flashy",
    "Product teams focus on speed, trust, and clearer user experiences",
    "The next wave of software is shaped by better automation and integration",
    "Computing trends continue to favor thoughtful design over complexity",
  ],
};

const getFallbackNews = (url = "/everything?q=india") => {
  const query = (url.match(/q=([^&]+)/i) || ["", "general"])[1] || "general";
  const category = query.toLowerCase();
  const baseTitles = fallbackTitles[category] || fallbackTitles.general;

  return baseTitles.map((title, index) => ({
    title,
    description: "Fresh reporting on the stories shaping today's conversations, explored with context and clarity.",
    url: `https://example.com/${category}-${index + 1}`,
    urlToImage: fallbackImages[index % fallbackImages.length],
    source: { name: "Morning Brief" },
  }));
};

const Newscontextprovider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNews = useCallback(async (url = "/everything?q=india") => {
    setLoading(true);

    try {
      const response = await api.get(`${url}&apiKey=${import.meta.env.VITE_API_KEY}`);
      const articles = response?.data?.articles || [];

      if (!articles.length) {
        throw new Error("No articles returned from source");
      }

      return response.data;
    } catch (error) {
      console.warn("News API request failed. Using fallback data instead.", error);
      const fallbackArticles = getFallbackNews(url);
      return { articles: fallbackArticles };
    } finally {
      setLoading(false);
    }
  }, []);

  const value = {
    news,
    setNews,
    fetchNews,
    loading,
  };

  return <Newscontext.Provider value={value}>{children}</Newscontext.Provider>;
};

const useNewscontext = () => {
  return useContext(Newscontext);
};

// eslint-disable-next-line react-refresh/only-export-components
export { Newscontextprovider, useNewscontext };
