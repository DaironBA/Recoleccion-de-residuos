import { useState, useEffect } from "react";
import { Pencil, Trash2 } from "lucide-react";
import Nav from "../components/Nav";
import Footer from "../components/footer";

function AdminRecolectores() {
  const [recolectores, setRecolectores] = useState([]);

  useEffect(() => {
    // Simulación de datos
    setRecolectores([
      {
        id: 1,
        nombre: "Carlos López",
        identificacion: "R001",
        documento: "1020304050",
        direccion: "Av. Siempre Viva 123",
        telefono: "3009876543",
      },
      {
        id: 2,
        nombre: "María Torres",
        identificacion: "R002",
        documento: "1122334455",
        direccion: "Calle 50 #30-20",
        telefono: "3101234567",
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
            <li className="p-2 hover:bg-gray-200 cursor-pointer">Usuarios</li>
            <li className="p-2 rounded bg-green-200 cursor-pointer">Recolectores</li>
            <li className="p-2 hover:bg-gray-200 cursor-pointer">Recolecciones</li>
            <li className="p-2 hover:bg-gray-200 cursor-pointer">Servicios</li>
            <li className="p-2 hover:bg-gray-200 cursor-pointer">Puntos</li>
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
              RECOLECTORES
            </button>
            <button className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
              PUNTOS REGISTRADOS
            </button>
            <button className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
              AGREGAR RECOLECTOR
            </button>
          </div>

          {/* Tabla */}
          <div className="overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border px-4 py-2 text-left">Nombres y Apellidos</th>
                  <th className="border px-4 py-2 text-left">ID</th>
                  <th className="border px-4 py-2 text-left">Documento</th>
                  <th className="border px-4 py-2 text-left">Dirección</th>
                  <th className="border px-4 py-2 text-left">Teléfono</th>
                  <th className="border px-4 py-2 text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {recolectores.map((r) => (
                  <tr key={r.id} className="hover:bg-gray-50">
                    <td className="border px-4 py-2">{r.nombre}</td>
                    <td className="border px-4 py-2">{r.identificacion}</td>
                    <td className="border px-4 py-2">{r.documento}</td>
                    <td className="border px-4 py-2">{r.direccion}</td>
                    <td className="border px-4 py-2">{r.telefono}</td>
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

export default AdminRecolectores;
