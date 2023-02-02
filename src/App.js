import "./scss/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import FilmPhotos from "./pages/FilmPhotos";
import Portrait from "./pages/Portrait";
import Travel from "./pages/Travel";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container mx-auto py-5">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/film-photos" element={<FilmPhotos />} />
            <Route path="/portrait" element={<Portrait />} />
            <Route path="/travel" element={<Travel />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
