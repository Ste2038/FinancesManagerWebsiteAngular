import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsMeseComponent } from './savings-mese.component';

describe('SavingsMeseComponent', () => {
  let component: SavingsMeseComponent;
  let fixture: ComponentFixture<SavingsMeseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingsMeseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavingsMeseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
