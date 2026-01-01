import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const [step, setStep] = useState(0);

  const mensajes = useMemo(
    () => [
      "✅ Reserva recibida… (mentira 😈)",
      "📅 Fecha asignada: Nunca Jamás",
      "🧑‍⚕️ Motivo: exceso de seriedad",
      "⏳ Confirmación en proceso...",
      "🎉 Listo, quedaste reservado para traer completos 🌭",
      "🤝 Gracias por usar nuestro sistema 100% confiable (no)",
    ],
    []
  );

  const handleClick = () => {
    setStep((prev) => (prev + 1) % mensajes.length);
  };

  return (
    <div className="page">
      <div className="card">
        <h1 className="title">Centro de Reservas del Culo de CHOTE</h1>
        <p className="subtitle">
          Agenda tu hora de forma rápida y segura (confía).
        </p>

        <div className="buttons">
          <button className="btn primary" onClick={handleClick}>
            Reserva tu hora aquí
          </button>

          <Link to="/fotos" className="btn secondary">
            Fotos de referencias
          </Link>
        </div>

        <div className="result">
          <p className="message">{mensajes[step]}</p>
          <p className="disclaimer">
            Nota: No somos responsables si te llega la confirmación 😜
          </p>
        </div>

        <footer className="footer">Soporte técnico: responde cuando quiere 😅</footer>
      </div>
    </div>
  );
}

export default App;
