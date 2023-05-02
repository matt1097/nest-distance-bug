import { Injectable, OnModuleInit } from '@nestjs/common';
import { M1Service } from 'src/module1/m1.service';

@Injectable()
export class M2Service implements OnModuleInit {
  constructor(private m1Service: M1Service) {
    console.log(`${M2Service.name} constructor called`);
  }

  onModuleInit() {
    console.log(`${M2Service.name} onModuleInit called`);
    console.log('Is M1Service already inited: ', this.m1Service.isModuleInited);
  }
}
