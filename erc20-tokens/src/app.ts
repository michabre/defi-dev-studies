const example = require("./example");
const accounts = require("./web3");

// Styles
import "./styles.css";

//
console.log(example("cowabunga!"));
accounts();

function buttonHandler(event: Event): void {
  event.preventDefault();
  console.log("this is a button");
}

const adminButton = document.getElementById("get-admin")! as HTMLAnchorElement;
adminButton.addEventListener("click", buttonHandler);
