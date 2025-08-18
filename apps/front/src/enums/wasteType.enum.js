export const wasteTypeEnum = {
    ORGANICO: 1,
    PELIGROSO: 2,
    RECICLABLE: 3
}

export const getWasteTypeLabel = (wasteType) => {
    switch(wasteType){
        case 1:
            return "Orgánico";
        case 2:
            return "Peligroso";
        case 3:
            return "Inorgánico";
        default:
            return "Desconocido";
    }
}