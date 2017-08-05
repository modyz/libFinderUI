import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGemComponent } from './add-gem.component';

describe('AddGemComponent', () => {
  let component: AddGemComponent;
  let fixture: ComponentFixture<AddGemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
