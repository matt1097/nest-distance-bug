import { Module } from '@nestjs/common';
import { M2Service } from './m2.service';
import { Module1Module } from 'src/module1/module1.module';

@Module({
  imports: [Module1Module],
  providers: [M2Service],
  exports: [M2Service],
})
export class Module2Module {}
