import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import WithSubnavigation from "./components/Navbar";
import Price from "./components/Price";

function App() {
  const [lang, setLang] = useState(window.location.pathname.slice(1, 3));

  useEffect(() => {
    fetch(
      `https://ge.cryptal.com/_next/data/eldRANH3LlG6sSgpDU-2H/${lang}/markets.json`
    )
      .then((res) => res.json())
      .then((data) => localStorage.setItem("webData", JSON.stringify(data)));
  }, [lang]);
  return (
    <>
      <WithSubnavigation />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/en" />} exact />
          <Route path="/:lang?" element={<Home />} />
          <Route path="/:lang?/markets" element={<Price />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
