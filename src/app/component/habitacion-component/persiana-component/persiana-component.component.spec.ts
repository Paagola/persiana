import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersianaComponentComponent } from './persiana-component.component';

describe('PersianaComponentComponent', () => {
  let component: PersianaComponentComponent;
  let fixture: ComponentFixture<PersianaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersianaComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersianaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
