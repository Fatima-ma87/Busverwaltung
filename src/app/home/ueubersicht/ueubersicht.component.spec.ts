import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UeubersichtComponent } from './ueubersicht.component';

describe('UeubersichtComponent', () => {
  let component: UeubersichtComponent;
  let fixture: ComponentFixture<UeubersichtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UeubersichtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UeubersichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
