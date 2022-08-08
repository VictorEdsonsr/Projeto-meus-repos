import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Repositorios } from "./pages/Repositorios";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repositorios" element={<Repositorios />} />
      </Routes>
    </BrowserRouter>
  );
};
