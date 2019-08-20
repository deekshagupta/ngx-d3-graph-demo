import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxD3GraphsComponent } from './ngx-d3-graphs.component';

describe('NgxD3GraphsComponent', () => {
  let component: NgxD3GraphsComponent;
  let fixture: ComponentFixture<NgxD3GraphsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxD3GraphsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxD3GraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
