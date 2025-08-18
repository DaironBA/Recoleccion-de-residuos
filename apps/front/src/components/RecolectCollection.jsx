
import { Cross, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import InputText from "./InputText";
import BlackButton from "./BlackButton";
import RecoleccionesService from "../services/recoleccionesService";
import Alert from "./alert";

function RecolectCollection({show, onClose, route}) {
    if (!show) return null;

    const addressRef = useRef(null);
    const kilosRef = useRef(null);
    const recoleccionesService = new RecoleccionesService();

    
    const [showAlert, setShowAlert] = useState(false);
    const [message, setMessage] = useState('');
    const [alertType, setAlertType] = useState('info');
    const [onCloseAlert, setOnCloseAlert] = useState(() => () => setShowAlert(false));

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!kilosRef.current.isValid) return;
        const kilos = kilosRef.current.getValue();
        console.log(kilos);
        try {
            await recoleccionesService.post(`/${route.id}/registrar`, { kilos: kilos });
            handleShowAlert("Recolección registrada con éxito", "success");
        } catch (error) {
            console.error("Error al registrar la recolección:", error);
        }
    }

     // Alert
    const handleShowAlert = (msg, type) => {
        setMessage(msg); 
        setAlertType(type);
        setShowAlert(true);
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
        onClose()
    };

    useEffect(() => {
        if(!route) return;
        addressRef.current.setValue(route?.address || "");
    }, [route]);

    return(
        <>
            <div className="fixed inset-0 flex justify-center items-center z-10 bg-[rgba(0,0,0,0.7)]">
                <div className={`relative rounded-lg shadow-lg bg-white max-w-md w-full text-center flex flex-col p-6`}>
                    <div onClick={onClose} className="absolute top-2 right-2 cursor-pointer">
                        <X />
                    </div>
                    <h2 className="font-bold text-primary-default mb-4">Registrar recolección</h2>

                    <form onSubmit={handleSubmit}>
                        <InputText
                            ref={addressRef}
                            className="text-start"
                            label="Dirección"
                            readOnly={true}
                        />
                        <InputText
                            className="text-start" 
                            ref={kilosRef}
                            id="kilos"
                            label='Kilos'
                            required={true}
                        />
                        <div className="">
                            <BlackButton text='Registrar recolección' />
                        </div>
                    </form>
                </div>
            </div>
            <Alert message={message} onClose={handleCloseAlert} show={showAlert} type={alertType} />
        </>
    )
}

export default RecolectCollection;