import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KartenansichtseiteComponent } from './kartenansichtseite.component';

describe('KartenansichtseiteComponent', () => {
  let component: KartenansichtseiteComponent;
  let fixture: ComponentFixture<KartenansichtseiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KartenansichtseiteComponent]
    });
    fixture = TestBed.createComponent(KartenansichtseiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
