const assert = require('bsert');
const {Client} = require('bcurl');

/**
 * Explorer Client
 * @extends {bcurl.Client}
 */

export class ExplorerClient extends Client {

  blocks(fromTs, toTs) {
    assert(typeof fromTs === 'number');
    assert(typeof toTs === 'number');

    return this.get('/blocks?fromTs=' + fromTs + '&toTs=' + toTs);
  }

  addressTransactions(id) {
    return this.get('/addresses/' + id + '/transactions');
  }

  transaction(id) {
    return this.get('/transactions/' + id);
  }
}
