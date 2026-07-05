import { Routes, Route } from "react-router-dom";

import Container from "./components/Container";

import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Decks from "./pages/Decks";
import Instructions from "./pages/Instructions";
import Countdown from "./pages/Countdown";
import RotatePhone from "./pages/RotatePhone";
import Game from "./pages/Game";
import Settings from "./pages/Settings";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/categories" element={<Categories />} />

        <Route
          path="/categories/:categoryId"
          element={<Decks />}
        />

        <Route
          path="/play/:categoryId/:deckId"
          element={<Instructions />}
        />

        <Route
          path="/countdown/:categoryId/:deckId"
          element={<Countdown />}
        />

        <Route
          path="/rotate/:categoryId/:deckId"
          element={<RotatePhone />}
        />

        <Route
          path="/game/:categoryId/:deckId"
          element={<Game />}
        />

        <Route path="/settings" element={<Settings />} />

        <Route path="/about" element={<About />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}