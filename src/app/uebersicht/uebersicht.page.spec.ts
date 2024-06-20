import {ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {UebersichtPage} from './uebersicht.page';

describe('UebersichtPage', () => {
  let component: UebersichtPage;
  let fixture: ComponentFixture<UebersichtPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UebersichtPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UebersichtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
