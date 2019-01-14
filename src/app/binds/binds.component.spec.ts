import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindsComponent } from './binds.component';

describe('BindsComponent', () => {
  let component: BindsComponent;
  let fixture: ComponentFixture<BindsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
