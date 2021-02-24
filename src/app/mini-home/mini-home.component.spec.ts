import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniHomeComponent } from './mini-home.component';

describe('MiniHomeComponent', () => {
  let component: MiniHomeComponent;
  let fixture: ComponentFixture<MiniHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
