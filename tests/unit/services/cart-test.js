import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | cart', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:cart');
    assert.ok(service);
  });

  test('addItem works', function (assert) {
    const service = this.owner.lookup('service:cart');
    assert.equal(service.itemList.length, 0, 'item list is empty');
    service.addItem({});
    assert.equal(service.itemList.length, 1, 'item list size increased by 1');
  });
});
