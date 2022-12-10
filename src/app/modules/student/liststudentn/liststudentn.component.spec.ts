import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListstudentnComponent } from './liststudentn.component';

describe('ListstudentnComponent', () => {
  let component: ListstudentnComponent;
  let fixture: ComponentFixture<ListstudentnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListstudentnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListstudentnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
