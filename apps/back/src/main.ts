import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from './transform/transform.interceptor';
import { RoleSeeder } from './users/roles/seeders/role.seeder';
import { AdminUserSeeder } from './users/users/seeders/admin-user.seeder';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');

  app.enableCors({
  origin: 'http://localhost:5173', // El frontend de Vite
  credentials: true, // Opcional, útil si usas cookies/sesiones
});
  const roleSeeder = app.get(RoleSeeder);
  await roleSeeder.seed();
  const adminUserSeeder = app.get(AdminUserSeeder);
  await adminUserSeeder.seed();
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
