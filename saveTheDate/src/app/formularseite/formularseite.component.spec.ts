import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularseiteComponent } from './formularseite.component';

describe('FormularseiteComponent', () => {
  let component: FormularseiteComponent;
  let fixture: ComponentFixture<FormularseiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularseiteComponent]
    });
    fixture = TestBed.createComponent(FormularseiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
