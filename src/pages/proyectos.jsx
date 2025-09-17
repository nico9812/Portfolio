import '../styles/proyectos.css';

const proyectosData = [
  // ----- PROYECTOS PERSONALES / PRIVADOS -----
  {
    titulo: "SpicySexShop",
    descripcion:
      "E-commerce desarrollo full-stack con gestión de ventas, compras y productos, integración de pagos y despliegue en producción. Incluye backend en Django y Django REST Framework, frontend en React con Redux Toolkit, integración con MercadoPago y contenedores con Docker.",
    tecnologias: [
      "Django",
      "Django_REST",
      "Python",
      "React",
      "Redux",
      "Redux toolkit",
      "Docker",
      "MySQL",
      "JavaScript",
      "CSS",
      "Bootstrap",
    ],
    imagen: "/spicy.png",
    link: "https://spicysexshop.com.ar",
    tipo: "publico",
  },
  {
    titulo: "Sistema de Gestión Contable",
    descripcion:
      "Plataforma desarrollada full-stack para contadores y clientes, con control de documentos y vencimientos. Implementa un sistema de seguridad para archivos sensibles mediante rutas temporales y de un solo uso, evitando la exposición de los directorios de medios.",
    tecnologias: [
      "Django",
      "Django_REST",
      "Python",
      "React",
      "Redux",
      "Redux-toolkit",
      "MySQL",
      "JavaScript",
      "CSS",
    ],
    link: null,
    tipo: "privado",
  },
  {
    titulo: "Sistema de Gestión de Alumnos",
    descripcion:
      "Plataforma full-stack desarrollada en el marco de una práctica profesionalizante, que incluye módulos de gestión de alumnos, carreras, materias y perfiles. Proyecto implementado con Django como backend principal.",
    tecnologias: [
      "Django",
      "Python",
      "MySQL",
      "JavaScript",
      "CSS",
      "Bootstrap",
    ],
    imagen: "/placeholder.png",
    link: "https://gestion.ispp1.edu.ar/",
    tipo: "publico",
  },

  // ----- PROYECTOS DEL SECTOR PÚBLICO -----
  {
    titulo: "Sistema de Gestión de Proyectos",
    descripcion:
      "Sistema full-stack para la gestión de proyectos, tareas y perfiles, desarrollado y coordinado en equipo desde la Dirección General de Informática de Santiago del Estero (DGISE).",
    tecnologias: [
      "Django",
      "Python",
      "MySQL",
      "JavaScript",
      "CSS",
      "Bootstrap",
    ],
    imagen: "/placeholder.png",
    link: null,
    tipo: "privado",
  },
  {
    titulo: "Sistema de Complementarias Docentes",
    descripcion:
      "Aplicación full-stack para el cálculo de complementarias docentes. Incluyó el relevamiento de un sistema heredado, el rediseño desde cero y la implementación de mejoras en cálculos, gestión de permisos, pruebas y despliegue en producción. Desarrollo realizado en la DGISE.",
    tecnologias: [
      "PHP",
      "MySQL",
      "JavaScript",
      "CSS",
      "Bootstrap",
    ],
    imagen: "/placeholder.png",
    link: null,
    tipo: "privado",
  },
  {
    titulo: "Mini Framework PHP",
    descripcion:
      "Framework interno desarrollado en PHP 5.6 para la DGISE, orientado al manejo seguro de rutas, configuración de archivos estáticos, sesiones y autenticación. Mejoró la eficiencia, seguridad y centralización de los sistemas internos.",
    tecnologias: [
      "PHP",
    ],
    imagen: "/placeholder.png",
    link: null,
    tipo: "privado",
  },
  {
    titulo: "Sistema de Gestión de Complementarias",
    descripcion:
      "Aplicación desarrollada en equipo para la DGISE, donde se participó en la implementación de módulos de administración de usuarios y permisos, backend en Flask y soporte general al equipo de desarrollo.",
    tecnologias: [
      "Flask",
      "JavaScript",
      "CSS",
      "Bootstrap",
    ],
    imagen: "/placeholder.png",
    link: null,
    tipo: "privado",
  },
  {
    titulo: "Auditoría y Mejora de Servidores",
    descripcion:
      "Revisión y auditoría de servidores heredados en la DGISE, con sistemas en PHP bajo Apache y configuraciones mínimas de seguridad. Se propuso y planificó la migración progresiva a Nginx, permitiendo mejorar rendimiento, compatibilidad y seguridad. El plan contempló la futura contenedorización de los proyectos con Docker para facilitar mantenimiento y despliegues.",
    tecnologias: [
      "Apache",
      "Nginx",
      "PHP",
      "Linux",
      "Docker",
      "Git"
    ],
    imagen: "/placeholder.png",
    link: null,
    tipo: "interno"
  },
  {
    titulo: "Infraestructura de Pruebas y Entornos Locales",
    descripcion:
      "Diseño e implementación de una máquina virtual que replica las condiciones del servidor de producción, permitiendo pruebas seguras en red interna. Se configuraron accesos para todo el equipo mediante registro de IPs y nombres personalizados en cada computadora, facilitando la colaboración y el desarrollo sin depender del servidor productivo.",
    tecnologias: [
      "Linux",
      "Virtualización",
      "Docker",
      "Git"
    ],
    imagen: "/placeholder.png",
    link: null,
    tipo: "interno"
  }
];

import { useLocation } from "react-router-dom";

export default function Proyectos() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const filtro = params.get("filtro"); // ejemplo: ?filtro=Django

  // Filtrar proyectos si hay un filtro
  const proyectosFiltrados = filtro
    ? proyectosData.filter((proyecto) =>
        proyecto.tecnologias.some(
          (tech) => tech.toLowerCase() === filtro.toLowerCase()
        )
      )
    : proyectosData;

  return (
    <div className="proyectos-container">
      <div className="proyectos-card">
        <h2 id="proyectos">Proyectos</h2>

        <div className="proyectos-row">
          {proyectosFiltrados.map((proyecto, i) => (
            <div className="proyecto" key={i}>
              {proyecto.tipo !== "publico" && (
                <span className="proyecto-badge">
                  {proyecto.tipo === "privado" ? "Privado" : "Interno"}
                </span>
              )}
              <h3>{proyecto.titulo}</h3>
              <p>{proyecto.descripcion}</p>
              <div className="proyecto-tecnologias">
                {proyecto.tecnologias.map((tech, idx) => (
                  <span className={`tech ${tech.toLowerCase()}`} key={idx}>
                    {tech}
                  </span>
                ))}
              </div>
              {proyecto.tipo === "publico" && proyecto.link && (
                <a
                  href={proyecto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proyecto-link"
                >
                  Ver proyecto
                </a>
              )}
            </div>
          ))}
          {proyectosFiltrados.length === 0 && (
            <p>No se encontraron proyectos con la tecnología "{filtro}"</p>
          )}
        </div>
      </div>
    </div>
  );
}