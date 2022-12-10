import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagewithtextComponent } from './imagewithtext.component';

describe('ImagewithtextComponent', () => {
  let component: ImagewithtextComponent;
  let fixture: ComponentFixture<ImagewithtextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagewithtextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagewithtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
