import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/footer";
import { useParams } from "react-router-dom";

function UsuarioPerfil({ }) {
   const { userId } = useParams();
  const [formData, setFormData] = useState({
    nombres: "",
    tipoDocumento: "",
    numeroDocumento: "",
    edad: "",
    telefono: "",
    correo: ""
  });

  const [totalPuntos, setTotalPuntos] = useState(0);

  useEffect(() => {
    if (!userId) return;

    const cargarDatos = async () => {
      try {
        const responseUser = await fetch(`http://localhost:3000/api/users/${userId}`);
        const userData = await responseUser.json();

        setFormData({
          nombres: userData.name || "",
          tipoDocumento: userData.documentType?.toString() || "",
          numeroDocumento: userData.documentNumber?.toString() || "",
          edad: userData.age?.toString() || "",
          telefono: userData.phone || "",
          correo: userData.email || ""
        });

        const responseReco = await fetch(`http://localhost:3000/api/recolecciones?userId=${userId}`);
        const recolecciones = await responseReco.json();

        const total = recolecciones.reduce((acc, reco) => acc + (reco.puntos || 0), 0);
        setTotalPuntos(total);

      } catch (error) {
        console.error("Error cargando datos del usuario:", error);
      }
    };

    cargarDatos();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleGuardar = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.nombres,
          documentType: parseInt(formData.tipoDocumento),
          documentNumber: parseInt(formData.numeroDocumento),
          age: parseInt(formData.edad),
          phone: formData.telefono,
          email: formData.correo,
        }),
      });

      if (!response.ok) throw new Error("Error al actualizar el usuario");

      alert("✅ Usuario actualizado correctamente");
    } catch (error) {
      console.error("❌ Error al guardar:", error);
      alert("❌ No se pudo guardar la información");
    }
  };

  const handleEliminar = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Error al eliminar el usuario");

      alert("🗑️ Usuario eliminado correctamente");
      // Aquí podrías redirigir o limpiar sesión
    } catch (error) {
      console.error("❌ Error al eliminar:", error);
      alert("❌ No se pudo eliminar el usuario");
    }
  };

  return (
    <>
      <Nav />
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="bg-gray-300 rounded-lg p-4 flex items-center gap-4">
            <div className="relative">
              <img src="/images/avatar.png" alt="Avatar" className="w-24 h-24 rounded-lg" />
              <button className="absolute top-0 right-0 bg-white rounded-full p-1 border border-gray-400 hover:bg-gray-200">
                ✏️
              </button>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold bg-gray-200 px-2 py-1 rounded text-gray-700">
                {formData.nombres || "NOMBRES Y APELLIDOS"}
              </span>
              <span className="text-xs font-semibold bg-gray-200 px-2 py-1 rounded text-gray-700">
                {formData.numeroDocumento || "NÚMERO DOCUMENTO"}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="text-xs font-semibold">TOTAL DE PUNTOS</div>
            <div className="bg-gray-900 text-white rounded px-4 py-2 text-2xl font-bold">
              {totalPuntos}
            </div>
            <div className="text-xs font-semibold text-gray-600 mt-2">
              NOTIFICACIONES 🔔
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className="bg-gray-300 rounded-lg p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 items-center">
            {/* Nombres */}
            <label className="text-sm font-semibold bg-gray-200 px-3 py-2 rounded text-gray-700">
              NOMBRES Y APELLIDOS
            </label>
            <div className="relative">
              <input
                name="nombres"
                type="text"
                value={formData.nombres}
                onChange={handleChange}
                className="w-full p-2 rounded border border-gray-400 bg-gray-100 text-gray-700"
              />
              <button
                type="button"
                className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                onClick={() => setFormData(prev => ({ ...prev, nombres: "" }))}
              >
                ✖
              </button>
            </div>

            {/* Tipo documento */}
            <label className="text-sm font-semibold bg-gray-200 px-3 py-2 rounded text-gray-700">
              TIPO DOCUMENTO
            </label>
            <div className="relative">
              <input
                name="tipoDocumento"
                type="text"
                value={formData.tipoDocumento}
                onChange={handleChange}
                className="w-full p-2 rounded border border-gray-400 bg-gray-100 text-gray-700"
              />
              <button
                type="button"
                className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                onClick={() => setFormData(prev => ({ ...prev, tipoDocumento: "" }))}
              >
                ✖
              </button>
            </div>

            {/* Número documento */}
            <label className="text-sm font-semibold bg-gray-200 px-3 py-2 rounded text-gray-700">
              NÚMERO DOCUMENTO
            </label>
            <div className="relative">
              <input
                name="numeroDocumento"
                type="text"
                value={formData.numeroDocumento}
                onChange={handleChange}
                className="w-full p-2 rounded border border-gray-400 bg-gray-100 text-gray-700"
              />
              <button
                type="button"
                className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                onClick={() => setFormData(prev => ({ ...prev, numeroDocumento: "" }))}
              >
                ✖
              </button>
            </div>

            {/* Edad */}
            <label className="text-sm font-semibold bg-gray-200 px-3 py-2 rounded text-gray-700">
              EDAD
            </label>
            <div className="relative">
              <input
                name="edad"
                type="number"
                min={1}
                value={formData.edad}
                onChange={handleChange}
                className="w-full p-2 rounded border border-gray-400 bg-gray-100 text-gray-700"
              />
              <button
                type="button"
                className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                onClick={() => setFormData(prev => ({ ...prev, edad: "" }))}
              >
                ✖
              </button>
            </div>

            {/* Teléfono */}
            <label className="text-sm font-semibold bg-gray-200 px-3 py-2 rounded text-gray-700">
              TELÉFONO
            </label>
            <div className="relative">
              <input
                name="telefono"
                type="text"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full p-2 rounded border border-gray-400 bg-gray-100 text-gray-700"
              />
              <button
                type="button"
                className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                onClick={() => setFormData(prev => ({ ...prev, telefono: "" }))}
              >
                ✖
              </button>
            </div>

            {/* Correo */}
            <label className="text-sm font-semibold bg-gray-200 px-3 py-2 rounded text-gray-700">
              CORREO
            </label>
            <div className="relative">
              <input
                name="correo"
                type="email"
                value={formData.correo}
                onChange={handleChange}
                className="w-full p-2 rounded border border-gray-400 bg-gray-100 text-gray-700"
              />
              <button
                type="button"
                className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                onClick={() => setFormData(prev => ({ ...prev, correo: "" }))}
              >
                ✖
              </button>
            </div>
          </div>

          {/* Botones */}
          <div className="flex justify-between mt-8">
            <button
              onClick={handleEliminar}
              className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300 flex items-center gap-2"
            >
              ELIMINAR MI CUENTA 🗑️
            </button>

            <button
              onClick={handleGuardar}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              GUARDAR CAMBIOS 💾
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UsuarioPerfil;
