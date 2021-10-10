"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEtherScanAddr = getEtherScanAddr;
exports.getEnsStartBlock = getEnsStartBlock;
exports.validateName = validateName;
exports.isLabelValid = isLabelValid;
Object.defineProperty(exports, "isEncodedLabelhash", {
  enumerable: true,
  get: function get() {
    return _labelhash.isEncodedLabelhash;
  }
});
Object.defineProperty(exports, "isDecrypted", {
  enumerable: true,
  get: function get() {
    return _labelhash.isDecrypted;
  }
});
Object.defineProperty(exports, "decodeLabelhash", {
  enumerable: true,
  get: function get() {
    return _labelhash.decodeLabelhash;
  }
});
Object.defineProperty(exports, "encodeLabelhash", {
  enumerable: true,
  get: function get() {
    return _labelhash.encodeLabelhash;
  }
});
Object.defineProperty(exports, "labelhash", {
  enumerable: true,
  get: function get() {
    return _labelhash.labelhash;
  }
});
Object.defineProperty(exports, "encodeContenthash", {
  enumerable: true,
  get: function get() {
    return _contents.encodeContenthash;
  }
});
Object.defineProperty(exports, "decodeContenthash", {
  enumerable: true,
  get: function get() {
    return _contents.decodeContenthash;
  }
});
Object.defineProperty(exports, "isValidContenthash", {
  enumerable: true,
  get: function get() {
    return _contents.isValidContenthash;
  }
});
Object.defineProperty(exports, "getProtocolType", {
  enumerable: true,
  get: function get() {
    return _contents.getProtocolType;
  }
});
Object.defineProperty(exports, "namehash", {
  enumerable: true,
  get: function get() {
    return _namehash.namehash;
  }
});
exports.parseSearchTerm = exports.mergeLabels = exports.checkLabels = exports.emptyAddress = exports.uniq = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _web = require("../web3");

var _address_utils = require("@0xproject/utils/lib/src/address_utils");

var _labelhash = require("./labelhash");

var _contents = require("./contents");

var _ethEnsNamehash = require("eth-ens-namehash");

var _namehash = require("./namehash");

//import { checkLabelHash } from '../updaters/preImageDB'
var uniq = function uniq(a, param) {
  return a.filter(function (item, pos) {
    return a.map(function (mapItem) {
      return mapItem[param];
    }).indexOf(item[param]) === pos;
  });
};

exports.uniq = uniq;

var checkLabels = function checkLabels() {
  for (var _len = arguments.length, labelHashes = new Array(_len), _key = 0; _key < _len; _key++) {
    labelHashes[_key] = arguments[_key];
  }

  return labelHashes.map(function (hash) {
    return null;
  });
};

exports.checkLabels = checkLabels;

function getEtherScanAddr() {
  return _getEtherScanAddr.apply(this, arguments);
}

function _getEtherScanAddr() {
  _getEtherScanAddr = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var networkId;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _web.getNetworkId)();

          case 2:
            networkId = _context.sent;
            _context.t0 = networkId;
            _context.next = _context.t0 === 1 ? 6 : _context.t0 === '1' ? 6 : _context.t0 === 3 ? 7 : _context.t0 === '3' ? 7 : _context.t0 === 4 ? 8 : _context.t0 === '4' ? 8 : 9;
            break;

          case 6:
            return _context.abrupt("return", 'https://etherscan.io/');

          case 7:
            return _context.abrupt("return", 'https://ropsten.etherscan.io/');

          case 8:
            return _context.abrupt("return", 'https://rinkeby.etherscan.io/');

          case 9:
            return _context.abrupt("return", 'https://etherscan.io/');

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getEtherScanAddr.apply(this, arguments);
}

function getEnsStartBlock() {
  return _getEnsStartBlock.apply(this, arguments);
} // export const checkLabels = (...labelHashes) =>
//   labelHashes.map(labelHash => checkLabelHash(labelHash) || null)


function _getEnsStartBlock() {
  _getEnsStartBlock = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var networkId;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _web.getNetworkId)();

          case 2:
            networkId = _context2.sent;
            _context2.t0 = networkId;
            _context2.next = _context2.t0 === 1 ? 6 : _context2.t0 === '1' ? 6 : _context2.t0 === 3 ? 7 : _context2.t0 === '3' ? 7 : 8;
            break;

          case 6:
            return _context2.abrupt("return", 3327417);

          case 7:
            return _context2.abrupt("return", 25409);

          case 8:
            return _context2.abrupt("return", 0);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getEnsStartBlock.apply(this, arguments);
}

var mergeLabels = function mergeLabels(labels1, labels2) {
  return labels1.map(function (label, index) {
    return label ? label : labels2[index];
  });
};

exports.mergeLabels = mergeLabels;

function validateName(name) {
  var nameArray = name.split('.');
  var hasEmptyLabels = nameArray.filter(function (e) {
    return e.length < 1;
  }).length > 0;
  if (hasEmptyLabels) throw new Error('Domain cannot have empty labels');
  var normalizedArray = nameArray.map(function (label) {
    if (label === '[root]') {
      return label;
    } else {
      return (0, _labelhash.isEncodedLabelhash)(label) ? label : (0, _ethEnsNamehash.normalize)(label);
    }
  });

  try {
    return normalizedArray.join('.');
  } catch (e) {
    throw e;
  }
}

function isLabelValid(name) {
  try {
    validateName(name);

    if (name.indexOf('.') === -1) {
      return true;
    }
  } catch (e) {
    console.log(e);
    return false;
  }
}

var parseSearchTerm = function parseSearchTerm(term, validTld) {
  var regex = /[^.]+$/;

  try {
    validateName(term);
  } catch (e) {
    return 'invalid';
  }

  if (term.indexOf('.') !== -1) {
    var termArray = term.split('.');
    var tld = term.match(regex) ? term.match(regex)[0] : '';

    if (validTld) {
      if (tld === 'eth' && termArray[termArray.length - 2].length < 3) {
        return 'short';
      }

      return 'supported';
    }

    return 'unsupported';
  } else if (_address_utils.addressUtils.isAddress(term)) {
    return 'address';
  } else {
    //check if the search term is actually a tld
    if (validTld) {
      return 'tld';
    }

    return 'search';
  }
};

exports.parseSearchTerm = parseSearchTerm;
var emptyAddress = '0x0000000000000000000000000000000000000000';
exports.emptyAddress = emptyAddress;