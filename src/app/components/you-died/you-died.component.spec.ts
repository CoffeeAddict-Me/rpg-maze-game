import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouDiedComponent } from './you-died.component';

describe('YouDiedComponent', () => {
  let component: YouDiedComponent;
  let fixture: ComponentFixture<YouDiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YouDiedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YouDiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
