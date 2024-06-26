import {ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {KatalogePage} from './kataloge.page';

describe('KatalogePage', () => {
  let component: KatalogePage;
  let fixture: ComponentFixture<KatalogePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KatalogePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KatalogePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
