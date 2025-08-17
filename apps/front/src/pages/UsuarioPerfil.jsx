import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/footer";

function UsuarioPerfil() {
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
    const cargarDatos = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/users/1");
        const data = await response.json();

        setFormData({
          nombres: data.name || "",
          tipoDocumento: data.documentType?.toString() || "",
          numeroDocumento: data.documentNumber?.toString() || "",
          edad: data.age?.toString() || "",
          telefono: data.phone || "",
          correo: data.email || ""
        });

        setTotalPuntos(data.totalPoints || 0);
      } catch (error) {
        console.error("Error cargando datos del usuario:", error);
      }
    };

    cargarDatos();
  }, []);

/*
  useEffect(() => {
  const userId = localStorage.getItem("userId");

  if (!userId) {
    console.warn("Usuario no autenticado");
    return;
  }

  fetch(`http://localhost:3000/api/users/${userId}`)
    .then((res) => res.json())
    .then((data) => {
      setFormData({
        nombres: data.name || "",
        tipoDocumento: data.documentType?.toString() || "",
        numeroDocumento: data.documentNumber?.toString() || "",
        edad: data.age?.toString() || "",
        telefono: data.phone || "",
        correo: data.email || "",
      });
      setTotalPuntos(data.totalPoints || 0);
    })
    .catch((error) => {
      console.error("Error cargando usuario:", error);
    });
}, []);

*/

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleGuardar = () => {
    alert("Datos guardados:\n" + JSON.stringify(formData, null, 2));
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
        <div className="bg-gray-300 rounded-lg p-6 grid grid-cols-[1fr_2fr] gap-4 max-w-4xl">
          <div className="flex flex-col gap-4">
            {[
              "NOMBRES Y APELLIDOS",
              "TIPO DOCUMENTO",
              "NÚMERO DOCUMENTO",
              "EDAD",
              "TELÉFONO",
              "CORREO"
            ].map((label, i) => (
              <label key={i} className="text-xs font-semibold py-2 px-3 rounded bg-gray-200 text-gray-700">
                {label}
              </label>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {[
              { name: "nombres", type: "text" },
              { name: "tipoDocumento", type: "text" },
              { name: "numeroDocumento", type: "text" },
              { name: "edad", type: "number", min: 1 },
              { name: "telefono", type: "text" },
              { name: "correo", type: "email" }
            ].map(({ name, type, min }) => (
              <div key={name} className="relative">
                <input
                  name={name}
                  type={type}
                  min={min}
                  value={formData[name]}
                  onChange={handleChange}
                  className="w-full p-2 rounded border border-gray-400 bg-gray-100 text-gray-700"
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                  onClick={() => setFormData(prev => ({ ...prev, [name]: "" }))}
                  aria-label={`Clear ${name} input`}
                >
                  ✖
                </button>
              </div>
            ))}

            <div className="flex justify-between mt-6">
              <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300 flex items-center gap-2">
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
      </div>
      <Footer />
    </>
  );
}

export default UsuarioPerfil;