import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFeatureComponent } from './content-feature.component';

describe('ContentFeatureComponent', () => {
  let component: ContentFeatureComponent;
  let fixture: ComponentFixture<ContentFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentFeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
