import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingcomponentComponent } from './bindingcomponent.component';

describe('BindingcomponentComponent', () => {
  let component: BindingcomponentComponent;
  let fixture: ComponentFixture<BindingcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
