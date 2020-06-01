import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonEpisodesListComponent } from './season-episodes-list.component';

describe('SeasonEpisodesListComponent', () => {
  let component: SeasonEpisodesListComponent;
  let fixture: ComponentFixture<SeasonEpisodesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonEpisodesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonEpisodesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
