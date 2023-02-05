import "./scss/main.scss";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { GitHubReposContextProvider } from "./pages/FilmPhotos/datacontext";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import FilmPhotos from "./pages/FilmPhotos";
import FilmPhotosDetail from "./pages/FilmPhotos/FilmPhotosDetail";
import Portrait from "./pages/Portrait";
import Travel from "./pages/Travel";

export default function App() {
  return (
    <GitHubReposContextProvider>
      <Router>
        <div className="App">
          <Header />
          <div className="container mx-auto py-5">
            <Content />
          </div>
        </div>
      </Router>
    </GitHubReposContextProvider>
  );
}

function Content() {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransistionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<Homepage />} />
        <Route path="/film-photos" element={<FilmPhotos />} />
        <Route path="film-photos/:projectName" element={<FilmPhotosDetail />} />
        <Route path="/portrait" element={<Portrait />} />
        <Route path="/travel" element={<Travel />} />
      </Routes>
    </div>
  );
}
