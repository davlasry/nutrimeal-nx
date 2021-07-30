import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { SearchModule } from './search/search.module';

@Module({
  imports: [
    ProductsModule,
    SearchModule,
    MongooseModule.forRoot(
      'mongodb+srv://davidl:PjfhdTgRXBHWC3PH@cluster0.qikgx.mongodb.net/nutrimeal?retryWrites=true&w=majority'
    ),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
