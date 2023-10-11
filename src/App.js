import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Comics from "./components/comics/comics";
import Characters from "./components/characters/characters";
import CardChar from "./components/card-char/card-char";
import CardComic from "./components/card-comic/card-comic";
import ErrorApi from "./components/error-api/error-api";

const App = () => {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path="/" element={<Characters />}></Route>
        <Route path="/comics" element={<Comics />}></Route>
        <Route path="/comics/:id" element={<CardComic />}></Route>
        <Route path="/charaster/:id" element={<CardChar />}></Route>
        <Route path="*" element={<ErrorApi />}></Route>
      </Routes>
    </div>
  );
};

export default App;
