import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Img from "../components/Img";
import Nav from "../components/Nav";
import { getWasteStatusLabel, wasteStatus } from "../enums/wasteStatus.enum";
import { getWasteTypeLabel } from "../enums/wasteType.enum";
import CollectionRequestService from "../services/collectionRequestService";

function Rutas() {

    const [routes, setRoutes] = useState([]);

    const collectionRequestService = new CollectionRequestService();

    const fetchRoutes = () => {
        collectionRequestService.get().then(data => {
            console.log(data)
            setRoutes(data);
        });
    }

    useEffect(() => {
        fetchRoutes();
    }, []);

    return (
        <>
            <Nav />
            <div>
                <div className="grid grid-cols-[1fr_2fr] my-4">
                    <div className="flex flex-col ml-10 gap-2">
                        <div className="bg-opaque-gray flex items-center rounded-xl py-6 px-10 gap-4 w-fit">
                            <Img src="/images/avatar.png" alt="Register" className="w-16" imgClassName="rounded-full border-2 border-[color:var(--color-primary-default)]" />
                            <div className="py-1 px-8 border border-gray-400 rounded-sm">Empresa</div>
                        </div>
                        <div className="bg-opaque-gray font-bold flex flex-col justify-center items-center rounded-xl py-2 px-10 w-full">
                            <h2 className="text-primary-default">Recolecciones Asignadas</h2>
                            <p>23</p>
                        </div>
                        <div className="bg-opaque-gray font-bold flex flex-col justify-center items-center rounded-xl py-2 px-10 w-full">
                            <h2 className="text-primary-default">Recolecciones Completadas</h2>
                            <p>8</p>
                        </div>
                        <div className="bg-opaque-gray font-bold flex flex-col rounded-xl py-2 pl-4 w-full">
                            <h2 className="text-primary-default mx-auto">Lista de recolecciones</h2>
                            <ul className="flex flex-col max-h-40 overflow-y-scroll gap-2">
                                {routes.map((route, index) => (
                                    <li key={index}>
                                        <div className="border-b border-gray-400 text-xs flex justify-between items-center gap-2 pb-1">
                                            <div className="">
                                                <h3>Turno {index} - {route.address}</h3>
                                                <p>Tipo: {getWasteTypeLabel(route.wasteType)}</p>
                                            </div>
                                            <div className={`px-4 py-2 rounded-xl text-white ${route.status === wasteStatus.PENDIENTE ? 'bg-yellow-500' : 'bg-success'}`}>
                                                {getWasteStatusLabel(route.status)}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="w-96">
                            <Img src="/images/mapa.png" alt="rutas" />
                        </div>
                        <div className="flex gap-4 mt-4 font-bold">
                            <div className="bg-tertiary-default py-2 px-4 rounded-xl cursor-pointer  hover:scale-101">REGISTRAR RECOLECCIÓN</div>
                            <div className="bg-tertiary-default py-2 px-4 rounded-xl cursor-pointer  hover:scale-101">GENERAR REPORTE</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Rutas;