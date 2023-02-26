import { Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Blog from "./components/Blog";
import Home from "./components/Home";
import WithSubnavigation from "./components/Navbar";
import Price from "./components/Price";
import AboutUs from "./components/AboutUs";
import { setData } from "./actions/setDataAction";
import { SET_DATA } from "./actionTypes";
function App() {
  const [lang, setLang] = useState(window.location.pathname.slice(1, 3));
  const state = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    fetch(
      `https://ge.cryptal.com/_next/data/eldRANH3LlG6sSgpDU-2H/${state.locale}/markets.json`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch(setData({ data }));
        localStorage.setItem("webData", JSON.stringify(data));
      });
  }, [lang]);

  return (
    <>
      <WithSubnavigation setLang={setLang} lang={lang} />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/en" />} exact />
          <Route path="/:lang?" element={<Home />} />
          <Route path="/:lang?/markets" element={<Price />} />
          <Route path="/:lang?/blog" element={<Blog />} />
          <Route path="/:lang?/about-us" element={<AboutUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
