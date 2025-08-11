"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesEnum = void 0;
exports.generateMessage = generateMessage;
var MessagesEnum;
(function (MessagesEnum) {
    MessagesEnum["EMPTY_FIELD"] = "El campo {field} no puede estar vac\u00EDo";
    MessagesEnum["INVALID_FIELD"] = "El campo {field} no es v\u00E1lido";
    MessagesEnum["INVALID_EMAIL"] = "El campo {field} no es un correo v\u00E1lido";
    MessagesEnum["INVALID_STRING"] = "El campo {field} no es una cadena v\u00E1lida";
    MessagesEnum["INVALID_NUMBER"] = "El campo {field} no es un n\u00FAmero v\u00E1lido";
    MessagesEnum["INVALID_DATE"] = "El campo {field} no es una fecha v\u00E1lida";
})(MessagesEnum || (exports.MessagesEnum = MessagesEnum = {}));
function generateMessage(message, values) {
    let finalMessage = message;
    for (const key in values) {
        const value = values[key];
        finalMessage = finalMessage.replace(`{${key}}`, value);
    }
    return finalMessage;
}
//# sourceMappingURL=messages.enum.js.map