import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Comics from "./components/comics/comics";
import Characters from "./components/characters/characters";
import CardChar from "./components/card-char/card-char";
import CardComic from "./components/card-comic/card-comic";

const App = () => {
  return (
    <div className="container">
      <Header />
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
