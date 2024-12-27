import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleFilmsComponent } from './title-films.component';

describe('TitleFilmsComponent', () => {
  let component: TitleFilmsComponent;
  let fixture: ComponentFixture<TitleFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleFilmsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
