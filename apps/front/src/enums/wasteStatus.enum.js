export const wasteStatus = {
    PENDIENTE: 1,
    COMPLETADO: 2,
}

export const getWasteStatusLabel = (wasteStatus) => {
    switch(wasteStatus){
        case 1:
            return "Pendiente";
        case 2:
            return "Completado";
        default:
            return "Desconocido";
    }
}