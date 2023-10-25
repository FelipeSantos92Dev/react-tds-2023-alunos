export default class ListaPokemon {
  constructor() {
    this.lista = [];
  }

  add(pokemon) {
    this.lista.push(pokemon);
  }

  fill(lista) {
    this.lista = this.lista.concat(lista);
    this.unique();
  }

  // Remove duplicates
  unique() {
    this.lista = this.lista.filter(
      (pokemon, index, self) =>
        index === self.findIndex((p) => p.name === pokemon.name)
    );
  }

  getAll() {
    return this.lista;
  }
}
