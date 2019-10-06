import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarestrenoComponent } from './listarestreno.component';

describe('ListarestrenoComponent', () => {
  let component: ListarestrenoComponent;
  let fixture: ComponentFixture<ListarestrenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarestrenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarestrenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
