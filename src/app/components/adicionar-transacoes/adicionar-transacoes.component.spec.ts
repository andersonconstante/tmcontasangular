import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarTransacoesComponent } from './adicionar-transacoes.component';

describe('AdicionarTransacoesComponent', () => {
  let component: AdicionarTransacoesComponent;
  let fixture: ComponentFixture<AdicionarTransacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarTransacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarTransacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
