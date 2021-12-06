const getWeb3 = require("./getWeb3Module");
const BeachSideResort = require("../build/contracts/BeachSideResort.json");
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
    networkInfoElement,
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

  // Transactions
  const transferBtn = document.getElementById("get-transfer")! as HTMLElement;

  try {
    const web3 = await getWeb3();
    accounts = await web3.eth.getAccounts();

    // Get the contract instance.
    networkId = await web3.eth.net.getId();
    const deployedNetwork = BeachSideResort.networks[networkId];
    instance = new web3.eth.Contract(
      BeachSideResort.abi,
      deployedNetwork && deployedNetwork.address
    );

    contract = instance;

    console.log(contract);

    // Build Lists
    buildList(listOfAccountsElement, accounts);
    buildList(networkInfoElement, [networkId]);

    // Event Listeners
    adminBtn.addEventListener("click", async () => {
      console.log('admin button clicked');
      // const response = await contract.methods?.token().call({
      //   from: accounts[0],
      // });

      const response = await contract.methods?.getTokenName().call({
        from: accounts[0],
      });

      //
      console.log(response);
      //updateResults("Contract Admin", response);
    });

    allowanceBtn.addEventListener("click", () => {
      getAllowance();
    });

    balanceOfBtn.addEventListener("click", () => {
      getBalance();
    });

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

    // Transactions
    transferBtn.addEventListener("click", () => {
      getTransfer();
    });
    
  } catch (error) {
    console.log("Error", error);
  }

  //
  // const getContractAdmin = async () => {
  //   const response = await contract.methods?.admin().call({
  //     from: accounts[0],
  //   });
  //   updateResults("Contract Admin", response);
  // };

  //
  const getAllowance = async () => {
    let owner = document.getElementById(
      "get-allowance-owner"
    ) as HTMLInputElement;
    let spender = document.getElementById(
      "get-allowance-spender"
    ) as HTMLInputElement;

    const response = await contract.methods
      ?.allowance(owner.value, spender.value)
      .call({
        from: accounts[0],
      });
    updateResults("Allowance", response);
  };

  const getBalance = async () => {
    let address = document.getElementById(
      "get-balanceOf-address"
    ) as HTMLInputElement;

    const response = await contract.methods?.balanceOf(address.value).call({
      from: accounts[0],
    });
    updateResults("Balance", response);
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

  const getTransfer = async () => {
    let spender = document.getElementById(
      "get-transfer-spender"
    ) as HTMLInputElement;
    let amount = document.getElementById(
      "get-transfer-amount"
    ) as HTMLInputElement;

    console.log(spender.value, amount.value);

    const response = await contract.methods
      ?.transfer(spender.value, amount.value)
      .send({ from: accounts[0] });

    updateResults("Transfer", response);
  };

  function buildList(el: string, arr: Array<string>): void {
    const list = document.getElementById(el);
    arr.map((item, index) => {
      list?.insertAdjacentHTML("beforeend", `<li key="${index}">${item}</li>`);
    });
  }

  function updateResults(topic: string, message: string): void {
    const results = document.getElementById(resultsElement)! as HTMLElement;
    results.innerHTML = `<b>${topic}</b>: ${message}`;
  }
};

module.exports = Tokens;
