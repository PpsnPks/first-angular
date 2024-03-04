import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiverTeamComponent } from './liver-team.component';

describe('LiverTeamComponent', () => {
  let component: LiverTeamComponent;
  let fixture: ComponentFixture<LiverTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LiverTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiverTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
