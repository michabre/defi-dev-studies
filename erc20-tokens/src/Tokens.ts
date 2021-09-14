const Web3 = require("web3");
const currentProvider = new Web3.providers.HttpProvider(
  "http://localhost:7545"
);

// connecting to Ganache
const TokenOpenZeppelin = require("../build/contracts/TokenOpenZeppelin3.json");

const Tokens = async () => {

  let networkId:string;
  let instance:any;
  let accounts:Array<string>;
  try {
    const web3 = await new Web3(currentProvider);
    accounts = await web3.eth.getAccounts();

    // Get the contract instance.
    networkId = await web3.eth.net.getId();
    const deployedNetwork = TokenOpenZeppelin.networks[networkId];
    instance = new web3.eth.Contract(
      TokenOpenZeppelin.abi,
      deployedNetwork && deployedNetwork.address
    );
  } catch (error) {
    console.log("Error", error);
  }

  function testHandler(event: Event): void {
    event.preventDefault();
    console.log("testHandler click");
    console.log(networkId);
    console.log(instance);
    console.log(accounts);
  }

  return {
    testHandler,
  };
};

module.exports = Tokens;
