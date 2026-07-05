import { Routes, Route } from "react-router-dom";

import Container from "./components/Container";

import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Decks from "./pages/Decks";
import Settings from "./pages/Settings";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:categoryId" element={<Decks />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}