import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedTabsComponent } from './related-tabs.component';

describe('RelatedTabsComponent', () => {
  let component: RelatedTabsComponent;
  let fixture: ComponentFixture<RelatedTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatedTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatedTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
