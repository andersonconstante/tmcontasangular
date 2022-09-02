export class Conta {
    public constructor(init?: Partial<Conta>) {
      Object.assign(this, init);
    }
    id!: number;
    nomeCliente!: string;
    nomeBanco!: string;
    numeroBanco!: number;
    numeroAgencia!: number;
    numeroConta!: number;
  }