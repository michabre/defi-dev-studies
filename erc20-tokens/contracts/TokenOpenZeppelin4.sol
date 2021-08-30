// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// with faucet for testing
contract TokenOpenZeppelin4 is ERC20 {
  address public admin;

  constructor() ERC20('Token Name', 'TOKEN_TICKER') {}

  function faucet(address to, uint amount) external {
    _mint(to, amount);
  }
}