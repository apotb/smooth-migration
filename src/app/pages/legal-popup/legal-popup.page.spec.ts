import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LegalPopupPage } from './legal-popup.page';

describe('LegalPopupPage', () => {
  let component: LegalPopupPage;
  let fixture: ComponentFixture<LegalPopupPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalPopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
