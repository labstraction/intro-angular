import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokePaginatorComponent } from './poke-paginator.component';

describe('PokePaginatorComponent', () => {
  let component: PokePaginatorComponent;
  let fixture: ComponentFixture<PokePaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokePaginatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokePaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
