"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  setupENS: true,
  utils: true,
  ethers: true
};
exports.setupENS = setupENS;
Object.defineProperty(exports, "utils", {
  enumerable: true,
  get: function get() {
    return _ethers.utils;
  }
});
Object.defineProperty(exports, "ethers", {
  enumerable: true,
  get: function get() {
    return _ethers.ethers;
  }
});

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _web = require("./web3");

Object.keys(_web).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _web[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _web[key];
    }
  });
});

var _ens = require("./ens.js");

var _registrar = require("./registrar");

Object.keys(_registrar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _registrar[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _registrar[key];
    }
  });
});

var _ethers = require("ethers");

var _ens2 = require("./ens");

Object.keys(_ens2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ens2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ens2[key];
    }
  });
});

var _interfaces = require("./constants/interfaces");

Object.keys(_interfaces).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _interfaces[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _interfaces[key];
    }
  });
});

var _utils = require("./utils");

Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _utils[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _utils[key];
    }
  });
});

var _contracts = require("./contracts");

Object.keys(_contracts).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _contracts[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _contracts[key];
    }
  });
});

function setupENS() {
  return _setupENS.apply(this, arguments);
}

function _setupENS() {
  _setupENS = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var _ref,
        customProvider,
        ensAddress,
        reloadOnAccountsChange,
        enforceReadOnly,
        enforceReload,
        infura,
        _yield$setupWeb,
        provider,
        networkId,
        ens,
        registrar,
        network,
        _args = arguments;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, customProvider = _ref.customProvider, ensAddress = _ref.ensAddress, reloadOnAccountsChange = _ref.reloadOnAccountsChange, enforceReadOnly = _ref.enforceReadOnly, enforceReload = _ref.enforceReload, infura = _ref.infura;
            _context.next = 3;
            return (0, _web.setupWeb3)({
              customProvider: customProvider,
              reloadOnAccountsChange: reloadOnAccountsChange,
              enforceReadOnly: enforceReadOnly,
              enforceReload: enforceReload,
              infura: infura
            });

          case 3:
            _yield$setupWeb = _context.sent;
            provider = _yield$setupWeb.provider;
            _context.next = 7;
            return (0, _web.getNetworkId)();

          case 7:
            networkId = _context.sent;
            ens = new _ens.ENS({
              provider: provider,
              networkId: networkId,
              registryAddress: ensAddress
            });
            _context.next = 11;
            return (0, _registrar.setupRegistrar)(ens.registryAddress);

          case 11:
            registrar = _context.sent;
            _context.next = 14;
            return (0, _web.getNetwork)();

          case 14:
            network = _context.sent;
            return _context.abrupt("return", {
              ens: ens,
              registrar: registrar,
              provider: customProvider,
              network: network,
              providerObject: provider
            });

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _setupENS.apply(this, arguments);
}