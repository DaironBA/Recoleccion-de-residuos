import { NamingStrategyInterface, DefaultNamingStrategy } from 'typeorm';
export declare class SnakeNamingStrategy extends DefaultNamingStrategy implements NamingStrategyInterface {
    columnName(propertyName: string, customName: string | undefined, embeddedPrefixes: string[]): string;
    tableName(targetName: string, userSpecifiedName: string | undefined): string;
    relationName(propertyName: string): string;
}
