import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';
import { map, Observable } from 'rxjs';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
   return next.handle().pipe(
      map((data) => {
        // Convertir las entidades a plain object, excluyendo propiedades con @Exclude()
        return instanceToPlain(data);
      }),
    );
  }
}
