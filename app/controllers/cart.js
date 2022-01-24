import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CartController extends Controller {
  @service cart;

  get total() {
    return this.model.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
  }

  @action
  updateQuantity(item, event) {
    const quantity = event.target.value;

    item.quantity = Math.max(1, quantity);
  }

  @action
  increaseQuantity(item) {
    item.quantity += 1;
  }

  @action
  decreaseQuantity(item) {
    item.quantity = Math.max(1, item.quantity - 1);
  }
}
