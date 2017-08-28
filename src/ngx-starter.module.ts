// external
import { CommonModule } from '@angular/common';
import { Inject, ModuleWithProviders, NgModule, Optional } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// internal
import { StarterComponent } from './ngx-starter.component';
import { StarterConfig, StarterService } from './ngx-starter.service';

@NgModule({
  declarations: [
    StarterComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class StarterModule {
  static forRoot(@Optional() @Inject(StarterConfig) config?: StarterConfig): ModuleWithProviders {
    return {
      ngModule: StarterModule,
      providers: [
        StarterService,
        {provide: StarterConfig, useValue: config, multi: true}
      ]
    }
  }

  static forChild(config: any): ModuleWithProviders {
    return {
      ngModule: StarterModule,
      providers: [
        {provide: StarterConfig, useValue: config, multi: true}
      ]
    };
  }
}
