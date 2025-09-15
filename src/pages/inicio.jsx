import '../styles/inicio.css';
export default function Inicio() {
  return (
    <div className="hero">
        <div className="hero-texto">
            <h1>
            Hola soy <span>Nico</span>
            </h1>
            <p>
            Soy un desarrollador web <br />
            de Santiago del Estero
            </p>
        </div>

        <div className="hero-imagen">
            <img
            src="/Portfolio/avatar.png"
            alt="Nico Avatar"
            />
        </div>
    </div>
  );
}
