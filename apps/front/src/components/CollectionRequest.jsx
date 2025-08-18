import { useEffect, useRef, useState } from "react";
import BlackButton from "./BlackButton";
import CheckboxInput from "./CheckboxInput";
import InputText from "./InputText";
import SelectInput from "./SelectInput";
import { useSelector } from "react-redux";
import CollectionRequestService from "../services/collectionRequestService";
import Alert from "./alert";
import { wasteTypeEnum } from "../enums/wasteType.enum";
import { Cross, X } from "lucide-react";

function CollectionRequest({show, wasteType, onClose}) {
    if (!show) return;
    const user = useSelector((state) => state.user.user);

    const wasteTypes = [
        { value: wasteTypeEnum.RECICLABLE, label: "Inorgánicos" },
        { value: wasteTypeEnum.PELIGROSO, label: "Peligrosos" },
    ]

    const [showAlert, setShowAlert] = useState(false);
    const [message, setMessage] = useState('');
    const [alertType, setAlertType] = useState('info');
    const [onCloseAlert, setOnCloseAlert] = useState(() => () => setShowAlert(false));

    const dateRef = useRef(null)
    const wasteTypeRef = useRef(null)
    const repeatRef = useRef(null)
    const addressRef = useRef(null);

    useEffect(() => {
        if (!user) return;
        addressRef.current.setValue(user.address);
    }, [user]);

    useEffect(() => {
        if (wasteType) {
        wasteTypeRef.current.setValue(wasteType);
        }
    }, [wasteType]);

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

    // Services
    const collectionRequestService = new CollectionRequestService();

    // Methods

    const validateForm = () => {
        const date = dateRef.current.isValid();
        const address = addressRef.current.isValid();
        const wasteType = wasteTypeRef.current.isValid();
        const repeat = repeatRef.current.isValid();

        if (!date || !address || !wasteType || !repeat) {
            return false;
        }

        return true;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;
        const formData = {
            address: addressRef.current.getValue(),
            date: dateRef.current.getValue(),
            wasteType: wasteTypeRef.current.getValue(),
            periodically: repeatRef.current.getValue(),
            userId: user.id,
        }
        try{
            await collectionRequestService.post('', formData);
            handleShowAlert("Solicitud de recolección creada correctamente", "success");
        }catch (error) {
            console.error("Error al crear la solicitud de recolección:", error);
        }
    }

    return(
        <>
            <div className="fixed inset-0 flex justify-center items-center z-10 bg-[rgba(0,0,0,0.7)]">
                <div className={`relative rounded-lg shadow-lg bg-white max-w-md w-full text-center flex flex-col p-6`}>
                    <div onClick={onClose} className="absolute top-2 right-2 cursor-pointer">
                        <X />
                    </div>
                    <h2 className="font-bold text-primary-default mb-4">Solicitar recolección</h2>
                    <p>Recuerda que las recolecciones de desechos inorgánicos se repiten cada 2 semanas mientras que las de desechos peligrosos son cada mes.</p>
                    <form className="text-start flex flex-col gap-6" onSubmit={handleSubmit}>
                        <InputText 
                            ref={addressRef}
                            id="address"
                            label='Dirección'
                            required={true}
                         />
                        <InputText 
                            ref={dateRef}
                            id="date"
                            type='date'
                            label='Fecha'
                            required={true}
                            mdate={new Date().toISOString().split("T")[0]}
                         />
                        <SelectInput 
                            ref={wasteTypeRef}
                            id="wasteType"
                            label="Tipo de residuos"
                            options={wasteTypes}
                            required={true}
                        />
                        <CheckboxInput
                            ref={repeatRef}
                            label="Repetir periódicamente"
                            id="repeat"
                            labelPosition='end'
                        />
                         <div className="max-w-82 w-full mx-auto">
                            <BlackButton text="Solicitar" />
                         </div>
                    </form>
                </div>
                <Alert message={message} onClose={handleCloseAlert} show={showAlert} type={alertType} />
            </div>
        </>
    )
}

export default CollectionRequest;