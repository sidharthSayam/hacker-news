import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Logic from "./components/Logic";
import Footer from "./components/Footer";
import Comments from "./components/Comments";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Hacker News";
  }, []);
  return (
    <div className="App">
      <Header />
      <div className="gradient"></div>
      <Navigation />
      <Routes>
        <Route path="/stories/:type" element={<Logic />} />
        <Route path="/post" element={<Comments />} />
        <Route path="*" element={<Navigate to="/stories/top" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
