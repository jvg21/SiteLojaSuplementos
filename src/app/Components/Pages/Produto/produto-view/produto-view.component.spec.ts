import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoViewComponent } from './produto-view.component';

describe('ProdutoViewComponent', () => {
  let component: ProdutoViewComponent;
  let fixture: ComponentFixture<ProdutoViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoViewComponent]
    });
    fixture = TestBed.createComponent(ProdutoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
