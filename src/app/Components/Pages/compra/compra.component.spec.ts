import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraComponent } from './compra.component';

describe('CompraComponent', () => {
  let component: CompraComponent;
  let fixture: ComponentFixture<CompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompraComponent]
    });
    fixture = TestBed.createComponent(CompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
