import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelateAssetTabComponent } from './relate-asset-tab.component';

describe('RelateAssetTabComponent', () => {
  let component: RelateAssetTabComponent;
  let fixture: ComponentFixture<RelateAssetTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelateAssetTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelateAssetTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
