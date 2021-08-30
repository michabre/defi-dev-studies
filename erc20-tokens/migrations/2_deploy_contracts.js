const TokenOpenZeppelin = artifacts.require(
  "../contracts/TokenOpenZeppelin3.sol"
);
//const ContractA = artifacts.require("../contracts/ContractA.sol");
require("dotenv").config({ path: "../.env" });

module.exports = function (deployer) {
  //deployer.deploy(ContractA);
  deployer.deploy(TokenOpenZeppelin);
};
