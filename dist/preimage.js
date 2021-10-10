"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decryptHashes = decryptHashes;

require("cross-fetch/polyfill");

var rootUrl = 'https://preimagedb.appspot.com/keccak256/query';

function decryptHashes() {
  for (var _len = arguments.length, hashes = new Array(_len), _key = 0; _key < _len; _key++) {
    hashes[_key] = arguments[_key];
  }

  var trimmedHashes = hashes.map(function (hash) {
    return hash.slice(2);
  });
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  return fetch(rootUrl, {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(trimmedHashes)
  }).then(function (res) {
    return res.json();
  }).then(function (json) {
    return json.data;
  });
}