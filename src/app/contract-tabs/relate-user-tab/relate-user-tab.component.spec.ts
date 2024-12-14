import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelateUserTabComponent } from './relate-user-tab.component';

describe('RelateUserTabComponent', () => {
  let component: RelateUserTabComponent;
  let fixture: ComponentFixture<RelateUserTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelateUserTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelateUserTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
