import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportePeliculaComponent } from './reporte-pelicula.component';

describe('ReportePeliculaComponent', () => {
  let component: ReportePeliculaComponent;
  let fixture: ComponentFixture<ReportePeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportePeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportePeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
