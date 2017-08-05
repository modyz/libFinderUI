import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GemDetailsComponent } from './gem-details.component';

describe('GemDetailsComponent', () => {
  let component: GemDetailsComponent;
  let fixture: ComponentFixture<GemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
