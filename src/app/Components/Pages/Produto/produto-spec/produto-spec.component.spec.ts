import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoSpecComponent } from './produto-spec.component';

describe('ProdutoSpecComponent', () => {
  let component: ProdutoSpecComponent;
  let fixture: ComponentFixture<ProdutoSpecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoSpecComponent]
    });
    fixture = TestBed.createComponent(ProdutoSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
