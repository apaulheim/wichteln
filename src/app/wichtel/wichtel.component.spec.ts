import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WichtelComponent } from './wichtel.component';

describe('WichtelComponent', () => {
  let component: WichtelComponent;
  let fixture: ComponentFixture<WichtelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WichtelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WichtelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
