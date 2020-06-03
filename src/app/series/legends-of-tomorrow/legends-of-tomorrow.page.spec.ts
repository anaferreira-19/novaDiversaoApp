import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LegendsOfTomorrowPage } from './legends-of-tomorrow.page';

describe('LegendsOfTomorrowPage', () => {
  let component: LegendsOfTomorrowPage;
  let fixture: ComponentFixture<LegendsOfTomorrowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegendsOfTomorrowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LegendsOfTomorrowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
