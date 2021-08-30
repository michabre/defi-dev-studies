const Web3 = require("web3");
var currentProvider = new Web3.providers.HttpProvider("http://localhost:7545"); // connecting to Ganache
const TokenOpenZeppelin = require("../build/contracts/TokenOpenZeppelin3.json");

const Accounts = async () => {
  try {
    const web3 = await new Web3(currentProvider);
    const accounts = await web3.eth.getAccounts();

    // Get the contract instance.
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = TokenOpenZeppelin.networks[networkId];
    const instance = new web3.eth.Contract(
      TokenOpenZeppelin.abi,
      deployedNetwork && deployedNetwork.address
    );

    console.log(instance);
    console.log(accounts);
  } catch (error) {
    console.log("Error", error);
  }
};

module.exports = Accounts;
