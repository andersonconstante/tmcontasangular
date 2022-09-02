import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarContasComponent } from './adicionar-contas.component';

describe('AdicionarContasComponent', () => {
  let component: AdicionarContasComponent;
  let fixture: ComponentFixture<AdicionarContasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarContasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarContasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
