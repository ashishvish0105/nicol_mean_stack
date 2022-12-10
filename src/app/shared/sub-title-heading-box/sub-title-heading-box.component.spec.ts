import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTitleHeadingBoxComponent } from './sub-title-heading-box.component';

describe('SubTitleHeadingBoxComponent', () => {
  let component: SubTitleHeadingBoxComponent;
  let fixture: ComponentFixture<SubTitleHeadingBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubTitleHeadingBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubTitleHeadingBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
