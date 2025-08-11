export declare enum MessagesEnum {
    EMPTY_FIELD = "El campo {field} no puede estar vac\u00EDo",
    INVALID_FIELD = "El campo {field} no es v\u00E1lido",
    INVALID_EMAIL = "El campo {field} no es un correo v\u00E1lido",
    INVALID_STRING = "El campo {field} no es una cadena v\u00E1lida",
    INVALID_NUMBER = "El campo {field} no es un n\u00FAmero v\u00E1lido",
    INVALID_DATE = "El campo {field} no es una fecha v\u00E1lida"
}
export declare function generateMessage(message: MessagesEnum, values: Record<string, string>): string;
