import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class HeaderComponent extends Component {
  @service cart;

  get cartQuantity() {
    return this.cart.itemList.reduce((quantity, item) => {
      return quantity + parseInt(item.quantity);
    }, 0);
  }
}
