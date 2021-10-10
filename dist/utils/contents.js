"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodeContenthash = decodeContenthash;
exports.validateContent = validateContent;
exports.isValidContenthash = isValidContenthash;
exports.getProtocolType = getProtocolType;
exports.encodeContenthash = encodeContenthash;

var _contentHash = _interopRequireDefault(require("@ensdomains/content-hash"));

var _ethers = require("ethers");

var supportedCodecs = ['ipns-ns', 'ipfs-ns', 'swarm-ns', 'onion', 'onion3', 'skynet-ns', 'arweave-ns'];

function matchProtocol(text) {
  return text.match(/^(ipfs|sia|ipns|bzz|onion|onion3|arweave):\/\/(.*)/) || text.match(/\/(ipfs)\/(.*)/) || text.match(/\/(ipns)\/(.*)/);
}

function decodeContenthash(encoded) {
  var decoded, protocolType, error;

  if (!encoded || encoded === '0x') {
    return {};
  }

  if (encoded.error) {
    return {
      protocolType: null,
      decoded: encoded.error
    };
  } else if (encoded === false) {
    return {
      protocolType: null,
      decoded: 'invalid value'
    };
  }

  if (encoded) {
    try {
      decoded = _contentHash["default"].decode(encoded);

      var codec = _contentHash["default"].getCodec(encoded);

      if (codec === 'ipfs-ns') {
        protocolType = 'ipfs';
      } else if (codec === 'ipns-ns') {
        protocolType = 'ipns';
      } else if (codec === 'swarm-ns') {
        protocolType = 'bzz';
      } else if (codec === 'onion') {
        protocolType = 'onion';
      } else if (codec === 'onion3') {
        protocolType = 'onion3';
      } else if (codec === 'skynet-ns') {
        protocolType = 'sia';
      } else if (codec === 'arweave-ns') {
        protocolType = 'arweave';
      } else {
        decoded = encoded;
      }
    } catch (e) {
      error = e.message;
    }
  }

  return {
    protocolType: protocolType,
    decoded: decoded,
    error: error
  };
}

function validateContent(encoded) {
  return _contentHash["default"].isHashOfType(encoded, _contentHash["default"].Types.ipfs) || _contentHash["default"].isHashOfType(encoded, _contentHash["default"].Types.swarm);
}

function isValidContenthash(encoded) {
  try {
    var codec = _contentHash["default"].getCodec(encoded);

    return _ethers.utils.isHexString(encoded) && supportedCodecs.includes(codec);
  } catch (e) {
    console.log(e);
  }
}

function getProtocolType(encoded) {
  var protocolType, decoded;

  try {
    var matched = matchProtocol(encoded);

    if (matched) {
      protocolType = matched[1];
      decoded = matched[2];
    }

    return {
      protocolType: protocolType,
      decoded: decoded
    };
  } catch (e) {
    console.log(e);
  }
}

function encodeContenthash(text) {
  var content, contentType;
  var encoded = false;
  var error;

  if (!!text) {
    var matched = matchProtocol(text);

    if (matched) {
      contentType = matched[1];
      content = matched[2];
    }

    try {
      if (contentType === 'ipfs') {
        if (content.length >= 4) {
          encoded = '0x' + _contentHash["default"].encode('ipfs-ns', content);
        }
      } else if (contentType === 'ipns') {
        encoded = '0x' + _contentHash["default"].encode('ipns-ns', content);
      } else if (contentType === 'bzz') {
        if (content.length >= 4) {
          encoded = '0x' + _contentHash["default"].fromSwarm(content);
        }
      } else if (contentType === 'onion') {
        if (content.length == 16) {
          encoded = '0x' + _contentHash["default"].encode('onion', content);
        }
      } else if (contentType === 'onion3') {
        if (content.length == 56) {
          encoded = '0x' + _contentHash["default"].encode('onion3', content);
        }
      } else if (contentType === 'sia') {
        if (content.length == 46) {
          encoded = '0x' + _contentHash["default"].encode('skynet-ns', content);
        }
      } else if (contentType === 'arweave') {
        if (content.length == 43) {
          encoded = '0x' + _contentHash["default"].encode('arweave-ns', content);
        }
      } else {
        console.warn('Unsupported protocol or invalid value', {
          contentType: contentType,
          text: text
        });
      }
    } catch (err) {
      var errorMessage = 'Error encoding content hash';
      console.warn(errorMessage, {
        text: text,
        encoded: encoded
      });
      error = errorMessage; //throw 'Error encoding content hash'
    }
  }

  return {
    encoded: encoded,
    error: error
  };
}