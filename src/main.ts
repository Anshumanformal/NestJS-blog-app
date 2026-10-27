import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { DataResponseInterceptor } from './common/interceptors/data-response/data-response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { // When this is added, then @Type() decorator from class-transformer is not required to be added.
        enableImplicitConversion: true
      }
    })
  )

  /**
   * Swagger configuration
   */
  const config = new DocumentBuilder()
  .setTitle('NestJS - Blog app')
  .setDescription('Use the base API url as http://localhost:3000')
  .setTermsOfService('http://localhost:3000/terms-of-service')
  .setLicense('MIT License', 'https://github.com/git/git-scm.com/blob/gh-pages/MIT-LICENSE.txt')
  .addServer('http://localhost:3000')
  .setVersion('1.0')
  .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  // Enable CORS
  app.enableCors()

  // Removed from below and added in appModule
  // Add global interceptor
  // app.useGlobalInterceptors(new DataResponseInterceptor())

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
