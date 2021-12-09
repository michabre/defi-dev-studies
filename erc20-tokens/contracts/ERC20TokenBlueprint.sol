// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ERC20TokenBlueprint {
  function name() public view returns (string memory) {}
  function symbol() public view returns (string memory) {}
  function decimals() public view returns (uint8) {}
  function transfer(address _to, uint256 _value) public returns (bool) {}
  function approve(address _spender, uint256 _value) public returns (bool) {}
  function transferFrom(address _from, address _to, uint256 _value) public returns (bool) {}
  function totalSupply() public view returns (uint256) {}
  function balanceOf(address _account) public view returns (uint256) {}
  function allowance(address _owner, address _spender) public view returns (uint256) {}
}