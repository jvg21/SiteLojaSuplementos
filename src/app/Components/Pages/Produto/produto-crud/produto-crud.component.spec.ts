import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoCrudComponent } from './produto-crud.component';

describe('ProdutoCrudComponent', () => {
  let component: ProdutoCrudComponent;
  let fixture: ComponentFixture<ProdutoCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoCrudComponent]
    });
    fixture = TestBed.createComponent(ProdutoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
