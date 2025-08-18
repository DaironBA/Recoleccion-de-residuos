import { useState, useEffect } from "react";
import { Pencil, Trash2 } from "lucide-react";
import Nav from "../components/Nav";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";

function AdminServicios() {
  const [servicios, setServicios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulación de datos
    setServicios([
      {
        id: "S001",
        descripcion: "Recolección de Orgánicos",
        totalUsuarios: 120,
        horarios: "Lunes - Miércoles - Viernes",
        puntos: 10,
      },
      {
        id: "S002",
        descripcion: "Recolección de Inorgánicos",
        totalUsuarios: 80,
        horarios: "Martes - Jueves",
        puntos: 15,
      },
    ]);
  }, []);

  return (
    <>
      <Nav />

      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 p-4 shadow-md">
          <h3 className="font-semibold mb-4">Menú</h3>
          <ul className="space-y-2">
            <li
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => navigate("/admin/usuarios")}
            >
              Usuarios
            </li>
            <li
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => navigate("/admin/recolectores")}
            >
              Recolectores
            </li>
            <li
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => navigate("/admin/recolecciones")}
            >
              Recolecciones
            </li>
            <li className="p-2 rounded bg-green-200 cursor-pointer">
              Servicios
            </li>
            <li
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => navigate("/admin/puntos")}
            >
              Puntos
            </li>
          </ul>
        </aside>

        {/* Contenido principal */}
        <main className="flex-1 p-6">
          {/* Perfil */}
          <div className="flex items-center gap-4 mb-6">
            <img
              src="/images/avatar.png"
              alt="User"
              className="w-16 h-16 rounded-full border"
            />
            <div>
              <p className="font-semibold">User Name</p>
              <button className="flex items-center gap-1 text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">
                PERFIL <Pencil size={14} />
              </button>
            </div>
          </div>

          {/* Botones */}
          <div className="flex gap-4 mb-6">
            <button className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
              SERVICIOS
            </button>
            <button className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
              AGREGAR SERVICIO
            </button>
          </div>

          {/* Tabla */}
          <div className="overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border px-4 py-2 text-left">ID Servicio</th>
                  <th className="border px-4 py-2 text-left">Descripción</th>
                  <th className="border px-4 py-2 text-left">Total Usuarios</th>
                  <th className="border px-4 py-2 text-left">Horarios</th>
                  <th className="border px-4 py-2 text-left">Puntos</th>
                  <th className="border px-4 py-2 text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {servicios.map((s, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border px-4 py-2">{s.id}</td>
                    <td className="border px-4 py-2">{s.descripcion}</td>
                    <td className="border px-4 py-2">{s.totalUsuarios}</td>
                    <td className="border px-4 py-2">{s.horarios}</td>
                    <td className="border px-4 py-2">{s.puntos}</td>
                    <td className="border px-4 py-2 text-center flex gap-3 justify-center">
                      <button className="text-blue-500 hover:text-blue-700">
                        <Pencil size={18} />
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default AdminServicios;
