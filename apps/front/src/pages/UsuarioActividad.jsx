import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/footer";
import { useSelector } from "react-redux";
import CollectionRequest from "../components/CollectionRequest";
import { wasteTypeEnum } from "../enums/wasteType.enum";
import { formatDateToSpanish } from "../utils/formatDate";

function UsuarioActividad() {

  const user = useSelector((state) => state.user.user);
  
  const [puntos, setPuntos] = useState(0);
  const [recolecciones, setRecolecciones] = useState(0);
  const [kilos, setKilos] = useState(0);
  const [showCollectionModal, setShowCollectionModal] = useState(false);
  const [wasteType, setWasteType] = useState(null);

  const [proximasFechas, setProximasFechas] = useState({
    organicos: "",
    inorganicos: "",
    peligrosos: "",
  });

  useEffect(() => {
    if (!user) return;
    // Aquí luego se conectará con el backend
    const recoleccionesUsuario = user.recolecciones;
    const collectionRequests = user.collectionRequests || [];
    const currentDate = new Date();

    // Función para obtener la próxima colección de un tipo específico
    const getNextCollection = (wasteType) => {
      const filteredRequests = collectionRequests.filter(request => {
        const requestDate = new Date(request.date);
        return request.wasteType === wasteType && requestDate > currentDate;
      });

      // Ordenar por fecha ascendente (más cercana primero)
      return filteredRequests.sort((a, b) => new Date(a.date) - new Date(b.date))[0];
    };

    // Obtener la próxima colección de tipo 1, tipo 2 y tipo 3
    const proximoOrganico = getNextCollection(wasteTypeEnum.ORGANICO);
    const proximoReciclable = getNextCollection(wasteTypeEnum.RECICLABLE);
    const proximoPeligroso = getNextCollection(wasteTypeEnum.PELIGROSO);

    const fechaActual = new Date();
    const mesActual = fechaActual.getMonth(); // 0 = Enero, 1 = Febrero, ..., 11 = Diciembre

    // Filtrar recolecciones del mes actual
    const recoleccionesDelMes = recoleccionesUsuario.filter(recoleccion => {
      const fechaRecoleccion = new Date(recoleccion.fecha);
      return fechaRecoleccion.getMonth() === mesActual;
    });

    const kilosMes = recoleccionesDelMes.reduce((total, recoleccion) => total + (recoleccion.kilos || 0), 0);

    setPuntos(user.totalPoints);
    setRecolecciones(recoleccionesDelMes.length ?? 0);
    setKilos(kilosMes ?? 0);

    setProximasFechas({
      organicos: proximoOrganico ? formatDateToSpanish(proximoOrganico.date) : 'No se encontró una proxima',
      inorganicos: proximoReciclable ? formatDateToSpanish(proximoReciclable.date) : 'No se encontró una proxima',
      peligrosos: proximoPeligroso ? formatDateToSpanish(proximoPeligroso.date) : 'No se encontró una proxima',
    });
  }, [user]);

  const handleOpenCollectionModal = (type) => {
    setWasteType(type);
    setShowCollectionModal(true);
  };

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
            <p className="font-semibold">Kilos reciclados este mes (Total):</p>
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
              <button onClick={() => handleOpenCollectionModal(wasteTypeEnum.RECICLABLE)} className="bg-black text-white py-2 px-6 rounded cursor-pointer hover:opacity-90 transition">
                Inorgánicos
              </button>
              <button onClick={() => handleOpenCollectionModal(wasteTypeEnum.PELIGROSO)} className="bg-black text-white py-2 px-6 rounded cursor-pointer hover:opacity-90 transition">
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
      <CollectionRequest show={showCollectionModal} wasteType={wasteType} onClose={() => setShowCollectionModal(false)} />
      <Footer />
    </>
  );
}

export default UsuarioActividad;