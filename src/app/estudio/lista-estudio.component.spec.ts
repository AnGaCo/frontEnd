import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEstudioComponent } from './lista-estudio.component';

describe('ListaEstudioComponent', () => {
  let component: ListaEstudioComponent;
  let fixture: ComponentFixture<ListaEstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEstudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
