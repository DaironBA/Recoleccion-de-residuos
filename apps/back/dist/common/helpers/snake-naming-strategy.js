"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnakeNamingStrategy = void 0;
const typeorm_1 = require("typeorm");
const StringUtils_1 = require("typeorm/util/StringUtils");
class SnakeNamingStrategy extends typeorm_1.DefaultNamingStrategy {
    columnName(propertyName, customName, embeddedPrefixes) {
        const columnName = customName ? customName : propertyName;
        return (0, StringUtils_1.snakeCase)(embeddedPrefixes.concat(columnName).join('_'));
    }
    tableName(targetName, userSpecifiedName) {
        return userSpecifiedName ? userSpecifiedName : (0, StringUtils_1.snakeCase)(targetName);
    }
    relationName(propertyName) {
        return (0, StringUtils_1.snakeCase)(propertyName);
    }
}
exports.SnakeNamingStrategy = SnakeNamingStrategy;
//# sourceMappingURL=snake-naming-strategy.js.map