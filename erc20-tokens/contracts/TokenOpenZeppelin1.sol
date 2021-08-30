// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenOpenZeppelin1 is ERC20 {
  constructor() ERC20('Token Name', 'TOKEN_TICKER') {}
}