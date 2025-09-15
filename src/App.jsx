import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  { LayoutWithoutFooter,LayoutWithFooter } from "./utils/layouts";

// Tus páginas
import Inicio from "@/pages/Inicio";
import SobreMi from "@/pages/SobreMi";
import Habilidades from "./pages/habilidades";
import Proyectos from "./pages/Proyectos";

function App() {
  return (
    <Router basename="/Portfolio">
      {/* Contenido de cada página */}
      <main className="flex-1">
        <Routes>
          <Route path="/Portfolio/" element={<LayoutWithoutFooter><Inicio /></LayoutWithoutFooter>} />
          <Route path="/Portfolio/sobre-mi" element={<LayoutWithFooter><SobreMi /></LayoutWithFooter>} />
          <Route path="/Portfolio/skills" element={<LayoutWithFooter><Habilidades /></LayoutWithFooter>} />
          <Route path="/Portfolio/proyectos" element={<LayoutWithFooter><Proyectos /></LayoutWithFooter>} />
          <Route path="*" element={<LayoutWithoutFooter><Inicio /></LayoutWithoutFooter>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
