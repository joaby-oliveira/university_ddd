import { Conta, Pagamento, Produto } from "../../canteen/domain";

// Builder para Conta
export class ContaBuilder {
  public id_conta!: number;
  public id_aluno!: number;
  public numero_conta!: number;
  public data_criação!: Date;

  setIdConta(id_conta: number): ContaBuilder {
    this.id_conta = id_conta;
    return this;
  }

  setIdAluno(id_aluno: number): ContaBuilder {
    this.id_aluno = id_aluno;
    return this;
  }

  setNumeroConta(numero_conta: number): ContaBuilder {
    this.numero_conta = numero_conta;
    return this;
  }

  setDataCriacao(data_criação: Date): ContaBuilder {
    this.data_criação = data_criação;
    return this;
  }

  build(): Conta {
    return new Conta({
      id_conta: this.id_conta,
      id_aluno: this.id_aluno,
      numero_conta: this.numero_conta,
      data_criação: this.data_criação,
    });
  }
}

// Builder para Pagamento
export class PagamentoBuilder {
  public id_pagamento!: number;
  public id_conta!: number;
  public valor!: number;
  public data_pagamento!: Date;

  setIdPagamento(id_pagamento: number): PagamentoBuilder {
    this.id_pagamento = id_pagamento;
    return this;
  }

  setIdConta(id_conta: number): PagamentoBuilder {
    this.id_conta = id_conta;
    return this;
  }

  setValor(valor: number): PagamentoBuilder {
    this.valor = valor;
    return this;
  }

  setDataPagamento(data_pagamento: Date): PagamentoBuilder {
    this.data_pagamento = data_pagamento;
    return this;
  }

  build(): Pagamento {
    return new Pagamento({
      id_pagamento: this.id_pagamento,
      id_conta: this.id_conta,
      valor: this.valor,
      data_pagamento: this.data_pagamento,
    });
  }
}

// Builder para Produto
export class ProdutoBuilder {
  public produto_id!: number;
  public valor!: number;
  public descricao!: string;

  setProdutoId(produto_id: number): ProdutoBuilder {
    this.produto_id = produto_id;
    return this;
  }

  setValor(valor: number): ProdutoBuilder {
    this.valor = valor;
    return this;
  }

  setDescricao(descricao: string): ProdutoBuilder {
    this.descricao = descricao;
    return this;
  }

  build(): Produto {
    return new Produto({
      produto_id: this.produto_id,
      valor: this.valor,
      descricao: this.descricao,
    });
  }
}
