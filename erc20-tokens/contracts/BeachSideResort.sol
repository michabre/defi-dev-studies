// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import '@openzeppelin/contracts/utils/Counters.sol';
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract TokenContract {
  function name() public returns (string memory) {}
}

contract BeachSideResort is Ownable, Pausable {
  using SafeMath for uint;
  using SafeERC20 for IERC20;

  IERC20 public token;
  TokenContract tc;

  constructor(address _token) {
    token = IERC20(_token);
    tc = TokenContract(_token);
  }

  function getTokenName() public returns (string memory) {
    return tc.name();
  }
}