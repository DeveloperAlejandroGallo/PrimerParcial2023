import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaBorrarComponent } from './pelicula-borrar.component';

describe('PeliculaBorrarComponent', () => {
  let component: PeliculaBorrarComponent;
  let fixture: ComponentFixture<PeliculaBorrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculaBorrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeliculaBorrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
