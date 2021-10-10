"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTestRegistrarContract = getTestRegistrarContract;
exports.getReverseRegistrarContract = getReverseRegistrarContract;
exports.getENSContract = getENSContract;
exports.getResolverContract = getResolverContract;
exports.getOldResolverContract = getOldResolverContract;
exports.getDnsRegistrarContract = getDnsRegistrarContract;
exports.getOldDnsRegistrarContract = getOldDnsRegistrarContract;
exports.getPermanentRegistrarContract = getPermanentRegistrarContract;
exports.getPermanentRegistrarControllerContract = getPermanentRegistrarControllerContract;
exports.getLegacyAuctionContract = getLegacyAuctionContract;
exports.getDeedContract = getDeedContract;
exports.getBulkRenewalContract = getBulkRenewalContract;

var _ethers = require("ethers");

var _ensContracts = require("@ensdomains/ens-contracts");

var _PublicResolver = require("@ensdomains/contracts/abis/ens-022/PublicResolver.json");

var _DNSRegistrar = require("@ensdomains/contracts/abis/dnsregistrar/DNSRegistrar.json");

var _HashRegistrar = require("@ensdomains/contracts/abis/ens/HashRegistrar");

var _Deed = require("@ensdomains/contracts/abis/ens/Deed");

function getReverseRegistrarContract(_ref) {
  var address = _ref.address,
      provider = _ref.provider;
  return new _ethers.Contract(address, _ensContracts.ReverseRegistrar, provider);
}

function getResolverContract(_ref2) {
  var address = _ref2.address,
      provider = _ref2.provider;
  return new _ethers.Contract(address, _ensContracts.Resolver, provider);
}

function getOldResolverContract(_ref3) {
  var address = _ref3.address,
      provider = _ref3.provider;
  return new _ethers.Contract(address, _PublicResolver.abi, provider);
}

function getENSContract(_ref4) {
  var address = _ref4.address,
      provider = _ref4.provider;
  return new _ethers.Contract(address, _ensContracts.ENS, provider);
}

function getTestRegistrarContract(_ref5) {
  var address = _ref5.address,
      provider = _ref5.provider;
  return new _ethers.Contract(address, _ensContracts.TestRegistrar, provider);
}

function getOldDnsRegistrarContract(_ref6) {
  var parentOwner = _ref6.parentOwner,
      provider = _ref6.provider;
  return new _ethers.Contract(parentOwner, _DNSRegistrar.abi, provider);
}

function getDnsRegistrarContract(_ref7) {
  var parentOwner = _ref7.parentOwner,
      provider = _ref7.provider;
  return new _ethers.Contract(parentOwner, _ensContracts.DNSRegistrar, provider);
}

function getPermanentRegistrarContract(_ref8) {
  var address = _ref8.address,
      provider = _ref8.provider;
  return new _ethers.Contract(address, _ensContracts.BaseRegistrarImplementation, provider);
}

function getPermanentRegistrarControllerContract(_ref9) {
  var address = _ref9.address,
      provider = _ref9.provider;
  return new _ethers.Contract(address, _ensContracts.ETHRegistrarController, provider);
}

function getDeedContract(_ref10) {
  var address = _ref10.address,
      provider = _ref10.provider;
  return new _ethers.Contract(address, _Deed.abi, provider);
}

function getLegacyAuctionContract(_ref11) {
  var address = _ref11.address,
      provider = _ref11.provider;
  return new _ethers.Contract(address, _HashRegistrar.abi, provider);
}

function getBulkRenewalContract(_ref12) {
  var address = _ref12.address,
      provider = _ref12.provider;
  return new _ethers.Contract(address, _ensContracts.BulkRenewal, provider);
}