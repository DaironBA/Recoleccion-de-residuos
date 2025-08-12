export enum MessagesEnum {
  // --------------------------- Success

  // --------------------------- Error
  EMPTY_FIELD    = 'El campo {field} no puede estar vacío',
  INVALID_FIELD  = 'El campo {field} no es válido',
  INVALID_EMAIL  = 'El campo {field} no es un correo válido',
  INVALID_STRING = 'El campo {field} no es una cadena válida',
  INVALID_NUMBER = 'El campo {field} no es un número válido',
  INVALID_DATE   = 'El campo {field} no es una fecha válida',
  MIN_LENGTH     = 'El campo {field} debe tener al menos {minLength} caracteres',

  // --------------------------- Info
}


export function generateMessage(message: MessagesEnum, values: Record<string, string>): string {
  let finalMessage: string = message;
  for (const key in values) {
    const value = values[key];
    finalMessage = finalMessage.replace(`{${key}}`, value);
  }
  return finalMessage;
}
