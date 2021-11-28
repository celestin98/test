import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLAnguageComponent } from './select-language.component';

describe('SelectLAnguageComponent', () => {
  let component: SelectLAnguageComponent;
  let fixture: ComponentFixture<SelectLAnguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectLAnguageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLAnguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
