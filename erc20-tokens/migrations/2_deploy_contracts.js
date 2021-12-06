const LamboTokenContract = artifacts.require(
  "../contracts/LamboToken.sol"
);
const BeachSideResortContract = artifacts.require("../contracts/BeachSideResort.sol");

require("dotenv").config({ path: "../.env" });

module.exports = function (deployer, network, accounts) {

  // Check the network
  if (network === "develop") {
    console.log("Deployed to development");
    console.log("Number of Accounts: ", accounts.length);
  } else if ( network === "ganache") {
    console.log("Deployed to Ganache");
    console.log("Number of Accounts: ", accounts.length);
  } else {
    console.log("Network has not been set");
  }

  deployer.deploy(LamboTokenContract).then(function(){
    return deployer.deploy(BeachSideResortContract, LamboTokenContract.address);
  });
  
};
