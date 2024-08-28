import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherArticlesComponent } from './publisher-articles.component';

describe('PublisherArticlesComponent', () => {
  let component: PublisherArticlesComponent;
  let fixture: ComponentFixture<PublisherArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublisherArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
