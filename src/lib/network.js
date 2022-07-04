// To make cordova modules work (vue thinks they're undefined)
/* eslint-disable */

import Ping from 'ping.js';

const p = new Ping();

export async function ping() {
  return p.ping('https://google.com')
    .then(() => true)
    .catch(() => false);
}

export function isCellConnection() {
  const cellConnections = [
    Connection.CELL,
    Connection.CELL_2G,
    Connection.CELL_3G,
    Connection.CELL_4G,
  ];

  return cellConnections.includes(navigator.connection.type);
}
