import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoListComponent } from './pedido-list.component';

describe('PedidoListComponent', () => {
  let component: PedidoListComponent;
  let fixture: ComponentFixture<PedidoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidoListComponent]
    });
    fixture = TestBed.createComponent(PedidoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
