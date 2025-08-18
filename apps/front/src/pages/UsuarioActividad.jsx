import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/footer";
import { useSelector } from "react-redux";

function UsuarioActividad() {

  const user = useSelector((state) => state.user.user);
 
  const [puntos, setPuntos] = useState(0);
  const [recolecciones, setRecolecciones] = useState(0);
  const [kilos, setKilos] = useState(0);
  const [proximasFechas, setProximasFechas] = useState({
    organicos: "",
    inorganicos: "",
    peligrosos: "",
  });

  useEffect(() => {
    if (!user) return;
    // Aquí luego se conectará con el backend
    setPuntos(user.totalPoints);
    setRecolecciones(user.collectionCount ?? 0);
    setKilos(user.recycledKilos ?? 0);
    setProximasFechas({
      organicos: "Miércoles, 15 de Noviembre",
      inorganicos: "Viernes, 17 de Noviembre",
      peligrosos: "Lunes, 27 de Noviembre",
    });
  }, [user]);

  return (
    <>
      <Nav />

      <div className="max-w-6xl mx-auto p-6 space-y-10">
        {/* Sección 1: Datos generales */}
        <div className="flex gap-6">
          <div className="bg-[color:var(--color-quaternary-default)] shadow rounded px-6 py-4 flex-1">
            <p className="font-semibold">Puntos acumulados:</p>
            <p className="text-xl font-bold">{puntos}</p>
          </div>
          <div className="bg-[color:var(--color-quaternary-default)] shadow rounded px-6 py-4 flex-1">
            <p className="font-semibold">Recolecciones este mes:</p>
            <p className="text-xl font-bold">{recolecciones}</p>
          </div>
          <div className="bg-[color:var(--color-quaternary-default)] shadow rounded px-6 py-4 flex-1">
            <p className="font-semibold">Kilos reciclados (Total):</p>
            <p className="text-xl font-bold">{kilos}</p>
          </div>
        </div>

        {/* Sección 2: Próximas Recolecciones */}
        <div className="border rounded p-4 bg-white">
          <h3 className="font-semibold text-lg mb-4">Próximas Recolecciones</h3>
          <div className="text-sm space-y-3">
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Orgánicos</span>
              <span>{proximasFechas.organicos}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Inorgánicos</span>
              <span>{proximasFechas.inorganicos}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Peligrosos</span>
              <span>{proximasFechas.peligrosos}</span>
            </div>
          </div>
        </div>

        {/* Sección 3: Solicitar recolección + Gráfico */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Solicitar recolección */}
          <div className="border rounded p-4">
            <h3 className="font-semibold mb-4">Solicitar nueva recolección</h3>
            <div className="flex gap-4 mb-4">
              <button className="bg-black text-white py-2 px-6 rounded cursor-pointer hover:opacity-90 transition">
                Inorgánicos
              </button>
              <button className="bg-black text-white py-2 px-6 rounded cursor-pointer hover:opacity-90 transition">
                Peligrosos
              </button>
            </div>
            <button className="bg-[color:var(--color-alternative-default)] text-white py-2 px-6 rounded cursor-pointer hover:opacity-90 transition">
              GENERAR REPORTE
            </button>
          </div>

          {/* Gráfico (simulado) */}
          <div className="border rounded p-4">
            <h3 className="font-semibold mb-4">Mi actividad</h3>
            <img
              src="/images/actividad-grafico.png"
              alt="Gráfico de actividad"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default UsuarioActividad;