import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitacionComponentComponent } from './habitacion-component.component';

describe('HabitacionComponentComponent', () => {
  let component: HabitacionComponentComponent;
  let fixture: ComponentFixture<HabitacionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabitacionComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabitacionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
