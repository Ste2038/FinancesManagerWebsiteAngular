import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeseCategorieComponent } from './spese-categorie.component';

describe('SpeseCategorieComponent', () => {
  let component: SpeseCategorieComponent;
  let fixture: ComponentFixture<SpeseCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeseCategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeseCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
