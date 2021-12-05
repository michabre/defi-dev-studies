const GovernanceTokenContract = artifacts.require("GovernanceToken");
const LpTokenContract = artifacts.require("LpToken");
const UnderlyingTokenContract = artifacts.require("UnderlyingToken");

module.exports = function(deployer, network, accounts) {
  if (network === "develop") {
    console.log("Deployed to development");
    console.log("Number of Accounts: ", accounts.length);
  } else if ( network === "ganache") {
    console.log("Deployed to Ganache");
    console.log("Number of Accounts: ", accounts.length);
  } else if ( network === "rinkeby") {
    console.log("Deployed to rinkeby");
    console.log("Number of Accounts: ", accounts.length);
  } else {
    console.log("Network has not been set");
  }

  deployer.deploy(GovernanceTokenContract);
  deployer.deploy(LpTokenContract);
  deployer.deploy(UnderlyingTokenContract);
};