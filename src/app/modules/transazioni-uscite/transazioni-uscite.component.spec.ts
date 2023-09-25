import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransazioniUsciteComponent } from './transazioni-uscite.component';

describe('TransazioniUsciteComponent', () => {
  let component: TransazioniUsciteComponent;
  let fixture: ComponentFixture<TransazioniUsciteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransazioniUsciteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransazioniUsciteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
