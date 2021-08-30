// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenOpenZeppelin3 is ERC20 {
  address public admin;

  constructor() ERC20('Token Name', 'TOKEN_TICKER') {
    admin = msg.sender;
    _mint(msg.sender, 100000);
  }

  function mint(address to, uint amount) external {
    require(msg.sender == admin, 'only admin');
    _mint(to, amount);
  }
}