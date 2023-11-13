import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAdmComponent } from './layout-adm.component';

describe('LayoutAdmComponent', () => {
  let component: LayoutAdmComponent;
  let fixture: ComponentFixture<LayoutAdmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutAdmComponent]
    });
    fixture = TestBed.createComponent(LayoutAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
