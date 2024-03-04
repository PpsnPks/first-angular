import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllPlayerComponent } from './show-all-player.component';

describe('ShowAllPlayerComponent', () => {
  let component: ShowAllPlayerComponent;
  let fixture: ComponentFixture<ShowAllPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowAllPlayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowAllPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
