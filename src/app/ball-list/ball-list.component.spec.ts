import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BallListComponent } from './ball-list.component';

describe('BallListComponent', () => {
  let component: BallListComponent;
  let fixture: ComponentFixture<BallListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
