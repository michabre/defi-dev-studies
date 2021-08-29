const TokenOpenZeppelin = artifacts.require("./TokenOpenZeppelin.sol");
const ContractA = artifacts.require("./ContractA.sol");
require("dotenv").config({ path: "../.env" });

module.exports = function (deployer) {
  deployer.deploy(ContractA);
  deployer.deploy(TokenOpenZeppelin);
};
