import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetUpdateComponent } from './asset-update.component';

describe('AssetUpdateComponent', () => {
  let component: AssetUpdateComponent;
  let fixture: ComponentFixture<AssetUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetUpdateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AssetUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
