import { useState } from "react";
import Navbar from "./Components/Navbar";
import Category from "./Components/Category";
import News from "./Page/News";
import Footer from "./Components/Footer";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`app-shell theme-${theme}`}>
      <Navbar
        className="sticky top-0 z-20"
        theme={theme}
        setTheme={setTheme}
      />
      <Category className="sticky top-20 z-10" />
      <main>
        <News />
      </main>
      <Footer />
    </div>
  );
};

export default App;
