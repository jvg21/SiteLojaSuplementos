import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCadastroComponent } from './update-cadastro.component';

describe('UpdateCadastroComponent', () => {
  let component: UpdateCadastroComponent;
  let fixture: ComponentFixture<UpdateCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCadastroComponent]
    });
    fixture = TestBed.createComponent(UpdateCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
