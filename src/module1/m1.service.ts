import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class M1Service implements OnModuleInit {
  public isModuleInited = false;
  constructor() {
    console.log(`${M1Service.name} constructor called`);
  }

  onModuleInit() {
    console.log(`${M1Service.name} onModuleInit called`);
    this.isModuleInited = true;
  }
}
