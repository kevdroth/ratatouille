import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonRecetaComponent } from './skeleton-receta.component';

describe('SkeletonRecetaComponent', () => {
  let component: SkeletonRecetaComponent;
  let fixture: ComponentFixture<SkeletonRecetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonRecetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
