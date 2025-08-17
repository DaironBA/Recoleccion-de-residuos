import { useState, useEffect } from "react";
import { Pencil, Trash2 } from "lucide-react";
import Nav from "../components/Nav";
import Footer from "../components/footer";

function AdminUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Simulación de datos
    setUsuarios([
      {
        id: 1,
        nombre: "Juan Pérez",
        documento: "123456789",
        direccion: "Calle 10 #20-30",
        telefono: "3001234567",
        puntos: 150,
      },
      {
        id: 2,
        nombre: "Ana Gómez",
        documento: "987654321",
        direccion: "Carrera 15 #45-10",
        telefono: "3109876543",
        puntos: 250,
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
            <li className="p-2 rounded bg-green-200 cursor-pointer">Usuarios</li>
            <li className="p-2 hover:bg-gray-200 cursor-pointer">Recolectores</li>
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
              USUARIOS CREADOS
            </button>
            <button className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
              AGREGAR USUARIO
            </button>
          </div>

          {/* Tabla */}
          <div className="overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border px-4 py-2 text-left">Nombres y Apellidos</th>
                  <th className="border px-4 py-2 text-left">Documento</th>
                  <th className="border px-4 py-2 text-left">Dirección</th>
                  <th className="border px-4 py-2 text-left">Teléfono</th>
                  <th className="border px-4 py-2 text-left">Puntos</th>
                  <th className="border px-4 py-2 text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((u) => (
                  <tr key={u.id} className="hover:bg-gray-50">
                    <td className="border px-4 py-2">{u.nombre}</td>
                    <td className="border px-4 py-2">{u.documento}</td>
                    <td className="border px-4 py-2">{u.direccion}</td>
                    <td className="border px-4 py-2">{u.telefono}</td>
                    <td className="border px-4 py-2">{u.puntos}</td>
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

export default AdminUsuarios;
