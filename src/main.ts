import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from './Utiles/validation.pipe';
import { SeederMiddleware } from './Request/Middleware/request.middlewae';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('MNP')
    .setDescription('Mobile Number Portability')
    .setVersion('1.0')
    .addTag('MNP')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('APIDocumentation', app, document);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
