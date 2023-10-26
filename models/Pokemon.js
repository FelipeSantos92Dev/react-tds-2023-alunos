export default class Pokemon {
  constructor(id, name, types, image) {
    this.id = id;
    this.name = name;
    this.types = types;
    this.image = image;
    this.created = true;
  }
}
