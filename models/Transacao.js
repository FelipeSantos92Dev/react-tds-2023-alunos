export default class Transacao {
  constructor(descricao, valor, tipo) {
    this.id = this.gerarId();
    this.descricao = descricao;
    this.valor = valor;
    this.tipo = tipo;
  }

  gerarId() {
    return Math.floor(Math.random() * 1000);
  }
}
