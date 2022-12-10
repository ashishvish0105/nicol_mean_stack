import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideImageComponent } from './slide-image.component';

describe('SlideImageComponent', () => {
  let component: SlideImageComponent;
  let fixture: ComponentFixture<SlideImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
