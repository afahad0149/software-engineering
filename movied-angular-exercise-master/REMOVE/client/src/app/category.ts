export class Category {
  'id': number;
  'name': string;

  static parse(data) {
    return Object.assign(new Category(), data);
  }

}
