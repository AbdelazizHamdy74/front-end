import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractRelateTabsComponent } from './contract-relate-tabs.component';

describe('ContractRelateTabsComponent', () => {
  let component: ContractRelateTabsComponent;
  let fixture: ComponentFixture<ContractRelateTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractRelateTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractRelateTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
