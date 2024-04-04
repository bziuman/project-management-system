import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('user');

  const config = new DocumentBuilder()
    .setTitle('Project menagmenr system')
    .build();

  const docs = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, docs);
  await app.listen(3000);
}
bootstrap();
