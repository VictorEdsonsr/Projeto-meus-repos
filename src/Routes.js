import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Repositorios from "./pages/Repositorios";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/repositorios/" element={<Repositorios />} />
        <Route
          path="/repositorios/:repositoriosId"
          element={<Repositorios />}
        />
      </Routes>
    </BrowserRouter>
  );
}
