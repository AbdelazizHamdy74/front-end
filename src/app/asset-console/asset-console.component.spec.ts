import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetConsoleComponent } from './asset-console.component';

describe('AssetConsoleComponent', () => {
  let component: AssetConsoleComponent;
  let fixture: ComponentFixture<AssetConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetConsoleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
