class CategoryModel {
    constructor(id, type_id, title, src_image) {
      this.id = id;
      this.type_id = type_id;
      this.title = title;
      this.src_image = src_image;
    }
}

module.exports = CategoryModel;