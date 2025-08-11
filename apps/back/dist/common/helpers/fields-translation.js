"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fieldsTranslation = fieldsTranslation;
const fs_1 = require("fs");
function fieldsTranslation(translationFile, value) {
    const translationPath = `src/common/fields-translations/${translationFile}.json`;
    const translations = (0, fs_1.readFileSync)(translationPath, { encoding: 'utf-8' });
    const translationsObject = JSON.parse(translations);
    return translationsObject[value] || value;
}
//# sourceMappingURL=fields-translation.js.map