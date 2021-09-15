const getWeb3 = require("./getWeb3");
// const currentProvider = new Web3.providers.HttpProvider(
//   "http://localhost:7545"
// );

// connecting to Ganache
const TokenOpenZeppelin = require("../build/contracts/TokenOpenZeppelin3.json");

interface Options {
  adminButton: string;
  allowanceButton: string;
  balanceOfButton: string;
  decimalsButton: string;
  nameButton: string;
  symbolButton: string;
  totalSupplyButton: string;
  listOfAccountsElement: string;
  // networkInfoElement: string;
  // otherElement: string;
  resultsElement: string;
}

const Tokens = async (options: Options) => {
  const {
    adminButton,
    allowanceButton,
    balanceOfButton,
    decimalsButton,
    nameButton,
    symbolButton,
    totalSupplyButton,
    listOfAccountsElement,
    // networkInfoElement,
    // otherElement,
    resultsElement,
  } = options;

  let networkId: string;
  let instance: any;
  let accounts: Array<string>;
  let contract: any;

  const adminBtn = document.getElementById(adminButton)! as HTMLElement;
  const allowanceBtn = document.getElementById(allowanceButton)! as HTMLElement;
  const balanceOfBtn = document.getElementById(balanceOfButton)! as HTMLElement;
  const decimalsBtn = document.getElementById(decimalsButton)! as HTMLElement;
  const nameBtn = document.getElementById(nameButton)! as HTMLElement;
  const symbolBtn = document.getElementById(symbolButton)! as HTMLElement;
  const totalSupplyBtn = document.getElementById(
    totalSupplyButton
  )! as HTMLElement;

  try {
    //const web3 = await new Web3(currentProvider);
    const web3 = await getWeb3();
    accounts = await web3.eth.getAccounts();

    // Get the contract instance.
    networkId = await web3.eth.net.getId();
    const deployedNetwork = TokenOpenZeppelin.networks[networkId];
    instance = new web3.eth.Contract(
      TokenOpenZeppelin.abi,
      deployedNetwork && deployedNetwork.address
    );

    contract = instance;

    console.log(networkId);
    //console.log(instance);

    // Build Lists
    buildList(listOfAccountsElement, accounts);

    // Event Listeners
    adminBtn.addEventListener("click", () => {
      getNetworkIdHandler(networkId);
    });
    allowanceBtn.addEventListener("click", () => {
      testContract();
    });
    balanceOfBtn.addEventListener("click", testHandler);
    decimalsBtn.addEventListener("click", testHandler);
    nameBtn.addEventListener("click", testHandler);
    symbolBtn.addEventListener("click", testHandler);
    totalSupplyBtn.addEventListener("click", testHandler);
  } catch (error) {
    console.log("Error", error);
  }

  function testHandler(event: Event): void {
    event.preventDefault();
    const target = event.target as HTMLDivElement;
    console.log(target.id);
    updateResults("Message has been updated");
  }

  function getNetworkIdHandler(network: string): void {
    console.log("network id: ", network);
  }

  const testContract = async () => {
    console.log("hello");
    const response = await contract.methods?.name().call({
      from: accounts[0],
    });
    console.log(response);
  };

  function buildList(el: string, arr: Array<string>): void {
    const list = document.getElementById(el);
    arr.map((item, index) => {
      list?.insertAdjacentHTML("afterend", `<li key="${index}">${item}</li>`);
    });
  }

  function updateResults(message: string): void {
    const results = document.getElementById(resultsElement)! as HTMLElement;
    results.innerHTML = message;
  }
};

module.exports = Tokens;
