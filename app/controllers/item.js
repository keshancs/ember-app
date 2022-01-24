import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ItemController extends Controller {
  @tracked color = this.model.colors[0].color;

  get productImage() {
    return this.model.colors.find((colorData) => colorData.color === this.color)
      .image;
  }

  @action
  changeColor(newColor) {
    this.color = newColor;
  }
}
