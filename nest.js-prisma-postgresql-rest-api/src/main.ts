import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ).then((res) => {
    console.log('up server port:' , process.env.PORT );
  });
}
bootstrap();
