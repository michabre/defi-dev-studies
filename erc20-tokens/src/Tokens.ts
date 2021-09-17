const getWeb3 = require("./getWeb3Module");
const TokenOpenZeppelin = require("../build/contracts/TokenOpenZeppelin3.json");
import { Options } from "./interfaces/Options";

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

    // Build Lists
    buildList(listOfAccountsElement, accounts);

    // Event Listeners
    adminBtn.addEventListener("click", () => {
      getContractAdmin();
    });

    allowanceBtn.addEventListener("click", testHandler);
    balanceOfBtn.addEventListener("click", testHandler);

    decimalsBtn.addEventListener("click", () => {
      getDecimals();
    });

    nameBtn.addEventListener("click", () => {
      getTokenName();
    });

    symbolBtn.addEventListener("click", () => {
      getSymbol();
    });

    totalSupplyBtn.addEventListener("click", () => {
      getTotalSupply();
    });
  } catch (error) {
    console.log("Error", error);
  }

  function testHandler(event: Event): void {
    event.preventDefault();
    const target = event.target as HTMLDivElement;
    console.log(target.id);
    updateResults("Message", "Message has been updated");
  }

  //
  const getContractAdmin = async () => {
    const response = await contract.methods?.admin().call({
      from: accounts[0],
    });
    updateResults("Contract Admin", response);
  };

  //
  const getTokenName = async () => {
    const response = await contract.methods?.name().call({
      from: accounts[0],
    });
    updateResults("Token Name", response);
  };

  const getDecimals = async () => {
    const response = await contract.methods?.decimals().call({
      from: accounts[0],
    });
    updateResults("Decimals", response);
  };

  const getSymbol = async () => {
    const response = await contract.methods?.symbol().call({
      from: accounts[0],
    });
    updateResults("Symbol", response);
  };

  const getTotalSupply = async () => {
    const response = await contract.methods?.totalSupply().call({
      from: accounts[0],
    });
    updateResults("Total Supply", response);
  };

  function buildList(el: string, arr: Array<string>): void {
    const list = document.getElementById(el);
    arr.map((item, index) => {
      list?.insertAdjacentHTML("afterend", `<li key="${index}">${item}</li>`);
    });
  }

  function updateResults(topic: string, message: string): void {
    const results = document.getElementById(resultsElement)! as HTMLElement;
    results.innerHTML = `<b>${topic}</b>: ${message}`;
  }
};

module.exports = Tokens;
