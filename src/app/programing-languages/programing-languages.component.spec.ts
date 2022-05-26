import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramingLanguagesComponent } from './programing-languages.component';

describe('ProgramingLanguagesComponent', () => {
  let component: ProgramingLanguagesComponent;
  let fixture: ComponentFixture<ProgramingLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramingLanguagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramingLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
