import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFeature2Component } from './content-feature2.component';

describe('ContentFeature2Component', () => {
  let component: ContentFeature2Component;
  let fixture: ComponentFixture<ContentFeature2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentFeature2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentFeature2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
