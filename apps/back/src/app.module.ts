import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users/users.module';
import { SnakeNamingStrategy } from './common/helpers/snake-naming-strategy';
import { AuthModule } from './auth/auth.module';
import { RecoleccionesModule } from './recolecciones/recolecciones.module';
@Module({
  imports: [
    
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../../.env',
      
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT!,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      namingStrategy: new SnakeNamingStrategy(),
    }),
    UsersModule,
    AuthModule,
    RecoleccionesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
