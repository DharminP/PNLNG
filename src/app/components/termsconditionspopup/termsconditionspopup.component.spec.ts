import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsconditionspopupComponent } from './termsconditionspopup.component';

describe('TermsconditionspopupComponent', () => {
  let component: TermsconditionspopupComponent;
  let fixture: ComponentFixture<TermsconditionspopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsconditionspopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermsconditionspopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
