import { useState } from "react";
import SvgIcon from "@/utils/svgicons";
import '../styles/habilidades.css';

export default function Habilidades() {
  const [categoria, setCategoria] = useState("todas");

    const skills = [
        { nombre: "Python", icono: "python", categoria: "back" },
        { nombre: "Django", icono: "django", categoria: "back" },
        { nombre: "Flask", icono: "flask", categoria: "back" },
        { nombre: "PHP", icono: "php", categoria: "back" },
        { nombre: "Mongo", icono: "mongo", categoria: "back" },
        { nombre: "Apache", icono: "apache", categoria: "back" },
        { nombre: "Google Sheets", icono: "google-sheets", categoria: "otras" },
        { nombre: "JavaScript", icono: "javascript", categoria: "front" },
        { nombre: "React", icono: "react", categoria: "front" },
        { nombre: "Git", icono: "git", categoria: "otras" },
        { nombre: "GitHub", icono: "github", categoria: "otras" },
        { nombre: "Linux", icono: "linux", categoria: "otras" },
        { nombre: "HTML", icono: "html", categoria: "front" },
        { nombre: "CSS", icono: "css", categoria: "front" },
        { nombre: "Bootstrap", icono: "bootstrap", categoria: "front" },
        { nombre: "MySQL", icono: "mysql", categoria: "back" },
        { nombre: "Docker", icono: "docker", categoria: "back" },
        { nombre: "Notion", icono: "notion", categoria: "otras" },
        { nombre: "Figma", icono: "figma", categoria: "otras" },
        { nombre: "DRF", icono: "drf", categoria: "back" },
        { nombre: "Numpy", icono: "numpy", categoria: "back" },
        { nombre: "Pandas", icono: "pandas", categoria: "back" },
        { nombre: "jQuery", icono: "jquery", categoria: "front" },
        { nombre: "Redux", icono: "redux", categoria: "front" },
        { nombre: "Redux Toolkit", icono: "redux", categoria: "front" },
    ];
  const skillsFiltradas =
    categoria === "todas"
      ? skills
      : skills.filter((s) => s.categoria === categoria);

  return (
    <div className="habilidades-container">
        <div className="habilidades-card">
            <h2 id="habilidades">Skills</h2>

            {/* Contenedor de skills */}
            <div className="habilidades-row">
            {skillsFiltradas.map((skill, i) => (
                <div className="habilidad" key={i}>
                  <a href={`#/proyectos?filtro=${skill.nombre}`}>
                    <SvgIcon name={skill.icono} className="icono" />
                  </a>
                  <span className="nombre">{skill.nombre}</span>
                </div>
            ))}

            </div>
            {/* Imagen de avatar */}
            <div className="habilidades-col-imagen">
                <img src="/Portfolio/avatar.png" alt="Nico Avatar" />
            </div>

            {/* Filtros */}
            <div className="habilidades-filtros">
            <button className={categoria === "todas" ? "selected" : ""} onClick={() => setCategoria("todas")}>Todas</button>
            <button className={categoria === "front" ? "selected" : ""} onClick={() => setCategoria("front")}>Front</button>
            <button className={categoria === "back" ? "selected" : ""} onClick={() => setCategoria("back")}>Back</button>
            <button className={categoria === "otras" ? "selected" : ""} onClick={() => setCategoria("otras")}>Otras</button>
            </div>
        </div>
    </div>
  );
}
