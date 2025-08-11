import { NamingStrategyInterface, DefaultNamingStrategy } from 'typeorm';
import { snakeCase } from 'typeorm/util/StringUtils'; // Puedes usar esta función para convertir a snake_case

export class SnakeNamingStrategy extends DefaultNamingStrategy implements NamingStrategyInterface {
  
  // Convierte los nombres de las columnas a snake_case
  columnName(propertyName: string, customName: string | undefined, embeddedPrefixes: string[]): string {
    const columnName = customName ? customName : propertyName;
    return snakeCase(embeddedPrefixes.concat(columnName).join('_'));
  }

  // Convierte los nombres de las tablas a snake_case
  tableName(targetName: string, userSpecifiedName: string | undefined): string {
    return userSpecifiedName ? userSpecifiedName : snakeCase(targetName);
  }

  // Convierte los nombres de las relaciones a snake_case
  relationName(propertyName: string): string {
    return snakeCase(propertyName);
  }
}
