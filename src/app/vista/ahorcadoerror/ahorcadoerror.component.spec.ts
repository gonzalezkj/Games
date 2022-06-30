import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorcadoerrorComponent } from './ahorcadoerror.component';

describe('AhorcadoerrorComponent', () => {
  let component: AhorcadoerrorComponent;
  let fixture: ComponentFixture<AhorcadoerrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhorcadoerrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AhorcadoerrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
