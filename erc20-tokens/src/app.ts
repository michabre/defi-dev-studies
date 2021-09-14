
const tokens = require("./Tokens");
const HockeyTokenContract = tokens();

// Styles
import "./styles.css";

//
function buttonHandler(event: Event): void {
  event.preventDefault();
  HockeyTokenContract.then((data: any) => data.testHandler(event));
}

const adminButton = document.getElementById("get-admin")! as HTMLAnchorElement;
adminButton.addEventListener("click", buttonHandler);
