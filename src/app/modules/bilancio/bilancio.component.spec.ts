import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilancioComponent } from './bilancio.component';

describe('BilancioComponent', () => {
  let component: BilancioComponent;
  let fixture: ComponentFixture<BilancioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilancioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BilancioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
