declare global {
  interface Window {
    ethereum: any;
    web3: any;
  }
}
import { Options } from "./interfaces/Options";
const tokens = require("./Tokens");
// Styles
import "./styles.css";

const options: Options = {
  adminButton: "get-admin",
  allowanceButton: "get-allowance",
  balanceOfButton: "get-balanceOf",
  decimalsButton: "get-decimals",
  nameButton: "get-name",
  symbolButton: "get-symbol",
  totalSupplyButton: "get-totalSupply",
  listOfAccountsElement: "list-of-accounts",
  networkInfoElement: "network-information",
  resultsElement: "results",
};

tokens(options);
