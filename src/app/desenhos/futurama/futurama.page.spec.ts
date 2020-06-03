import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FuturamaPage } from './futurama.page';

describe('FuturamaPage', () => {
  let component: FuturamaPage;
  let fixture: ComponentFixture<FuturamaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuturamaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FuturamaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
