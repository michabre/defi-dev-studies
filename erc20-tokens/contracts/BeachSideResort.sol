// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

import "./ERC20TokenBlueprint.sol";

contract BeachSideResort is Ownable, Pausable {
  using SafeMath for uint;
  using SafeERC20 for IERC20;

  IERC20 public token;
  ERC20TokenBlueprint tc;

  constructor(address _token) {
    token = IERC20(_token);
    tc = ERC20TokenBlueprint(_token);
  }

  function getTokenName() public view returns (string memory) { 
    return tc.name(); 
  }
  function getTokenSymbol() public view returns (string memory) { 
    return tc.symbol(); 
  }
  function getTokenDecimals() public view returns (uint8) { 
    return tc.decimals(); 
  }
  function getTokenTotalSupply() public view returns (uint256) { 
    return tc.totalSupply(); 
  }
  function getBalanceOf(address _addr) public view returns (uint256) { 
    return tc.balanceOf(_addr); 
  }

}