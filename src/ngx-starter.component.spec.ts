// external
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing';

beforeAll(() => {
  TestBed.resetTestEnvironment();
  TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
});

import { StarterComponent } from './ngx-starter.component';

describe('AppComponent', () => {

  let nativeElement: any;
  let fixture: ComponentFixture<StarterComponent>;
  let comp: StarterComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StarterComponent
      ],
    }).compileComponents();
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(StarterComponent);
    nativeElement = fixture.debugElement.nativeElement;
    comp = fixture.componentInstance;
  });

  it('should create StarterComponent', async(() => {
    expect(comp).toBeTruthy();
  }));

  it(`should have as title 'starter works!'`, async(() => {
    expect(comp.title).toEqual('starter works!');
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('h1').textContent).toContain('starter works!');
  }));
});
