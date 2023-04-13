// import * as Stomp from 'stompjs';
import UI5Object from 'sap/ui/base/Object';

import { Client } from '@stomp/stompjs';

/**
 * @namespace my.libraries.lib1
 */

export default class Lib1Stomp extends UI5Object {
  client: Client | undefined;

  constructor() {
    super();
    this.client = new Client({});
  }
}
