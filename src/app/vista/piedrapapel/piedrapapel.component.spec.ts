import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiedrapapelComponent } from './piedrapapel.component';

describe('PiedrapapelComponent', () => {
  let component: PiedrapapelComponent;
  let fixture: ComponentFixture<PiedrapapelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiedrapapelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiedrapapelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
