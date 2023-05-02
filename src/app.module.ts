import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { Module1Module } from './module1/module1.module';
import { Module2Module } from './module2/module2.module';

@Module({
  imports: [Module2Module, Module1Module],
  providers: [AppService],
})
export class AppModule {}
