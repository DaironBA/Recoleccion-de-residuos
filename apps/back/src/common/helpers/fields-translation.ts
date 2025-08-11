import { readFileSync } from "fs";

export function fieldsTranslation(translationFile: string, value: string){
    const translationPath = `src/common/fields-translations/${translationFile}.json`;
    const translations = readFileSync(translationPath, { encoding: 'utf-8' });
    const translationsObject = JSON.parse(translations);
    return translationsObject[value] || value;
}