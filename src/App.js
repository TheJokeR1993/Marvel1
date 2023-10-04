import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Comics from "./components/comics/comics";
import Characters from "./components/characters/characters";
import CardChar from "./components/card-char/card-char";
import CardComic from "./components/card-comic/card-comic";
import { useMediaQuery } from "react-responsive";
import HeaderMobile from "./components/header-mobile/header-mobile";

const App = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <div className="container">
      {isMobile ? <HeaderMobile /> : <Header />}

      <Routes>
        <Route path="/" element={<Characters />}></Route>
        <Route path="/comics" element={<Comics />}></Route>
        <Route path="/comics/:id" element={<CardComic />}></Route>
        <Route path="/charaster/:id" element={<CardChar />}></Route>
      </Routes>
    </div>
  );
};

export default App;
