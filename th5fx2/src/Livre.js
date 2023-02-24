export default class Livre {
  constructor(id, titre, qtestock, prix) {
    this._id = id;
    this._qtestock = qtestock;
    this._titre = titre;
    this._prix = prix;
  }
  get id() {
    return this._id;
  }
  get titre() {
    return this._titre;
  }
  get qtestock() {
    return this._qtestock;
  }
  get prix() {
    return this._prix;
  }

  pourAfficher() {
    return `--> ${this._titre}, stock: ${this._qtestock}, prix: ${this._prix}`;
  }
  pourAugmenter() {
    this._qtestock += 1;
  }
  pourDiminuer() {
    this._qtestock -= 1;
  }
}
