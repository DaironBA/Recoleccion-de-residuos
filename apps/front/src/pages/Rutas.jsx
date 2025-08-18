import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Img from "../components/Img";
import Nav from "../components/Nav";
import { getWasteStatusLabel, wasteStatus } from "../enums/wasteStatus.enum";
import { getWasteTypeLabel } from "../enums/wasteType.enum";
import CollectionRequestService from "../services/collectionRequestService";
import { formatDateToSpanish } from "../utils/formatDate";
import RecolectCollection from "../components/RecolectCollection";

function Rutas() {

    const [routes, setRoutes] = useState([]);
    const [showRecolectModal, setShowRecolectModal] = useState(false);
    const [selectedRoute, setSelectedRoute] = useState(null);

    const collectionRequestService = new CollectionRequestService();

    const fetchRoutes = () => {
        collectionRequestService.get().then(data => {
            data.sort((a, b) => new Date(a.date) - new Date(b.date));
            setRoutes(data);
        });
    }

    const handleShowRecolectModal = (route) => {
        setSelectedRoute(route);
        setShowRecolectModal(true);
    }

    useEffect(() => {
        fetchRoutes();
    }, []);

    return (
        <>
            <Nav />
            <div>
                <div className="grid grid-cols-[1fr_2fr] my-4 mx-10 gap-10">
                    <div className="flex flex-col gap-2">
                        <div className="bg-opaque-gray flex items-center rounded-xl py-6 px-10 gap-4 w-fit">
                            <Img src="/images/avatar.png" alt="Register" className="w-16" imgClassName="rounded-full border-2 border-[color:var(--color-primary-default)]" />
                            <div className="py-1 px-8 border border-gray-400 rounded-sm">Empresa</div>
                        </div>
                        <div className="bg-opaque-gray font-bold flex flex-col justify-center items-center rounded-xl py-2 px-10 w-full">
                            <h2 className="text-primary-default">Recolecciones Asignadas</h2>
                            <p>{routes.length}</p>
                        </div>
                        <div className="bg-opaque-gray font-bold flex flex-col justify-center items-center rounded-xl py-2 px-10 w-full">
                            <h2 className="text-primary-default">Recolecciones Completadas</h2>
                            <p>{routes.filter(route => route.status === wasteStatus.COMPLETADO).length}</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="w-96">
                            <Img src="/images/mapa.png" alt="rutas" />
                        </div>
                    </div>
                    <div className="bg-opaque-gray col-span-2 font-bold flex flex-col rounded-xl py-2 pl-4 w-full">
                        <div className="relative h-16">
                            <h2 className="text-primary-default text-center">Lista de recolecciones</h2>
                            {/* <div className="md:absolute right-8 top-1 text-sm bg-tertiary-default font-bold py-2 px-4 rounded-xl cursor-pointer  hover:scale-101">GENERAR REPORTE</div> */}
                        </div>
                        <ul className="flex flex-col max-h-40 overflow-y-scroll gap-2">
                            {routes.map((route, index) => (
                                <li key={index}>
                                    <div className="border-b border-gray-400 text-xs flex justify-between items-center gap-2 pb-1">
                                        <div className="">
                                            <h3>Turno {index+1} - {route.address}</h3>
                                            <p>Tipo: {getWasteTypeLabel(route.wasteType)}</p>
                                            <p>Fecha: {formatDateToSpanish(route.date)}</p>
                                        </div>
                                        {route.status === wasteStatus.COMPLETADO && (
                                            <div className={`px-4 py-2 mr-4 rounded-xl text-white bg-success`}>
                                                {getWasteStatusLabel(route.status)}
                                            </div>
                                        )}
                                        {route.status === wasteStatus.PENDIENTE && (
                                            <div className="flex mr-4 gap-2">
                                                <div onClick={() => handleShowRecolectModal(route)} className="cursor-pointer text-sm bg-tertiary-default font-bold px-2 rounded-xl flex items-center justify-center text-primary-default">
                                                    Recolectar
                                                </div>
                                                <div className={`px-4 py-2 rounded-xl text-white bg-yellow-500`}>
                                                    {getWasteStatusLabel(route.status)}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                </div>
            </div>
            <RecolectCollection show={showRecolectModal} route={selectedRoute} onClose={() => setShowRecolectModal(false)} />
            <Footer />
        </>
    );
}

export default Rutas;