import '../styles/sobremi.css';
export default function SobreMi() {
  return (
    <div className="sobre-mi-container">
        <div className="sobre-mi-card">
          <h2 id="sobre-mi">Sobre mí</h2>
          <div className="sobre-mi-row">
            {/* Texto */}
            <div className="sobre-mi-col-texto">
              <p>
                Mi nombre es Nicolás Calderón. Soy desarrollador{" "}
                <span>Full-Stack</span> con un enfoque especial en el{" "}
                <span>Back-End</span>. Me apasiona resolver problemas aplicando lógica
                y análisis, y disfruto especialmente cuando puedo intercambiar ideas
                con otras personas: creo que el <span>trabajo colaborativo</span>{" "}
                enriquece los resultados y potencia el crecimiento colectivo.
              </p>

              <p>
                Me especializo en tecnologías como{" "}
                <span>Django, Python, PHP, MySQL</span>, aunque me adapto fácilmente a
                nuevas herramientas según el proyecto lo requiera.
              </p>

              <p>
                Integro herramientas de <span>inteligencia artificial</span> en mi
                flujo de trabajo para acelerar el desarrollo y optimizar soluciones,
                siempre cuidando la calidad y el control del código.
              </p>

              <p>
                Mi objetivo es participar en <span>proyectos desafiantes</span> que
                generen impacto real, mientras sigo desarrollando mis habilidades
                técnicas y humanas.
              </p>

              <p>
                Soy <span>Técnico Superior en Programación</span> egresado del{" "}
                <span>ITSE</span> en 2022. Actualmente estudio la{" "}
                <span>
                  Tecnicatura Superior en Ciencia de Datos e Inteligencia Artificial
                </span>{" "}
                y me desempeño como programador en la{" "}
                <span>Dirección General de informática de Santiago del Estero</span>.
              </p>
            </div>

            {/* Imagen */}
            <div className="sobre-mi-col-imagen">
              <img src="/avatar.png" alt="Nico Avatar" />
            </div>
          </div>
        </div>
    </div>
  );
}
