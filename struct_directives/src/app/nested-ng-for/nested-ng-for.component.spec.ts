import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedNgForComponent } from './nested-ng-for.component';

describe('NestedNgForComponent', () => {
  let component: NestedNgForComponent;
  let fixture: ComponentFixture<NestedNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedNgForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
