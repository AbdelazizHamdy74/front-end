import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelateGeneralTabComponent } from './relate-general-tab.component';

describe('RelateGeneralTabComponent', () => {
  let component: RelateGeneralTabComponent;
  let fixture: ComponentFixture<RelateGeneralTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelateGeneralTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelateGeneralTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
