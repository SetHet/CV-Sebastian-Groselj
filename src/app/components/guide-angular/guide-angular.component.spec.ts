import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideAngularComponent } from './guide-angular.component';

describe('GuideAngularComponent', () => {
  let component: GuideAngularComponent;
  let fixture: ComponentFixture<GuideAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuideAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
