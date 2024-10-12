import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubNumberComponent } from './sub-number.component';

describe('SubNumberComponent', () => {
  let component: SubNumberComponent;
  let fixture: ComponentFixture<SubNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
