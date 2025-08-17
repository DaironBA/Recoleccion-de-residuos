import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/footer";

function UsuarioReporte() {
  const [recolecciones, setRecolecciones] = useState([]);
  const [totalPuntos, setTotalPuntos] = useState(0);

  useEffect(() => {
    // Aquí se conectará con la base de datos
    // Simulación de datos:
    const datosSimulados = [
      { tipo: "Orgánicos", fecha: "2025-08-10", puntos: 30 },
      { tipo: "Inorgánicos", fecha: "2025-08-12", puntos: 50 },
      { tipo: "Peligrosos", fecha: "2025-08-14", puntos: 20 },
    ];
    setRecolecciones(datosSimulados);

    // Calcular total
    const total = datosSimulados.reduce((acc, rec) => acc + rec.puntos, 0);
    setTotalPuntos(total);
  }, []);

  return (
    <>
      <Nav />

      <div className="max-w-6xl mx-auto p-6">
        {/* Panel Superior */}
        <div className="flex justify-between mb-8">
          {/* Usuario */}
          <div className="bg-[color:var(--color-opaque-gray)] p-4 rounded-lg flex items-center space-x-4 w-fit">
            <img
              src="/images/avatar.png"
              alt="Avatar"
              className="w-16 h-16 rounded-full border-2 border-[color:var(--color-primary-default)]"
            />
            <div>
              <div className="mb-2">
                <p className="text-sm border px-2 py-1 rounded">User Name</p>
              </div>
              <div className="flex space-x-2">
                <button className="text-sm bg-gray-200 px-3 py-1 rounded shadow hover:cursor-pointer">
                  PERFIL <span className="ml-1">✎</span>
                </button>
                <button className="text-sm bg-[color:var(--color-tertiary-default)] px-3 py-1 rounded shadow hover:cursor-pointer">
                  SERVICIOS
                </button>
              </div>
            </div>
          </div>

          {/* Total de Puntos */}
          <div className="bg-[color:var(--color-opaque-gray)] p-4 rounded-lg flex items-center space-x-6">
            <button className="bg-[color:var(--color-tertiary-default)] px-4 py-2 rounded shadow hover:cursor-pointer">
              CANJEAR <br /> PUNTOS
            </button>
            <div>
              <p className="text-xs text-center border px-2 py-1 rounded">
                TOTAL <br /> DE <br /> PUNTOS
              </p>
            </div>
            <div className="bg-[color:var(--color-primary-default)] text-white text-2xl font-bold px-4 py-2 rounded-lg">
              {totalPuntos}
            </div>
          </div>
        </div>

        {/* Tabla de Recolecciones */}
        <div className="bg-[color:var(--color-opaque-gray)] p-4 rounded-lg mb-6">
          <table className="w-full table-auto text-left">
            <thead>
              <tr className="border-b-2">
                <th className="pb-2">Recolección</th>
                <th className="pb-2">Fecha</th>
                <th className="pb-2">Puntos</th>
              </tr>
            </thead>
            <tbody>
              {recolecciones.map((rec, idx) => (
                <tr key={idx} className="border-t">
                  <td className="py-2">{rec.tipo}</td>
                  <td>{rec.fecha}</td>
                  <td>{rec.puntos}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Botones laterales */}
        <div className="flex justify-end space-x-4">
          <button className="bg-[color:var(--color-tertiary-default)] hover:bg-[color:var(--color-alternative-default)] text-sm px-4 py-2 rounded hover:cursor-pointer shadow">
            GENERAR REPORTE CONSOLIDADO
          </button>
          <button className="bg-[color:var(--color-tertiary-default)] hover:bg-[color:var(--color-alternative-default)] text-sm px-4 py-2 rounded hover:cursor-pointer shadow">
            EXPORTAR CONSULTA
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default UsuarioReporte;