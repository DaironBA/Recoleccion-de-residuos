import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/footer";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function UsuarioReporte() {
  const navigate = useNavigate();
  const [inputUserId, setInputUserId] = useState(() => {
    return localStorage.getItem("userId") || "1";
  });
  const user = useSelector((state) => state.user.user);

  const [recolecciones, setRecolecciones] = useState([]);
  const [totalPuntos, setTotalPuntos] = useState(0);
  const [userName, setUserName] = useState("User Name");

  async function fetchData() {
    try {
      const data = user.recolecciones;

      setUserName(user.name || "Sin nombre");
      setTotalPuntos(user.totalPoints || 0);
      setRecolecciones(user.recolecciones || []);
     
    } catch (error) {
      console.error("Error al cargar recolecciones:", error);
      setUserName("Error al cargar datos");
      setRecolecciones([]);
      setTotalPuntos(0);
    }
  }

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);

  function exportToExcel() {
    const formattedData = recolecciones.map((item) => ({
      Id: item.id,
      Tipo: item.tipo,
      Fecha: item.fecha,
      Puntos: item.puntos,
      "Usuario ID": user?.id,
      Nombre: user?.name,
      Dirección: user?.address,
      Email: user?.email,
      Teléfono: user?.phone,
      Edad: user?.age,
      Documento: user?.documentNumber,
      "Tipo Documento": user?.documentType,
      Rol: user?.roleId,
    }));

    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Reporte");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const dataBlob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    saveAs(dataBlob, "reporte_recolecciones.xlsx");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      <main className="flex-grow max-w-6xl mx-auto p-6">
        {/* Panel Superior */}
        <div className="flex justify-between mb-8">
          {/* Usuario */}
          <div className="bg-gray-200 p-4 rounded-lg flex items-center space-x-4 w-fit">
            <img
              src="/images/avatar.png"
              alt="Avatar"
              className="w-16 h-16 rounded-full border-2 border-blue-600"
            />
            <div>
              <div className="mb-2">
                <p className="text-sm border px-2 py-1 rounded">{userName}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  className="text-sm bg-gray-300 px-3 py-1 rounded shadow cursor-pointer"
                  onClick={() => navigate(`/perfil/${inputUserId}`)}
                >
                  PERFIL ✎
                </button>
                <button className="text-sm bg-blue-300 px-3 py-1 rounded shadow">
                  SERVICIOS
                </button>
              </div>
            </div>
          </div>

          {/* Total de Puntos */}
          <div className="bg-gray-200 p-4 rounded-lg flex items-center space-x-6">
            <button className="bg-blue-300 px-4 py-2 rounded shadow">
              CANJEAR <br /> PUNTOS
            </button>
            <div>
              <p className="text-xs text-center border px-2 py-1 rounded">
                TOTAL <br /> DE <br /> PUNTOS
              </p>
            </div>
            <div className="bg-blue-600 text-white text-2xl font-bold px-4 py-2 rounded-lg">
              {totalPuntos}
            </div>
          </div>
        </div>

        {/* Ingreso de ID */}
        <div className="mb-6">
          <label
            htmlFor="userIdInput"
            className="block text-sm font-semibold mb-2 text-gray-700"
          >
            Digite el número del ID:
          </label>
          <div className="flex space-x-4 items-center">
            <input
              id="userIdInput"
              type="number"
              inputMode="numeric"
              pattern="[0-9]*"
              value={inputUserId}
              onChange={(e) => setInputUserId(e.target.value)}
              className="border border-gray-400 px-3 py-2 rounded w-48 appearance-none"
              placeholder="Ej. 2"
              onWheel={(e) => e.target.blur()} // Previene scroll accidental
            />
            
          </div>
        </div>

        {/* Tabla de Recolecciones */}
        <div className="bg-gray-200 p-4 rounded-lg mb-6 overflow-x-auto">
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
              {recolecciones.length === 0 && (
                <tr>
                  <td colSpan={3} className="text-center py-4 text-gray-500">
                    No hay recolecciones para mostrar
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Botones de acción */}
        <div className="flex justify-end space-x-4">
          <button
            className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600 shadow"
            onClick={exportToExcel}
            disabled={recolecciones.length === 0}
          >
            GENERAR REPORTE
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default UsuarioReporte;
