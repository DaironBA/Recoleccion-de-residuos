import { useState } from "react";
import { Pencil } from "lucide-react";
import Nav from "../components/Nav";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";

function AdminPuntos() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    servicio: "",
    residuo: "",
    kilos: 0,
    puntos: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Datos guardados:", form);
    alert("Fórmula guardada correctamente ✅");
  };

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
            <li
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => navigate("/admin/servicios")}
            >
              Servicios
            </li>
            <li className="p-2 rounded bg-green-200 cursor-pointer">
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

          {/* Botones de acción */}
          <div className="flex gap-4 mb-6">
            <button className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
              FORMULAS CREADAS
            </button>
            <button className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
              EDITAR FORMULA
            </button>
            <button className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
              ELIMINAR FORMULA
            </button>
            <button className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
              RESIDUOS
            </button>
          </div>

          {/* Formulario */}
          <div className="border bg-gray-50 rounded p-6 space-y-4">
            {/* Servicio */}
            <div>
              <label className="block font-semibold mb-1">Servicio</label>
              <input
                type="text"
                name="servicio"
                value={form.servicio}
                onChange={handleChange}
                placeholder="Ingrese el servicio"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            {/* Tipo Residuo */}
            <div>
              <label className="block font-semibold mb-1">Tipo Residuo</label>
              <input
                type="text"
                name="residuo"
                value={form.residuo}
                onChange={handleChange}
                placeholder="Ingrese el tipo de residuo"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            {/* Kilos */}
            <div>
              <label className="block font-semibold mb-1">Kilos</label>
              <input
                type="range"
                name="kilos"
                min="0"
                max="100"
                value={form.kilos}
                onChange={handleChange}
                className="w-full"
              />
              <p className="text-sm text-gray-600">Seleccionado: {form.kilos} kg</p>
            </div>

            {/* Puntos Asignados */}
            <div>
              <label className="block font-semibold mb-1">Puntos Asignados</label>
              <input
                type="number"
                name="puntos"
                value={form.puntos}
                onChange={handleChange}
                placeholder="Ingrese los puntos"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            {/* Botón Guardar */}
            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
              >
                GUARDAR
              </button>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default AdminPuntos;
