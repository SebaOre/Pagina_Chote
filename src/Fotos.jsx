import { Link } from "react-router-dom";
import "./App.css";
const basePath = import.meta.env.BASE_URL; // "/Pagina_Chote/"
const origin = window.location.origin;     // "https://sebaore.github.io"
const base = `${origin}${basePath}`;       // "https://sebaore.github.io/Pagina_Chote/"


const fotos = [
  {
    titulo: "Vista exterior",
    descripcion: "Para que veas que es real.",
    src: new URL("img1.jpg", base).href,
  },
  {
    titulo: "Interior acogedor",
    descripcion: "Ambiente cómodo y seguro.",
    src: new URL("img2.jpg", base).href,
  },
  {
    titulo: "Detalle del servicio",
    descripcion: "Calidad garantizada (o no).",
    src: new URL("img3.jpg", base).href,
  },
];

console.log("BASE_URL:", import.meta.env.BASE_URL);
function Fotos() {
  return (
    <div className="page">
      <div className="card gallery-card">
        <h1 className="title">Fotos de Referencias 📸</h1>
        <p className="subtitle">
          Galería oficial del sistema (100% real no fake). Reemplaza las imágenes con tus fotos.
        </p>

        <div className="gallery">
          {fotos.map((foto, index) => (
            <div className="photo-card" key={index}>
              <img
                className="photo-img"
                src={foto.src}
                alt={foto.titulo}
                loading="lazy"
              />
              <h3 className="photo-title">{foto.titulo}</h3>
              <p className="photo-desc">{foto.descripcion}</p>
            </div>
          ))}
        </div>

        <Link to="/" className="btn secondary">
          ⬅ Volver
        </Link>
      </div>
    </div>
  );
}

export default Fotos;
