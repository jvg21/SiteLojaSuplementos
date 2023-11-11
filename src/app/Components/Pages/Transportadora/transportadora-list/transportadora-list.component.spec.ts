import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportadoraListComponent } from './transportadora-list.component';

describe('TransportadoraListComponent', () => {
  let component: TransportadoraListComponent;
  let fixture: ComponentFixture<TransportadoraListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransportadoraListComponent]
    });
    fixture = TestBed.createComponent(TransportadoraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
