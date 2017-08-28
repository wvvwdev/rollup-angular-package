// external
import { Injectable } from '@angular/core';

@Injectable()
export class StarterConfig {
  name: string;
};

@Injectable()
export class StarterService {
  private name: string;
  constructor(private starterConfig: StarterConfig) {
    this.name = starterConfig.name;
  }
}
